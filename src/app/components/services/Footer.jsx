"use client"
import Image from "next/image";
import React from "react";
import Circle from "../footer/Circle";
import Link from "next/link";
import Circle2 from "../footer/Circle2";

const Footer = () => {
  const handleEmailClick = () => {
    window.location.href = "/contact-form";
  };
  return (
    <div className="bg-[#0d2538] relative h-screen  z-0">
      <div className="wrapper h-[82%] md:h-[77%]  xl:h-[80%]  z-50">
        <div className="footer bg-[#0d2538] grid  grid-cols-1 md:grid-cols-2 justify-between md:gap-10 px-8 md:px-12 py-6 md:py-12 z-20">
          {/* Column 1: Logo */}
          <div className="flex flex-col text-white items-start max-w-[500px]">
            <div className="mb-4">
              <Image
                src="/logofooter.png" // Replace with the actual logo URL
                alt="Logo"
                className="w-32"
                width={128}
                height={128}
              />
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
          <div className="text-white w-full flex flex-col items-start md:items-center ">
            {/* Email Subscription */}
            <div className=" w-full flex ">
              {/* <div className="flex">
                <input
                  type="email"
                  placeholder="ENTER YOUR GMAIL"
                  className="bg-[#0a2540] border w-[200px] xl:w-[294px] border-[#F25525] placeholder:font-semibold placeholder:text-white text-white px-4 py-2  rounded-l-[99px] outline-none"
                />
                <button className="bg-orange-500 uppercase font-bold w-[160px] -ml-7 border-2 text-white px-9 md:px-[47px] py-2 rounded-[99px] hover:bg-orange-600">
                  Join Us
                </button>
              </div> */}
            </div>
            <h3 className="text-lg  heading font-normal mb-4">SOCIAL LINKS</h3>

            {/* Social Media Icons */}

            <div className="flex  mb-20  space-x-4">
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
              <Link href="https://www.facebook.com/share/14vj9njXZR/?mibextid=wwXIfr" target="_blank" className="text-white text-xl  hover:text-gray-300">
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
