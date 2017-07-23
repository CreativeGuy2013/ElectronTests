const remote = require('electron').remote
const mainHandler = remote.require('./index.js')

function btnHandleOpenWindow() {
    mainHandler.openWindow("index.html")
}