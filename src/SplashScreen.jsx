import React from 'react';

export default function SplashScreen() {
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "좋은 아침입니다" :
    hour < 18 ? "좋은 오후입니다" :
    "좋은 저녁입니다";

  return (
    <div className="fade-in-out splash">
      {greeting}, 정원준님 👋
    </div>
  );
}
