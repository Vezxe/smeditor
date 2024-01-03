import {
  Assets,
  BitmapFontManager,
  Container,
  FillGradient,
  Renderer,
  Ticker,
  UPDATE_PRIORITY,
  autoDetectRenderer,
} from "pixi.js"
import semver from "semver"
import tippy from "tippy.js"
import "tippy.js/animations/scale-subtle.css"
import "tippy.js/dist/tippy.css"
import WebFont from "webfontloader"
import { ChartManager } from "./chart/ChartManager"
import { Chart } from "./chart/sm/Chart"
import { ContextMenuPopup } from "./gui/element/ContextMenu"
import { MenubarManager } from "./gui/element/MenubarManager"
import { WaterfallManager } from "./gui/element/WaterfallManager"
import { UpdatePopup } from "./gui/popup/UpdatePopup"
import { DebugWidget } from "./gui/widget/DebugWidget"
import { DirectoryWindow } from "./gui/window/DirectoryWindow"
import { InitialWindow } from "./gui/window/InitialWindow"
import { WindowManager } from "./gui/window/WindowManager"
import { ActionHistory } from "./util/ActionHistory"
import { BetterRoundedRect } from "./util/BetterRoundedRect"
import { EventHandler } from "./util/EventHandler"
import { Flags, loadFlags } from "./util/Flags"
import { Keybinds } from "./util/Keybinds"
import { Options } from "./util/Options"
import { ParityGenerator } from "./util/ParityGenerator"
import { extname } from "./util/Path"
import { fpsUpdate } from "./util/Performance"
import { isIFrame } from "./util/Util"
import { FileHandler } from "./util/file-handler/FileHandler"

declare global {
  interface Window {
    app: App
    Parity?: ParityGenerator
  }
  interface File {
    path?: string
  }
  interface HTMLInputElement {
    nwsaveas?: string
  }
}

interface Version {
  version: string
  type: string
  date: number
  downloads: {
    mac: string
    win: string
    linux: string
  }
  changelog: string[]
}

export class App {
  renderer!: Renderer
  ticker!: Ticker
  stage!: Container
  canvas!: HTMLCanvasElement
  chartManager!: ChartManager
  windowManager!: WindowManager
  menubarManager!: MenubarManager
  actionHistory!: ActionHistory

  private lastWidth = window.innerWidth
  private lastHeight = window.innerHeight

  constructor() {
    this.init()
  }

