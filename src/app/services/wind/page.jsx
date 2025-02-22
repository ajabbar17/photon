import Navbar from "@/app/components/services/Navbar";
import ServiceHero from "@/app/components/services/ServiceHero";
import Info from "@/app/components/services/Info";
import ServiceCards from "@/app/components/services/ServiceCards";
import Footer from "@/app/components/services/Footer";
import React from "react";

export const metadata = {
  title: "Wind Powered Energy",
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
  return (
    <div>
      <Navbar />
      <ServiceHero
        title="Wind Powered Energy"
        title2="Solutions"
        imageUrl="/wind.png"
      />
      <Info
        imageUrl="/wind2.png" // Replace with actual image path
        title="Powering the Future with Clean, Renewable Wind Energy"
        description="At Photon Engineering Realm, we offer cutting-edge wind energy solutions designed to harness  the power of nature for sustainable and efficient energy generation. Our wind power systems  help reduce dependence on conventional energy sources, lowering costs and promoting  environmental responsibility."
      />
        <ServiceCards
          title="Why Choose Our Wind Energy Solutions?"
          services={servicesData}
        />
        <Footer />
    </div>
  );
};

export default page;
