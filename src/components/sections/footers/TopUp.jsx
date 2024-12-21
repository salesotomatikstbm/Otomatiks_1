import React, { useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

const TopUp = () => {
  useEffect(() => {
    // Define the scroll-up click handler
    const handleScrollUp = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    const scrollUpButton = document.getElementById('scroll-up');
    
    if (scrollUpButton) {
      // Add the click event listener
      scrollUpButton.addEventListener('click', handleScrollUp);
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      if (scrollUpButton) {
        scrollUpButton.removeEventListener('click', handleScrollUp);
      }
    };
  }, []);

  return (
    <div
      id="scroll-up"
      className="fixed bottom-20 right-6 w-12 h-12 rounded-full bg-primary text-white flex justify-center items-center border-[3px] border-white shadow-lg cursor-pointer hover:bg-secondary transition-all"
    >
      <FaArrowUp size={20} />
    </div>
  );
};

export default TopUp;