  async init() {
    tippy.setDefaultProps({ duration: [200, 100], theme: "sm" })

    if (window.nw) {
      const activeWin = nw.Window.get()
      window.addEventListener("keydown", e => {
        if ((e.key == "r" && (e.metaKey || e.ctrlKey)) || e.key == "F5") {
          e.preventDefault()
          activeWin.reload()
        }
      })
      this.checkAppVersion()
    }

    Options.loadOptions()
    loadFlags()
    Keybinds.load(this)

    setInterval(() => Options.saveOptions(), 10000)
    if (Options.general.smoothAnimations)
      document.body.classList.add("animated")
    this.registerFonts()

    this.canvas = document.getElementById("pixi") as HTMLCanvasElement

    document.oncontextmenu = event => {
      event.preventDefault()
      if (!this.chartManager.loadedChart) return
      if (event.target != this.canvas) return
      ContextMenuPopup.open(this, event)
    }

    this.canvas.onmousedown = () => {
      ContextMenuPopup.close()
    }

    this.stage = new Container()
    this.stage.sortableChildren = true

    this.renderer = await autoDetectRenderer({
      backgroundColor: 0x18191c,
      antialias: Options.performance.antialiasing,
      width: this.canvas.clientWidth,
      height: this.canvas.clientHeight,
      resolution: Options.performance.resolution,
      autoDensity: true,
      canvas: this.canvas,
      powerPreference: "low-power",
    })

    this.ticker = new Ticker()
    this.ticker.maxFPS = 120
    this.ticker.add(() => {
      const startTime = performance.now()
      this.renderer.render(this.stage)
      DebugWidget.instance?.addFrameTimeValue(performance.now() - startTime)
      if (performance.memory?.usedJSHeapSize)
        DebugWidget.instance?.addMemoryTimeValue(
          performance.memory.usedJSHeapSize
        )
      fpsUpdate()
    }, UPDATE_PRIORITY.LOW)
    this.ticker.start()

    BetterRoundedRect.init(this.renderer)

    this.chartManager = new ChartManager(this)
    this.menubarManager = new MenubarManager(
      this,
      document.getElementById("menubar") as HTMLDivElement
    )
    this.windowManager = new WindowManager(
      this,
      document.getElementById("windows") as HTMLDivElement
    )
    this.actionHistory = new ActionHistory(this)

    this.registerListeners()

    if (!Flags.hidePoweredByText && isIFrame()) {
      const embed = document.getElementById("embed") as HTMLDivElement
      embed.appendChild(document.createTextNode("Powered by "))
      const smLink = document.createElement("a")
      smLink.href = "https://tillvit.github.io/smeditor/"
      smLink.innerText = "SMEditor"
      smLink.target = "_blank"
      embed.appendChild(smLink)
      if (Flags.url != null) {
        embed.appendChild(document.createTextNode(" | Open this chart in a "))
        const newLink = document.createElement("a")
        const url = new URL(location.origin + "/smeditor/app/")
        newLink.innerText = "new tab"
        newLink.target = "_blank"
        url.searchParams.append("url", Flags.url)
        if (Flags.chartType !== null)
          url.searchParams.append("chartType", Flags.chartType)
        if (Flags.chartIndex !== null)
          url.searchParams.append("chartIndex", Flags.chartIndex + "")
        newLink.href = url.toString()
        embed.appendChild(newLink)
      }
    }

    FileHandler.initFileSystem().then(() => {
      if (Flags.url) {
        this.chartManager.loadSM(Flags.url).then(() => {
          const sm = this.chartManager.loadedSM
          if (!sm) return
          let gameTypeCharts: Chart[] | undefined
          if (Flags.chartType != null) {
            gameTypeCharts = sm.charts[Flags.chartType]
            if (gameTypeCharts === undefined) {
              WaterfallManager.createFormatted(
                `Couldn't find chart with type ${Flags.chartType}`,
                "warn"
              )
              return
            }
          }
          if (gameTypeCharts === undefined) {
            const gameTypes = Object.keys(sm.charts)
            if (gameTypes.length == 0) {
              // no charts available
              return
            }
            gameTypeCharts = sm.charts[gameTypes[0]]
            if (gameTypeCharts.length == 0) {
              return
            }
          }
          let chart: Chart | undefined
          if (Flags.chartIndex != null) {
            chart = gameTypeCharts.at(Flags.chartIndex)
            if (chart === undefined) {
              WaterfallManager.createFormatted(
                `Couldn't find chart with index ${Flags.chartIndex}`,
                "warn"
              )
              return
            }
          }
          if (chart === undefined) {
            chart = gameTypeCharts.at(-1)
            if (!chart) return
          }
          this.chartManager.loadChart(chart)
        })
        return
      }
      this.windowManager.openWindow(new InitialWindow(this))
    })

    window.onbeforeunload = event => {
      if (ActionHistory.instance.isDirty() && Options.general.warnBeforeExit) {
        event.preventDefault()
        return (event.returnValue = "Are you sure you want to exit?")
      }
    }

    window.onunload = () => {
      Options.saveOptions()
    }
  }

  loadAssets() {
    Assets.load(["../../../../../assets/flash/decent.png"])
  }

  registerFonts() {
    BitmapFontManager.install(
      "Main",
      {
        fontFamily: "Assistant",
        fontSize: 40,
        fill: "white",
      },
      {
        chars: [
          ["a", "z"],
          ["A", "Z"],
          "!@#$%^&*()~{}[]:.-?=,_",
          "0123456789/",
          " ",
        ],
        resolution: window.devicePixelRatio,
      }
    )

    BitmapFontManager.install(
      "Fancy",
      {
        fontFamily: "Assistant",
        fontSize: 40,
        fontWeight: "700",
        fill: new FillGradient(0, 0, 0, 1)
          .addColorStop(0, 0xdddddd)
          .addColorStop(1, 0xffffff),
        // fill: [0xdddddd, 0xffffff],
        stroke: 0xaaaaaa,
      },
      {
        chars: [
          ["a", "z"],
          ["A", "Z"],
          "!@#$%^&*()~{}[]:.-?=,_",
          "0123456789/",
          " ",
        ],
        resolution: window.devicePixelRatio,
      }
    )
  }

