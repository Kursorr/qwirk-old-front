import { app, BrowserWindow } from 'electron'
const electron = require('electron')

if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const wait = 8000

const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

app.on('ready', () => {
  const bounds = electron.screen.getPrimaryDisplay().bounds

  const scaling = {
    splashScreen: { width: 400, height: 600 },
    app: { x: 1420, y: 900 },
    dividedByTwo: 2
  }
  const boundsCalc = {
    splashScreen: {
      x: bounds.x + ((bounds.width - scaling.splashScreen.width) / scaling.dividedByTwo),
      y: bounds.y + ((bounds.height - scaling.splashScreen.height) / scaling.dividedByTwo)
    },
    app: {
      x: bounds.x + ((bounds.width - scaling.app.x) / scaling.dividedByTwo),
      y: bounds.y + ((bounds.height - scaling.app.y) / scaling.dividedByTwo)
    }
  }

  let mainWindow = null

  let loading = new BrowserWindow({
    width: scaling.splashScreen.width,
    height: scaling.splashScreen.height,
    x: boundsCalc.splashScreen.x,
    y: boundsCalc.splashScreen.y,
    backgroundColor: '#36393e',
    show: false,
    frame: false
  })

  loading.once('show', () => {
    mainWindow = new BrowserWindow({
      width: scaling.app.x,
      height: scaling.app.y,
      x: boundsCalc.app.x,
      y: boundsCalc.app.y,
      useContentSize: true,
      backgroundColor: '#36393e',
      show: false,
      frame: false
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

  loading.loadURL('http://localhost:9080/#/spash-screen')
  loading.show()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) console.log('ok')
})
