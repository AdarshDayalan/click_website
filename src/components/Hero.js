import React from 'react';
import JoinNowButton from './JoinButton';

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen m-4 lg:mx-20">
       <div className="flex flex-col items-center lg:items-start justify-center w-full lg:w-1/2 mb-10 lg:mb-0">
          <div className="max-w-2xl mb-8 text-center lg:text-start">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
            Experience the future of fitness
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
            Revolutionize your fitness journey with real-time form analysis, personalized workouts, and expert AI guidance. Join our waitlist for exclusive early access.
            </p>

            <div className="flex flex-col items-center space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
             <JoinNowButton />
            </div>
          </div>
        </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <img src='img/Pushup.png' alt="App Image" className="max-w-xs max-h-85 rounded-xl shadow-xl"/>
      </div>
    </div>
  );
}

export default Hero;
