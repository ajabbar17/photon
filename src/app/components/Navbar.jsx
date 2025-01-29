import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
<nav className="px-6 py-4 relative bg-[#F25525] z-10">
        <div className="max-w-7xl mx-auto flex items-center">
          <div className="text-2xl font-bold w-1/4">
          <Image src="/logonav.png" alt="logo" width={139} height={48} />
          </div>
          <div className="flex gap-8 justify-center w-2/4">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-[#0c1b34] detail ">
                {item}
              </a>
            ))}
          </div>
          <div className="w-1/4" /> {/* Empty div for balance */}
        </div>
      </nav>  )
}

export default Navbar