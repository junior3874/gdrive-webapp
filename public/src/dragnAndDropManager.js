export default class DragnAndDropManager {
  constructor() {
    this.dropArea = document.getElementById("drop-area");
    this.onDropHandler = () => {};
  }

  initialize({ onDropHandler }) {
    this.onDropHandler = onDropHandler;
    this.disableDragnAndDropEvents();
    this.enableHighLightOnDrag();
    this.enableDrop();
  }

  disableDragnAndDropEvents() {
    const events = ["dragenter", "dragover", "dragleave", "drop"];

    const preventDefaults = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };

    events.forEach((eventName) => {
      this.dropArea.addEventListener(eventName, preventDefaults, false);
      document.body.addEventListener(eventName, preventDefaults, false);
    });
  }

  enableHighLightOnDrag() {
    const events = ["dragenter", "dragover"];

    const highLight = (e) => {
      this.dropArea.classList.add("highlight");
      this.dropArea.classList.add("drop-area");
    };

    events.forEach((eventName) => {
      this.dropArea.addEventListener(eventName, highLight, false);
    });
  }
  enableDrop(e) {
    const drop = (e) => {
      this.dropArea.classList.remove("drop-area");

      const files = e.dataTransfer.files;
      return this.onDropHandler(files);
    };
    this.dropArea.addEventListener("drop", drop, false);
  }
}
