import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo.png';
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
        <img src={Logo} alt="Logo" className='w-28 cursor-pointer mr-14' />
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 shadow-sm bg-white bg-opacity-50'>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Me</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/work">My Work</a></li>
          <li><a href="/contact">Contact Me</a></li>
        </ul>
        <div className='flex items-center gap-4'>
          <button><img className='w-6' src={moon} alt="Moon Icon" /></button>
          <a href="/contact" className='hidden lg:flex items-center py-2.5 px-10 gap-3 border border-gray-500 rounded-full ml-4'>
            Contact
            <img className='w-3' src={arrow_icon} alt="Arrow Icon" />
          </a>
          <button className='md:hidden' onClick={toggleSidebar}>
            {isSidebarOpen ? <FaTimes className='w-6 h-6' /> : <FaBars className='w-6 h-6' />}
          </button>
        </div>
      </nav>
      <div className={`fixed top-0 right-0 h-full w-64 bg-blue-300 shadow-lg z-40 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <ul className='flex flex-col items-start p-16'>
          <li className='py-2'><a href="/" onClick={toggleSidebar}>Home</a></li>
          <li className='py-2'><a href="/about" onClick={toggleSidebar}>About Me</a></li>
          <li className='py-2'><a href="/services" onClick={toggleSidebar}>Services</a></li>
          <li className='py-2'><a href="/work" onClick={toggleSidebar}>My Work</a></li>
          <li className='py-2'><a href="/contact" onClick={toggleSidebar}>Contact Me</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
