import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Circle from './Circle';
import Circle2 from './Circle2';

const Footer = () => {
  return (
    <div className="bg-[#0d2538] relative h-screen overflow-hidden z-0">
        <div className='wrapper h-[82%] md:h-[77%]  xl:h-[80%] z-50'>
      <div className="footer bg-[#0d2538] grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-5 px-8 md:px-16 py-3 md:py-12 z-20">
        {/* Column 1: Logo */}
        <div className="flex flex-col items-start">
          <div className="mb-4">
            <Image
              src="/logofooter.png" // Replace with the actual logo URL
              alt="Logo"
              className="w-32"
              width={128}
              height={128}
            />
          </div>
        </div>

        {/* Column 2: Quick Links and Company */}
        <div className="text-white grid grid-cols-2 gap-5 xl:gap-10">
          <div>
            <h3 className="text-lg font-normal heading mb-2 md:mb-4">SERVICES</h3>
            <ul className="space-y-2 text-xs md:text-sm detail text-gray-400">
              <li><Link href="/services/solarpowered" className="hover:text-white">Solar Powered System Solutions</Link></li>
              <li><Link href="/services/HVAC" className="hover:text-white">HVAC Services</Link></li>
              <li><Link href="/services/elevators" className="hover:text-white">Elevators and Escalators</Link></li>
              <li><Link href="/services/fire" className="hover:text-white">Fire Safety Services</Link></li>
              <li><Link href="/services/wind" className="hover:text-white">Wind Powered Energy Solutions</Link></li>
              <li><Link href="/services/BMS" className="hover:text-white">BMS</Link></li>
              <li><Link href="/services/lightning" className="hover:text-white">Lightning Protection System</Link></li>
              <li><Link href="/services/drainage" className="hover:text-white">Plumbing, Water Supply & Drainage Solutions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg  heading font-normal  mb-2 md:mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-xs md:text-sm text-gray-400">
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Column 3: Email Subscription and Social Media Icons */}
        <div className="text-white w-full ">
          {/* Email Subscription */}
          <div className="  w-full ">
          <h3 className="text-lg  heading font-normal mb-4">SOCIAL LINKS</h3>

            {/* <div className="flex w-full">
              <input
                type="email"
                placeholder="ENTER YOUR GMAIL"
                className="bg-[#0a2540] border w-[200px] md:w-[230px] xl:w-[294px] border-[#F25525] placeholder:font-semibold placeholder:text-white text-white px-4 py-2  rounded-l-[99px] outline-none"
              />
              <button className="bg-orange-500 uppercase font-bold w-auto  xl:w-[160px] -ml-7 border-2 text-white px-6 xl:px-[47px] py-1 xl:py-2 rounded-[99px] hover:bg-orange-600">
                Join Us
              </button>
            </div> */}
          </div>

          {/* Social Media Icons */}
          <div className="flex mb-20 space-x-4">
            <Link href="https://www.instagram.com/photonengineeringrealm?igsh=ZjZ1NWVtd3Ywd2U2" target='_blank' className="text-white text-xl hover:text-gray-300">
              <i className="fab fa-instagram">
                <Image 
                  src="/ig.png"
                  alt="Instagram"
                  width={32}
                  height={32}
                />
              </i> {/* Replace with icon */}
            </Link>
            <Link href="https://www.linkedin.com/company/photon-engineering-realm/" target='_blank' className="text-white text-xl hover:text-gray-300">
              <i className="fab fa-linkedin">
                <Image 
                  src="/in.png"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                />
              </i>
            </Link>
            <Link href="https://www.facebook.com/share/14vj9njXZR/?mibextid=wwXIfr" target='_blank' className="text-white text-xl  hover:text-gray-300">
              <i className="fab fa-facebook">
                <Image 
                  src="/fb.png"
                  alt="facebook"
                  width={32}
                  height={32}
                />
              </i>
            </Link>
          </div>
        </div>
      </div>
      </div>
      <Circle bottom={0} right={35} />
        <Circle bottom={10} right={48} />
        <Circle bottom={10} right={30} />
        <Circle bottom={15} right={20} />
        <Circle bottom={20} right={15} />
        <Circle bottom={18} right={10} />
        <Circle bottom={18} right={0} />
        <Circle2 bottom={17} right={30} />
        <Circle2 bottom={20} right={35} />
    </div>
  );
};

export default Footer;
