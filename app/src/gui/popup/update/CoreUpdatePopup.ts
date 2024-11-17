import { UpdatePopup } from "./UpdatePopup"

export class CoreUpdatePopup extends UpdatePopup {
  static open(callback: () => void) {
    super.build({
      title: `A new version of the app is available!`,
      desc: "Refresh the page to get the new version.",
      options: [
        {
          label: "Close",
          type: "default",
          callback: () => this.close(),
        },
        {
          label: "Refresh",
          type: "confirm",
          callback: () => {
            callback()
          },
        },
      ],
    })
  }
}
