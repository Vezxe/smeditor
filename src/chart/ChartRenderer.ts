
import { NoteRenderer} from "./renderer/NoteRenderer";
import { Waveform } from "./renderer/Waveform";
import { ChartManager, EditMode } from "./ChartManager"
import { Container, Point, Rectangle} from "pixi.js"
import { Options } from "../util/Options"
import { Chart } from "./sm/Chart"
import { NotedataEntry, NoteType } from "./sm/NoteTypes"
import { BarlineContainer } from "./renderer/BarlineContainer"
import { TimingAreaContainer } from "./renderer/TimingAreaContainer"
import { TimingBoxContainer } from "./renderer/TimingBoxContainer"
import { ReceptorContainer } from "./renderer/ReceptorContainer"
import { NoteContainer } from "./renderer/NoteContainer"
import { TimingWindow } from "./play/TimingWindow"
import { NoteFlashContainer } from "./renderer/NoteFlashContainer"
import { JudgmentContainer } from "./renderer/JudgmentContainer"
import { HoldTimingWindow } from "./play/HoldTimingWindow"
import { HoldJudgmentContainer } from "./renderer/HoldJudgmentContainer"
import { TimingBarContainer } from "./renderer/TimingBarContainer"

export class ChartRenderer extends Container {

  chartManager: ChartManager
  
  chart: Chart

  private speedMult: number = 1
  private negScroll: boolean = false

  private lastMousePos?: Point
  private lastMouseBeat: number = -1
  private lastMouseCol: number = -1
  private lastNoteType: NoteType = "Tap"
  private editingCol: number = -1

  private waveform: Waveform
  private barlines: BarlineContainer
  private timingAreas: TimingAreaContainer
  private receptors: ReceptorContainer
  private timingBoxes: TimingBoxContainer
  private timingBar: TimingBarContainer
  private editingArrow: Container
  private notes: NoteContainer
  private noteFlashes: NoteFlashContainer
  private judgment: JudgmentContainer
  private holdJudgment: HoldJudgmentContainer
  
 
  constructor(chartManager: ChartManager) {
    super()
    this.chartManager = chartManager
    this.chart = chartManager.chart!

    this.waveform = new Waveform(this)
    this.barlines = new BarlineContainer(this)
    this.timingAreas = new TimingAreaContainer(this)
    this.receptors = new ReceptorContainer(this)
    this.timingBoxes = new TimingBoxContainer(this)
    this.timingBar = new TimingBarContainer(this)
    this.editingArrow = NoteRenderer.createArrow({beat: 0, col: 1, type: "Tap"})
    this.editingArrow.alpha = 0.4
    this.notes = new NoteContainer(this)
    this.noteFlashes = new NoteFlashContainer()
    this.judgment = new JudgmentContainer()
    this.holdJudgment = new HoldJudgmentContainer()

    this.addChild(this.waveform)
    this.addChild(this.barlines)
    this.addChild(this.timingAreas)
    this.addChild(this.receptors)
    this.addChild(this.timingBoxes)
    this.addChild(this.timingBar)
    this.addChild(this.editingArrow)
    this.addChild(this.notes)
    this.addChild(this.noteFlashes)
    this.addChild(this.judgment)
    this.addChild(this.holdJudgment)

    this.chartManager.app.pixi.stage.addChild(this)

    this.x = this.chartManager.app.pixi.screen.width/2
    this.y = this.chartManager.app.pixi.screen.height/2

    this.interactive = true
    this.hitArea = new Rectangle(-1e5, -1e5, 2e5, 2e5);

    this.on("mousemove", (event) =>{
      this.lastMousePos = this.toLocal(event.global)
      if (this.editingCol != -1) {
        let snap = Options.chart.snap == 0 ? 1/48 : Options.chart.snap
        let snapBeat = Math.round(this.getBeatFromYPos(this.lastMousePos.y)/snap)*snap
        this.chartManager.editHoldBeat(this.editingCol, snapBeat, event.shiftKey)
      }
    })
    window.addEventListener("keydown", event =>{
      if (this.editingCol != -1) {
        let snap = Options.chart.snap == 0 ? 1/48 : Options.chart.snap
        let snapBeat = Math.round(this.getBeatFromYPos(this.lastMousePos!.y)/snap)*snap
        this.chartManager.editHoldBeat(this.editingCol, snapBeat, event.shiftKey)
      }
    })
    this.on("mousedown", () => {
      if (Options.editor.mousePlacement && this.lastMouseBeat != -1 && this.lastMouseCol != -1) {
        this.editingCol = this.lastMouseCol
        this.chartManager.setNote(this.lastMouseCol, "mouse", this.lastMouseBeat)
      }
    })
    this.on("mouseup", () => {
      if (this.editingCol != -1) {
        this.chartManager.endEditing(this.editingCol)
        this.editingCol = -1
      }
    })
  }


  doJudgment(note: NotedataEntry, error: number, judgment: TimingWindow) {
    if ((judgment as HoldTimingWindow).noteType) {
      this.holdJudgment.addJudge(note.col, judgment as HoldTimingWindow)
    }else{
      if (this.chartManager.getMode() == EditMode.Play && note.type != "Mine"){
        this.judgment.doJudge(error, judgment)
        this.timingBar.addBar(error, judgment)
      }
    }
    this.noteFlashes.addFlash(note.col, judgment)
  }

  doHoldInProgressJudgment(note: NotedataEntry) {
    this.noteFlashes.addHoldFlash(note.col)
  }

  keyDown(col: number){
    this.receptors.keyDown(col)
  }

