export default class ConnectionManager {
  constructor({ apiUrl }) {
    this.apiUrl = apiUrl;
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
