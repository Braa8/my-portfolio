'use client';
import React, { useEffect, useState } from 'react';

const LottieLogo = () => {
  const [animationData, setAnimationData] = useState(null);
  const [Lottie, setLottie] = useState(null);

  useEffect(() => {
    // تحميل مكتبة lottie-react ديناميكيًا
    import('lottie-react').then((mod) => {
      setLottie(() => mod.default);
    });

    // تحميل ملف JSON من مجلد public
    fetch('/logo.json')
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  if (!Lottie || !animationData) return null;

  return (
    <div className="max-w-20 p-4">
      <Lottie animationData={animationData} loop style={{ width: 150, height: 50 }} />
    </div>
  );
};

export default LottieLogo;
