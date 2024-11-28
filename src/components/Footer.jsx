import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { SiOrcid, SiGooglescholar } from 'react-icons/si';

function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-[#2a004a] text-white dark:text-gray-300 py-10">
      <div className="container mx-auto px-[12%] flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
        
        {/* Personal Info */}
        <div className="mb-6 lg:mb-0">
          <h3 className="text-2xl font-semibold mb-2 dark:text-white">Faisal Khan</h3>
          <p className="text-gray-400 dark:text-gray-400">Research Assistant</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-col items-center lg:flex-row gap-4 my-5 lg:my-0">
          <a href="https://www.facebook.com/profile.php?id=100046914278208&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-500 hover:text-blue-800 dark:hover:text-blue-300">
            <FaFacebookF size={24} />
          </a>
          <a href="https://x.com/ifaisaljaved" target="_blank" rel="noopener noreferrer" className="text-blue-400 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-400">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.linkedin.com/in/faisal-khan-3a4251243/" target="_blank" rel="noopener noreferrer" className="text-blue-700 dark:text-blue-500 hover:text-blue-900 dark:hover:text-blue-300">
            <FaLinkedinIn size={24} />
          </a>
          <a href="https://github.com/Faisal-javed-khan" target="_blank" rel="noopener noreferrer" className="text-gray-300 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-200">
            <FaGithub size={24} />
          </a>
          <a href="https://orcid.org/0009-0009-1930-8375" target="_blank" rel="noopener noreferrer" className="text-green-500 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300">
            <SiOrcid size={24} />
          </a>
          <a href="https://scholar.google.com/citations?user=KsFlhOgAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-500 hover:text-blue-800 dark:hover:text-blue-300">
            <SiGooglescholar size={24} />
          </a>
          <a href="https://wa.me/966500178192" target="_blank" rel="noopener noreferrer" className="text-green-400 dark:text-green-300 hover:text-green-600 dark:hover:text-green-500">
            <FaWhatsapp size={24} />
          </a>
        </div>

        {/* Contact Info */}
        <div className="mt-5 lg:mt-0 lg:ml-6">
          <p className="text-gray-400 dark:text-gray-300">Contact me at:</p>
          <a href="mailto:faisalkhan10162@gmail.com" className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
            faisalkhan10162@gmail.com
          </a>
          <p className="mt-2 text-gray-400 dark:text-gray-300">
            WhatsApp: <a href="https://wa.me/966500178192" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-600">+966500178192</a>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-gray-500 dark:text-gray-400 text-sm text-center mt-5">
        © {new Date().getFullYear()} Faisal Khan. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
