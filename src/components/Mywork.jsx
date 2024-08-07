import React from 'react'
import send_icon from '../assets/send-icon.png'


function Mywork() {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg text-gray-700">My portfolio</h4>
      <h3 className="text-center text-5xl font-bold text-gray-900">My latest work</h3>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-700">
       Welcome to my web development portfolio Explore a collection of project showcasing my experties 
       in frontend development.
      </p>
      <div className='grid grid-cols-4 my-10 gap-5'>
  <div className='aspect-square bg-[url("./assets/work-1.png")] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer'>
  <div className=' bg-white w-10/12  rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 
   flex items-center justify-between duration-500  group hover:bottom-7'>
    <div>
        <h2 className='text-sm m font-semibold'>Frontend project</h2>
        <p className='text-sm text-gray-700'>Web Development</p>
  
    </div>
    <div className=' border rounded-full  border-black  w-9 aspect-square  flex items-center justify-center 
     shadow-[2px_2px_0_#000] group hover:bg-lime-300 transition '>
        <img className='w-5' src={send_icon} alt="" />
    </div>
  </div>
  </div>
  <div className='aspect-square bg-[url("./assets/work-2.png")] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer'>
  <div className=' bg-white w-10/12  rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 
   flex items-center justify-between duration-500  group hover:bottom-7'>
    <div>
        <h2 className='text-sm m font-semibold'>Frontend project</h2>
        <p className='text-sm text-gray-700'>Web Development</p>
  
    </div>
    <div className=' border rounded-full  border-black  w-9 aspect-square  flex items-center justify-center 
     shadow-[2px_2px_0_#000] group hover:bg-lime-300 transition '>
        <img className='w-5' src={send_icon} alt="" />
    </div>
  </div>
  </div>
  <div className='aspect-square bg-[url("./assets/work-3.png")] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer'>
  <div className=' bg-white w-10/12  rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 
   flex items-center justify-between duration-500  group hover:bottom-7'>
    <div>
        <h2 className='text-sm m font-semibold'>Frontend project</h2>
        <p className='text-sm text-gray-700'>Web Development</p>
  
    </div>
    <div className=' border rounded-full  border-black  w-9 aspect-square  flex items-center justify-center 
     shadow-[2px_2px_0_#000] group hover:bg-lime-300 transition '>
        <img className='w-5' src={send_icon} alt="" />
    </div>
  </div>
  </div>
  <div className='aspect-square bg-[url("./assets/work-4.png")] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer'>
  <div className=' bg-white w-10/12  rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 
   flex items-center justify-between duration-500  group hover:bottom-7'>
    <div>
        <h2 className='text-sm m font-semibold'>Frontend project</h2>
        <p className='text-sm text-gray-700'>Web Development</p>
  
    </div>
    <div className=' border rounded-full  border-black  w-9 aspect-square  flex items-center justify-center 
     shadow-[2px_2px_0_#000] group hover:bg-lime-300 transition '>
        <img className='w-5' src={send_icon} alt="" />
    </div>
  </div>
  </div>
</div>

      </div>
  )
}

export default Mywork