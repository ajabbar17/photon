"use client"
import React, { useEffect, useRef } from 'react';
import { MoveDown } from 'lucide-react';
import Circle from './footer/Circle';
import gsap from 'gsap';
import Image from 'next/image';
import Circle2 from './footer/Circle2';

const HeroSection = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      headingRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
      }
    ).fromTo(
      paragraphRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.5" // Start before heading animation ends
    );

    // Cleanup
    return () => tl.kill();
  }, []);

  return (
    <div className="h-[110vh] bg-[#0d2538] relative top-0 mb-10 z-30 overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[68vh] md:h-[80vh] z-40 wrapper">
        <div className="absolute footer bg-[#F25525]">
          <div className="absolute top-[25%] overflow-hidden text-[#042538] left-1/2 transform -translate-x-1/2 w-full text-center px-6">
            <h1 
              ref={headingRef}
              className="text-4xl md:text-7xl xl:text-[96px] font-normal heading leading-tight mb-6 opacity-0"
            >
              PHOTON ENGINEERING REALM:
              <br />
              REALM BEYOND POSSIBLE
            </h1>
            <p 
              ref={paragraphRef}
              className="text-xl font-light detail opacity-0"
            >
              Your Experts In Solar Panels, HVAC Systems, Fire Safety, And Elevators.
            </p>
          </div>
        </div>
      </div>

      {/* Circle with arrow */}
      <div className="absolute bottom-64 md:bottom-44 xl:bottom-40 circle-arrow  left-1/2 transform -translate-x-1/2 z-50">
        <div className="w-24 h-24 rounded-full bg-[#f25525] border-[1.5px] flex items-center justify-center shadow-lg">
          <MoveDown size={69} strokeWidth={1} className="text-white" />
        </div>
      </div>
      <Circle bottom={20} right={40} />
        <Circle bottom={23} right={35} />
        <Circle bottom={25} right={25} />
        <Circle bottom={25} right={20} />
        <Circle bottom={29} right={20} />
        <Circle bottom={29} right={15} />
        <Circle bottom={30} right={10} />
        <Circle bottom={35} right={0} />
        <Circle2 bottom={28} right={30} />
        <Circle2 bottom={28} right={35} />
            </div>
  );
};

export default HeroSection;
