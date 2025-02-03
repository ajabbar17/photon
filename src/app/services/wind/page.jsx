import Footer from '@/app/components/services/Footer'
import Info from '@/app/components/services/Info'
import Navbar from '@/app/components/services/Navbar'
import ServiceCards from '@/app/components/services/ServiceCards'
import ServiceHero from '@/app/components/services/ServiceHero'
import React from 'react'

const page = () => {
    const servicesData = [
        {
          heading: "Customized Solutions:",
          description:
            "We design wind power systems tailored to your specific  energy requirements.",
        },
        {
          heading: "Advanced Technology:",
          description:
            "Our turbines are equipped with the latest innovations for  maximum efficiency.",
        },
        {
          heading: "Reliable Performance:",
          description:
            "Built for durability, our systems ensure consistent energy  output year-round.",
        },
      ];
  return (
    <div>
        <Navbar />
        <ServiceHero title="Wind Powered Energy" title2="Solutions" imageUrl="/wind.png" />
        <Info
        imageUrl="/wind2.png" // Replace with actual image path
        title="Powering the Future with Clean, Renewable Wind Energy"
        description="At Photon Engineering Realm, we offer cutting-edge wind energy solutions designed to harness  the power of nature for sustainable and efficient energy generation. Our wind power systems  help reduce dependence on conventional energy sources, lowering costs and promoting  environmental responsibility."
      />
        <ServiceCards title="Why Choose Our Wind Energy Solutions?" services={servicesData} />
        <Footer />
    </div>
  )
}

export default page