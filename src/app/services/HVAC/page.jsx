import Footer from "@/app/components/services/Footer";
import Info from "@/app/components/services/Info";
import Navbar from "@/app/components/services/Navbar";
import ServiceCards from "@/app/components/services/ServiceCards";
import ServiceHero from "@/app/components/services/ServiceHero";
import React from "react";

const page = () => {
  const servicesData = [
    {
      heading: "Maintenance:",
      description: "Regular maintenance services to ensure peak performance.",
    },
    {
      heading: "Repair:",
      description:
        "Prompt repair services to minimize downtime and restore comfort.",
    },
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
        imageUrl="/hvac2.png" // Replace with actual image path
        title="Comfort and Efficiency with Our HVAC Solutions"
        description="Our Heating, Ventilation, and Air Conditioning (HVAC) services are designed to provide optimal  comfort in your residential or commercial spaces. We understand the importance of a  well-functioning HVAC system for maintaining a healthy environment."
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
