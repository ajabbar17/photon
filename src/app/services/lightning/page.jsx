import Footer from "@/app/components/services/Footer";
import Info from "@/app/components/services/Info";
import Navbar from "@/app/components/services/Navbar";
import ServiceCards from "@/app/components/services/ServiceCards";
import ServiceHero from "@/app/components/services/ServiceHero";
import React from "react";

export const metadata = {
  title: "Lightning Protection System",
  description: "",
  keywords: [],
  robots: {
    index: true,
    follow: true,
  },
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

  const span = [
    "Air Termination Lightning Protection",
    "Meshed Conductors Lightning Protection",
    "Catenary Wire Lightning Conductor",
    "Solid Earthed Neutral",
    "Unearthed Neutral",
    "Resistance Earthed Neutral",
    "Reactance Earthed Neutral",
  ];
  return (
    <div>
      <Navbar />
      <ServiceHero
        title="Lightning Protection & Earth Grounding"
        title2="System Solutions"
        imageUrl="/lightning.png"
      />
      <Info
        imageUrl="/lightning2.png" // Replace with actual image path
        title="Advanced Protection Against Lightning Strikes"
        title2="Our Services"
        span={span}
        description="Earthing and lightning protection systems are one of the many systems that keep us and the equipment safe from any electrical mishaps. We at PER are able to design, source and install the lightning protection systems including;"
      />
      <ServiceCards
        title="Key Features of Our Lightning Protection Systems:"
        services={servicesData}
      />
      <Footer />
    </div>
  );
};

export default page;
