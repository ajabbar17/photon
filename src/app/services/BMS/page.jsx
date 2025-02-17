import Footer from '@/app/components/services/Footer'
import Info from '@/app/components/services/Info'
import Navbar from '@/app/components/services/Navbar'
import ServiceCards from '@/app/components/services/ServiceCards'
import ServiceHero from '@/app/components/services/ServiceHero'
import React from 'react'

export const metadata = {
    title: "Building Management System (BMS)",
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
  return (
    <div>
        <Navbar />
        <ServiceHero title="Building Management System (BMS)" title2="Solutions" imageUrl="/bms.png" />
        <Info
        imageUrl="/bms2.png" // Replace with actual image path
        title="Smart Solutions for Smarter Buildings"
        description="A well-designed Building Management System (BMS) optimizes the operation of various  building functions, ensuring efficiency, safety, and cost savings. At Photon Engineering Realm,  we provide intelligent BMS solutions that offer centralized control over essential building  operations."
      />
        <ServiceCards title="Our BMS Services include:" services={servicesData} />
        <Footer />
    </div>
  )
}

export default page