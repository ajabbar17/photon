"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const navItems = ['Home', 'About', 'Services', 'Contact'];

  return (
    <>
      <nav className="px-6 py-4 relative bg-[#F25525] z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between md:justify-start">
          <div className="text-2xl font-bold md:w-1/4">
            <Link href="/">
              <Image src="/logonav.png" alt="logo" width={139} height={48} />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 justify-center w-2/4">
            {navItems.map((item) => (
              <Link 
                key={item} 
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                className="text-[#0c1b34] detail"
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
          
          <div className="hidden md:block w-1/4" />
        </div>
      </nav>

      {/* Sliding Sidebar */}
      <div className={`
        fixed top-0 right-0 h-full w-64 bg-[#F25525] z-50
        transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
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