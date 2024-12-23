import React from 'react';
import Slider from 'react-slick';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';
import PopupPartner from './PopupPartner';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CallToActionSection = () => {
  const videoData = [
    "https://www.youtube.com/embed/OO9eoDuEjWY?si=UVN4oB3orXiX5RHG",
    "https://www.youtube.com/embed/UE6w-ePzUig?si=ZX5gfCZffs1sJAO8",
    "https://www.youtube.com/embed/OBuIASzkaU4?si=udnFd3EhJTOBVR1O",
    "https://www.youtube.com/embed/JVgFBd6Y3VE?si=k2k5pAjrx4HF_7Ff"
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

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
        {/* Content Layout with Flex */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* Content Section */}
          <div className="lg:w-1/2">
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
              <div className="lg:mt-5 mt-4">
                <PopupPartner />
              </div>
            </div>
          </div>

          {/* Video Slider Section */}
          <div className="lg:w-1/2">
            <Slider {...settings}>
              {videoData.map((videoUrl, index) => (
                <div key={index} className="video-wrapper">
                  <iframe
                    width="100%"
                    height="350"
                    src={videoUrl}
                    title={`YouTube video player ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="rounded-lg shadow-lg lg:h-[550px]"
                  ></iframe>
                </div>
              ))}
            </Slider>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;
