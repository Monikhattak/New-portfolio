import React from 'react';
import send_icon from '../assets/send-icon.png';

function Mywork() {
  return (
    <div id="work" className="w-full px-6 lg:px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg text-gray-700 dark:bg-[#2a004a] dark:text-white">My portfolio</h4>
      <h3 className="text-center text-3xl sm:text-5xl font-bold text-gray-900 dark:bg-[#2a004a] dark:text-white">My latest work</h3>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-700 dark:bg-[#2a004a] dark:text-white">
        Welcome to my portfolio. My Published Papers
        Explore a collection of my research work in advanced fields such as Computer vision, machine learning, and deep learning.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 gap-5">
        {/* Research Work Items */}
        {["Deep Learning", "Computer Vision", "Computer Vision", "Computer Vision"].map((topic, index) => (
          <div
            key={index}
            className={`aspect-square bg-[url("./assets/work-${index + 1}.png")] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer`}
          >
            <div
              className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 transform -translate-x-1/2 py-3 px-5 
                flex items-center justify-between duration-500 group hover:bottom-7"
            >
              <div>
                <h2 className="text-sm font-semibold text-black">Research Paper</h2>
                <p className="text-sm text-gray-700">{topic}</p>
              </div>
              <div
                className="border rounded-full border-black w-9 aspect-square flex items-center justify-center 
                shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition"
              >
                <a
                  href="https://scholar.google.com/citations?user=KsFlhOgAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="w-5" src={send_icon} alt="Send Icon" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="px-8 py-3 rounded-full border border-gray-500 text-black hover:bg-gray-300 transition-all duration-300 dark:bg-[#2a004a] dark:text-white">
          Load More
        </button>
      </div>
    </div>
  );
}

export default Mywork;
