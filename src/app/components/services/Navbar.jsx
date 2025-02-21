"use client"
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const logoRef = useRef(null);
  const navRef = useRef(null);

  const serviceLinks = [
    { href: "/services/BMS", text: "BMS" },
    { href: "/services/elevators", text: "Elevators, Escalators & Moving Walkways" },
    { href: "/services/fire", text: "Fire Detection, Alarm & Protection Systems" },
    { href: "/services/HVAC", text: "Heating Ventilation and Air Conditioning Solutions" },
    { href: "/services/lightning", text: "Lightning Protection System" },
    { href: "/services/drainage", text: "Plumbing, Water Supply & Drainage Solutions" },
    { href: "/services/solarpowered", text: "Solar Powered System Solutions" },
    { href: "/services/wind", text: "Wind Energy Solutions" },
  ];

  useEffect(() => {
    gsap.set([logoRef.current, navRef.current], {
      y: -100,
      opacity: 0
    });

    gsap.to([logoRef.current, navRef.current], {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power3.out"
    });
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleMobileServices = () => setIsMobileServicesOpen(!isMobileServicesOpen);

  return (
    <>
      <nav className="absolute top-0 left-0 w-full flex items-center z-50 px-8 py-6 text-white">
        <div ref={logoRef} className="w-[200px]">
          <Link href="/">
            <Image src="/Group 142.svg" width={150} height={50} alt="Logo" />
          </Link>
        </div>

        <div className="flex-1 flex justify-center">
          <ul ref={navRef} className="hidden md:flex items-center gap-8 detail font-normal text-lg">
            <li>
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
            <li className="relative">
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className="text-white nav-link"
              >
                Services
              </button>
              {isDropdownOpen && (
                <div
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="absolute top-full left-0 w-72 bg-[#0a2540] rounded-lg shadow-lg py-2"
                >
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm nav-link text-white detail"
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              )}
            </li>
            <li>
              <Link className="nav-link" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-[200px] flex justify-end">
          <button 
            onClick={toggleSidebar}
            className="md:hidden text-white"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <div className={`fixed top-0 right-0 h-full w-64 bg-[#0a2540] z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} className="text-white">
            <X size={24} />
          </button>
        </div>

        <ul className="flex flex-col gap-4 p-8 text-white">
          <li><Link href="/" onClick={toggleSidebar}>Home</Link></li>
          <li>
            <button 
              onClick={toggleMobileServices}
              className="flex items-center justify-between w-full mb-2 font-semibold detail text-white"
            >
              Services
              <span className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            <ul className={`pl-4 space-y-2 overflow-hidden transition-all duration-300 ${
              isMobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    onClick={toggleSidebar}
                    className="text-sm nav-link detail"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li><Link href="/contact" onClick={toggleSidebar}>Contact</Link></li>
        </ul>
      </div>

      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}