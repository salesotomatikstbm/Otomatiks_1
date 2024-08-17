import React from 'react';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';

const CallToActionSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
      <div className="flex-shrink-0 flex-grow-0 basis-auto py-10">
            <SectionName>Our Value Proposition</SectionName>
            <Title size={"3.5xl"} className={"mt-4 text-gray-800"}>
            What Value Do We Bring?
            </Title>
          </div>

      
      </div>

      <div className="container mx-auto px-4 mt-12">
        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="lg:order-1">
            <img 
              src="https://otomatiks.com/wp-content/uploads/2023/05/banner-image.png" // Replace with your image URL
              alt="Lab Set-up"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div className="lg:order-2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Interested in Starting The Right Business?
            </h2>
            
            <div className="space-y-6">
              {/* Content Block */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary-foreground text-white rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                </div>
                <p className="text-lg text-gray-700">
                  Are you a person driven by Passion, Creativity & Technology?
                </p>
              </div>

              {/* Content Block */}
              <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-secondary-foreground text-white rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                </div>
                <p className="text-lg text-gray-700">
                  Do you wish to start a business where the growth opportunities are High?
                </p>
              </div>

              {/* Content Block */}
              <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-secondary-foreground text-white rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                </div>
                <p className="text-lg text-gray-700">
                  Are you looking for an experienced Partner, who knows the market and can Support you well with their Technical & Marketing skills?
                </p>
              </div>

              {/* Content Block */}
              <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-secondary-foreground text-white rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                </div>
                <p className="text-lg text-gray-700">
                  Do you already have an existing educational business and want to give it a competitive advantage?
                </p>
              </div>

              {/* Final Note */}
              <div className="text-lg text-gray-800 mt-6">
                If any of your answer is yes, you have landed to the right place!
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;
