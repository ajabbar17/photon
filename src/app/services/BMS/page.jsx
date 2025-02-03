import Footer from '@/app/components/services/Footer'
import Info from '@/app/components/services/Info'
import Navbar from '@/app/components/services/Navbar'
import ServiceCards from '@/app/components/services/ServiceCards'
import ServiceHero from '@/app/components/services/ServiceHero'
import React from 'react'

const page = () => {
    const servicesData = [
        {
          heading: "Automation & Control:",
          description:
            "Monitor and manage lighting, HVAC, and security systems from a single platform.",
        },
        {
          heading: "Energy Efficiency:",
          description:
            "Reduce energy consumption with smart scheduling and real-time monitoring.",
        },
        {
          heading: "Seamless Integration:",
          description:
            "Our solutions integrate with existing infrastructure for enhanced performance.",
        },
      ];
  return (
    <div>
        <Navbar />
        <ServiceHero title="Building Management System (BMS)" title2="Solutions" imageUrl="/bms.png" />
        <Info
        imageUrl="/bms2.png" // Replace with actual image path
        title="Smart Solutions for Smarter Buildings"
        description="A well-designed Building Management System (BMS) optimizes the operation of various  building functions, ensuring efficiency, safety, and cost savings. At Photon Engineering Realm,  we provide intelligent BMS solutions that offer centralized control over essential building  operations."
      />
        <ServiceCards title="Our BMS Services include Supply, Installation, Testing & Commissioning for following domains:" services={servicesData} />
        <Footer />
    </div>
  )
}

export default page