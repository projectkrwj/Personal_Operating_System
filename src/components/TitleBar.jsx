import { ipcRenderer } from "electron";

export default function TitleBar() {
  const minimize = () => ipcRenderer.send("window-minimize");
  const close = () => ipcRenderer.send("window-close");

  return (
    <div className="w-full h-10 bg-gray-900 flex justify-end items-center select-none">
      <button
        className="px-4 py-1 text-white hover:bg-gray-700"
        onClick={() => window.electronAPI.minimize()}
      >
        –
      </button>
      <button
        className="px-4 py-1 text-white hover:bg-red-600"
        onClick={() => window.electronAPI.close()}
      >
        ×
      </button>
    </div>
  );
}
