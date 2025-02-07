import Footer from "@/app/components/services/Footer";
import Info from "@/app/components/services/Info";
import Navbar from "@/app/components/services/Navbar";
import ServiceCards from "@/app/components/services/ServiceCards";
import ServiceHero from "@/app/components/services/ServiceHero";
import React from "react";


export const metadata = {
  title: "Drainage & Sewerage Solutions",
  description: ""
};

const page = () => {
  const servicesData = [
    {
      heading: "End-to-End Solutions",
      description:
        "From design to installation and maintenance.",
    },
    {
      heading: "High-Quality Materials",
      description:
        "Reliable, long-lasting plumbing components.",
    },
    {
      heading: "Sustainable Practices",
      description:
        "Eco-friendly water and waste management.",
    },
  ];
  const span = ["Water Supply Systems - ", "Drainage & Sewerage - ", "Premimum Fixtures - "];
  const spandetail = [
    "Cold & hot water piping (PPRC), underground HDPE pipes, solar geysers, and electrical water heaters.",
    "uPVC drainage pipes, sewerage treatment plants, and waste management systems.",
    "World-class plumbing fittings for durability and efficiency."]

  return (
    <div>
      <Navbar />
      <ServiceHero
        title="Drainage & Sewerage"
        title2="Solutions"
        imageUrl="/drainage.png"
      />
      <Info
        imageUrl="/drainage2.png" // Replace with actual image path
        title="Plumbing, Water Supply & Drainage Solutions"
        description="At Photon Engineering Realm (PER), we provide comprehensive plumbing, water supply, and drainage solutions for commercial, industrial, and residential projects. Our expert team ensures efficient water distribution and waste management with top-quality materials and advanced technology."
        title2="Our Services"
        span={span}
        spandetail={spandetail}

      />
      <ServiceCards
        title="Plumbing, Water Supply & Drainage Solutions?"
        services={servicesData}
      />
      <Footer />
    </div>
  );
};

export default page;
