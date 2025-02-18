import Footer from "@/app/components/services/Footer";
import Info from "@/app/components/services/Info";
import Navbar from "@/app/components/services/Navbar";
import ServiceCards from "@/app/components/services/ServiceCards";
import ServiceHero from "@/app/components/services/ServiceHero";
import React from "react";


export const metadata = {
  title: "Heating, Ventilation & Air Conditioning",
  description: ""
};

const page = () => {
  const servicesData = [
    {
      heading: "Engineering:",
      description:
        "We provide detailed design, system integration, and technical planning to meet project requirements.",
    },
    {
      heading: "Procurement:",
      description:
        "We focus on sourcing high-quality materials and equipment at optimal costs while ensuring compliance with industry standards.",
    },
    {
      heading: "Installation:",
      description:
        "We cover on-site execution, testing, commissioning and after sales support of MEP systems to ensure efficient and reliable performance enhancing project efficiency and reducing risks.",
    },
  ];

const span = [ "Chillers (Screw, Centrifugal, Absorption)", 
  "Hot Water Generators & Boilers (Fire/Wet Tube Wet Back Direct Fired Dual Fuel)",
  "Cooling Towers",
  "Roof Top Packaged Air Conditioners",
  "Variable Refrigerant Flow Air Conditioners (VRF)",
  "Air Handling Units",
  "Fan Coil Units",
  "Ducts, Hangers, Supports, Clamps & Accessories",
  "Pipes, Hangers, Supports, Clamps & Accessories"
];

  return (
    <div>
      <Navbar />
      <ServiceHero
        title="Heating, Ventilation & Air Conditioning"
        span="(HVAC)"
        title2="System Solutions"
        imageUrl="/hvac.png"
      />
      <Info
        imageUrl="/hvac3.svg" // Replace with actual image path
        title="Comfort and Efficiency with Our HVAC Solutions"
        title2="Our Services"
        span={span}
        description="A Heating, Ventilation, and Air Conditioning (HVAC) system regulates indoor temperature, humidity, and air quality, ensuring comfort and health in residential, commercial, and industrial spaces. Its importance lies in maintaining optimal living and working conditions, improving air quality, and enhancing energy efficiency while reducing environmental impact."
      />
      <ServiceCards
        title="Our HVAC Services Include:"
        services={servicesData}
      />
      <Footer />
    </div>
  );
};

export default page;
