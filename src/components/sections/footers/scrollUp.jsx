import React from 'react';
import { FaArrowUp } from 'react-icons/fa6';

const ScrollUp = () => {
   
    const handleScrollUp = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
        <div 
            id="scroll-up" 
            onClick={handleScrollUp} 
            className="absolute bottom-20 xl:left-[90%] left-1/2 -translate-x-1/2 w-12.5 h-12.5 rounded-full bg-primary text-cream-foreground flex justify-center items-center border-[3px] border-white cursor-pointer"
        >
            <FaArrowUp />
        </div>
    );
};

export default ScrollUp;
