const { app, BrowserWindow } = require('electron')

require('electron-reload')('app');

let win

function createWindow(){
  win = new BrowserWindow({frame: false, width: 800, height: 600 })
  win.loadFile('app/index.html')
  win.on('closed', () => {
    console.log("window closed!")
    win = null
  });

}

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {

  console.log("All windows closed!")
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})
