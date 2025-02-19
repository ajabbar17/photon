import Footer from "@/app/components/services/Footer";
import Info from "@/app/components/services/Info";
import Navbar from "@/app/components/services/Navbar";
import ServiceCards from "@/app/components/services/ServiceCards";
import ServiceHero from "@/app/components/services/ServiceHero";
import React from "react";

export const metadata = {
  title: "Solar Powered System Solutions",
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
    "Expert Installation",
    "Energy Monitoring",
    "Sustainable Solutions",
  ];
  return (
    <div>
      <Navbar />
      <ServiceHero
        title="Solar Powered"
        title2="System Solutions"
        imageUrl="/solar.png"
      />
      <Info
        imageUrl="/solar2.png" // Replace with actual image path
        title="Harness the Power of the Sun with Our Solar Panels"
        title2="Our Services:"
        span={span}
        description="At Photon Engineering Realm, we specialize in providing high-quality photovoltaic solar energy solutions tailored to meet your energy needs. Our expert team is dedicated to helping you reduce energy costs and minimize your carbon footprint through efficient solar panel installations."
      />
      <ServiceCards title="Our Solar Panels Include:" services={servicesData} />
      <Footer />
    </div>
  );
};

export default page;
