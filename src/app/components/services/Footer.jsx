import Image from "next/image";
import React from "react";
import Circle from "../footer/Circle";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#0a2540] relative h-screen  z-0">
      <div className="wrapper h-full md:h-[80%] z-50">
        <div className="footer bg-[#0a2540] grid  grid-cols-1 md:grid-cols-2 justify-between gap-10 px-8 md:px-12 py-6 md:py-12 z-20">
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
            <button className="mt-8 px-4 py-3 w-[156px] source h-[47px] bg-[#f25525] text-white text-base font-normal rounded-3xl hover:bg-[#C6370C] transition">
            Get Started Today
          </button>
          </div>

          {/* Column 2: Email Subscription and Social Media Icons */}
          <div className="text-white w-full flex flex-col items-end ">
            {/* Email Subscription */}
            <div className="md:mt-24 w-full flex justify-end">
              <div className="flex">
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
            <div className="flex mt-10 mb-20 md:mr-72 space-x-4">
              <Link href="#" className="text-white text-xl hover:text-gray-300">
                <i className="fab fa-instagram">
                  <Image src="/ig.png" alt="Instagram" width={32} height={32} />
                </i>
              </Link>
              <Link href="#" className="text-white text-xl hover:text-gray-300">
                <i className="fab fa-linkedin">
                  <Image src="/in.png" alt="LinkedIn" width={32} height={32} />
                </i>
              </Link>
              <Link href="#" className="text-white text-xl  hover:text-gray-300">
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
      <Circle bottom={25} right={10} />
      <Circle bottom={28} right={0} />
    </div>
  );
};

export default Footer;
