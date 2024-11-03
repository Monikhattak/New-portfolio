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
import circular_icon from '../assets/circular-text.png';
import dev_icon from '../assets/dev-icon.png';

function About() {
  return (
    <div id="about" className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-3xl font-bold text-gray-700 dark:text-white'>Introduction</h4>
      <h2 className='text-center text-5xl font-bold text-gray-900 dark:text-white'>About Me</h2>
      <div className='w-full flex flex-col lg:flex-row items-center gap-20 my-10 relative'>
        <div className='max-w-max mx-auto relative'>
          <img className='w-64 sm:w-80 rounded-3xl max-w-none' src={user_img} alt="User" />
          <div className='bg-slate-200 w-1/2 aspect-square absolute right-0 bottom-0 
            rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55ppx_ rgba(140, 0, 162, 0.1)]
            flex items-center justify-center'>
            <img className='w-full animate-spin_slow' src={circular_icon} alt="Circular Icon" />
            <img className='w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src={dev_icon} alt="" />
          </div>
        </div>
        <div className='flex-1'>
          <p className='mb-10 max-w-3xl text-gray-700 dark:text-gray-300'>
            I'm an experienced Frontend developer with over a decade of professional
            expertise in the field. Throughout my career, I have had the privilege
            of collaborating with prestigious organizations, contributing to their success and growth.
          </p>
          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            <li className='border-[0.5px] border-gray-400 dark:border-gray-600 rounded-xl p-6 cursor-pointer flex items-start gap-4 hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]'>
              <img className='w-7 mt-3' src={code_icon} alt="Code Icon" />
              <div>
                <h3 className='my-3 font-semibold text-gray-700 dark:text-white'>Languages</h3>
                <p className='text-gray-700 dark:text-gray-300 text-sm'>HTML, CSS, JavaScript, React JS, Node JS</p>
              </div>
            </li>
            <li className='border-[0.5px] border-gray-400 dark:border-gray-600 rounded-xl p-6 cursor-pointer flex items-start gap-4 hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]'>
              <img className='w-7 mt-3' src={edu_icon} alt="Education Icon" />
              <div>
                <h3 className='my-3 font-semibold text-gray-700 dark:text-white'>Education</h3>
                <p className='text-gray-700 dark:text-gray-300 text-sm'>Bachelor of Software Engineering</p>
              </div>
            </li>
            <li className='border-[0.5px] border-gray-400 dark:border-gray-600 rounded-xl p-6 cursor-pointer flex items-start gap-4 hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]'>
              <img className='w-7 mt-3' src={project_icon} alt="Project Icon" />
              <div>
                <h3 className='my-3 font-semibold text-gray-700 dark:text-white'>Projects</h3>
                <p className='text-gray-700 dark:text-gray-300 text-sm'>Built more than 5 projects</p>
              </div>
            </li>
          </ul>
          <h4 className='my-6 text-gray-700 dark:text-white text-lg font-semibold'>Tools I Use</h4>
          <ul className='flex items-center gap-3 sm:gap-5'>
            <li className='flex justify-center items-center w-12 sm:w-14 aspect-square border border-gray-400 dark:border-gray-600 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
              <img className='w-5 sm:w-7' src={vs_code_icon} alt="VS Code Icon" />
            </li>
            <li className='flex justify-center items-center w-12 sm:w-14 aspect-square border border-gray-400 dark:border-gray-600 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
              <img className='w-5 sm:w-7' src={firebase_icon} alt="Firebase Icon" />
            </li>
            <li className='flex justify-center items-center w-12 sm:w-14 aspect-square border border-gray-400 dark:border-gray-600 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
              <img className='w-5 sm:w-7' src={mongodb_icon} alt="MongoDB Icon" />
            </li>
            <li className='flex justify-center items-center w-12 sm:w-14 aspect-square border border-gray-400 dark:border-gray-600 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
              <img className='w-5 sm:w-7' src={git_icon} alt="Git Icon" />
            </li>
            <li className='flex justify-center items-center w-12 sm:w-14 aspect-square border border-gray-400 dark:border-gray-600 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
              <img className='w-5 sm:w-7' src={figma_icon} alt="Figma Icon" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
