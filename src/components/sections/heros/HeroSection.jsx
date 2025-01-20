import React, { useState, useEffect, useRef } from "react";
import "animate.css/animate.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import boy_img_1 from "@/assets/images/banner/hero1.png";
import boy_img_2 from "@/assets/images/banner/hero2.png";
import boy_img_3 from "@/assets/images/banner/hero3.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";
import ThreeLine from "@/assets/icons/threeLine";
import bgImage from "@/assets/images/banner/hero.png";

const HeroSection = () => {
  const images = [boy_img_1, boy_img_2, boy_img_3];
  const sliderRef = useRef(null); // Creating a reference for the slider

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

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    // Reinitialize the slider when the component mounts
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0); // Ensure the slider starts from the first slide
    }

    const heroSection = document.querySelector(".hero-section");
    if (heroSection) {
      heroSection.addEventListener("mousemove", handleMouseMove);
      heroSection.addEventListener("mouseenter", () => setIsHovered(true));
      heroSection.addEventListener("mouseleave", () => setIsHovered(false));
      return () => {
        heroSection.removeEventListener("mousemove", handleMouseMove);
        heroSection.removeEventListener("mouseenter", () => setIsHovered(true));
        heroSection.removeEventListener("mouseleave", () => setIsHovered(false));
      };
    }
  }, []);

  return (
    <div
      className="hero-section h-screen bg-cover bg-center flex items-center justify-center relative overflow-x-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Custom Cursor */}
      <div
        className={`fixed pointer-events-none z-50 transition-transform duration-150 ${
          isHovered ? "scale-150" : "scale-100"
        }`}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      >
        <div className="w-5 h-5 bg-white bg-opacity-80 border-2 border-[#0a6375] rounded-full mix-blend-difference transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left text-white space-y-4 animate__animated animate__fadeInLeft">
            <div className="flex flex-col items-center md:items-start relative z-20 animate__animated animate__fadeIn">
              <Title
                size="7.5xl" // Adjust font size for mobile
                className="font-normal max-w-[600px] animate__animated animate__bounceIn"
              >
                <span className="relative text-white">
                  Shape Your{" "}
                  <span className="absolute -left-6 top-1 text-3xl text-[#0A6375] animate__animated animate__fadeInRight">
                    <ThreeLine />
                  </span>
                </span>
                <span className="font-bold text-white">Child’s </span>
                <span className="font-bold text-white">Future</span>
              </Title>
              <p className="pt-5 text-justify max-w-[400px] text-white animate__animated animate__fadeInUp">
                Our robotics classes are designed to help you discover the
                potential of this exciting field with the guidance of our
                experienced instructors.
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
            <Slider
              {...settings}
              ref={sliderRef} // Assigning the ref to the slider
              className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-lg shadow-xl z-20"
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative animate__animated animate__fadeIn z-20"
                >
                  <img
                    src={image}
                    alt={`Slide ${index}`}
                    className="rounded-lg"
                    loading="lazy" // Lazy load images for better performance
                  />
                  <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-md text-sm animate__animated animate__zoomIn">
                    Otomatiks
                  </div>
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
