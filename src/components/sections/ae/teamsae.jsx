import React from 'react';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';
import SlideUp from '@/lib/animations/slideUp';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OtomatiksTeamSlide = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 items by default
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 2, // Show 2 items for tablet
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 1, // Show 1 item on mobile
          slidesToScroll: 1,
          arrows: false, // Hide arrows on mobile to improve UX
        },
      },
    ],
  };

  return (
    <section className="lg:pb-16 py-16 relative ">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <SectionName>Meet the Otomatiks Team</SectionName>
          <Title size={"3.5xl"} className={"mt-2.5 text-center "}>
            Innovating the Future of Education with Expertise and Passion
          </Title>
        </div>
        <div className="lg:pt-15 pt-10">
          {/* Slider for Team Members */}
          <Slider {...sliderSettings}>
            {/* Team Member 1 */}
            <div className="px-3">
              <Card 
                name="Stephan" 
                position="Lead Instructor"
                message="Hello, my name is Stephan! I have been with Otomatiks for over 2 years, bringing a wealth of experience to the team."
                src="https://via.placeholder.com/150"  // Placeholder image
              />
            </div>
            {/* Team Member 2 */}
            <div className="px-3">
              <Card 
                name="Laura" 
                position="Senior Trainer"
                message="I joined Otomatiks to inspire the next generation of tech enthusiasts. Creating engaging lessons is my passion."
                src="https://via.placeholder.com/150"  // Placeholder image
              />
            </div>
            {/* Team Member 3 */}
            <div className="px-3">
              <Card 
                name="James" 
                position="Technology Specialist"
                message="With a background in engineering, I help bring real-world tech applications to our teaching modules."
                src="https://via.placeholder.com/150"  // Placeholder image
              />
            </div>
            {/* Team Member 4 */}
            <div className="px-3">
              <Card 
                name="Maria" 
                position="Head of Robotics"
                message="I’ve been leading the robotics division for 3 years, fostering a love for hands-on learning in our students."
                src="https://via.placeholder.com/150"  // Placeholder image
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

const Card = ({ name, position, message, src }) => {
  return (
    <SlideUp delay={0}>
      <div className="border border-[#F2F2F2] bg-background rounded-[10px] p-7.5 group/card layer-card">
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 mb-4">
            <img src={src} alt="Team Member" className="w-full h-full object-cover rounded-md" />
          </div>
          <div className="text-center">
            <h4 className="text-xl font-semibold text-gray-800">{name}</h4>
            <p className="text-sm font-medium text-gray-500">{position}</p>
            <p className="pt-2 text-justify">{message}</p>
          </div>
        </div>
      </div>
    </SlideUp>
  );
};

export default OtomatiksTeamSlide;
