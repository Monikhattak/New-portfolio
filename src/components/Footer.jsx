import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-[#2a004a] text-white dark:text-gray-300 py-10">
      <div className="container mx-auto px-[12%] flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
        
        <div className="mb-6 lg:mb-0">
          <h3 className="text-2xl font-semibold mb-2 dark:text-white">Muhammad Mujtaba</h3>
          <p className="text-gray-400 dark:text-gray-400">Frontend Developer & Designer</p>
        </div>

        <div className="flex flex-col items-center lg:flex-row gap-4 my-5 lg:my-0">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-500 hover:text-blue-800 dark:hover:text-blue-300">
            <FaFacebookF size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-400">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 dark:text-blue-500 hover:text-blue-900 dark:hover:text-blue-300">
            <FaLinkedinIn size={24} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-200">
            <FaGithub size={24} />
          </a>
        </div>

        <div className="mt-5 lg:mt-0 lg:ml-6">
          <p className="text-gray-400 dark:text-gray-300">Contact me at:</p>
          <a href="mailto:mujtabaktk159@gmail.com" className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
            mujtabaktk159@gmail.com
          </a>
        </div>
      </div>

      <div className="text-gray-500 dark:text-gray-400 text-sm text-center mt-5">
        © {new Date().getFullYear()} Muhammad Mujtaba. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
