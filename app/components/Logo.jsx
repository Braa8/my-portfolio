'use client'
import React from 'react';
import Lottie from 'react-lottie';

const LottieLogo = () => {
  const defaultOptions = {
    loop: true,  
    autoplay: true, 
    path: '/logo.json',  
  };

  return (
    <div className='max-w-20 p-4' >
      <Lottie options={defaultOptions} height={50} width={150} />
    </div>
  );
};

export default LottieLogo;
