const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld(
    'electron',
    {
        openDevTools: () => ipcRenderer.invoke('open-devtools'),
        isDev: () => ipcRenderer.invoke('is-dev'),
        // You can expose other functions here as needed
    }
);