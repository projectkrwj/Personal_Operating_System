import React from 'react';
import TitleBar from './components/TitleBar';

function App() {
  return (
    <div className="w-screen h-screen rounded-xl shadow-2xl overflow-hidden bg-gray-800">
      <TitleBar />
      <div className="flex-grow bg-gray-100">
        {/* 다른 앱 내용 */}
      </div>
    </div>
  );
}

export default App;
