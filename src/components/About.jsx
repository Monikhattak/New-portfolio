import React from 'react';
import user_img from '../assets/user-image.png'
function About() {
  return (
    <div id="about" className='w-full px-[12%] py-10'>
      <h4 className='text-center mb-2 text-lg'>Introduction</h4>
      <h2 className='text-center text-5xl'>About me</h2>
      <p className='text-center mt-4'>Here you can add more details about yourself.</p>
      <div className=' flexn w-full  flex-col  lg:flex-row  items-center gap-20  my-20'> 
        <img className='w-64 sm:w-80 rounded-3xl max-w-none' src={user_img} alt="" />
      </div>
    </div>
  );
}

export default About;
