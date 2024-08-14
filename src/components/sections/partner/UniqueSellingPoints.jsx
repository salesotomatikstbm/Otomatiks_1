import React from 'react';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';

const UniqueSellingPoints = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex-shrink-0 flex-grow-0 basis-auto lg:w-[30%] py-10">
            <SectionName>To Our Unique Selling Points</SectionName>
            <Title size={"3.5xl"} className={"mt-4 text-gray-800"}>
            What Sets Us Apart?
            </Title>
          </div>
        

        {/* Unique Selling Points Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Unique Selling Point 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center">
            <h3 className="text-xl font-semibold text-gray-800">Extensive Training</h3>
          </div>

          {/* Unique Selling Point 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center">
            <h3 className="text-xl font-semibold text-gray-800">Diverse Course Offerings</h3>
          </div>

          {/* Unique Selling Point 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center">
            <h3 className="text-xl font-semibold text-gray-800">Qualified Team</h3>
          </div>

          {/* Unique Selling Point 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center">
            <h3 className="text-xl font-semibold text-gray-800">Strong Support</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueSellingPoints;
