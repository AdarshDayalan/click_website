import JoinNowButton from './JoinButton';
import React from 'react';

const Features = () => {
  return (
    <div className="flex flex-col h-full py-20">
      <div className="flex-grow flex items-center justify-center">
      <div className="max-w-7xl h-2/3 mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-700 font-semibold tracking-wide uppercase">Our Unique Features</h2>
          <p className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">A Better Way to Workout</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Leverage the power of AI to get the most out of your fitness routines.</p>
        </div>
        <ul className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up">
          <li>
            <h3 className="text-xl font-semibold text-blue-700">Real-time Feedback</h3>
            <p className="mt-2 text-base text-gray-500">Our app uses AI to provide real-time feedback on your exercise form, helping you optimize your workouts.</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-blue-700">Personalized Programs</h3>
            <p className="mt-2 text-base text-gray-500">The AI learns from your performance and creates personalized workout programs tailored to your needs.</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-blue-700">Track Your Progress</h3>
            <p className="mt-2 text-base text-gray-500">Easily track your progress and see your improvements over time.</p>
          </li>
        </ul>
      </div>
      </div>
      <div className="h-1/3 pt-20 flex items-start justify-center">
        <JoinNowButton />
      </div>
    </div>
  );
};

export default Features;

