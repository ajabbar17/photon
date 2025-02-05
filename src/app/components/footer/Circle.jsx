"use client"
import React, { useEffect, useState } from 'react';

const Circle = ({ bottom, right }) => {
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

  const bottomValue = isMobile ? `${Number(bottom) + 10}%` : `${bottom}%`;

  return (
    <div
      className='w-[150px] h-[100px] md:w-[390px] md:h-[370px] xl:w-[400px] xl:h-[390px] block rounded-full -z-10 blur-[80px] bg-[#FB5421] absolute'
      style={{
        bottom: bottomValue,
        right: `${right}%`
      }}
    >
    </div>
  );
};

export default Circle;