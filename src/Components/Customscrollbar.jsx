import React, { useState, useEffect } from 'react';

const CustomScrollbar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  // Function to calculate the current scroll percentage
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollPercentage(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Custom Scrollbar with percentage markings */}
      <div className="custom-scrollbar">
        <div className="scrollbar-track">
          <div
            className="scrollbar-thumb"
            style={{ top: `${scrollPercentage}%` }} // Move the thumb based on percentage
          />
        </div>
        <div className="scroll-percentage" style={{ top: `${scrollPercentage}%` }}>
          {Math.round(scrollPercentage)}%
        </div>
      </div>

      {/* Page content here */}
      {/* <div style={{ height: '200vh', padding: '20px' }}>
        <h1>Scroll down the page</h1>
        <p>This is a demo of a custom scrollbar with percentage markings.</p>
        <p>Keep scrolling to see the percentage update!</p>
      </div> */}
    </div>
  );
};

export default CustomScrollbar;
