import React from 'react';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';
import call from "@/assets/images/partner/call.png";

const CallToActionSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex-shrink-0 flex-grow-0 basis-auto text-center">
          <SectionName>Our Value Proposition</SectionName>
          <Title size={"3.5xl"} className={"mt-4 "}>
            Why Choose Otomatiks?
          </Title>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="lg:order-1">
            <img 
              src={call} // Replace with your image URL
              alt="Lab Set-up"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div className="lg:order-2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Otomatiks – Empowering Young Minds in Robotics Education
            </h2>
            
            <div className="space-y-6">
              {/* Content Block */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary-foreground text-white rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                </div>
                <p className="text-lg text-gray-700">
                  Proven Success: Otomatiks brings years of robotics education expertise, delivering an engaging, high-quality curriculum trusted by schools nationwide.
                </p>
              </div>

              {/* Content Block */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary-foreground text-white rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                </div>
                <p className="text-lg text-gray-700">
                  Comprehensive Support: From technical training to marketing strategies, Otomatiks provides extensive support to ensure franchise success and growth.
                </p>
              </div>

              {/* Content Block */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary-foreground text-white rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                </div>
                <p className="text-lg text-gray-700">
                  Transformative Learning: Equip students with skills for the future with our hands-on, engaging robotics education that combines fun with STEM learning.
                </p>
              </div>

              {/* Content Block */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary-foreground text-white rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                </div>
                <p className="text-lg text-gray-700">
                  Market Leader in Robotics Education: Otomatiks stands out as a premier choice for robotics education, giving franchisees a competitive edge in a growing market.
                </p>
              </div>

              {/* Final Note */}
              <div className="text-lg text-gray-800 mt-6">
                Join Otomatiks and be part of a mission to inspire the next generation of innovators!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default CallToActionSection;
