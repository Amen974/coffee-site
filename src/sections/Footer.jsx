import React from 'react'
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <section className='flex gap-4 p-16 bg-black text-white'>
      <div className='flex flex-col flex-1 gap-8 '>
        <div>
          <h1 className='text-red-700 font-bold font-dancing text-4xl'>AMEN</h1>
        </div>
        <div>
          <p className='max-w-[400px]'>At CoffeeHouse, every cup tells a story. Enjoy freshly brewed coffee, cozy vibes, 
            and moments worth savoring. Brewed with passion, served with care.</p>
        </div>
        <nav className='flex gap-4'>
          <a href="#">
          <Instagram size={24} />
          </a>
          <a href="#">
          <Facebook size={24} />
          </a>
          <a href="#">
          <Twitter size={24} />
          </a>
        </nav>
        <div>
          <a href="#" className="text-white bg-red-700 text-[1rem] px-5 py-2 rounded-md shadow-md hover:bg-red-800 transition">Back To Top</a>
        </div>
      </div>

      <div className="flex flex-col flex-1 justify-center gap-4">
      <div className="flex items-center gap-2">
        <Phone size={18} className="text-stone-400" />
        <span className="text-sm">+1 (555) 123-4567</span>
      </div>
      <div className="flex items-center gap-2">
        <Mail size={18} className="text-stone-400" />
        <span className="text-sm">hello@coffeehouse.com</span>
      </div>
      <div className="flex items-center gap-2">
        <MapPin size={18} className="text-stone-400" />
        <span className="text-sm">123 Brew Street, Bean City, USA</span>
      </div>
    </div>

      <div className='flex flex-col gap-8 flex-1'>
        <div>
          <h2 className='text-[1.2rem]'>Site Map</h2>
        </div>
        <nav className='flex flex-col gap-5'>
          <a href="">Home</a>
          <a href="">Best sell</a>
          <a href="">Services</a>
          <a href="">Menu</a>
          <a href="">Contact</a>
        </nav>
      </div>
        
      <div className='flex flex-col flex-1 gap-8'>
        <div>
          <h3 className='text-[1.2rem]'>Extras</h3>
        </div>
        <div className='flex flex-col flex-1 gap-4'>
          <p>Opening Hours (Mon–Fri: 8AM – 8PM, Sat–Sun: 9AM – 6PM)</p>
          <p>Newsletter signup (“Get updates & offers”)</p>
          <p>Copyright line at the bottom</p>
        </div>
      </div>
    </section>
  )
}

export default Footer