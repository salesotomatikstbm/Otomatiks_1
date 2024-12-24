import React from 'react';
import SectionName from '@/components/ui/sectionName';
import Title from '@/components/ui/title';
import img1 from "@/assets/images/csr/1.png";
import img2 from "@/assets/images/csr/2.png";
import img3 from "@/assets/images/csr/3.png";
import img4 from "@/assets/images/csr/4.png";

const PartnerSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center flex flex-col items-center pb-8">
        <SectionName>Who Can Partner With Us</SectionName>
        <Title size={"3.5xl"} className={""}>Exploring Collaboration Opportunities Across Diverse Sectors</Title>
      </div>

      {/* Schools Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
        <div className="w-full lg:w-1/2 text-left mb-4 lg:mb-0">
          <h4 className="text-3xl text-secondary font-semibold mb-2">Schools</h4>
          <p className="text-gray-600">
            Empower students through innovative learning programs, and foster community engagement through our collaborative initiatives. 
            We provide schools with unique educational opportunities to drive growth.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="w-full lg:w-full p-6 border border-secondary rounded-lg shadow-lg"> {/* Apply secondary border color */}
            <img 
              src={img1} 
              alt="Schools" 
              className="w-full h-58 object-cover rounded-md mb-4"
            />
            <p className="text-gray-600">
              Partnering with schools allows us to create a positive educational environment that nurtures both students and educators.
            </p>
          </div>
        </div>
      </div>

      {/* Individuals Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
        <div className="w-full lg:w-1/2 text-left mb-4 lg:mb-0">
          <h4 className="text-3xl text-secondary font-semibold mb-2">Individuals</h4>
          <p className="text-gray-600">
            Collaborate with us for personal growth, educational opportunities, and skill development.
            We offer a variety of programs that cater to individual growth, empowering you to reach your full potential.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="w-full lg:w-full p-6 border border-secondary rounded-lg shadow-lg">
            <img 
              src={img2}
              alt="Individuals" 
              className="w-full h-58 object-cover rounded-md mb-4"
            />
            <p className="text-gray-600">
              A dedicated space for individuals to explore collaborative opportunities for personal and professional growth.
            </p>
          </div>
        </div>
      </div>

      {/* Not For Profits Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
        <div className="w-full lg:w-1/2 text-left mb-4 lg:mb-0">
          <h4 className="text-3xl text-secondary font-semibold mb-2">Not For Profits</h4>
          <p className="text-gray-600">
            Join hands with us to create social change and support causes that matter. We believe in the power of collaboration to
            make a lasting impact. Our partnership helps foster a better future through collective efforts and shared resources.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="w-full lg:w-full p-6 border border-secondary rounded-lg shadow-lg">
            <img 
              src={img3}
              alt="Not For Profits" 
              className="w-full h-58 object-cover rounded-md mb-4"
            />
            <p className="text-gray-600">
              Collaborate with not-for-profits to support communities, drive social change, and create meaningful programs.
            </p>
          </div>
        </div>
      </div>

      {/* Corporates Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
        <div className="w-full lg:w-1/2 text-left mb-4 lg:mb-0">
          <h4 className="text-3xl text-secondary font-semibold mb-2">Corporates</h4>
          <p className="text-gray-600">
            Collaborate with us to drive innovation, promote corporate social responsibility, and create sustainable solutions for the future. 
            Your corporate involvement helps us build a better world for everyone.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="w-full lg:w-full p-6 border border-secondary rounded-lg shadow-lg">
            <img 
              src={img4}
              alt="Corporates" 
              className="w-full h-58 object-cover rounded-md mb-4"
            />
            <p className="text-gray-600">
              Join us in promoting innovation, collaboration, and sustainability. Corporate partnerships foster growth and mutual success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
