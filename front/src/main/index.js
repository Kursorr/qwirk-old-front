import { app, BrowserWindow } from 'electron'

const wait = 8000

if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

app.on('ready', () => {
  let mainWindow = null
  let loading = new BrowserWindow({
    show: false,
    frame: true,
    height: 600,
    width: 400
  })

  loading.once('show', () => {
    mainWindow = new BrowserWindow({
      height: 900,
      useContentSize: true,
      width: 1420,
      backgroundColor: '#36393e',
      frame: false,
      show: false
    })
    mainWindow.webContents.once('dom-ready', () => {
      mainWindow.show()
      loading.hide()
      loading.close()
    })
    // long loading html
    setTimeout(() => {
      mainWindow.loadURL(winURL)
    }, wait)
  })
  loading.loadURL('https://stackoverflow.com/questions/42292608/electron-loading-animation')
  loading.show()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    console.log('ok')
  }
})