  registerListeners() {
    window.addEventListener("keydown", function (e) {
      if (e.code == "Tab") {
        e.preventDefault()
      }
      if (e.code == "Enter") {
        if (e.target instanceof HTMLButtonElement) {
          e.preventDefault()
        }
      }
    })

    window.addEventListener("dragstart", function (e) {
      if (e.target instanceof HTMLImageElement) {
        e.preventDefault()
      }
    })

    setInterval(() => {
      const screenWidth = window.innerWidth
      const screenHeight =
        window.innerHeight - document.getElementById("menubar")!.clientHeight
      if (this.lastHeight != screenHeight || this.lastWidth != screenWidth) {
        this.lastHeight = screenHeight
        this.lastWidth = screenWidth
        this.onResize(screenWidth, screenHeight)
        EventHandler.emit("resize")
      }
    }, 100)

    window.addEventListener("dragover", event => {
      event.preventDefault()
      event.dataTransfer!.dropEffect = "copy"
    })

    window.addEventListener("drop", event => {
      if (window.nw) {
        event.stopPropagation()
        event.preventDefault()

        let foundSM = ""
        for (const file of event.dataTransfer!.files) {
          if (file.path) {
            if (extname(file.path) == ".ssc") {
              foundSM = file.path
              break
            } else if (foundSM == "" && extname(file.path) == ".sm") {
              foundSM = file.path
            }
          }
        }
        if (foundSM != "") {
          this.chartManager.loadSM(foundSM)
          this.windowManager.getWindowById("select_sm_initial")?.closeWindow()
        }
      } else {
        FileHandler.handleDropEvent(event).then(folder => {
          const dirWindow = new DirectoryWindow(this, {
            title: "Select an sm/ssc file...",
            accepted_file_types: [".sm", ".ssc"],
            disableClose: true,
            callback: (path: string) => {
              this.chartManager.loadSM(path)
              this.windowManager
                .getWindowById("select_sm_initial")
                ?.closeWindow()
            },
            onload: () => {
              dirWindow
                .getAcceptableFile(folder ?? "")
                .then(path => dirWindow.selectPath(path))
            },
          })
          this.windowManager.openWindow(dirWindow)
        })
      }
    })
  }

  onResize(screenWidth: number, screenHeight: number) {
    this.renderer.resize(screenWidth, screenHeight)
    this.canvas.width = screenWidth * this.renderer.resolution
    this.canvas.height = screenHeight * this.renderer.resolution
    this.canvas.style.width = `${screenWidth}px`
    this.canvas.style.height = `${screenHeight}px`
  }

  checkAppVersion() {
    if (!window.nw) return
    const gui = nw.require("nw.gui")

    const BUILD_TYPES: Record<string, number> = {
      stable: 3,
      beta: 2,
      alpha: 1,
      nightly: 0,
    }
    let os = "win"
    if (navigator.userAgent.includes("Mac")) os = "mac"
    else if (navigator.userAgent.includes("Linux")) os = "linux"
    fetch("/smeditor/assets/app/versions.json")
      .then(data => data.json())
      .then((versions: Version[]) => {
        versions = versions.sort((a, b) => {
          if (BUILD_TYPES[a.type] != BUILD_TYPES[b.type])
            return BUILD_TYPES[b.type] - BUILD_TYPES[a.type]
          return b.date - a.date
        })
        const version = versions[0]
        if (
          semver.lt(gui.App.manifest.version, version.version) &&
          localStorage.getItem("downloadedVersion") !== version.version
        ) {
          UpdatePopup.open(
            version.version,
            version.downloads[os as keyof Version["downloads"]]
          )
        }
      })
  }
}

document.querySelector("body")!.innerHTML = `<div id="popups"></div>
          <div id="view-wrapper"> 
            <div id="menubar"></div>
            <div id="waterfall"></div>
            <canvas id="pixi"></canvas>
          </div> 
          <div id="context-menu"></div>
          <div id="blocker" style="display: none"></div>
          <div id="windows"></div>
          <div id="embed"></div>
        `

WebFont.load({
  custom: {
    families: ["Assistant"],
  },
  active: init,
  inactive: init,
  classes: false,
})

function init() {
  // Check WebGL
  const canvas = document.createElement("canvas")
  const gl = (canvas.getContext("webgl") ||
    canvas.getContext("experimental-webgl")) as WebGLRenderingContext

  if (!gl) {
    document.querySelector(
      "body"
    )!.innerHTML = `<div class='browser-unsupported'>
      <div class='browser-unsupported-item'>
      <h1>WebGL is not enabled</h1>
      <div>Please visit your browser settings and enable WebGL.</div>
      </div>
    </div>`
  } else {
    window.app = new App()
  }
}
