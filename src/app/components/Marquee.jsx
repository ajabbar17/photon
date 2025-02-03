import React from "react";

export default function MarqueeSection() {
  return (
    <section className="relative overflow-hidden h-auto md:h-[812px] z-10 bg-cover bg-center py-8 md:py-16" style={{ backgroundImage: "url('/Group146.png')" }}>
      {/* Overlay */}

      {/* Marquee Container */}
      <div className="relative w-full mx-auto mt-5 md:mt-10 overflow-hidden">
        <div className="flex gap-4 md:gap-8 py-4 animate-marquee">
          {/* First Card */}
          <div className="min-w-[350px] md:min-w-[700px] text-center h-[300px] md:h-[309px] bg-[#0e3a5b] border border-[rgba(2, 131, 197, 1)] marqueecard text-white p-4 md:p-8 rounded-3xl flex flex-col">
            <h3 className="text-xl md:text-[32px] font-semibold text-center mb-3 md:mb-6">WHY CHOOSE US?</h3>
            <p className="mb-2 md:mb-4 text-sm md:text-base">At PER, we are driven by:</p>
            <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
              <li>• Integrity: Delivering honest, ethical, and transparent services.</li>
              <li>• Expertise: Leveraging global standards for innovative solutions.</li>
              <li>• Client-Centric Approach: Building long-term relationships.</li>
              <li>• Sustainability: Promoting eco-friendly practices.</li>
            </ul>
          </div>

          {/* Second Card */}
          <div className="min-w-[350px] md:min-w-[700px] text-center h-[300px] md:h-[309px] border border-[rgba(2, 131, 197, 1)] marqueecard text-white p-4 md:p-8 rounded-3xl flex flex-col">
            <h3 className="text-xl md:text-[32px] font-semibold text-center mb-3 md:mb-6">INDUSTRIES WE SERVE</h3>
            <p className="text-sm md:text-base">From commercial complexes to industrial facilities, PER caters to a diverse range of markets:</p>
            <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
              <li>• Civic &Commercial: Offices, retail, residential, and cultural centers.</li>
              <li>• Power&RenewableEnergy: Generation, transmission, and distribution.</li>
              <li>• HeavyIndustry: Food processing, pharmaceuticals, and material handling.</li>
              <li>• Telecommunications: Data centers and infrastructure cabling.</li>
            </ul>
          </div>

          {/* Third Card */}
          <div className="min-w-[350px] md:min-w-[700px] text-center h-[300px] md:h-[309px] border border-[rgba(2, 131, 197, 1)] marqueecard text-white p-4 md:p-8 rounded-3xl flex flex-col">
            <h3 className="text-xl md:text-[32px] font-semibold text-center mb-3 md:mb-6">BUILD YOUR DREAM PROJECT WITH PER</h3>
            <p className="text-sm md:text-base leading-relaxed">
              At Photon Engineering Realm, we combine global expertise with local insights to deliver innovative engineering solutions. From project inception to completion, we are your partners in achieving excellence.
            </p>
          </div>

          {/* Duplicate First Card */}
          <div className="min-w-[350px] md:min-w-[700px] text-center h-[300px] md:h-[309px] border border-[rgba(2, 131, 197, 1)] marqueecard text-white p-4 md:p-8 rounded-3xl flex flex-col">
            <h3 className="text-xl md:text-[32px] font-semibold text-center mb-3 md:mb-6">WHY CHOOSE US?</h3>
            <p className="mb-2 md:mb-4 text-sm md:text-base">At PER, we are driven by:</p>
            <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
              <li>• Integrity: Delivering honest, ethical, and transparent services.</li>
              <li>• Expertise: Leveraging global standards for innovative solutions.</li>
              <li>• Client-Centric Approach: Building long-term relationships.</li>
              <li>• Sustainability: Promoting eco-friendly practices.</li>
            </ul>
          </div>

          {/* Duplicate Second Card */}
          <div className="min-w-[350px] md:min-w-[700px] text-center h-[300px] md:h-[309px] border border-[rgba(2, 131, 197, 1)] marqueecard text-white p-4 md:p-8 rounded-3xl flex flex-col">
            <h3 className="text-xl md:text-[32px] font-semibold text-center mb-3 md:mb-6">INDUSTRIES WE SERVE</h3>
            <p className="text-sm md:text-base">From commercial complexes to industrial facilities, PER caters to a diverse range of markets:</p>
            <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
              <li>• Civic &Commercial: Offices, retail, residential, and cultural centers.</li>
              <li>• Power&RenewableEnergy: Generation, transmission, and distribution.</li>
              <li>• HeavyIndustry: Food processing, pharmaceuticals, and material handling.</li>
              <li>• Telecommunications: Data centers and infrastructure cabling.</li>
            </ul>
          </div>

          {/* Duplicate Third Card */}
          <div className="min-w-[350px] md:min-w-[700px] text-center h-[300px] md:h-[309px] border border-[rgba(2, 131, 197, 1)] marqueecard text-white p-4 md:p-8 rounded-3xl flex flex-col">
            <h3 className="text-xl md:text-[32px] font-semibold text-center mb-3 md:mb-6">BUILD YOUR DREAM PROJECT WITH PER</h3>
            <p className="text-sm md:text-base leading-relaxed">
              At Photon Engineering Realm, we combine global expertise with local insights to deliver innovative engineering solutions. From project inception to completion, we are your partners in achieving excellence.
            </p>
          </div>
        </div>
      </div>
      <h1 className="source text-xl md:text-2xl font-normal text-white z-50 px-6 mt-10 md:mt-32 md:px-24 text-center">By choosing Photon Engineering Realm, you are partnering with a team that is passionate  about excellence and dedicated to enhancing the value of your projects. Let us help you build  your dream project today!</h1>
    </section>
  );
}