const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

// Store window reference to prevent garbage collection
let mainWindow;

function createWindow() {
    const windowConfigCommon = {
        width: 800,
        height: 600,
        useContentSize: true,  // Size will be based on the content's dimensions
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js') // Add preload script
        }
    }

    if (process.env.NODE_ENV === 'development') {
        mainWindow = new BrowserWindow({
            ...windowConfigCommon,
        });
        mainWindow.loadURL('http://localhost:5173');
    } else {
        mainWindow = new BrowserWindow({
            ...windowConfigCommon,
            resizable: false,  // Optional: prevents resizing
            frame: false,  // Removes the default window frame (app bar)
        });
        mainWindow.loadFile(path.join(__dirname, '../dist/renderer/index.html'));
    }

    // Create IPC handler for opening DevTools
    ipcMain.handle('open-devtools', () => {
        if (mainWindow) {
            mainWindow.webContents.openDevTools();
        }
    });

    // Create IPC handler to check if we're in development mode
    ipcMain.handle('is-dev', () => {
        return process.env.NODE_ENV === 'development';
    });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});