import Footer from '@/app/components/services/Footer'
import Info from '@/app/components/services/Info'
import Navbar from '@/app/components/services/Navbar'
import ServiceCards from '@/app/components/services/ServiceCards'
import ServiceHero from '@/app/components/services/ServiceHero'
import React from 'react'


export const metadata = {
  title: "Elevators & Escalators",
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
        "Passenger Lifts",
        "Patient Bed Lifts",
        "Cargo & Service Lifts",
        "Dumb Waiters",
        "Escalators",
        "Travellators",
        "Moving Walkways",
        "Parking Management",
        "Platform Screen Doors & Gates"
      ]
  return (
    <div>
        <Navbar />
        <ServiceHero title="Elevators, Escalators, Travelators &" title2="Moving Walkways" imageUrl="/elevators.png" />
        <Info
        imageUrl="/elevators2.png" // Replace with actual image path
        title="Enhance Your Space with Our Transportation Solutions"
        title2="Our Services"
        span={span}
        description="Elevators, escalators, travelators, and moving walkways are automated systems designed to transport people vertically or horizontally in buildings and public spaces. Their importance lies in improving accessibility, efficiency, and convenience, especially in high-traffic areas, while reducing physical strain for users."
      />
        <ServiceCards title="Our Offerings:" services={servicesData} />
        <Footer />
    </div>
  )
}

export default page