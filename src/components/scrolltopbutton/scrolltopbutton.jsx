import React, { useState, useEffect } from 'react';
import './scrolltopbutton.css'
import "remixicon/fonts/remixicon.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 100); // Show button after 100px scroll
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
    >
      <i className="ri-arrow-up-s-line"></i>
    </button>
  );
};

export default ScrollToTop;