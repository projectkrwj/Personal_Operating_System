const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1100,
    height: 680,
    frame: false, // 롤 같이 상단바 없게
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // 개발용 React 서버 URL
  win.loadURL('http://localhost:3000');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
