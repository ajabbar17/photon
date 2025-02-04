"use client"
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const logoRef = useRef(null);
  const navLinksRef = useRef([]);
  
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
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
    ).fromTo(
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

    return () => tl.kill();
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <nav className="absolute top-0 left-0 w-full flex items-center z-50 px-8 py-6 text-white">
        {/* Logo */}
        <div ref={logoRef} className="w-[150px] opacity-0">
          <Link href="/">
            <Image src="/logofooter.png" width={150} height={50} alt="Logo" />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="flex-1 flex justify-center">
          <ul className="hidden md:flex gap-8 detail font-normal text-lg">
            {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
              <li key={item}>
                <Link 
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  ref={el => navLinksRef.current[index] = el}
                  className="opacity-0"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:w-[150px] flex justify-end">
          <button 
            onClick={toggleSidebar}
            className="md:hidden text-white"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Sliding Sidebar */}
      <div className={`
        fixed top-0 right-0 h-full w-64 bg-[#0a2540] z-50
        transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        {/* Sidebar Header */}
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} className="text-white">
            <X size={24} />
          </button>
        </div>

        {/* Sidebar Navigation Links */}
        <ul className="flex flex-col gap-4 p-8 text-white">
          <li><Link href="/" onClick={toggleSidebar}>Home</Link></li>
          <li><Link href="/about" onClick={toggleSidebar}>About</Link></li>
          <li><Link href="/services" onClick={toggleSidebar}>Services</Link></li>
          <li><Link href="/contact" onClick={toggleSidebar}>Contact</Link></li>
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
