import React from 'react';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';
import PopupPartner from './PopupPartner';

const FranchiseApplicants = () => {
  const applicants = [
    { title: "Passionate Individual" },
    { title: "Entrepreneur" },
    { title: "Tutors" },
    { title: "Coaching Centers" },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <SectionName>Who Can Apply for the Robotics Franchise?</SectionName>
          <Title size={"3.5xl"} className="mt-4">Open Doors to Innovation</Title>
        </div>

        {/* Card Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {applicants.map((applicant, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <h3 className="text-2xl font-semibold mb-4">
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
