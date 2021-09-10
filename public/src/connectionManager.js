export default class ConnectionManager {
  constructor({ apiUrl }) {
    this.apiUrl = apiUrl;

    this.ioClient = io.connect(apiUrl, { withCredentials: false });
    this.socketId = "";
  }

  configureEvents() {
    this.ioClient.on("connect", this.onConnect.bind(this));
    this.ioClient.on("file-upload", onProgress);
  }

  onConnect(msg) {
    console.log("connected!", this.ioClient.id);
    this.socketId = this.ioClient.id;
  }

  async currentFiles() {
    const files = await fetch(this.apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "text/plain",
      },
    }).then((res) => res.json());

    return files;
  }
}
