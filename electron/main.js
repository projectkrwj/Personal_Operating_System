const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 1280,
    minHeight: 720,
    maxWidth: 1280,
    maxHeight: 720,
    frame: false, // 기본 창 프레임 제거 (커스텀 UI 가능)
    titleBarStyle: "hidden",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadURL("http://localhost:5173"); // Vite 기준
}

app.whenReady().then(createWindow);

// Minimize와 Close 이벤트 처리
ipcMain.on("window-minimize", (event) => {
  const window = BrowserWindow.fromWebContents(event.sender);
  window.minimize(); // 창 최소화
});

ipcMain.on("window-close", (event) => {
  const window = BrowserWindow.fromWebContents(event.sender);
  window.close(); // 창 닫기
});
