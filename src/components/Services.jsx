import React from 'react';
import web_icon from '../assets/web-icon.png';
import right_arrow from "../assets/right-arrow.png";
import Mobile_icon from '../assets/mobile-icon.png';
import ui_icon from '../assets/ui-icon.png';
import Graphic_icon from '../assets/graphics-icon.png';

function Services() {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20 bg-transparent dark:bg-[#2a004a]">
      <h4 className="text-center mb-2 text-lg text-gray-700 dark:text-white">What I Offer</h4>
      <h3 className="text-center text-5xl font-bold text-gray-900 dark:text-white">My Services</h3>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-700 dark:text-gray-300">
      I am a Graduate Research Assistant at Islamia College and University, Peshawar, with research expertise in computer vision, machine learning, and deep learning.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
        <div className="border border-gray-500 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] dark:hover:bg-[#3a1069] hover:-translate-y-1 duration-500 dark:text-white">
          <img className="w-10 mb-4" src={web_icon} alt="Web Design Icon" />
          <h3 className="text-lg my-4 text-gray-700 dark:text-white"> Computer Vision</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-5">
           Developing innovative solutions for image and video analysis using deep learning techniques.
            <a href="#" className="flex items-center gap-2 sm:mt-5 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600 duration-300">
              Read more
              <img className="w-4" src={right_arrow} alt="Right Arrow Icon" />
            </a>
          </p>
        </div>
        <div className="border border-gray-500 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] dark:hover:bg-[#3a1069] hover:-translate-y-1 duration-500 dark:text-white">
          <img className="w-10 mb-4" src={Mobile_icon} alt="Mobile App Icon" />
          <h3 className="text-lg my-4 text-gray-700 dark:text-white">Machine Learning</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-5">
           Building predictive models and algorithms for intelligent decision-making systems.
            <a href="#" className="flex items-center gap-2 sm:mt-5 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600 duration-300">
              Read more
              <img className="w-4" src={right_arrow} alt="Right Arrow Icon" />
            </a>
          </p>
        </div>
        <div className="border border-gray-500 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] dark:hover:bg-[#3a1069] hover:-translate-y-1 duration-500 dark:text-white">
          <img className="w-10 mb-4" src={ui_icon} alt="UI/UX Design Icon" />
          <h3 className="text-lg my-4 text-gray-700 dark:text-white">Deep Learning</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-5">
           Designing advanced neural network architectures for state-of-the-art AI applications.
            <a href="#" className="flex items-center gap-2 sm:mt-5 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600 duration-300">
              Read more
              <img className="w-4" src={right_arrow} alt="Right Arrow Icon" />
            </a>
          </p>
        </div>
        <div className="border border-gray-500 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] dark:hover:bg-[#3a1069] hover:-translate-y-1 duration-500 dark:text-white">
          <img className="w-10 mb-4" src={Graphic_icon} alt="Graphic Design Icon" />
          <h3 className="text-lg my-4 text-gray-700 dark:text-white">Frontend Development</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-5">
           Crafting responsive and visually engaging web designs for seamless user experiences.
            <a href="#" className="flex items-center gap-2 sm:mt-5 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600 duration-300">
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
