import React from 'react';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';
import Enquiry_Form from './Enquiry_Form';

const FranchiseApplicants = () => {
  return (
    <div className="py-12 bg-[#066aab]">
      <div className="container mx-auto px-4">

      <div className="flex-shrink-0 flex-grow-0 basis-auto lg:w-[30%] py-10">
            <SectionName>Who Can Apply for the Robotics Franchise?</SectionName>
            <Title size={"3.5xl"} className={"mt-4"}>
            Who Can Apply?
            </Title>
          </div>
        

        {/* Content Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Applicant 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 w-20 h-20 rounded-full border-2 border-gray-300 overflow-hidden mr-4">
                <img 
                  src="https://mechatronrobotics.com/assets/images/Franchise/Tutors.png" // Replace with your image URL
                  alt="Passionate Individual"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Passionate Individual / Entrepreneur</h3>
                <p className="text-gray-600">
                  Individuals driven by passion and entrepreneurship who are eager to make a mark in the robotics education field.
                </p>
              </div>
            </div>
          </div>

          {/* Applicant 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 w-20 h-20 rounded-full border-2 border-gray-300 overflow-hidden mr-4">
                <img 
                  src="https://mechatronrobotics.com/assets/images/Franchise/Tutors.png" // Replace with your image URL
                  alt="Tutors / Coaching Centers"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Tutors / Coaching Centers</h3>
                <p className="text-gray-600">
                  Tutors or coaching centers looking to expand their offerings with robotics education programs.
                </p>
              </div>
            </div>
          </div>

          {/* Applicant 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 w-20 h-20 rounded-full border-2 border-gray-300 overflow-hidden mr-4">
                <img 
                  src="https://mechatronrobotics.com/assets/images/Franchise/Tutors.png" // Replace with your image URL
                  alt="Educational Centers"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Educational Centers with an Existing Student Base</h3>
                <p className="text-gray-600">
                  Educational institutions with a current student base looking to introduce robotics programs as an additional offering.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Enquiry_Form />
      </div>
    </div>
  );
};

export default FranchiseApplicants;
