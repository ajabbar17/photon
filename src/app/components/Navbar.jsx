"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import { Menu, X } from "lucide-react"
import gsap from 'gsap'

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const navLinksRef = useRef([]);
  const logoRef = useRef(null);
  const timeline = useRef(null);

  const serviceLinks = [
    { href: "/services/solarpowered", text: "Solar Powered System Solutions" },
    { href: "/services/HVAC", text: "HVAC Services" },
    { href: "/services/elevators", text: "Elevators and Escalators" },
    { href: "/services/fire", text: "Fire Safety Services" },
    { href: "/services/wind", text: "Wind Powered Energy Solutions" },
    { href: "/services/BMS", text: "BMS" },
    { href: "/services/lightning", text: "Lightning Protection System" },
    { href: "/services/drainage", text: "Plumbing, Water Supply & Drainage Solutions" },
  ];

  const navItems = ['Home', 'Contact'];

  useEffect(() => {
    timeline.current = gsap.timeline();

    timeline.current
      .fromTo(
        logoRef.current,
        {
          y: -50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out"
        }
      )
      .fromTo(
        navLinksRef.current,
        {
          y: -50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out"
        },
        "-=0.4"
      );

    return () => {
      if (timeline.current) timeline.current.kill();
    };
  }, []);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  return (
    <>
      {/* Main Navigation */}
      <nav className={`px-6 py-4 bg-transparent w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'absolute top-0' : 'fixed'
      }`}>
        <div className="max-w-[1920px] mx-auto flex items-center justify-between md:justify-start">
          <div ref={logoRef} className="text-2xl font-bold md:w-1/4 opacity-0">
            <Link href="/">
              <Image src="/logonav.png" alt="logo" width={139} height={48} />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 z-50 justify-center w-2/4">
            {/* Home Link */}
            <Link 
              href="/"
              ref={el => navLinksRef.current[0] = el}
              className="text-[#0c1b34] z-50 detail opacity-0"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className="text-[#0c1b34] z-50 detail opacity-0"
                ref={el => navLinksRef.current[1] = el}
              >
                Services
              </button>
              {isDropdownOpen && (
                <div
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="absolute top-full left-0 w-72 bg-[#d44b22] rounded-lg shadow-lg py-2"
                >
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-[#0c1b34] hover:text-white detail"
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Contact Link */}
            <Link 
              href="/contact"
              ref={el => navLinksRef.current[2] = el}
              className="text-[#0c1b34] z-50 detail opacity-0"
            >
              Contact
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleSidebar}
            className="md:hidden text-[#0c1b34]"
          >
            <Menu size={24} />
          </button>
          
          <div className="hidden md:block w-1/3" />
        </div>
        
      </nav>

      {/* Sliding Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-[#0c1b34] z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} className="text-[#fff]">
            <X size={24} />
          </button>
        </div>

        <ul className="flex flex-col gap-4 p-8 text-[#fff]">
          <li><Link href="/" onClick={toggleSidebar} className="detail">Home</Link></li>
          <li>
            <button 
              onClick={toggleMobileServices}
              className="flex items-center justify-between w-full mb-2 font-semibold detail"
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
                    className="text-sm detail"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li><Link href="/contact" onClick={toggleSidebar} className="detail">Contact</Link></li>
        </ul>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}

export default Navbar