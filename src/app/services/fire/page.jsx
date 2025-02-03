import Footer from '@/app/components/services/Footer'
import Info from '@/app/components/services/Info'
import Navbar from '@/app/components/services/Navbar'
import ServiceCards from '@/app/components/services/ServiceCards'
import ServiceHero from '@/app/components/services/ServiceHero'
import React from 'react'

const page = () => {
    const servicesData = [
        {
          heading: "Fire Detection Systems:",
          description:
            "Advanced systems to detect smoke and fire quickly.",
        },
        {
          heading: "Alarm Systems:",
          description:
            "Reliable alarm systems to alert occupants in emergencies.",
        },
        {
          heading: "Fire Protection Solutions:",
          description:
            "Tailored solutions to meet regulatory standards and enhance safety.",
        },
      ];
  return (
    <div>
        <Navbar />
        <ServiceHero title="Fire Detection, Alarm & Protection" title2="System Solutions" imageUrl="/fire.png" />
        <Info
        imageUrl="/fire2.png" // Replace with actual image path
        title="Protect What Matters Most with Our Fire Safety Solutions"
        description="Fire safety is paramount in any building. Our comprehensive fire detection, alarm, and  protection services ensure that your property and its occupants are safeguarded against fire  hazards."
      />
        <ServiceCards title="Our Fire Safety Services include Supply, Installation, Testing & Commissioning for following domains:" services={servicesData} />
        <Footer />
    </div>
  )
}

export default page