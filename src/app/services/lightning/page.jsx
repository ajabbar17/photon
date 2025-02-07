import Footer from '@/app/components/services/Footer'
import Info from '@/app/components/services/Info'
import Navbar from '@/app/components/services/Navbar'
import ServiceCards from '@/app/components/services/ServiceCards'
import ServiceHero from '@/app/components/services/ServiceHero'
import React from 'react'


export const metadata = {
  title: "Lightning Protection System",
  description: ""
};

const page = () => {
    const servicesData = [
        {
          heading: "Proactive Strike Prevention:",
          description:
            `Advanced ESE technology enhances the system’s  response to lightning threats.`,
        },
        {
          heading: "Wide Coverage Area:",
          description:
            "Our solutions provide comprehensive protection for large  and complex structures.",
        },
        {
          heading: "Regulatory Compliance:",
          description:
            "Designed to meet international safety standards for  maximum reliability.",
        },
      ];
  return (
    <div>
        <Navbar />
        <ServiceHero title="Lightning Protection & Earth Grounding" title2="System Solutions" imageUrl="/lightning.png" />
        <Info
        imageUrl="/lightning2.png" // Replace with actual image path
        title="Advanced Protection Against Lightning Strikes"
        description="Protect your property and infrastructure with our Early Streamer Emission (ESE)-based  Lightning Protection Systems. Designed to offer superior coverage, our systems ensure safety  by effectively intercepting and directing lightning strikes away from critical structures."
      />
        <ServiceCards title="Key Features of Our Lightning Protection Systems:" services={servicesData} />
        <Footer />
    </div>
  )
}

export default page