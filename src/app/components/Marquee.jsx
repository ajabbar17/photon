import React from "react";

export default function MarqueeSection() {
  return (
    <section
      className="relative overflow-hidden h-[812px] z-10 bg-cover bg-center py-16"
      style={{ backgroundImage: "url('/Group146.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0a2540] bg-opacity-80"></div>

      {/* Marquee Container */}
      <div className="relative w-full mx-auto mt-10 overflow-hidden">
        <div className="flex gap-8  py-4 animate-marquee">
          {/* First Card */}
          <div className="min-w-[700px] text-center h-[309px] bg-[#0e3a5b] border border-[rgba(2, 131, 197, 1)] marqueecard text-white p-8 rounded-3xl flex flex-col">
            <h3 className="text-[32px] font-semibold text-center mb-6">WHY CHOOSE US?</h3>
            <p className="mb-4">At PER, we are driven by:</p>
            <ul className="space-y-2 text-base">
              <li>• Integrity: Delivering honest, ethical, and transparent services.</li>
              <li>• Expertise: Leveraging global standards for innovative solutions.</li>
              <li>• Client-Centric Approach: Building long-term relationships with trust and collaboration.</li>
              <li>• Sustainability: Promoting eco-friendly practices in every project.</li>
            </ul>
          </div>

          {/* Second Card */}
          <div className="min-w-[700px] text-center h-[309px]  border border-[rgba(2, 131, 197, 1)] marqueecard text-white p-8 rounded-3xl flex flex-col">
            <h3 className="text-[32px] font-semibold text-center mb-6">INDUSTRIES WE SERVE</h3>
            <p className="">From commercial complexes to industrial facilities, PER caters to a diverse range of markets:</p>
            <ul className="space-y-2 text-base">
              <li>• Civic &Commercial: Offices, retail, residential, and cultural centers.</li>
              <li>• Power&RenewableEnergy: Generation, transmission, and distribution.</li>
              <li>• HeavyIndustry: Food processing, pharmaceuticals, and material handling.</li>
              <li>• Telecommunications: Data centers and infrastructure cabling.</li>
            </ul>
          </div>

          {/* Third Card */}
          <div className="min-w-[700px] text-center h-[309px]  border border-[rgba(2, 131, 197, 1)] marqueecard text-white p-8 rounded-3xl flex flex-col">
            <h3 className="text-[32px] font-semibold text-center mb-6">BUILD YOUR DREAM PROJECT WITH PER</h3>
            <p className="text-base leading-relaxed">
              At Photon Engineering Realm, we combine global expertise with local insights to deliver innovative engineering solutions. From project inception to completion, we are your partners in achieving excellence.
            </p>
          </div>

          {/* Duplicate First Card */}
          <div className="min-w-[700px] text-center h-[309px]  border border-[rgba(2, 131, 197, 1)] marqueecard text-white p-8 rounded-3xl flex flex-col">
            <h3 className="text-[32px] font-semibold text-center mb-6">WHY CHOOSE US?</h3>
            <p className="mb-4 ">At PER, we are driven by:</p>
            <ul className="space-y-2 text-base ">
              <li>• Integrity: Delivering honest, ethical, and transparent services.</li>
              <li>• Expertise: Leveraging global standards for innovative solutions.</li>
              <li>• Client-Centric Approach: Building long-term relationships with trust and collaboration.</li>
              <li>• Sustainability: Promoting eco-friendly practices in every project.</li>
            </ul>
          </div>

          {/* Duplicate Second Card */}
          <div className="min-w-[700px] text-center h-[309px]  border border-[rgba(2, 131, 197, 1)] marqueecard text-white p-8 rounded-3xl flex flex-col">
            <h3 className="text-[32px] font-semibold text-center mb-6">INDUSTRIES WE SERVE</h3>
            <p className="">From commercial complexes to industrial facilities, PER caters to a diverse range of markets:</p>
            <ul className="space-y-2 text-base ">
              <li>• Civic &Commercial: Offices, retail, residential, and cultural centers.</li>
              <li>• Power&RenewableEnergy: Generation, transmission, and distribution.</li>
              <li>• HeavyIndustry: Food processing, pharmaceuticals, and material handling.</li>
              <li>• Telecommunications: Data centers and infrastructure cabling.</li>
            </ul>
          </div>

          {/* Duplicate Third Card */}
          <div className="min-w-[700px] text-center h-[309px]  border border-[rgba(2, 131, 197, 1)] marqueecard text-white p-8 rounded-3xl flex flex-col">
            <h3 className="text-[32px] font-semibold text-center mb-6">BUILD YOUR DREAM PROJECT WITH PER</h3>
            <p className="text-base leading-relaxed">
              At Photon Engineering Realm, we combine global expertise with local insights to deliver innovative engineering solutions. From project inception to completion, we are your partners in achieving excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}