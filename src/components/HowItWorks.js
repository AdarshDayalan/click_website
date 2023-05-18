// components/HowItWorks.js
import React from 'react';

const HowItWorks = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-50 overflow-hidden" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-700 font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Simple Steps to Better Fitness</p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">Start working out smarter with our AI powered fitness app.</p>
        </div>
        <ul className="mt-12 lg:grid lg:grid-cols-3 lg:gap-8">
          <li>
            <div className="space-y-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Step 1: Download the App</h3>
              <p className="text-lg text-gray-500">Download our app from the App Store or Google Play Store and sign up for an account.</p>
            </div>
          </li>
          <li>
            <div className="space-y-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Step 2: Customize Your Workout</h3>
              <p className="text-lg text-gray-500">Choose your fitness goals and let our app create a personalized workout plan for you.</p>
            </div>
          </li>
          <li>
            <div className="space-y-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Step 3: Start Exercising</h3>
              <p className="text-lg text-gray-500">Follow along with our AI coach, which will give you real-time feedback on your form and performance.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HowItWorks;
