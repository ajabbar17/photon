"use client"
import { useState } from 'react';
import { ChevronLeft, ChevronRight,MoveRight } from 'lucide-react';
import Image from 'next/image';

const ServiceCard = ({ title, description, position,src }) => {
  // Calculate styles based on position (-1: left, 0: center, 1: right)
  const getStyles = () => {
    const baseScale = position === 0 ? 1 : 0.9;
    const translateX = `${position * 100}%`;
    const zIndex = position === 0 ? 20 : 10;
    
    return {
      transform: `translateX(${translateX}) scale(${baseScale})`,
      zIndex,
    };
  };

  return (
    <div 
      className="absolute top-16 left-0 w-full transition-all duration-500 ease-in-out"
      style={getStyles()}
    >
      <div className="h-[420px] p-6 flex flex-col card pt-12 rounded-[25px] text-white">
        <h2 className="text-[32px] leading-8 font-normal heading mb-9">{title}</h2>
        <p className="text-xl mb-8 detail font-normal leading-tight pr-9">{description}</p>
        <div className="flex-grow"></div>
        <button
        onClick={() => window.location.href = src}
        className="px-4 py-2 border heading font-normal tracking-wide flex items-center gap-8 card-btn w-[228px] border-white rounded-full text-sm transition-colors duration-300">
          LEARN MORE
          <span>
            <img src="/Line 4.png" alt="" />
          </span>
        </button>
      </div>
    </div>
  );
};

const ServiceCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
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
      description:
      "Whether for commercial or residential projects, we ensure reliable transportation and accessibility solutions.",
      src:"/services/elevators"
    },
    {
      title: "Lightning Protection & Earth Grounding System Solutions",
      description: "Lightning protection and grounding systems to safeguard your assets and personnel.",
      src:"/services/lightning"
    },
    {
      title: "BUILDING AUTOMATION",
      description:
      "Smart building solutions for enhanced efficiency and control.",
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
      description:
        "Embrace a sustainable future with our photovoltaic solar energy systems. From design to implementation, we provide cost-effective renewable energy solutions.",
        src:"/services/solarpowered"
    },
  ];

  const handleSlideChange = (direction) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const increment = direction === 'next' ? 1 : -1;
    setActiveIndex((prev) => (prev + increment + services.length) % services.length);
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getVisibleCards = () => {
    const totalCards = services.length;
    const visibleIndexes = [-3,-2,-1, 0, 1,2,3]; // relative positions (left, center, right)
    
    return visibleIndexes.map(relativePosition => {
      const index = (activeIndex + relativePosition + totalCards) % totalCards;
      return {
        ...services[index],
        position: relativePosition,
        index
      };
    });
  };

  return (
    <div className="relative w-full h-[110vh] mx-auto overflow-hidden ">
         <h1 className="text-3xl md:text-6xl font-bold text-white  text-center tracking-wide">
          OUR EXPERTISE
        </h1>
      <div className="relative px-12 md:px-0  h-full">
        <div className="relative w-full md:w-1/4 mx-auto">
          {getVisibleCards().map((service) => (
            <ServiceCard
              key={service.index}
              title={service.title}
              description={service.description}
              position={service.position}
              src={service.src}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center bottom-36 left-1/2 z-50 -translate-x-1/2 absolute gap-2">
          {services.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-500 ease-in-out ${
                index === activeIndex ? 'bg-blue-500 w-4' : 'bg-blue-300 w-2'
              }`}
            />
          ))}
        </div>
      {/* Navigation Controls - Moved below cards */}
      <div className="flex justify-center bottom-10 left-1/2 z-50 -translate-x-1/2 absolute items-center gap-8">
        <button
          onClick={() => handleSlideChange('prev')}
          disabled={isAnimating}
          className="text-white hover:text-sky-400 transition-colors z-50 disabled:opacity-50"
        >
          <ChevronLeft className="w-8 h-8 md:w-16 md:h-16" strokeWidth={3} />
        </button>

        {/* Dots Indicators */}
       

        <button
          onClick={() => handleSlideChange('next')}
          disabled={isAnimating}
          className="text-white hover:text-sky-400 z-50 transition-colors disabled:opacity-50"
        >
          <ChevronRight className="w-8 h-8 md:w-16 md:h-16" strokeWidth={3} />
        </button>
      </div>

      {/* Background Images */}
      <div className="absolute bottom-28"> 
        <Image 
          src="/grid.png" 
          alt="background grid" 
          className="-z-10" 
          width={1920} 
          height={1080}
          priority
        />
      </div>
      <div className="absolute -bottom-8 "> 
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

export default ServiceCarousel;

