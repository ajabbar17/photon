import React from "react";

export default function ServiceCards({ title, services }) {
  return (
    <section className="bg-[#0d2538] text-white py-12 px-6 md:px-16 text-center">
      {/* Main Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-8 md:px-32">{title}</h2>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#D9D9D9] text-gray-900 hover:scale-105 transition-all  detail text-start px-3 pr-12 py-3 rounded-[25px] shadow-lg w-full md:w-[409px] h-[150px]"
          >
            <h3 className="text-lg mt-4 font-bold text-[#F13232]">{service.heading}</h3>
            <p className="text-sm font-light">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
