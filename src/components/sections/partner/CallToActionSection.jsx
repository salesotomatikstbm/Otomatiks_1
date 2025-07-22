import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PopupPartner from './PopupPartner';

const CallToActionSection = () => {
  const videoData = [
    "https://www.youtube.com/embed/OO9eoDuEjWY?si=UVN4oB3orXiX5RHG",
    "https://www.youtube.com/embed/UE6w-ePzUig?si=ZX5gfCZffs1sJAO8",
    "https://www.youtube.com/embed/OBuIASzkaU4?si=udnFd3EhJTOBVR1O",
    "https://www.youtube.com/embed/JVgFBd6Y3VE?si=k2k5pAjrx4HF_7Ff"
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
              India’s Leading Robotics Training Academy
            </h2>
            <p className="text-xl md:text-2xl text-secondary font-semibold mb-4">
              The Perfect Business Opportunity
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              Come, join us to become an active partner in shaping the future!
            </p>
            <div className="flex justify-center lg:justify-start">
  <PopupPartner />
</div>
          </div>

          {/* Video Slider */}
          <div className="w-full lg:w-1/2">
            <Slider {...sliderSettings}>
              {videoData.map((videoUrl, index) => (
                <div key={index} className="video-wrapper px-2">
                  <iframe
                    width="100%"
                    height="auto"
                    src={videoUrl}
                    title={`YouTube video player ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="rounded-xl shadow-2xl lg:h-[400px] h-[250px]"
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
