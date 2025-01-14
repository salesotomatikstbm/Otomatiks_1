import React from 'react';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';
import PopupPartner from './PopupPartner';

const FranchiseApplicants = () => {
  const applicants = [
    { title: "Passionate Individual" },
    { title: "Entrepreneur" },
    { title: "STEM Trainers" },
    { title: "Educational Centers" },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <SectionName>Who Can Apply</SectionName>
          <Title size={"3.5xl"} className="mt-4">Join Us in Pioneering the Next Wave of Technological Breakthroughs</Title>
        </div>

        {/* Card Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {applicants.map((applicant, index) => (
            <div
              key={index}
              className="bg-white bg-background shadow-3xl border-2 border-transparent hover:border-green transition-all duration-500 flex flex-col justify-center p-7 rounded-tl-[50px] rounded-br-[50px] rounded-tr-[10px] rounded-bl-[10px] max-w-[410px] mx-auto group/branch hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <h3 className="text-2xl font-semibold">
                {applicant.title}
              </h3>
              
            </div>
          ))}
        </div>
      </div>

      {/* Popup Partner Section */}
      <div className="lg:mt-10 mt-6">
        <PopupPartner />
      </div>
    </div>
  );
};

export default FranchiseApplicants;
