import React from 'react';
import web_icon from '../assets/web-icon.png';
import right_arrow from "../assets/right-arrow.png";

function Services() {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg text-gray-700">What I Offer</h4>
      <h3 className="text-center text-5xl font-bold text-gray-900">My Services</h3>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-700">
        I am a frontend developer from Peshawar, Pakistan with 2 years of experience in multiple projects like e-commerce, sliders, product pages, etc.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
        <div className="border border-gray-500 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500">
          <img className="w-10 mb-4" src={web_icon} alt="Web Design Icon" />
          <h3 className="text-lg my-4 text-gray-700">Web Design</h3>
          <p className="text-sm text-gray-600 leading-5">
            Web development is the process of building programming... 
            <a href="#" className="flex items-center gap-2 sm:mt-5 text-blue-500 hover:text-blue-700 duration-300">
              Read more
              <img className="w-4" src={right_arrow} alt="Right Arrow Icon" />
            </a>
          </p>
        </div>
      
      </div>
    </div>
  );
}

export default Services;
