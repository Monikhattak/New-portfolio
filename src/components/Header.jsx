import React from 'react';
import profile_img from '../assets/profile-img.png';
import hand_icon from '../assets/hand-icon.png';
import right_arrow from '../assets/right-arrow-white.png';
import download_icon from '../assets/download-icon.png';

function Header() {
  return (
    <div id="home" className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 px-4 md:px-0'>
      <img className='rounded-full w-32 md:w-48' src={profile_img} alt="Profile" />
      <h3 className='text-xl md:text-2xl flex items-center text-gray-900 dark:text-gray-100'>
        Hi, I'm Faisal Khan <img className='w-6 ml-2' src={hand_icon} alt="Wave" />
      </h3>
      <h1 className='text-2xl md:text-4xl lg:text-[40px] text-gray-900 dark:text-gray-100'>
        Research Assistant
      </h1>
      <span className='text-2xl'>At The Smart Technologies Lab (SM LAB)</span>
      <p className='text-base md:text-lg text-gray-700 dark:text-gray-300'>
        Research Interest: Computer Vision, Machine Learning, Deep Learning.
      </p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        {/* Contact Me Button */}
        <a 
          href="/contact" 
          className='py-3 px-8 border rounded-full bg-gradient-to-t from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 hover:from-[#a31dcf] hover:to-[#c86b1c] transition-all duration-300'
        >
          Contact me <img src={right_arrow} alt="Arrow" className='w-4' />
        </a>
        
        {/* Download Resume Button */}
        <a 
          href="/Faisal Khan AI Reseacher  CV.pdf" 
          download="Faisal_Khan_CV" 
          className='py-3 px-8 border rounded-full border-gray-500 dark:border-gray-100 flex items-center gap-2 bg-white hover:bg-gray-100 dark:bg-[#983bbd] dark:hover:bg-[#683777] transition-all duration-300 text-gray-900 dark:text-gray-100'
        >
          My Resume <img src={download_icon} alt="Download" className='w-4' />
        </a>
      </div>
    </div>
  );
}

export default Header;