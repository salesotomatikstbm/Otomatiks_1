import React from 'react';
import img_1 from "@/assets/images/partner/assest-windows.png";
import img_2 from "@/assets/images/partner/assest-graduated.png";
import img_3 from "@/assets/images/partner/assest-school.png";

const Counter = () => {
  return (
    <div className="bg-[#066aab] py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Franchise */}
          <div className="flex flex-col items-center justify-center text-white text-center">
            <img src={img_1} className="w-20 h-20 mb-4" alt="Franchise" /> {/* Adjusted size */}
            <h5 className="text-3xl font-semibold mb-1" id="number1">16</h5>
            <p className="text-2xl text-white ">Franchise</p>
          </div>

          {/* Currently Trained Students */}
          <div className="flex flex-col items-center justify-center text-white text-center">
            <img src={img_2} className="w-20 h-20 mb-4" alt="Currently Trained Students" /> {/* Adjusted size */}
            <h5 className="text-3xl font-semibold mb-1" id="number2">17,000+</h5>
            <p className="text-2xl text-white">Currently Trained Students</p>
          </div>

          {/* Schools */}
          <div className="flex flex-col items-center justify-center text-white text-center">
            <img src={img_3} className="w-20 h-20 mb-4" alt="Schools" /> {/* Adjusted size */}
            <h5 className="text-3xl font-semibold mb-1" id="number3">60+</h5>
            <p className="text-2xl text-white">Schools</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
