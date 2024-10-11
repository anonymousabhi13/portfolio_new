import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Function to handle the scroll and update the progress bar
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / pageHeight) * 100;
    setScrollProgress(scrollPercentage);
  };

  // Scroll to the bottom with animation
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Progress bar that shows scrolling progress */}
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: `${scrollProgress}%`, 
        height: '4px', 
        backgroundColor: '#000', 
        zIndex: 50 
      }} />

      <header className="w-full flex justify-between items-center py-4 px-6 bg-white shadow-md top-0 left-0 z-10">
        <div className="text-xl font-bold">Freelancer.</div>
        <button
          className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-900"
          onClick={scrollToBottom}
        >
          Hire me
        </button>
      </header>
    </div>
  );
};

export default Header;
