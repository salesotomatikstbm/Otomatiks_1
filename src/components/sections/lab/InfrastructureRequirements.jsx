import React from 'react';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';

const InfrastructureRequirements = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <SectionName>Infrastructure Requirements for Lab Set-up</SectionName>
          <Title size={"3.5xl"} className={"mt-4 text-gray-800"}>
            Essential Infrastructure for an Effective Lab Environment
          </Title>
        </div>

        {/* Content Layout */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Requirement 1 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500 hover:shadow-xl transition-shadow duration-300 w-full max-w-xs">
            <img 
              src="https://mechatronrobotics.com/assets/robotics-lab/spacerequired.svg" 
              alt="Space" 
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Space</h3>
            <p className="text-gray-600 text-center">
              A minimum of 500 sq. ft. area is required for setting up the lab. This space should be dedicated to the lab and free from other uses.
            </p>
          </div>

          {/* Requirement 2 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500 hover:shadow-xl transition-shadow duration-300 w-full max-w-xs">
            <img 
              src="https://mechatronrobotics.com/assets/robotics-lab/laptops&desktop.svg" 
              alt="Power Supply" 
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Power Supply</h3>
            <p className="text-gray-600 text-center">
              Stable power supply with backup is essential to ensure uninterrupted operation of the lab. Ensure adequate power points are available.
            </p>
          </div>

          {/* Requirement 3 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-500 hover:shadow-xl transition-shadow duration-300 w-full max-w-xs">
            <img 
              src="https://mechatronrobotics.com/assets/robotics-lab/internetspeed.svg" 
              alt="Internet Connectivity" 
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Internet Connectivity</h3>
            <p className="text-gray-600 text-center">
              A high-speed internet connection is required for research, software updates, and online collaboration.
            </p>
          </div>

          {/* Requirement 4 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg border-t-4 border-yellow-500 hover:shadow-xl transition-shadow duration-300 w-full max-w-xs">
            <img 
              src="https://mechatronrobotics.com/assets/robotics-lab/tvProjec.svg" 
              alt="Ventilation" 
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Ventilation</h3>
            <p className="text-gray-600 text-center">
              Proper ventilation is needed to maintain a conducive environment for students and equipment.
            </p>
          </div>

          {/* Requirement 5 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg border-t-4 border-purple-500 hover:shadow-xl transition-shadow duration-300 w-full max-w-xs">
            <img 
              src="https://mechatronrobotics.com/assets/robotics-lab/robotParts&Kits.svg" 
              alt="Furniture" 
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Furniture</h3>
            <p className="text-gray-600 text-center">
              Sturdy furniture, including workbenches, storage units, and seating arrangements, is necessary to create an efficient workspace.
            </p>
          </div>

          {/* Requirement 6 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg border-t-4 border-teal-500 hover:shadow-xl transition-shadow duration-300 w-full max-w-xs">
            <img 
              src="https://mechatronrobotics.com/assets/robotics-lab/robotParts&Kits.svg" 
              alt="Safety Equipment" 
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Safety Equipment</h3>
            <p className="text-gray-600 text-center">
              Fire extinguishers, first aid kits, and emergency exits should be readily accessible in the lab area.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfrastructureRequirements;
