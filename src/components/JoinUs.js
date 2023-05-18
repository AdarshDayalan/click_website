import React, { useState } from 'react';
import Navbar from './Navbar';

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    experience: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form handling logic here
    setFormSubmitted(true);
  }

  return (
    <div>
    <Navbar />
    
    <div className="flex flex-col justify-center items-center h-full py-20 mx-4 lg:mx-20">
      <div className="flex flex-col items-center w-full lg:w-2/3 mb-10 lg:mb-0 text-center">
        <div className="max-w-3xl mb-8 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
            Join Us
          </h2>
          <p className="py-5 text-lg leading-normal text-gray-500 lg:text-lg xl:text-xl">
            We're excited to have you on board! By filling out the form below, you'll be the first to know when the app is released and can sign up to be a beta-tester.
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
                <input
                  className="w-full px-3 py-2 text-base text-gray-700 placeholder-gray-600 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Age"/>
              </div>
              <div className="flex flex-wrap mb-6">
                <textarea
                  className="w-full px-3 py-2 text-base text-gray-700 placeholder-gray-600 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="Fitness Experience"></textarea>
              </div>
              <div className="flex flex-wrap items-center justify-center">
                <button type="submit" className="px-8 py-3 text-lg font-medium text-center text-white bg-indigo-600 rounded-md">
                  Submit
                </button>
              </div>
            </form>
          ) : (
            <div className="py-5 text-lg leading-normal text-gray-500 lg:text-lg xl:text-xl">
              Thank you for submitting! We'll be in touch soon.
            </div>
          )}
        </div>
    </div>
    </div>
    </div>
    );
}

export default JoinUs;