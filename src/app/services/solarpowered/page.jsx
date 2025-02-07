import Footer from '@/app/components/services/Footer'
import Info from '@/app/components/services/Info'
import Navbar from '@/app/components/services/Navbar'
import ServiceCards from '@/app/components/services/ServiceCards'
import ServiceHero from '@/app/components/services/ServiceHero'
import React from 'react'


export const metadata = {
  title: "Solar Powered System Solutions",
  description: ""
};

const page = () => {
    const servicesData = [
        {
          heading: "Expert Installation:",
          description:
            "Our experienced technicians ensure a seamless installation process.",
        },
        {
          heading: "Energy Monitoring:",
          description:
            "We offer advanced energy monitoring systems to track your solar energy production.",
        },
        {
          heading: "Sustainable Solutions:",
          description:
            "Join the movement towards renewable energy and contribute to a greener planet.",
        },
      ];
  return (
    <div>
        <Navbar />
        <ServiceHero title="Solar Powered" title2="System Solutions" imageUrl="/solar.png" />
        <Info
        imageUrl="/solar2.png" // Replace with actual image path
        title="Harness the Power of the Sun with Our Solar Panels"
        description="At Photon Engineering Realm, we specialize in providing high-quality photovoltaic solar energy solutions tailored to meet your energy needs. Our expert team is dedicated to helping you reduce energy costs and minimize your carbon footprint through efficient solar panel installations."
      />
        <ServiceCards title="Our Solar Panels Include:" services={servicesData} />
        <Footer />
    </div>
  )
}

export default page