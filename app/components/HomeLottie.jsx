'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// استيراد Lottie بطريقة ديناميكية مع تعطيل SSR
const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

// استيراد ملف الـ JSON (تأكد أنه في نفس المجلد)
import animationData from './animation.json';

export default function LottieAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="mr-40">
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}
