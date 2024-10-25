// components/RoboticaIframe.js
import React from 'react';

const RoboticaIframe = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <iframe
        src="https://www.robotica.org.in/"
        title="Robotica 2025"
        className="w-full h-full lg:w-[100%] lg:h-[100%] rounded-lg shadow-lg  border-gray-300 mt-0"
        allowFullScreen
      />
    </div>
  );
};

export default RoboticaIframe;
