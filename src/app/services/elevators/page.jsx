import Footer from '@/app/components/services/Footer'
import Info from '@/app/components/services/Info'
import Navbar from '@/app/components/services/Navbar'
import ServiceCards from '@/app/components/services/ServiceCards'
import ServiceHero from '@/app/components/services/ServiceHero'
import React from 'react'

const page = () => {
    const servicesData = [
        {
          heading: "Passenger Lifts:",
          description:
            "Designed for comfort and efficiency inhigh-traffic areas.",
        },
        {
          heading: "Cargo & Service Lifts:",
          description:
            "Robust solutions for transporting goods.",
        },
        {
          heading: "Escalators and Moving Walkways:",
          description:
            "Enhance accessibility and flow in commercial spaces.",
        },
      ];
  return (
    <div>
        <Navbar />
        <ServiceHero title="Elevators, Escalators, Travelators &" title2="Moving Walkways" imageUrl="/elevators.png" />
        <Info
        imageUrl="/elevators2.png" // Replace with actual image path
        title="Enhance Your Space with Our Transportation Solutions"
        description="At Photon Engineering Realm, we provide a comprehensive range of Elevators, Escalators, Travelators & Moving Walkways solutions tailored to your needs. Our expertise spans various applications, ensuring safe and  efficient transportation for passengers and goods."
      />
        <ServiceCards title="Our Offerings:" services={servicesData} />
        <Footer />
    </div>
  )
}

export default page