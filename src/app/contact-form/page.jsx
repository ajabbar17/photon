import React from 'react'
import ContactForm from '../components/contact/ContactForm'
import Navbar from '../components/services/Navbar'
import Footer from '../components/services/Footer'

export const metadata = {
    title: "Contact Form",
    description: ""
};


const page = () => {
  return (
    <div>
      <Navbar />
        <ContactForm    />
        <Footer />
    </div>
  )
}

export default page