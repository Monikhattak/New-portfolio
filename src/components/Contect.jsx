import React from 'react'

function Contect() {
  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("./assets/footer-bg-color.png")] bg-no-repeat 
    bg-[length:90%_auto] bg-center'>
      <h4 className="text-center mb-2 text-lg text-gray-700">Connect with me</h4>
      <h3 className="text-center text-5xl font-bold text-gray-900">Get in touch</h3>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-700">
        I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
      </p>
      <form action="" className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8'>
          <input
            className='p-3 outline-none border border-gray-400 rounded-md bg-white '
            type="text"
            placeholder="Your Name"
            required
          />
          <input
            className='p-3 outline-none border border-gray-400 rounded-md bg-white '
            type="email"
            placeholder="Your Email"
            required
          />
          <textarea
            className='col-span-1 sm:col-span-2 w-full p-4 outline-none border border-gray-400 bg-white rounded-md '
            rows={6}
            placeholder='Enter your message'
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className='px-8 py-3 bg-black/80 text-white  rounded-full hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contect
