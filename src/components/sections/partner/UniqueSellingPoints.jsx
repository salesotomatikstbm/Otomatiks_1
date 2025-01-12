import React from 'react';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';
import unique from "@/assets/images/projects/ailab.mp4";

const UniqueSellingPoints = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-[#045a93] to-[#066aab]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <SectionName>To Our Unique Selling Points</SectionName>
          <Title size={"3.5xl"} className={"mt-4 text-white"}>
            The Key Features That Make Our Program Stand Out
          </Title>
        </div>

        {/* Unique Selling Points Layout */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image Section */}
          <div className="lg:w-1/2 p-4">
             <div className="order-2 lg:order-1 hidden lg:block">
                        <video
                          src={unique}
                          autoPlay
                          muted
                          loop
                          className="mx-auto block w-full rounded-lg shadow-lg"
                        ></video>
                      </div>
          </div>

          {/* Titles & Descriptions Section */}
          <div className="lg:w-1/2 p-4 lg:pl-24 space-y-8">
            <div className="group">
              <h3 className="text-2xl font-bold text-secondary group-hover:text-primary transition-colors duration-300 ease-in-out">
                Extensive Training
              </h3>
              <div className="w-16 h-1 bg-secondary mt-2 transition-width duration-300 ease-in-out group-hover:w-24"></div>
              <p className="mt-4 text-white">
                We provide comprehensive training sessions, ensuring that franchisees and instructors are equipped with the knowledge and skills needed to deliver high-quality robotics education effectively.
              </p>
            </div>
            <div className="group">
              <h3 className="text-2xl font-bold text-secondary group-hover:text-primary transition-colors duration-300 ease-in-out">
                Diverse Course Offerings
              </h3>
              <div className="w-16 h-1 bg-secondary mt-2 transition-width duration-300 ease-in-out group-hover:w-24"></div>
              <p className="mt-4 text-white">
                From beginner to advanced robotics, AI, and coding, we offer a wide range of courses tailored to different age groups and learning needs, setting students on the path to future success.
              </p>
            </div>
            <div className="group">
              <h3 className="text-2xl font-bold text-secondary group-hover:text-primary transition-colors duration-300 ease-in-out">
                Qualified Team
              </h3>
              <div className="w-16 h-1 bg-secondary mt-2 transition-width duration-300 ease-in-out group-hover:w-24"></div>
              <p className="mt-4 text-white">
                Our team comprises skilled professionals with expertise in robotics, engineering, and education, ensuring top-notch teaching standards across all franchises.
              </p>
            </div>
            <div className="group">
              <h3 className="text-2xl font-bold text-secondary group-hover:text-primary transition-colors duration-300 ease-in-out">
                Strong Support
              </h3>
              <div className="w-16 h-1 bg-secondary mt-2 transition-width duration-300 ease-in-out group-hover:w-24"></div>
              <p className="mt-4 text-white">
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
