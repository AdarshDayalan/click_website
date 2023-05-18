import React from 'react';
import JoinNowButton from './JoinButton';

const DemoPage = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen mx-4 lg:mx-20">
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 lg:items-start mb-10 lg:mb-0">
        <div className="max-w-2xl mb-8 text-center lg:text-start">
          <h2 className="text-base text-blue-700 font-semibold tracking-wide uppercase">Experience the Demo</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">See the App in Action</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Take a sneak peek at the beta. <br></br> More workouts coming soon...</p>
          
          <div className="flex flex-col items-center space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row mt-4">
          <JoinNowButton />
          </div>
        </div>
      </div>

      <div className="w-full mb-10 lg:w-1/2 flex justify-center items-center">
  <div className="w-full h-auto lg:w-2/3 lg:h-3/4 flex justify-center items-center">
    <iframe
      width="350"
      height="681"
      src="https://www.youtube.com/embed/AAXPbar4TRs"
      frameBorder="0"
      allowFullScreen
    ></iframe>
  </div>
</div>

    </div>
  );
};

export default DemoPage;
