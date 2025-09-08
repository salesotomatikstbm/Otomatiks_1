import React from 'react';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';
import SlideUp from '@/lib/animations/slideUp';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Client/Parent Testimonials Section
const ClientTestimonials = () => {
  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 items per slide
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 2, // Show 2 items per slide on tablet
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 1, // Show 1 item per slide on mobile
          slidesToScroll: 1,
          arrows: false, // Hide arrows on mobile for better UX
        },
      },
    ],
  };

  return (
    <section className="py-16 container bg-warm">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <SectionName>Client & Parent Testimonials</SectionName>
          <Title size={"3.5xl"} className={"mt-2.5 text-center text-gray-800"}>
            Hear What Our Clients & Parents Have to Say
          </Title>
        </div>
        <div className="lg:pt-15 pt-10">
          {/* Slider for Testimonials */}
          <Slider {...testimonialSettings}>
            {/* Testimonial 1 */}
            <div className="px-3">
              <TestimonialCard 
                clientName="Sarah T." 
                clientRelation="Parent" 
                testimonial="The robotics program has been an amazing experience for my child. They’ve learned so much and had a lot of fun! I’m incredibly grateful to Otomatiks for nurturing their curiosity and creativity."
              />
            </div>
            {/* Testimonial 2 */}
            <div className="px-3">
              <TestimonialCard 
                clientName="David L." 
                clientRelation="Parent" 
                testimonial="The courses at Otomatiks are engaging, informative, and very well-structured. My son has developed a love for coding and technology, and we’ve seen a huge improvement in his problem-solving skills."
              />
            </div>
            {/* Testimonial 3 */}
            <div className="px-3">
              <TestimonialCard 
                clientName="John D." 
                clientRelation="Client" 
                testimonial="As a tech professional, I wanted my daughter to experience coding in a hands-on way. Otomatiks' approach is fantastic, and it has given her the confidence to pursue technology at an early age."
              />
            </div>
            {/* Testimonial 4 */}
            <div className="px-3">
              <TestimonialCard 
                clientName="Emily R." 
                clientRelation="Parent" 
                testimonial="I am thrilled with the progress my child has made through the robotics program. Not only has their interest in science and technology grown, but their teamwork and critical thinking skills have improved as well."
              />
            </div>
            {/* Testimonial 5 */}
            <div className="px-3">
              <TestimonialCard 
                clientName="Robert K." 
                clientRelation="Parent" 
                testimonial="The hands-on approach and personalized attention that my child received made a huge difference. I highly recommend Otomatiks for any parent looking to spark their child’s interest in technology."
              />
            </div>
            {/* Testimonial 6 */}
            <div className="px-3">
              <TestimonialCard 
                clientName="Linda M." 
                clientRelation="Parent" 
                testimonial="My daughter was always interested in coding, and after joining Otomatiks, she’s more confident than ever. The program has helped her grow her skills and explore technology in a way that feels fun and exciting!"
              />
            </div>
            {/* Testimonial 7 */}
            <div className="px-3">
              <TestimonialCard 
                clientName="James W." 
                clientRelation="Client" 
                testimonial="The coding and robotics curriculum is excellent, and my child loves the interactive lessons. We’ve already seen a boost in their logical thinking and creativity."
              />
            </div>
            {/* Testimonial 8 */}
            <div className="px-3">
              <TestimonialCard 
                clientName="Jessica F." 
                clientRelation="Parent" 
                testimonial="I can see a significant improvement in my child’s ability to problem-solve and think critically. Otomatiks has given them the tools to be more creative and confident in their tech skills."
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ clientName, clientRelation, testimonial }) => {
  return (
    <div className="border border-[#F2F2F2] bg-white rounded-[10px] p-7.5 flex flex-col justify-between min-h-[300px]">
      <div className="text-center flex-1">
        <p className="text-lg font-medium text-gray-800">{testimonial}</p>
        <p className="mt-4 text-sm text-gray-500">{clientName}, {clientRelation}</p>
      </div>
    </div>
  );
};

export default ClientTestimonials;