  keyUp(col: number){
    this.receptors.keyUp(col)
  }

  resetPlay() {
    this.timingBar.reset()
  }

  renderThis() {

    let beat = this.getBeat()
    let time = this.getTime()

    this.speedMult = Options.chart.doSpeedChanges ? this.chart.timingData.getSpeedMult(beat, time) : 1

    let renderBeatLimit = beat + Options.chart.maxDrawBeats
    let renderBeatLowerLimit = beat - Options.chart.maxDrawBeatsBack
    // let renderSecondLimit = this.chart.getSeconds(renderBeatLimit)
    let renderSecondLowerLimit = this.chart.getSeconds(renderBeatLowerLimit)

    this.negScroll = Options.chart.doSpeedChanges && (this.speedMult < 0 || (this.chart.timingData.getTimingEventAtBeat("SCROLLS",beat)?.value ?? 1) < 0)

    if (Options.chart.CMod) {
      renderBeatLimit = this.getBeatFromYPos(this.chartManager.app.pixi.screen.height-this.y+32)
      renderBeatLowerLimit = this.getBeatFromYPos(-32 - this.y)
      renderSecondLowerLimit = (-32 - this.y - Options.chart.receptorYPos)/4/64*100/Options.chart.speed + time
    }

    this.receptors.renderThis(beat)
    this.barlines.renderThis(beat, renderBeatLowerLimit, renderBeatLimit)
    this.timingAreas.renderThis(beat, renderBeatLowerLimit, renderBeatLimit, renderSecondLowerLimit)
    this.timingBoxes.renderThis(beat, renderBeatLowerLimit, renderBeatLimit)
    this.timingBar.renderThis()
    this.notes.renderThis(beat, renderBeatLowerLimit, renderBeatLimit)
    this.waveform.renderThis(beat)
    this.noteFlashes.renderThis()
    this.judgment.renderThis()
    this.holdJudgment.renderThis()

    if (this.lastMousePos && this.chartManager.getMode() != EditMode.Play) {
      let snap = Options.chart.snap == 0 ? 1/48 : Options.chart.snap
      let snapBeat = Math.round(this.getBeatFromYPos(this.lastMousePos.y)/snap)*snap
      let col = Math.round((this.lastMousePos.x+96)/64)
      if (snapBeat != this.lastMouseBeat || col != this.lastMouseCol || this.chartManager.getEditingNoteType() != this.lastNoteType)  {
        this.lastMouseBeat = snapBeat
        this.lastMouseCol = col
        this.lastNoteType = this.chartManager.getEditingNoteType()
        if (this.editingCol != -1) {
          this.chartManager.editHoldBeat(this.editingCol, snapBeat, false)
        }
        if (col > 3 || col < 0) {
          this.lastMouseBeat = -1
          this.lastMouseCol = -1
        } else {
          
          NoteRenderer.setData(this.editingArrow, {
            beat: snapBeat,
            col: this.lastMouseCol,
            type: this.chartManager.getEditingNoteType()
          })
        }
      }
    }

    this.editingArrow.visible = Options.editor.mousePlacement && this.lastMouseCol != -1 && this.lastMouseBeat != -1 && this.editingCol == -1 && this.lastMouseBeat >= renderBeatLowerLimit && this.lastMouseBeat <= renderBeatLimit && this.lastMouseBeat >= 0 
    this.editingArrow.x = this.lastMouseCol*64-96
    this.editingArrow.y = this.getYPos(this.lastMouseBeat)
    if (this.chartManager.getEditingNoteType() == "Mine") {
      NoteRenderer.setMineTime(this.editingArrow, time)
    }
  }

  getTime(): number {
    let time = this.chartManager.getTime()
    if (this.chartManager.getMode() == EditMode.Play) {
      time += Options.play.offset
    }
    return time
  }

  getBeat(): number {
    let beat = this.chartManager.getBeat()
    if (this.chartManager.getMode() == EditMode.Play) {
      beat = this.chart.getBeat(this.getTime())
    }
    return beat
  }



  getYPos(beat: number): number {
    let currentTime = this.getTime() 
    let currentBeat = this.getBeat() 
    if (Options.chart.CMod) {
      return (this.chart.getSeconds(beat)-currentTime)*Options.chart.speed/100*64*4 + Options.chart.receptorYPos
    }
    if (Options.chart.doSpeedChanges) return (this.chart.timingData.getEffectiveBeat(beat) - this.chart.timingData.getEffectiveBeat(currentBeat)) * Options.chart.speed/100*64 * this.speedMult + Options.chart.receptorYPos
    return (beat - currentBeat)*Options.chart.speed/100*64 + Options.chart.receptorYPos
  }


  getTimeFromYPos(yp: number): number {
    let currentTime = this.getTime()
    if (Options.chart.CMod) {
      let seconds = (yp - Options.chart.receptorYPos)/Options.chart.speed*100/64/4 + currentTime
      return seconds
    }
    return this.chart.getSeconds(this.getBeatFromYPos(yp))
  }

  getBeatFromYPos(yp: number): number {
    let currentBeat = this.getBeat()
    if (Options.chart.CMod) {
      return this.chart.getBeat(this.getTimeFromYPos(yp))
    }
    if (Options.chart.doSpeedChanges) return this.chart.getBeatFromEffectiveBeat((yp - Options.chart.receptorYPos)/64*100/Options.chart.speed/this.speedMult+this.chart.timingData.getEffectiveBeat(currentBeat))
    return (yp - Options.chart.receptorYPos)/64*100/Options.chart.speed+currentBeat
  }

  isNegScroll() {
    return this.negScroll
  }
}
