import React from 'react';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';

const UniqueSellingPoints = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className=" mb-12">
          <SectionName>To Our Unique Selling Points</SectionName>
          <Title size={"3.5xl"} className={"mt-4 text-gray-800"}>
            What Sets Us Apart?
          </Title>
        </div>

        {/* Unique Selling Points Layout */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image Section */}
          <div className="lg:w-1/2 p-4">
            <img
              src="https://via.placeholder.com/500x400"
              alt="Placeholder"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Titles Section */}
          <div className="lg:w-1/2 p-4 lg:pl-24 space-y-8">
            <div className="group">
              <h3 className="text-2xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300 ease-in-out">
                Extensive Training
              </h3>
              <div className="w-16 h-1 bg-indigo-600 mt-2 transition-width duration-300 ease-in-out group-hover:w-24"></div>
            </div>
            <div className="group">
              <h3 className="text-2xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300 ease-in-out">
                Diverse Course Offerings
              </h3>
              <div className="w-16 h-1 bg-indigo-600 mt-2 transition-width duration-300 ease-in-out group-hover:w-24"></div>
            </div>
            <div className="group">
              <h3 className="text-2xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300 ease-in-out">
                Qualified Team
              </h3>
              <div className="w-16 h-1 bg-indigo-600 mt-2 transition-width duration-300 ease-in-out group-hover:w-24"></div>
            </div>
            <div className="group">
              <h3 className="text-2xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300 ease-in-out">
                Strong Support
              </h3>
              <div className="w-16 h-1 bg-indigo-600 mt-2 transition-width duration-300 ease-in-out group-hover:w-24"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueSellingPoints;
