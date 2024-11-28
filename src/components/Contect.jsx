import React, { useState } from 'react';

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "120a6253-8e79-4956-8ccd-813688a847e7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div 
      id="contact" 
      className="w-full px-[12%] py-10 scroll-mt-20 bg-transparent"
    >
      <h4 className="text-center mb-2 text-lg text-gray-700 dark:text-white">Connect with me</h4>
      <h3 className="text-center text-5xl font-bold text-gray-900 dark:text-white">Get in touch</h3>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-700 dark:text-gray-300">
        I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
      </p>
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            className="p-3 outline-none border border-gray-400 dark:border-gray-600 rounded-md bg-white dark:bg-[#2a004a] dark:text-white"
            type="text"
            placeholder="Your Name"
            required
            name="name"
          />
          <input
            className="p-3 outline-none border border-gray-400 dark:border-gray-600 rounded-md bg-white dark:bg-[#2a004a] dark:text-white"
            type="email"
            placeholder="Your Email"
            required
            name="email"
          />
          <textarea
            className="col-span-1 sm:col-span-2 w-full p-4 outline-none border border-gray-400 dark:border-gray-600 bg-white dark:bg-[#2a004a] dark:text-white rounded-md"
            rows={6}
            placeholder="Enter your message"
            required
            name="message"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-8 py-3 bg-black/80 text-white rounded-full hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500  dark:bg-[#15202c] dark:text-white hover:dark:bg-[#3c638d]"
          >
            Send Message
          </button>
        </div>
        <p className="text-center mt-4 text-gray-700 dark:text-gray-300">{result}</p>
      </form>
    </div>
  );
}

export default Contact;
