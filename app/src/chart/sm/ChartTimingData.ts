import { ActionHistory } from "../../util/ActionHistory"
import { EventHandler } from "../../util/EventHandler"
import { Chart } from "./Chart"
import { SimfileTimingData } from "./SimfileTimingData"
import { TimingData } from "./TimingData"
import {
  DeletableEvent,
  TimingEvent,
  TimingEventType,
  TimingType,
} from "./TimingTypes"

export class ChartTimingData extends TimingData {
  readonly simfileTimingData: SimfileTimingData
  private readonly chart: Chart

  constructor(simfileTimingData: SimfileTimingData, chart: Chart) {
    super()
    this.simfileTimingData = simfileTimingData
    this.chart = chart
  }

  getColumn<Type extends TimingEventType>(type: Type) {
    return this.columns[type] ?? this.simfileTimingData.getColumn(type)
  }

  getOffset(): number {
    return this.offset ?? this.simfileTimingData.getOffset()
  }

  usesChartTiming(): boolean {
    return this.offset !== undefined || Object.values(this.columns).length > 0
  }

  hasChartOffset() {
    return this.offset !== undefined
  }

  isPropertyChartSpecific(type: TimingEventType): boolean {
    return type in this.columns
  }

  removeChartSpecificEvents<Type extends TimingEventType>(
    type: Type
  ): Extract<TimingEvent, { type: Type }>[] {
    return []
  }

  reloadCache(types: TimingType[] = []) {
    super.reloadCache(types)
    this.chart.recalculateNotes()
  }

  private splitSM<Type extends { type: TimingEventType }>(events: Type[]) {
    const smEvents: Type[] = []
    const chartEvents: Type[] = []
    events.forEach(event => {
      if (this.isPropertyChartSpecific(event.type)) {
        chartEvents.push(event)
      } else {
        smEvents.push(event)
      }
    })
    return { chartEvents, smEvents }
  }

  private splitSMPairs(events: [TimingEvent, TimingEvent][]) {
    const smEvents: [TimingEvent, TimingEvent][] = []
    const chartEvents: [TimingEvent, TimingEvent][] = []
    events.forEach(pair => {
      if (this.isPropertyChartSpecific(pair[0].type)) {
        chartEvents.push(pair)
      } else {
        smEvents.push(pair)
      }
    })
    return { chartEvents, smEvents }
  }

  insertMulti(events: TimingEvent[]): void {
    const { smEvents, chartEvents } = this.splitSM(events)

    let smResults: ReturnType<TimingData["_insert"]>
    let chartResults: ReturnType<TimingData["_insert"]>
    const hasTimeSig = events.find(event => event.type == "TIMESIGNATURES")
    ActionHistory.instance.run({
      action: app => {
        chartResults = this._insert(chartEvents)
        this._delete(chartResults.errors)

        smResults = this.simfileTimingData._insert(smEvents)
        this.simfileTimingData._delete(smResults.errors)

        this.reloadCache()
        this.simfileTimingData.reloadCache()

        app.chartManager.clearSelections()
        app.chartManager.setEventSelection(
          this.findEvents(chartResults.events).concat(
            this.simfileTimingData.findEvents(smResults.events)
          )
        )
        EventHandler.emit("timingModified")
        EventHandler.emit("chartModified")
        if (hasTimeSig) EventHandler.emit("timeSigChanged")
      },
      undo: app => {
        this.simfileTimingData._insert(smResults.errors)
        this.simfileTimingData._delete(smResults.events)
        this.simfileTimingData._insert(smResults.insertConflicts)

        this._insert(chartResults.errors)
        this._delete(chartResults.events)
        this._insert(chartResults.insertConflicts)

        this.reloadCache()
        this.simfileTimingData.reloadCache()
        app.chartManager.clearSelections()
        EventHandler.emit("timingModified")
        EventHandler.emit("chartModified")
        if (hasTimeSig) EventHandler.emit("timeSigChanged")
      },
    })
  }

  modifyMulti(events: [TimingEvent, TimingEvent][]): void {
    const { smEvents, chartEvents } = this.splitSMPairs(events)

    let smResults: ReturnType<TimingData["_modify"]>
    let chartResults: ReturnType<TimingData["_modify"]>

    const hasTimeSig = events.find(pair => pair[0].type == "TIMESIGNATURES")
    ActionHistory.instance.run({
      action: app => {
        chartResults = this._modify(chartEvents)
        this._delete(chartResults.errors)

        smResults = this.simfileTimingData._modify(smEvents)
        this.simfileTimingData._delete(smResults.errors)

        this.reloadCache()
        this.simfileTimingData.reloadCache()

        app.chartManager.clearSelections()
        app.chartManager.setEventSelection(
          this.findEvents(chartResults.newEvents).concat(
            this.simfileTimingData.findEvents(smResults.newEvents)
          )
        )
        EventHandler.emit("timingModified")
        EventHandler.emit("chartModified")
        if (hasTimeSig) EventHandler.emit("timeSigChanged")
      },
      undo: app => {
        this.simfileTimingData._insert(smResults.errors)
        this.simfileTimingData._delete(smResults.newEvents)
        this.simfileTimingData._insert(smResults.insertConflicts)
        this.simfileTimingData._insert(smResults.oldEvents)

        this._insert(chartResults.errors)
        this._delete(chartResults.newEvents)
        this._insert(chartResults.insertConflicts)
        this._insert(chartResults.oldEvents)

        this.reloadCache()

        app.chartManager.clearSelections()
        app.chartManager.setEventSelection(
          this.findEvents(chartResults.oldEvents).concat(
            this.simfileTimingData.findEvents(smResults.oldEvents)
          )
        )
        EventHandler.emit("timingModified")
        EventHandler.emit("chartModified")
        if (hasTimeSig) EventHandler.emit("timeSigChanged")
      },
    })
  }

  deleteMulti(events: DeletableEvent[]): void {
    const { smEvents, chartEvents } = this.splitSM(events)

    let chartResults: ReturnType<TimingData["_delete"]>
    let smResults: ReturnType<TimingData["_delete"]>
    const hasTimeSig = events.find(event => event.type == "TIMESIGNATURES")
    ActionHistory.instance.run({
      action: app => {
        chartResults = this._delete(chartEvents)
        this._delete(chartResults.errors)

        smResults = this.simfileTimingData._delete(smEvents)
        this.simfileTimingData._delete(smResults.errors)

        this.reloadCache()
        this.simfileTimingData.reloadCache()

        app.chartManager.clearSelections()
        EventHandler.emit("timingModified")
        EventHandler.emit("chartModified")
        if (hasTimeSig) EventHandler.emit("timeSigChanged")
      },
      undo: app => {
        this.simfileTimingData._insert(smResults.errors)
        this.simfileTimingData._insert(smResults.removedEvents)

        this._insert(chartResults.errors)
        this._insert(chartResults.removedEvents)

        this.reloadCache()
        this.simfileTimingData.reloadCache()

        app.chartManager.clearSelections()
        app.chartManager.setEventSelection(
          this.findEvents(chartResults.removedEvents).concat(
            this.simfileTimingData.findEvents(smResults.removedEvents)
          )
        )
        EventHandler.emit("timingModified")
        EventHandler.emit("chartModified")
        if (hasTimeSig) EventHandler.emit("timeSigChanged")
      },
    })
  }
}
