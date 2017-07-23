const electron = require('electron')
const {app, BrowserWindow} = electron

app.on('ready', () => {
    let mainBrowserWindow = new BrowserWindow()
    mainBrowserWindow.loadURL(`file://${__dirname}/index.html`)
})

exports.openWindow = (filedir) => {
    let mainBrowserWindow = new BrowserWindow()
    mainBrowserWindow.loadURL(`file://${__dirname}/` + filedir)
}