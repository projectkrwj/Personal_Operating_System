export default function TitleBar() {
  return (
    <div
      className="w-full h-10 bg-gray-900 flex items-center"
      style={{ WebkitAppRegion: "drag" }} // 이 영역 전체를 드래그 가능하게
    >
      <div style={{ WebkitAppRegion: "no-drag" }} className="ml-auto flex">
        <button
          onClick={() => window.electronAPI.minimize()}
          className="px-4 hover:bg-gray-700"
        >
          –
        </button>
        <button
          onClick={() => window.electronAPI.close()}
          className="px-4 hover:bg-red-500"
        >
          ×
        </button>
      </div>
    </div>
  );
}
