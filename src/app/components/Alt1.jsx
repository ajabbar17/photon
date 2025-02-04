"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Grid from "./Grid";
import Image from "next/image";

const CarouselCard = ({ title, description, isHidden, isActive }) => (
  <div
    className={`w-80 h-96 p-6 rounded-[20px] transition-all duration-500 transform-gpu flex-shrink-0
      ${isActive 
        ? "bg-sky-500 scale-110 z-20 shadow-xl opacity-100 visible" 
        : "bg-sky-500 scale-90 z-10"
      }
      ${isHidden 
        ? "opacity-0 invisible pointer-events-none" 
        : "visible"
      }`}
  >
    <div className="h-full flex flex-col text-white">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-sm mb-8 opacity-90">{description}</p>
      <div className="mt-auto">
        <button className="px-6 py-2 text-sm border border-white/30 rounded-md hover:bg-white/10 transition-colors flex items-center gap-2">
          LEARN MORE
          <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  </div>
);

const Alt1 = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [hiddenIndices, setHiddenIndices] = useState([]);

  // Your existing cards array...
  const cards = [
    {
      title: "ELEVATORS AND ESCALATORS",
      description:
        "Whether for commercial or residential projects, we ensure reliable transportation and accessibility solutions.",
    },
    {
      title: "FIRE SAFETY SYSTEMS",
      description:
        "Safety is at the core of our operations. PER provides comprehensive fire protection solutions to safeguard your assets and personnel.",
    },
    {
      title: "HEATING, VENTILATION, AND AIR CONDITIONING (HVAC)",
      description:
        "Maintain optimal comfort and efficiency with PER's expert HVAC solutions. Our services include:",
    },
    {
      title: "SOLAR ENERGY SOLUTIONS",
      description:
        "Embrace a sustainable future with our photovoltaic solar energy systems. From design to implementation, we provide cost-effective renewable energy solutions.",
    },
    {
      title: "BUILDING AUTOMATION",
      description:
        "Smart building solutions for enhanced efficiency and control.",
    },
  ];
  const nextSlide = () => {
    const nextIndex = (activeIndex + 1) % cards.length;
    setActiveIndex(nextIndex);
    
    setHiddenIndices(prev => {
      const newHidden = [...prev];
      if (activeIndex >= 2 && !newHidden.includes(activeIndex)) {
        newHidden.push(activeIndex);
      }
      const nextIndexPos = newHidden.indexOf(nextIndex);
      if (nextIndexPos !== -1) {
        newHidden.splice(nextIndexPos, 1);
      }
      return newHidden;
    });
  };

  const prevSlide = () => {
    const prevIndex = (activeIndex - 1 + cards.length) % cards.length;
    setActiveIndex(prevIndex);
    
    setHiddenIndices(prev => {
      const newHidden = [...prev];
      
      if (activeIndex === 2) {
        if (!newHidden.includes(activeIndex)) {
          newHidden.push(activeIndex);
        }
      }
      if (activeIndex === 1) {
        if (!newHidden.includes(activeIndex)) {
          newHidden.push(activeIndex);
        }
      }
      
      const prevIndexPos = newHidden.indexOf(prevIndex);
      if (prevIndexPos !== -1) {
        newHidden.splice(prevIndexPos, 1);
      }
      
      return newHidden;
    });
  };

  // Calculate the translation amount based on active index
  const getTranslateX = () => {
    const cardWidth = 320; // w-80 = 20rem = 320px
    const centerIndex = 2;
    const offset = (centerIndex - activeIndex) * cardWidth;
    return offset;
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-slate-900 to-sky-900 flex items-center justify-center">
      <div className="max-w-screen w-full flex flex-col items-center">
        <h1 className="text-6xl font-bold text-white mb-24 text-center tracking-wide">
          OUR EXPERTISE
        </h1>

        {/* Carousel Wrapper */}
        <div className="relative w-full py-6 h-full overflow-hidden z-50 pb-10">
          <div 
            className="flex justify-center items-center transition-all duration-500 ease-in-out"
            style={{ transform: `translateX(${getTranslateX()}px)` }}
          >
            {cards.map((card, index) => (
              <CarouselCard
                key={index}
                {...card}
                isHidden={hiddenIndices.includes(index)}
                isActive={index === activeIndex}
              />
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-16 z-50 items-center mt-16">
          <button
            onClick={prevSlide}
            className="text-white hover:text-sky-400 transition-colors"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={nextSlide}
            className="text-white hover:text-sky-400 transition-colors"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 z-0"> 
        <Image src="/grid.png" alt="hero" className="-z-10" width={1920} height={1080} />
      </div>
    </div>
  );
};

export default Alt1;