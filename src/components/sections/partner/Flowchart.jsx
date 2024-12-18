import React from 'react';

const Flowchart = () => {
  return (
    <div className="py-10 container">
      <div className="flex items-center justify-center">
        <div className="relative w-full max-w-6xl">
          {/* Wrapping the entire flowchart in a flex container */}
          <div className="flex flex-wrap justify-between items-center">
            {/* Step 1 */}
            <div className="w-full sm:w-1/5 text-center bg-white p-5 rounded-lg shadow-lg mb-6 sm:mb-0" data-aos="fade-up" data-aos-delay="100">
              <p className="text-lg font-medium">Official Meeting & Screening</p>
            </div>

            {/* Arrow between steps */}
            <div className="flex items-center justify-center w-full sm:w-auto mb-6 sm:mb-0">
              <div className="w-16 h-1 bg-gray-400"></div>
              <p className="text-2xl mx-3">&#10148;</p>
            </div>

            {/* Step 2 */}
            <div className="w-full sm:w-1/5 text-center bg-white p-5 rounded-lg shadow-lg mb-6 sm:mb-0" data-aos="fade-up" data-aos-delay="200">
              <p className="text-lg font-medium">Franchisee Proposal Discussion</p>
            </div>

            {/* Arrow between steps */}
            <div className="flex items-center justify-center w-full sm:w-auto mb-6 sm:mb-0">
              <div className="w-16 h-1 bg-gray-400"></div>
              <p className="text-2xl mx-3">&#10148;</p>
            </div>

            {/* Step 3 */}
            <div className="w-full sm:w-1/5 text-center bg-white p-5 rounded-lg shadow-lg mb-6 sm:mb-0" data-aos="fade-up" data-aos-delay="300">
              <p className="text-lg font-medium">Franchisee Agreement Signing</p>
            </div>

            {/* Arrow between steps */}
            <div className="flex items-center justify-center w-full sm:w-auto mb-6 sm:mb-0">
              <div className="w-16 h-1 bg-gray-400"></div>
              <p className="text-2xl mx-3">&#10148;</p>
            </div>

            {/* Step 4 */}
            <div className="w-full sm:w-1/5 text-center bg-white p-5 rounded-lg shadow-lg mb-6 sm:mb-0" data-aos="fade-up" data-aos-delay="400">
              <p className="text-lg font-medium">Franchisee Office Setup</p>
            </div>

            {/* Arrow between steps */}
            <div className="flex items-center justify-center w-full sm:w-auto mb-6 sm:mb-0">
              <div className="w-16 h-1 bg-gray-400"></div>
              <p className="text-2xl mx-3">&#10148;</p>
            </div>

            {/* Step 5 */}
            <div className="w-full sm:w-1/5 text-center bg-white p-5 rounded-lg shadow-lg mb-6 sm:mb-0" data-aos="fade-up" data-aos-delay="500">
              <p className="text-lg font-medium">Inauguration of Franchisee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flowchart;
