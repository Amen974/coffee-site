import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="flex items-center bg-white border-black border-solid border-b-4 border-t-2 z-10 py-4 px-4">
      {/* Logo */}
      <div className="font-dancing font-bold text-red-700 text-[20px] mr-16">AMEN</div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center justify-between flex-1 mr-16">
        <li><a href="#Hero" className="px-2 py-1.5 hover:bg-[#2d1b14] hover:text-white hover:rounded-[10px] duration-200">Home</a></li>
        <li><a href="#Best-sell" className="px-2 py-1.5 hover:bg-[#2d1b14] hover:text-white hover:rounded-[10px] duration-200">Best sell</a></li>
        <li><a href="#Services" className="px-2 py-1.5 hover:bg-[#2d1b14] hover:text-white hover:rounded-[10px] duration-200">Services</a></li>
        <li><a href="#Menu" className="px-2 py-1.5 hover:bg-[#2d1b14] hover:text-white hover:rounded-[10px] duration-200">Menu</a></li>
        <li><a href="#Contact" className="px-2 py-1.5 hover:bg-[#2d1b14] hover:text-white hover:rounded-[10px] duration-200">Contact</a></li>
      </ul>

      {/* Mobile Burger */}
      <button
        className="md:hidden ml-auto"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-[70px] left-0 w-full bg-white flex flex-col items-center gap-4 py-6 border-t border-black md:hidden">
          <li><a href="#Hero" className="px-2 py-1.5 hover:bg-[#2d1b14] hover:text-white hover:rounded-[10px] duration-200">Home</a></li>
          <li><a href="#Best sell" className="px-2 py-1.5 hover:bg-[#2d1b14] hover:text-white hover:rounded-[10px] duration-200">Best sell</a></li>
          <li><a href="#Services" className="px-2 py-1.5 hover:bg-[#2d1b14] hover:text-white hover:rounded-[10px] duration-200">Services</a></li>
          <li><a href="#Menu" className="px-2 py-1.5 hover:bg-[#2d1b14] hover:text-white hover:rounded-[10px] duration-200">Menu</a></li>
          <li><a href="" className="px-2 py-1.5 hover:bg-[#2d1b14] hover:text-white hover:rounded-[10px] duration-200">Contact</a></li>
        </ul>
      )}
    </header>
  )
}

export default Nav
