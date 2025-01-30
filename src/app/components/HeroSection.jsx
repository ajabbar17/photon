import React from 'react';
import { MoveDown } from 'lucide-react';
import Circle from './footer/Circle';

const HeroSection = () => {
  return (
    <div className="h-[110vh] bg-[#0a2540] relative  mb-10 z-40 overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[75vh] z-40 wrapper">
        <div className="absolute footer bg-[#F25525]">
          <div className="absolute top-[15%] text-[#0c1b34] left-1/2 transform -translate-x-1/2 w-full text-center px-6">
            <h1 className="text-4xl md:text-7xl font-normal heading leading-tight  mb-6">
              PHOTON ENGINEERING REALM:
              <br />
              REALM BEYOND POSSIBLE
            </h1>
            <p className="text-xl font-light detail ">
              Your Experts In Solar Panels, HVAC Systems, Fire Safety, And Elevators.
            </p>
          </div>
        </div>
      </div>

      {/* Circle with arrow */}
      <div className="absolute bottom-44 md:bottom-52 left-1/2 transform -translate-x-1/2 z-50">
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
        
            </div>
  );
};

export default HeroSection;
