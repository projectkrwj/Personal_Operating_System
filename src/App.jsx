import React, { useState, useEffect } from 'react';
import SplashScreen from './SplashScreen';
import Dashboard from './Dashboard';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showSplash ? <SplashScreen /> : <Dashboard />}
    </div>
  );
}
