// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  onInputData: (callback: (data: any) => void) => {
    ipcRenderer.on("input-data", (_, data) => callback(data));
  },
});
