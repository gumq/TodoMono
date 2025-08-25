const path = require('path');
const {app, BrowserWindow} = require('electron');
const url = require('url');
// const startUrl =
//   process.env.START_URL ||
//   `file://${path.join(__dirname, 'dist/web/index.html')}`;
const startUrl = 'https://gumq.github.io/TodoMono/';
console.log('process.env.START_URL', url);
//   process.env.START_URL ||
//   url.pathToFileURL(path.join(__dirname, '../dist/web/index.html')).href;
function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.loadURL(startUrl);
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
