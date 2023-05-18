// components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = React.useRef();
  navRef.current = navBackground;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    }
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed w-full z-30 top-0 text-white transition-all duration-500 ease-in-out ${navBackground ? "bg-blue-700" : "bg-transparent"}`}>
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <Link className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" to="/">
            Logo
          </Link>
        </div>
        <div className="block lg:hidden pr-4">
          <button onClick={handleToggle} className="flex items-center p-1 text-blue-800 hover:text-gray-900">
            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              {/* <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /> */}
            </svg>
          </button>
        </div>
        <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"} lg:block mt-2 lg:mt-0 bg-blue-700 md:bg-transparent z-20`} id="nav-content">
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <Link className="inline-block py-2 px-4 text-white no-underline" to="/">Active</Link>
            </li>
            <li className="mr-3">
              <Link className="inline-block text-blue-300 no-underline hover:text-gray-800 hover:text-underline py-2 px-4" to="/">link</Link>
            </li>
            <li className="mr-3">
              <Link className="inline-block text-blue-300 no-underline hover:text-gray-800 hover:text-underline py-2 px-4" to="/">link</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );  
}

export default Navbar;