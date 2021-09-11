import AppController from "./src/appController.js";
import ConnectionManager from "./src/connectionManager.js";
import View from "./src/viewManager.js";
import DragnAndDropManager from "./src/dragnAndDropManager.js";

const API_URL = "https://127.0.0.1:3000";

const appController = new AppController({
  connectionManager: new ConnectionManager({
    apiUrl: API_URL,
  }),
  dragAndDropManager: new DragnAndDropManager(),
  viewManager: new View(),
});

try {
  await appController.initialize();
} catch (error) {
  console.error("error on initializing", error);
}
