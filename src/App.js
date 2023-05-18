import React, { useEffect } from 'react';
import Home from './components/Home';
import JoinUs from './components/JoinUs'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { animateScroll as scroll } from 'react-scroll';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  useEffect(() => {
    AOS.init();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset === 0) {
      scroll.scrollToTop();
    }
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/join" element={<JoinUs />} />
      </Routes>
    </Router>
  );
}

export default App;
