export default class AppController {
  constructor({ connectionManager, viewManager }) {
    this.connectionManager = connectionManager;
    this.viewManager = viewManager;
  }

  async initialize() {
    this.viewManager.configureFileBtnClick();
    this.connectionManager.configureEvents(() => {});

    await this.updateCurrentFiles();
  }

  async updateCurrentFiles() {
    const files = await this.connectionManager.currentFiles();
    this.viewManager.updateCurrentFiles(files);
  }
}
