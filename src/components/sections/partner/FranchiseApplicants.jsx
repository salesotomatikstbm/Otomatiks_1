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

        {/* Flowchart Layout (Responsive for Mobile and Desktop) */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {applicants.map((applicant, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center text-center group"
            >
              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-all duration-300">
                {applicant.title}
              </h3>

              {/* Arrow (SVG Path) */}
              {index < applicants.length - 1 && (
                <>
                  {/* Desktop - Horizontal Arrow */}
                  <svg
                    className="hidden lg:block absolute top-1/2 transform -translate-y-1/2 left-full ml-8 w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>

                  {/* Mobile - Vertical Arrow */}
                  <svg
                    className="lg:hidden absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 19V6m-7 7l7-7 7 7" />
                  </svg>
                </>
              )}

              {/* Underline Effect */}
              <div className="w-16 h-1 bg-primary mx-auto group-hover:w-24 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:mt-10 mt-4">
        <PopupPartner />
      </div>
    </div>
  );
};

export default FranchiseApplicants;
