import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import jr from "@/assets/images/shapes/class-j.png";
import { extraCurricularData } from '@/lib/fackdata/Robotics_CourseData';
import RingBell from '@/assets/icons/ring-bell';
import CapDoll from '@/assets/icons/cap-doll';
import Doll from '@/assets/icons/doll';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';
import SlideUp from '@/lib/animations/slideUp';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const RoboticCourseSlide = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // You can change this value to show multiple cards at once (e.g., 2 or 3)
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // For larger screens, show 2 cards
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // For mobile devices, show 1 card at a time
        },
      },
    ],
  };

  return (
    <section className="lg:pb-16 py-16 relative bg-[#066aab]">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <SectionName>Kids Program</SectionName>
          <Title size={"3.5xl"} className={"mt-2.5 text-center"}>Robotics Courses</Title>
        </div>
        <div className="lg:pt-15 pt-10">
  {/* Slider for Cards */}
  <Slider {...sliderSettings}>
    {extraCurricularData.map(({ desc, id, src, title, icon, level }) => (
      <div key={id} className="px-3"> {/* Add horizontal padding to create gaps */}
        <Card id={id} desc={desc} title={title} src={src} icon={icon} level={level} />
      </div>
    ))}
  </Slider>
</div>
      </div>
      <div className="absolute left-0 top-0 z-[-1] 2xl:w-auto w-96 hidden xl:block">
        <img src={jr} alt="img" />
      </div>
    </section>
  );
};

export default RoboticCourseSlide;

const Card = ({ title, desc, src, icon, id, level }) => {
  const renderIcon = (icon) => {
    switch (icon) {
      case 'ring-bell':
        return <i className=" text-[#0A6375] opacity-50"><RingBell /></i>;
      case 'cap-doll':
        return <i className=" text-primary-foreground opacity-50"><CapDoll /></i>;
      case 'doll':
        return <i className=" text-green-foreground opacity-50"><Doll /></i>;
      default:
        return null;
    }
  };

  return (
    <SlideUp delay={id}>
      <div className="border border-[#F2F2F2] bg-background rounded-[10px] p-7.5 group/card layer-card">
        <div className="relative overflow-hidden">
          <img src={src} alt="Tutoring Services" className="w-full" />
          <div className="absolute left-0 top-full w-full h-full flex">
            <div className={`image-layer-hover`} style={{ backgroundImage: `url(${src})` }}></div>
            <div className={`image-layer-hover`} style={{ backgroundImage: `url(${src})` }}></div>
            <div className={`image-layer-hover`} style={{ backgroundImage: `url(${src})` }}></div>
            <div className={`image-layer-hover`} style={{ backgroundImage: `url(${src})` }}></div>
          </div>
        </div>
        <div className="pt-7.5">
          <h4>
            <Link to="/service-details" className="lg:text-2xl text-xl font-semibold lg:leading-[140%] group-hover/card:text-destructive-foreground transition-all duration-500">
              {title}
            </Link>
          </h4>
          <div className="flex pt-2">
            <button className="bg-primary-foreground text-background px-4 py-2 rounded hover:bg-destructive-foreground transition-colors duration-300">
              <span className="text-sm">Level {level}</span>
            </button>
          </div>
          <p className="pt-2">{desc}</p>
        </div>
      </div>
    </SlideUp>
  );
};
