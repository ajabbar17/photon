"use client"
import Image from "next/image";
import React, { useState } from "react";
import Circle from "../footer/Circle";
import Link from "next/link";
import Circle2 from "../footer/Circle2";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailClick = () => {
    window.location.href = "/contact-form";
  };

  async function handleSubmit(event) {
    event.preventDefault();
    
    if (!email) {
      console.log("Email is required");
      return;
    }

    const objectToSubmit = {
      email,
      access_key: "bb1403d8-9a4e-4edd-8e59-2cb2714b41d9",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(objectToSubmit),
      });
      const result = await response.json();
      if (result.success) {
        console.log(result);
        setEmail(''); // Clear the input field after successful submission
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <div className="bg-[#0d2538] relative h-screen  z-0">
      <div className="wrapper h-[82%] md:h-[77%]  xl:h-[80%]  z-50">
        <div className="footer bg-[#0d2538] grid  grid-cols-1 md:grid-cols-2 justify-between md:gap-10 px-8 md:px-12 py-6 md:py-12 z-20">
          {/* Column 1: Logo */}
          <div className="flex flex-col text-white items-start max-w-[500px]">
            <div className="mb-4">
              <Link href="/">
                <Image
                  src="/Group 142.svg"
                  alt="Logo"
                  className="w-32"
                  width={128}
                  height={128}
                
                />
              </Link>
            </div>
            <h1 className="detail font-semibold ">Contact us at</h1>
            <p className="detail font-extralight">
              {" "}
              <span className="font-normal">Email us at:</span> info@per.com.pk or call us at 03000320737 to learn
              more about our solar panel services and how we can help you build
              your dream project.
            </p>
            <button 
              onClick={handleEmailClick}
              className="mt-8 px-4 py-3 w-[156px] source h-[47px] bg-[#f25525] text-white text-base font-normal rounded-3xl hover:bg-[#C6370C] transition">
              Get Started Today
            </button>
          </div>

          {/* Column 2: Email Subscription and Social Media Icons */}
          <div className="text-white w-full flex flex-col items-start md:items-center">
            {/* Email Subscription */}
            <div className="w-full flex xl:justify-end">
              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ENTER YOUR GMAIL"
                  className="bg-[#0a2540] border w-[200px] xl:w-[294px] heading border-[#F25525] placeholder:font-semibold placeholder:text-white text-white px-4 py-2 rounded-l-[99px] outline-none"
                />
                <button 
                  type="submit"
                  className="bg-orange-500 uppercase font-bold w-[130px] md:w-[160px] heading -ml-7 border-2 text-white px-6 md:px-[47px] py-2 rounded-[99px] hover:bg-orange-600">
                  Join Us
                </button>
              </form>
            </div>

            {/* Social Media Icons */}
            <div className="flex mb-20 mt-4 space-x-4">
              <Link href="https://www.instagram.com/photonengineeringrealm?igsh=ZjZ1NWVtd3Ywd2U2" target="_blank" className="text-white text-xl hover:text-gray-300">
                <i className="fab fa-instagram">
                  <Image src="/ig.png" alt="Instagram" width={32} height={32} />
                </i>
              </Link>
              <Link href="https://www.linkedin.com/company/photon-engineering-realm/" target="_blank" className="text-white text-xl hover:text-gray-300">
                <i className="fab fa-linkedin">
                  <Image src="/in.png" alt="LinkedIn" width={32} height={32} />
                </i>
              </Link>
              <Link href="https://www.facebook.com/share/14vj9njXZR/?mibextid=wwXIfr" target="_blank" className="text-white text-xl hover:text-gray-300">
                <i className="fab fa-facebook">
                  <Image src="/fb.png" alt="facebook" width={32} height={32} />
                </i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Circle bottom={0} right={40} />
      <Circle bottom={10} right={44} />
      <Circle bottom={10} right={48} />
      <Circle bottom={10} right={30} />
      <Circle bottom={15} right={20} />
      <Circle bottom={20} right={15} />
      <Circle bottom={21} right={10} />
      <Circle bottom={21} right={0} />
      <Circle2 bottom={17} right={30} />
      <Circle2 bottom={20} right={35} />
    </div>
  );
};

export default Footer;