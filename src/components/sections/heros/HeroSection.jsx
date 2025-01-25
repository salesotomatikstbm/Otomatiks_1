import React from 'react'
import { Button } from '@/components/ui/button'
import boy_img_1 from "@/assets/images/banner/boy_img_1.png"
import boy_img_2 from "@/assets/images/banner/boy_img_2.png"
import painting from "@/assets/images/banner/painting.png"
import left_circle_1 from "@/assets/images/banner/left-circle-1.png"
import left_circle_2 from "@/assets/images/banner/left-circle-2.png"
import right_circle from "@/assets/images/banner/right-circle.png"
import shap from "@/assets/images/shapes/shap.png"
import { Link } from 'react-router-dom'
import ThreeLine from '@/assets/icons/threeLine'
import Title from '@/components/ui/title'
import bgImage from "@/assets/images/banner/hero.png"  // Make sure to import the background image

const HeroSection = () => {
  return (
    <section
      className="pt-[78px] lg:mb-15 mb-10 relative"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="container relative py-16">
        <div className="flex flex-col items-center text-center relative z-10">
          <Title size={"7.5xl"} className={"font-normal max-w-[776px]"}>
            <span className="relative text-[#0A6375]">Shape Your  <span className="absolute -left-6 top-1 text-3xl text-[#0A6375]"><ThreeLine /></span></span>
            <span className="font-bold text-white">Child’s </span> <span className="font-bold text-white">Future.</span>
          </Title>

          <div className="flex absolute right-[87px] top-14 animate-skw">
            {/* Shapes here */}
          </div>

          <p className="pt-5 max-w-[431px] text-white">
            Our robotics classes are designed to help you discover the potential of this exciting field with the guidance of our experienced instructors.
          </p>
          <div className="mt-6">
            <Button asChild variant={"secondary"}>
              <Link to="/robotics-coding-courses" className='bg-primary'>Our Courses</Link>
            </Button>
          </div>
        </div>

        {/* Left Side (More Opacity) */}
        <div
          className="absolute left-2.5 lg:top-0 top-10 lg:max-w-full max-w-[200px] sm:block hidden animate-up-down"
          style={{ opacity: 0.5 }} // More opacity
        >
          <img src={boy_img_1} alt="banner-img-1" />
          <span className="absolute -left-2.5 top-[9px] border-2 border-primary rounded-[125px] w-full h-full"></span>
        </div>

        {/* Right Side (Reduce Opacity) */}
        <div
          className="absolute right-0 bottom-0 pb-[71px] lg:block hidden animate-up-down"
          style={{ opacity: 0.9 }} // Reduced opacity
        >
          <img src={boy_img_2} alt="banner-img-2" />
          <span className="absolute -left-2.5 top-[9px] border-2 border-primary rounded-[125px] max-h-[369px] w-full h-full"></span>
        </div>

        {/* Mobile View Painting */}
        <div className="block lg:hidden lg:pt-[72px] pt-10">
          <img src={painting} alt="painting" />
        </div>
      </div>

      {/* Circle Shapes */}
      <div className="lg:block hidden">
        <div className="absolute left-0 top-[60px] animate-left-right-2">
          <img src={left_circle_1} alt="img" style={{ opacity: 0.8 }} />
        </div>
        <div className="absolute left-[37px] top-[186px] animate-left-right-2">
          <img src={left_circle_2} alt="img" style={{ opacity: 0.8 }} />
        </div>
        <div className="absolute right-0 bottom-[165px] animate-up-down">
          <img src={right_circle} alt="img" style={{ opacity: 0.5 }} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
