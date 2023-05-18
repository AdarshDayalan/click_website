import React, { useState } from 'react';

const ContactUs = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSfxOwkkiEgpzK8WjFIQdp7ynw2KS7DU_56V5thTjEXOOJ7Kug/formResponse", {
        method: "POST",
        mode: "no-cors", // no-cors to prevent CORS errors. This also means we can't get the server response
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "entry.1444763114": formData.name,
          "entry.2035229651": formData.email,
          "entry.1055812509": formData.message
        }).toString()
      });
      setFormSubmitted(true);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-full py-20 mx-4 lg:mx-20">
      <div className="flex flex-col items-center w-full lg:w-1/2 mb-10 lg:mb-0 text-center">
         <div className="max-w-2xl mb-8 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
             Contact Us
           </h2>
           <p className="py-5 text-lg leading-normal text-gray-500 lg:text-lg xl:text-xl">
           Click is a small startup aiming to elevate your fitness journey. Your feedback powers our innovation. Let's revolutionize fitness together.
           </p>
      {!formSubmitted ? (
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="flex flex-wrap mb-6">
          <input
            className="w-full px-3 py-2 text-base text-gray-700 placeholder-gray-600 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"/>
        </div>
        <div className="flex flex-wrap mb-6">
          <input
            className="w-full px-3 py-2 text-base text-gray-700 placeholder-gray-600 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"/>
        </div>
        <div className="flex flex-wrap mb-6">
          <textarea
            className="w-full px-3 py-2 text-base text-gray-700 placeholder-gray-600 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"></textarea>
        </div>
                   <div className="flex flex-wrap items-center justify-center">
             <button type="submit" className="px-8 py-3 text-lg font-medium text-center text-white bg-blue-700 rounded-md">
               Submit
             </button>
           </div>
        </form>
      ) : (
        <div className="w-full max-w-lg text-center">
          <h2 className="text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
            Thank you for your submission!
          </h2>
          <p className="py-5 text-lg leading-normal text-gray-500 lg:text-lg xl:text-xl">
            We appreciate your feedback and will get back to you as soon as possible.
          </p>
        </div>
      )}
     </div>
     </div>
    </div>
  );
};

export default ContactUs;
