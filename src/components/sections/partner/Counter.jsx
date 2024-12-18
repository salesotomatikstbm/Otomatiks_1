import React from 'react';
import img_1 from "@/assets/images/partner/assest-windows.png"
import img_2 from "@/assets/images/partner/assest-graduated.png"
import img_3 from "@/assets/images/partner/assest-school.png"

const Counter = () => {
  return (
    <div className="mt-5 bg-[#066aab] flex items-center justify-center py-5" data-aos="fade-up" data-aos-duration="1000">
      <div className="container py-3 py-md-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-center justify-center">
            <img src={img_1} className="w-16 h-16 mb-2" alt="Franchise" /> {/* Reduced image size */}
            <h5 className="text-white text-2xl font-semibold mb-0" id="number1">15+</h5>
            <p className="text-lg text-white">Franchise</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={img_2} className="w-16 h-16 mb-2" alt="Currently Trained Students" /> {/* Reduced image size */}
            <h5 className="text-white text-2xl font-semibold mb-0" id="number2">17,000+</h5>
            <p className="text-lg text-white">Currently Trained Students</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={img_3} className="w-16 h-16 mb-2" alt="Schools" /> {/* Reduced image size */}
            <h5 className="text-white text-2xl font-semibold mb-0" id="number3">60+</h5>
            <p className="text-lg text-white">Schools</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
