import React, { useRef } from 'react';
import Hero from "./Hero"
import Features from "./Features"
import Demo from "./Demo"
import Footer from "./Footer"
import ContactUs from "./ContactUs"

const PageBreak = () => {
  return <hr className="border-t-2 border-blue-700" />;
};

function Home() {
    const contactUsRef = useRef(null);
  
    const scrollToContactUs = (event) => {
      event.preventDefault();
      contactUsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  
    return (
      <div>
        <nav className="flex items-center justify-between p-3 bg-white shadow-lg bg-blue-700">
          <div className="flex items-center justify-start">
            <h1 className="text-3xl font-bold text-gray-700">Click</h1>
          </div>
          <div className="flex items-center justify-end space-x-4">
            <a 
              href="#contact-us" 
              onClick={scrollToContactUs}
              className="text-gray-700 hover:text-blue-700 transition-colors mr-6 border-b-2 border-transparent hover:border-blue-700"
            >
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
        <Hero />
        <PageBreak />
        <Features />
        <PageBreak />
        <Demo />
        <PageBreak />
        <div ref={contactUsRef}>
          <ContactUs />
        </div>
        <Footer />
      </div>
    );
  }

export default Home;
