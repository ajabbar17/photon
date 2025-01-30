import Info from '@/app/components/services/Info'
import Navbar from '@/app/components/services/Navbar'
import ServiceHero from '@/app/components/services/ServiceHero'
import React from 'react'
import ContactInfo from '../components/contact/ContactInfo'
import Footer from '../components/footer/Footer'

const page = () => {
    const span = "Email us at: ";
    const spandetail =  "info@per.com.pk or call 03000320737";
  
   
  return (
    <div>
        <Navbar />
        <ServiceHero title="CONTACT US"  imageUrl="/solar.png" />
        <ContactInfo
        imageUrl="/contact.png" // Replace with actual image path
        title="Let’s Build Together"
        description="At Photon Engineering Realm (PER), we are committed to delivering cutting-edge engineering solutions. Whether you need expert consultation, project inquiries, or support, our team is ready to assist you."
        span="Email us at: "
        spandetail="info@per.com.pk or call 03000320737"
      />
      <Footer />
    </div>
  )
}

export default page