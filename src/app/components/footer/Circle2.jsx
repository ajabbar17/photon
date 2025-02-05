"use client"
import React, { useEffect, useState } from 'react';

const Circle2 = ({ bottom, right }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const bottomValue = isMobile ? `${Number(bottom) + 9}%` : `${bottom}%`;

  return (
    <div
      className='w-[150px] h-[50px] md:w-[390px] md:h-[94px] -z-10 blur-[40px] block rounded-full bg-[#fff] absolute'
      style={{
        bottom: bottomValue,
        right: `${right}%`
      }}
    >
    </div>
  );
};

export default Circle2;