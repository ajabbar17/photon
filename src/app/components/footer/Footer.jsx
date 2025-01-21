import { Instagram } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import Circle from './Circle';

const Footer = () => {
  return (
    <div className="bg-[#0a2540] relative  h-screen z-0">
        <div className='wrapper h-full md:h-[80%] z-50'>
      <div className="footer bg-[#0a2540] grid grid-cols-1 md:grid-cols-3 gap-5 px-8 md:px-16 md:py-12 z-20">
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
        <div className="text-white grid grid-cols-2 gap-5">
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Our Services</a></li>
              <li><a href="#" className="hover:text-white">Community</a></li>
              <li><a href="#" className="hover:text-white">Testimonials</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Career Tips</a></li>
              <li><a href="#" className="hover:text-white">Career</a></li>
            </ul>
          </div>
        </div>

        {/* Column 3: Email Subscription and Social Media Icons */}
        <div className="text-white w-full ">
          {/* Email Subscription */}
          <div className=" md:mt-24 w-full ">
            <div className="flex w-full">
              <input
                type="email"
                placeholder="ENTER YOUR GMAIL"
                className="bg-[#0a2540] border w-[294px] border-[#F25525] placeholder:font-semibold placeholder:text-white text-white px-4 py-2  rounded-l-[99px] outline-none"
              />
              <button className="bg-orange-500 uppercase font-bold w-[160px] -ml-7 border-2 text-white px-9 md:px-[47px] py-2 rounded-[99px] hover:bg-orange-600">
                Join Us
              </button>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex mt-10 mb-20 space-x-4">
            <a href="#" className="text-white text-xl hover:text-gray-300">
              <i className="fab fa-instagram">
                <Image 
                  src="/ig.png"
                  alt="Instagram"
                  width={32}
                  height={32}
                />
              </i> {/* Replace with icon */}
            </a>
            <a href="#" className="text-white text-xl hover:text-gray-300">
              <i className="fab fa-linkedin">
                <Image 
                  src="/in.png"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                />
              </i>
            </a>
            <a href="#" className="text-white text-xl  hover:text-gray-300">
              <i className="fab fa-facebook">
                <Image 
                  src="/fb.png"
                  alt="facebook"
                  width={32}
                  height={32}
                />
              </i>
            </a>
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
        <Circle bottom={25} right={10} />
        <Circle bottom={28} right={0} />
    </div>
  );
};

export default Footer;
