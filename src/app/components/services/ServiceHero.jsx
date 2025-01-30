import React from "react";

export default function ServiceHero({ title,span,title2, imageUrl }) {

  
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Title */}
      <div className={` `}>

      <h1 className="relative text-white   text-4xl md:text-7xl heading font-normal text-center px-4">
        {title}
        <br />
        <span className="text-[#F13232]">
          {span}
        </span>
        {title2}
      </h1>
      </div>
    </section>
  );
}
