import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-[12%] flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
       
        <div className="mb-6 lg:mb-0">
          <h3 className="text-2xl font-semibold mb-2">Muhammad Mujtaba</h3>
          <p className="text-gray-400">Frontend Developer & Designer</p>
        </div>

     
        <div className="flex flex-col items-center lg:flex-row gap-4 my-5 lg:my-0">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            <FaFacebookF size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
            <FaLinkedinIn size={24} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-500">
            <FaGithub size={24} />
          </a>
        </div>

       
        <div className="mt-5 lg:mt-0 lg:ml-6">
          <p className="text-gray-400">Contact me at:</p>
          <a href="mailto:mujtabaktk159@gmail.com" className="text-blue-500 hover:text-blue-700">
            mujtabaktk159@gmail.com
          </a>
        </div>
      </div>

     
      <div className="text-gray-500 text-sm text-center mt-5">
        © {new Date().getFullYear()} Muhammad Mujtaba. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
