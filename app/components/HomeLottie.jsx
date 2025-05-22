'use client'
import React from 'react';
import Lottie from 'react-lottie';

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,  
    autoplay: true, 
    path: '/animation.json',  
  };

  return (
    <div className='mr-40 '>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default LottieAnimation;
