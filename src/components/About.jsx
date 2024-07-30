import React from 'react';
import user_img from '../assets/user-image.png';
import code_icon from '../assets/code-icon.png';
import edu_icon from '../assets/edu-icon.png';
import project_icon from '../assets/project-icon.png';
import vs_code_icon from '../assets/vscode.png';
import firebase_icon from '../assets/firebase.png';
import figma_icon from '../assets/figma.png';
import git_icon from '../assets/git.png';
import mongodb_icon from '../assets/mongodb.png';

function About() {
  return (
    <div id="about" className='w-full px-[12%] py-10'>
      <h4 className='text-center mb-2 text-lg'>Introduction</h4>
      <h2 className='text-center text-5xl'>About me</h2>
      <p className='text-center mt-4'>Here you can add more details about yourself.</p>
      <div className='w-full flex flex-col lg:flex-row items-center gap-20 my-20'>
        <img className='w-64 sm:w-80 rounded-3xl max-w-none' src={user_img} alt="" />
        <div className='flex-1'>
          <p className='mb-10 max-w-2xl'>
            I'm an experienced Frontend developer with over a decade of professional
            expertise in the field. Throughout my career, I have had the privilege
            of collaborating with prestigious organizations, contributing to their success and growth.
          </p>
          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer flex items-start gap-4 hover:bg-[#fef4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]'>
              <img className='w-7 mt-3' src={code_icon} alt="" />
              <div>
                <h3 className='my-3 font-semibold text-gray-700'>Languages</h3>
                <p className='text-gray-700 text-sm'>HTML, CSS, JavaScript, React JS, Node JS</p>
              </div>
            </li>
            <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer flex items-start gap-4 hover:bg-[#fef4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]'>
              <img className='w-7 mt-3' src={edu_icon} alt="" />
              <div>
                <h3 className='my-3 font-semibold text-gray-700'>Education</h3>
                <p className='text-gray-700 text-sm'>Bachelor of Software Engineering</p>
              </div>
            </li>
            <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer flex items-start gap-4 hover:bg-[#fef4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]'>
              <img className='w-7 mt-3' src={project_icon} alt="" />
              <div>
                <h3 className='my-3 font-semibold text-gray-700'>Projects</h3>
                <p className='text-gray-700 text-sm'>Built more than 5 projects</p>
              </div>
            </li>
          </ul>
          <h4 className='my-6 text-gray-700'>Tools I use</h4>
          <ul className='flex items-center gap-3 sm:gap-5'>
            <li className='flex justify-center items-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
              <img className='w-5 sm:w-7' src={vs_code_icon} alt="" />
            </li>
            <li className='flex justify-center items-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
              <img className='w-5 sm:w-7' src={firebase_icon} alt="" />
            </li>
            <li className='flex justify-center items-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
              <img className='w-5 sm:w-7' src={mongodb_icon} alt="" />
            </li>
            <li className='flex justify-center items-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
              <img className='w-5 sm:w-7' src={git_icon} alt="" />
            </li>
            <li className='flex justify-center items-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
              <img className='w-5 sm:w-7' src={figma_icon} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
