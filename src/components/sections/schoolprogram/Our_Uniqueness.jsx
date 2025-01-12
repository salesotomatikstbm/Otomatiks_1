import React from 'react';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';
import Impact from "../../../assets/images/School_Curiculumn/impact.png";

const Our_Uniqueness = () => {
  return (
    <section className="py-16 bg-[#066aab]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 justify-between">
          {/* Video Section */}
          <div className="relative w-full max-w-[500px]">
          <img
  src={Impact}
  alt="Impact"
  className="w-full h-full object-cover rounded-lg"
/>

          </div>

          {/* Content Section */}
          <div className="flex flex-col space-y-12 lg:space-y-14">
            <div className="text-center">
              <SectionName className="">Our Impact & Excellence</SectionName>
              <Title size="3.5xl" className="mt-4 text-white">
                A Legacy of Growth and Success
              </Title>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white p-3 md:p-5 text-xl flex flex-col rounded-md border border-gray-300">
                <p className="text-3xl font-bold pb-2">14+</p> Years of Industry Experience
              </div>
              <div className="bg-white p-3 md:p-5 text-xl flex flex-col rounded-md border border-gray-300">
                <p className="text-3xl font-bold pb-2">1 Lakh+</p> Lives Upskilled
              </div>
              <div className="bg-white p-3 md:p-5 text-xl flex flex-col rounded-md border border-gray-300">
                <p className="text-3xl font-bold pb-2">150+</p> Mentors
              </div>
              <div className="bg-white p-3 md:p-5 text-xl flex flex-col rounded-md border border-gray-300">
                <p className="text-3xl font-bold pb-2">14+</p> Branches
              </div>
              <div className="bg-white p-3 md:p-5 text-xl flex flex-col rounded-md border border-gray-300">
                <p className="text-3xl font-bold pb-2">17,000+</p> Students Every Year
              </div>
              <div className="bg-white p-3 md:p-5 text-xl flex flex-col rounded-md border border-gray-300">
                <p className="text-3xl font-bold pb-2">85%</p> Client Retention Rate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Our_Uniqueness;
