'use client'
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LottieAnimation = () => {
  const container = useRef(null);

  useEffect(() => {
    // تحميل الأنيميشن فقط على المتصفح
    if (typeof window !== 'undefined') {
      const anim = lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/animation.json', // تأكد من وجود هذا الملف في public
      });

      return () => anim.destroy();
    }
  }, []);

  return (
    <div className="mr-40" ref={container} style={{ width: 400, height: 400 }} />
  );
};

export default LottieAnimation;
