import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

import arrow_icon from '../assets/arrow-icon.png';
import moon from '../assets/moon_icon.png';
import Header_color from '../assets/header-bg-color.png';

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <img className='w-full' src={Header_color} alt="Header Background" />
      </div>
      <nav className='w-full fixed px-5 xl:px-[8%] py-4 flex items-center justify-between z-50'>
        <div className='flex items-center gap-4'>
        
          <span className='text-2xl font-bold text-gray-900 hidden md:block'>Portfolio</span>
        </div>
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 shadow-sm bg-white bg-opacity-50 cursor-pointer'>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About Me</Link></li>
          <li><Link to="services" smooth={true} duration={500}>Services</Link></li>
          <li><Link to="work" smooth={true} duration={500}>My Work</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact Me</Link></li>
        </ul>
        <div className='flex items-center gap-4'>
          <button><img className='w-6' src={moon} alt="Moon Icon" /></button>
          <Link to="contact" smooth={true} duration={500}>
          <a href="/contact" className='hidden lg:flex items-center py-2.5 px-10 gap-3 border border-gray-500 rounded-full ml-4'>
            Contact
            <img className='w-3' src={arrow_icon} alt="Arrow Icon" />
          </a>
          </Link>
          <button className='md:hidden' onClick={toggleSidebar}>
            {isSidebarOpen ? <FaTimes className='w-6 h-6' /> : <FaBars className='w-6 h-6' />}
          </button>
        </div>
      </nav>
      <div className={`fixed top-0 right-0 h-full w-64 bg-blue-300 shadow-lg z-40 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <ul className='flex flex-col items-start p-16'>
          <li className='py-2 cursor-pointer'><Link to="home" smooth={true} duration={500} onClick={toggleSidebar}>Home</Link></li>
          <li className='py-2 cursor-pointer'><Link to="about" smooth={true} duration={500} onClick={toggleSidebar}>About Me</Link></li>
          <li className='py-2 cursor-pointer'><Link to="services" smooth={true} duration={500} onClick={toggleSidebar}>Services</Link></li>
          <li className='py-2'><Link to="work" smooth={true} duration={500} onClick={toggleSidebar}>My Work</Link></li>
          <li className='py-2'><Link to="contact" smooth={true} duration={500} onClick={toggleSidebar}>Contact Me</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
