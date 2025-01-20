import React from 'react';
import 'animate.css/animate.min.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import boy_img_1 from "@/assets/images/banner/hero1.png";
import boy_img_2 from "@/assets/images/banner/hero2.png";
import boy_img_3 from "@/assets/images/banner/hero3.png";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Title from '@/components/ui/title';
import ThreeLine from '@/assets/icons/threeLine';
import bgImage from "@/assets/images/banner/hero.png";

const HeroSection = () => {
  const images = [boy_img_1, boy_img_2, boy_img_3];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div className="h-screen bg-cover bg-center flex items-center justify-center relative overflow-x-hidden animate-spin-slow"
      style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left text-white space-y-4 animate__animated animate__fadeInLeft">
            <div className="flex flex-col items-center md:items-start relative z-20 animate__animated animate__fadeIn">
              <Title size="7.5xl" className="font-normal max-w-[776px] animate__animated animate__bounceIn">
                <span className="relative text-white">
                  Shape Your{" "}
                  <span className="absolute -left-6 top-1 text-3xl text-[#0A6375] animate__animated animate__fadeInRight">
                    <ThreeLine />
                  </span>
                </span>
                <span className="font-bold text-white">Child’s </span>
                <span className="font-bold text-white">Future</span>
              </Title>
              <p className="pt-5 max-w-[431px] text-white animate__animated animate__fadeInUp">
                Our robotics classes are designed to help you discover the potential
                of this exciting field with the guidance of our experienced instructors.
              </p>
              <div className="mt-6 animate__animated animate__zoomIn">
                <Button asChild variant="secondary">
                  <Link to="/robotics-coding-courses" className="bg-primary">
                    Our Courses
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          {/* Right Image Carousel */}
          <div className="flex-1 animate__animated animate__fadeInRight flex justify-center md:justify-end">
            <Slider {...settings} className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-lg shadow-xl z-20">
              {images.map((image, index) => (
                <div key={index} className="animate__animated animate__fadeIn z-20">
                  <img src={image} alt={`Slide ${index}`} className="rounded-lg" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
