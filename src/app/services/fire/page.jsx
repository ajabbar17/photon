import Footer from '@/app/components/services/Footer'
import Info from '@/app/components/services/Info'
import Navbar from '@/app/components/services/Navbar'
import ServiceCards from '@/app/components/services/ServiceCards'
import ServiceHero from '@/app/components/services/ServiceHero'
import React from 'react'


export const metadata = {
  title: "Fire Safety Systems",
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

      const span = [
        "Fire Detection & Alarm",
        "Fire Pumps (Diesel, Jockey & Electric) Sprinklers",
        "Mobile Foam Units",
        "Fire Hose Reels & Cabinets Fire Hydrants",
        "Fire Extinguishers",
        "Pipes, Hangers, Supports, Clamps & Accessories",
        "Valves & Specialties",
        "Controllers",
        "Fire Stop Arrangement etc."
      ];

  return (
    <div>
        <Navbar />
        <ServiceHero title="Fire Detection, Alarm & Protection" title2="System Solutions" imageUrl="/fire.png" />
        <Info
        imageUrl="/fire3.svg" // Replace with actual image path
        title="Protect What Matters Most with Our Fire Safety Solutions"
        title2="Our Services"
        span={span}
        description="A Fire Detection, Alarm, and Protection System detects smoke or fire, alerts occupants, and activates safety measures to prevent or minimize damage. Its importance lies in protecting lives, property, and minimizing fire-related risks by providing early warning and efficient emergency response."
      />
        <ServiceCards title="Our Fire Safety Services includes:" services={servicesData} />
        <Footer />
    </div>
  )
}

export default page