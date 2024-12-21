import React from 'react';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';
import Enquiry_Form from './Enquiry_Form';
import who1 from "@/assets/images/partner/who1.png";
import who2 from "@/assets/images/partner/who2.png";
import who3 from "@/assets/images/partner/who3.png";

const FranchiseApplicants = () => {
  return (
    <div className="py-16 bg-[#066aab] text-white">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <SectionName >Who Can Apply for the Robotics Franchise?</SectionName>
          <Title size={"3.5xl"} className="mt-4">Who Can Apply?</Title>
        </div>

        {/* Content Layout - Flexbox with updated design */}
        <div className="flex flex-wrap justify-center gap-12">
          {/* Applicant 1 */}
          <div className="bg-white p-8 rounded-xl shadow-xl max-w-xs w-full hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-6">
              <img
                src={who1}
                alt="Passionate Individual"
                className="w-24 h-24 object-cover rounded-full border-4 border-[#066aab]"
              />
            </div>
            <h3 className="text-xl text-secondary mb-2 text-center">Passionate Individual / Entrepreneur</h3>
            <p className="text-center">
              Individuals driven by passion and entrepreneurship who are eager to make a mark in the robotics education field.
            </p>
          </div>

          {/* Applicant 2 */}
          <div className="bg-white p-8 rounded-xl shadow-xl max-w-xs w-full hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-6">
              <img
                src={who2}
                alt="Tutors / Coaching Centers"
                className="w-24 h-24 object-cover rounded-full border-4 border-[#066aab]"
              />
            </div>
            <h3 className="text-xl text-secondary mb-2 text-center">Tutors / Coaching Centers</h3>
            <p className="text-center">
              Tutors or coaching centers looking to expand their offerings with robotics education programs.
            </p>
          </div>

          {/* Applicant 3 */}
          <div className="bg-white p-8 rounded-xl shadow-xl max-w-xs w-full hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-6">
              <img
                src={who3}
                alt="Educational Centers"
                className="w-24 h-24 object-cover rounded-full border-4 border-[#066aab]"
              />
            </div>
            <h3 className="text-xl text-secondary mb-2 text-center">Educational Centers with an Existing Student Base</h3>
            <p className="text-center">
              Educational institutions with a current student base looking to introduce robotics programs as an additional offering.
            </p>
          </div>
        </div>

        {/* Enquiry Form Section */}
        <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl text-secondary mb-2 text-center mb-2">Apply Now for Robotics Franchise</h3>
          <Enquiry_Form />
        </div>
      </div>
    </div>
  );
};

export default FranchiseApplicants;
