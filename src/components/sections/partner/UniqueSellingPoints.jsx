import React from 'react';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';

const UniqueSellingPoints = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12">
          <SectionName>To Our Unique Selling Points</SectionName>
          <Title size={"3.5xl"} className={"mt-4"}>
            What Sets Us Apart?
          </Title>
        </div>

        {/* Unique Selling Points Layout */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image Section */}
          <div className="lg:w-1/2 p-4">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.4Ro3FSrRQsqvcPOHdhfAmgAAAA&pid=Api&P=0&h=220"
              alt="Unique Approach"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Titles & Descriptions Section */}
          <div className="lg:w-1/2 p-4 lg:pl-24 space-y-8">
            <div className="group">
              <h3 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors duration-300 ease-in-out">
                Extensive Training
              </h3>
              <div className="w-16 h-1 bg-secondary mt-2 transition-width duration-300 ease-in-out group-hover:w-24"></div>
              <p className="mt-4 text-gray-700">
                We provide comprehensive training sessions, ensuring that franchisees and instructors are equipped with the knowledge and skills needed to deliver high-quality robotics education effectively.
              </p>
            </div>
            <div className="group">
              <h3 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors duration-300 ease-in-out">
                Diverse Course Offerings
              </h3>
              <div className="w-16 h-1 bg-secondary mt-2 transition-width duration-300 ease-in-out group-hover:w-24"></div>
              <p className="mt-4 text-gray-700">
                From beginner to advanced robotics, AI, and coding, we offer a wide range of courses tailored to different age groups and learning needs, setting students on the path to future success.
              </p>
            </div>
            <div className="group">
              <h3 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors duration-300 ease-in-out">
                Qualified Team
              </h3>
              <div className="w-16 h-1 bg-secondary mt-2 transition-width duration-300 ease-in-out group-hover:w-24"></div>
              <p className="mt-4 text-gray-700">
                Our team comprises skilled professionals with expertise in robotics, engineering, and education, ensuring top-notch teaching standards across all franchises.
              </p>
            </div>
            <div className="group">
              <h3 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors duration-300 ease-in-out">
                Strong Support
              </h3>
              <div className="w-16 h-1 bg-secondary mt-2 transition-width duration-300 ease-in-out group-hover:w-24"></div>
              <p className="mt-4 text-gray-700">
                We offer continuous support, from technical guidance to marketing assistance, helping franchises grow and maintain a strong reputation in their local communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueSellingPoints;
