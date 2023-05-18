import React from 'react';

const Navbar = ({ contactRef }) => {
  return (
    <nav className="flex items-center justify-between p-3 bg-white shadow-lg bg-blue-700">
      <div className="flex items-center justify-start">
        {/* <img src="/logo.svg" alt="Logo" className="h-8 mr-4" /> */}
        <h1 className="text-3xl font-bold text-gray-700">Click</h1>
      </div>
      <div className="flex items-center justify-end space-x-4">
      <a href="#" className="text-gray-700 hover:text-blue-700 transition-colors mr-6 border-b-2 border-transparent hover:border-blue-700">
          Contact Us
        </a>
        <a
      href="https://forms.gle/R4p6fFNgcky7KSAy5"
      target="_blank"
      rel="noopener"
      className="px-4 py-2 bg-white text-blue-700 border-2 border-blue-700 transition-colors hover:bg-blue-700 hover:text-white rounded-full"
    >
      Join Now
    </a>

      </div>
    </nav>
  );
};

export default Navbar;
