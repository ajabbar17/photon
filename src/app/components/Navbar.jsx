"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import { Menu, X } from "lucide-react"
import gsap from 'gsap'

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navLinksRef = useRef([]);
  const logoRef = useRef(null);
  const timeline = useRef(null);

  const navItems = ['Home', 'Services', 'Contact'];

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

  return (
    <>
      <nav className={`px-6 py-4 bg-transparent z-50 ${!isScrolled ? 'fixed' : 'absolute top-0'} w-full`}>
        <div className="max-w-[1920px] mx-auto flex items-center justify-between md:justify-start">
          <div ref={logoRef} className="text-2xl font-bold md:w-1/4 opacity-0">
            <Link href="/">
              <Image src="/logonav.png" alt="logo" width={139} height={48} />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 z-50 justify-center w-2/4">
            {navItems.map((item, index) => (
              <Link 
                key={item} 
                ref={el => navLinksRef.current[index] = el}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                className="text-[#0c1b34] z-50 detail opacity-0"
              >
                {item}
              </Link>
            ))}
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
      <div className={`fixed top-0 right-0 h-full w-64 bg-[#F25525] z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} className="text-[#0c1b34]">
            <X size={24} />
          </button>
        </div>

        <ul className="flex flex-col gap-4 p-8 text-[#0c1b34]">
          {navItems.map((item) => (
            <li key={item}>
              <Link 
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                onClick={toggleSidebar}
                className="detail"
              >
                {item}
              </Link>
            </li>
          ))}
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