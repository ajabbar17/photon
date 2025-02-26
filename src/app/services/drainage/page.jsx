import Navbar from "@/app/components/services/Navbar";
import ServiceHero from "@/app/components/services/ServiceHero";
import Info from "@/app/components/services/Info";
import ServiceCards from "@/app/components/services/ServiceCards";
import Footer from "@/app/components/services/Footer";
import React from "react";

export const metadata = {
  title: "Drainage & Sewerage Solutions",
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
    "Cold & Hot Water Pipes (PPRC)",
    "Water Drainage (uPVC)",
    "Underground Pipes for Water Supply & Sewerage (HDPE)",
    "Hot Water Solar Geysers",
    "Hot Water Electrical Generators",
    "Sewerage Treatment Plants & Chemicals",
    "Waste Management System",
    "World Class Plumbing Fittings & Fixtures",
  ];

  return (
    <div>
      <Navbar />
      <ServiceHero
        title="Drainage & Sewerage"
        title2="Solutions"
        imageUrl="/drainage-min.png"
      />
      <Info
        imageUrl="/drainage2-min.png" // Replace with actual image path
        title="Plumbing, Water Supply & Drainage Solutions"
        description="At Photon Engineering Realm (PER), we provide comprehensive plumbing, water supply, and drainage solutions for commercial, industrial, and residential projects. Our expert team ensures efficient water distribution and waste management with top-quality materials and advanced technology."
        title2="Our Services"
        span={span}
      />
      <ServiceCards
        title="Plumbing, Water Supply & Drainage Services Includes:"
        services={servicesData}
      />
      <Footer />
    </div>
  );
};

export default page;
