import React from 'react';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';
import PopupPartner from './PopupPartner';
const FranchiseApplicants = () => {
  return (
    <div className="py-16  text-white">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <SectionName>Who Can Apply for the Robotics Franchise?</SectionName>
          <Title size={"3.5xl"} className="mt-4">Open Doors to Innovation</Title>
        </div>

        {/* Staggered Layout */}
        <div className="space-y-12">
          {/* Applicant 1 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="bg-white text-black p-6 rounded-lg shadow-md md:w-1/2 hover:shadow-xl transition-transform hover:scale-105 duration-300">
              <h3 className="text-xl font-semibold mb-4">
                Passionate Individual / Entrepreneur
              </h3>
              <p>
                Individuals driven by passion and entrepreneurship who are eager to make a mark in the robotics education field.
              </p>
            </div>
            <div className="bg-[#fff] text-secondary p-6 rounded-lg shadow-md md:w-1/2 hover:shadow-xl transition-transform hover:scale-105 duration-300">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <ul className="list-disc ml-5">
                <li>Opportunities in emerging markets</li>
                <li>Flexible working hours</li>
                <li>Start small and scale</li>
              </ul>
            </div>
          </div>

          {/* Applicant 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="bg-white text-black p-6 rounded-lg shadow-md md:w-1/2 hover:shadow-xl transition-transform hover:scale-105 duration-300">
              <h3 className="text-xl font-semibold mb-4">
                Tutors / Coaching Centers
              </h3>
              <p>
                Tutors or coaching centers looking to expand their offerings with robotics education programs.
              </p>
            </div>
            <div className="bg-[#fff] text-secondary p-6 rounded-lg shadow-md md:w-1/2 hover:shadow-xl transition-transform hover:scale-105 duration-300">
              <h3 className="text-xl font-semibold mb-4">Why It's Perfect</h3>
              <ul className="list-disc ml-5">
                <li>Enhance your coaching portfolio</li>
                <li>Access to exclusive robotics content</li>
                <li>Supportive community and training</li>
              </ul>
            </div>
          </div>

          {/* Applicant 3 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="bg-white text-black p-6 rounded-lg shadow-md md:w-1/2 hover:shadow-xl transition-transform hover:scale-105 duration-300">
              <h3 className="text-xl font-semibold mb-4">
                Educational Centers with an Existing Student Base
              </h3>
              <p>
                Educational institutions with a current student base looking to introduce robotics programs as an additional offering.
              </p>
            </div>
            <div className="bg-[#fff] text-secondary p-6 rounded-lg shadow-md md:w-1/2 hover:shadow-xl transition-transform hover:scale-105 duration-300">
              <h3 className="text-xl font-semibold mb-4">Benefits for Students</h3>
              <ul className="list-disc ml-5">
                <li>Hands-on learning experience</li>
                <li>Competitive edge in technology</li>
                <li>Exposure to STEM fields</li>
              </ul>
            </div>
          </div>
        </div>


      </div>
      <div className="lg:mt-10 mt-4">
        <PopupPartner />    </div>
    </div>
  );
};

export default FranchiseApplicants;
