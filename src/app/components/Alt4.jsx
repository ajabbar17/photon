"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    title: "HEATING, VENTILATION, AND AIR CONDITIONING (HVAC)",
    description: "Maintain optimal comfort and efficiency with PER's expert HVAC solutions. Our services include:",
    src:"/services/HVAC"
  },
  {
    title: "FIRE SAFETY SYSTEMS",
    description: "Safety is at the core of our operations. PER provides comprehensive fire protection solutions to safeguard your assets and personnel.",
    src:"/services/fire"
  },
  {
    title: "ELEVATORS AND ESCALATORS",
    description: "Whether for commercial or residential projects, we ensure reliable transportation and accessibility solutions.",
    src:"/services/elevators"
  },
  {
    title: "Lightning Protection & Earth Grounding System Solutions",
    description: "Lightning protection and grounding systems to safeguard your assets and personnel.",
    src:"/services/lightning"
  },
  {
    title: "BUILDING AUTOMATION",
    description: "Smart building solutions for enhanced efficiency and control.",
    src:"/services/BMS"
  },
  {
    title: "Drainage & Sewerage Solutions",
    description: "Drainage and sewerage solutions for residential, commercial, and industrial projects.",
    src:"/services/drainage"
  },
  {
    title: "Wind Powered Energy Solutions",
    description: "Harness the power of wind with our wind energy solutions.",
    src:"/services/wind"
  },
  {
    title: "SOLAR ENERGY SOLUTIONS",
    description: "Embrace a sustainable future with our photovoltaic solar energy systems. From design to implementation, we provide cost-effective renewable energy solutions.",
    src:"/services/solarpowered"
  },
];

const ServiceCard = ({ title, description, position, src }) => {
  const baseClasses = "absolute transition-all duration-500 ease-in-out";
  
  const getLevelClasses = (level) => {
    switch(level) {
      case -2:
        return "left-[2%] top-[7%] h-[380px] w-[400px] z-0 opacity-70";
      case -1:
        return "left-[30%] top-[7%]  h-[380px] w-[400px] z-10 opacity-95";
      case 0:
        return "left-[50%] top-[1%] h-[470px] w-[400px] z-20 opacity-100"; // Increased dimensions for active card
      case 1:
        return "left-[70%] top-[7%] h-[380px] w-[400px] z-10 opacity-95";
      case 2:
        return "left-[98%] top-[7%] h-[380px] w-[400px] z-0 opacity-70";
      default:
        return "";
    }
  };

  return (
    <div 
      className={`${baseClasses} ${getLevelClasses(position)} -translate-x-1/2 top-8`}
    >
      <div className="h-full p-4 md:p-6 flex flex-col card pt-10 rounded-[25px] text-white">
        <h2 className="text-[32px] heading leading-8 font-normal md:pt-7 mb-9">{title}</h2>
        <p className="text-xl mb-8 font-normal detail leading-tight pr-9">{description}</p>
        <div className="flex-grow" />
        <button
          onClick={() => window.location.href = src}
          className="px-2 md:px-4 py-2 border card-btn heading font-normal tracking-wide flex items-center gap-8 w-[200px] md:w-[228px] border-white rounded-full text-sm transition-colors duration-300 "
        >
          LEARN MORE
          <span>
            <img src="/Line 4.png" alt="arrow" />
          </span>
        </button>
      </div>
    </div>
  );
};

const Alt4 = ({ active: initialActive = 0 }) => {
  const [active, setActive] = useState(initialActive);

  const moveLeft = () => {
    setActive(prev => prev === 0 ? services.length - 1 : prev - 1);
  };

  const moveRight = () => {
    setActive(prev => (prev + 1) % services.length);
  };

  const generateItems = () => {
    const itemElements = [];
    
    for (let i = active - 2; i < active + 3; i++) {
      let index = i;
      if (i < 0) {
        index = services.length + i;
      } else if (i >= services.length) {
        index = i % services.length;
      }
      const level = active - i;
      itemElements.push(
        <ServiceCard 
          key={index} 
          {...services[index]}
          position={level}
        />
      );
    }
    
    return itemElements;
  };

  return (
    <div className="relative h-screen w-full py-4  pt-16 overflow-hidden select-none">
      <div className="absolute inset-0 flex flex-col  items-center justify-center">
        <div className="relative h-full w-full">
          {generateItems()}
        </div>
        
        {/* Navigation arrows moved to bottom */}
        <div className="flex absolute top-[75%] justify-center z-50 gap-8 mb-8">
          <button
            onClick={moveLeft}
            className="rounded-full bg-transparent  transition-all duration-500  hover:text-purple-600 text-white flex items-center justify-center"
          >
          <ChevronLeft className="w-16 h-16" strokeWidth={3} />
          </button>
          <button
            onClick={moveRight}
            className=" rounded-full bg-transparent transition-all duration-500  hover:text-purple-600 text-white flex items-center justify-center"
          >
          <ChevronRight className="w-16 h-16" strokeWidth={3} />
          </button>
        </div>
      </div>
      <div className="absolute bottom-56 md:bottom-28"> 
              <Image 
                src="/grid.png" 
                alt="background grid" 
                className="-z-10 object-fill " 
                width={1920} 
                height={1080}
                priority
              />
            </div>
            <div className="absolute bottom-52 md:-bottom-8 "> 
              <Image 
                src="/circle.png" 
                alt="background circle" 
                className=" mix-blend-screen  z-0" 
                width={1920} 
                height={1080}
                priority
              />
            </div>
    </div>
  );
};

export default Alt4;