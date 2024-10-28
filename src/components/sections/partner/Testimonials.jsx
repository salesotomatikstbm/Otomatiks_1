import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';
import Enquiry_Form from './Enquiry_Form';

const Testimonials = () => {
  const testimonialsData = [
    { name: "Name 1", location: "Parrys, Chennai", content: "Joining the robotics franchise has empowered my business significantly. The support and training are exceptional, ensuring growth and student engagement. " },
    { name: "Name 2", location: "Annanagar, Chennai", content: "This franchise has provided me with the tools and network to succeed. The support and training are exceptional, ensuring growth and student engagement." },
    { name: "Name 3", location: "Tambaram", content: "A fantastic opportunity! My center has grown and students are always excited about our programs. The support and training are exceptional, ensuring growth and student engagement." },
    { name: "Name 4", location: "Salem", content: "The curriculum is well-structured, and the ongoing support has been a game-changer for my business. The support and training are exceptional, ensuring growth and student engagement." },
    { name: "Name 5", location: "Attur", content: "The franchise has given me a strong foundation in robotics education, with great resources and a supportive community. The support ensuring growth and student engagement." },
    { name: "Name 6", location: "Namakkal", content: "An amazing experience! My students love the learning experience here. The support and training are exceptional, ensuring growth and student engagement." }
  ];

  return (
    <section className="pt-15 pb-15 relative bg-[#066aab]">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex lg:flex-row flex-col justify-between lg:items-center">
          <div className="lg:w-[30%] mb-6 lg:mb-0">
            <SectionName>Testimonials of Our Robotics Franchisee</SectionName>
            <Title size="3.5xl" className="mt-4">
              Hear From Our Partners
            </Title>
          </div>
        </div>

        {/* Swiper Testimonials */}
        <div className="lg:flex justify-between mt-8">
          <div className="lg:w-[25%] hidden lg:block">
            <div className="relative mt-7.5">
              {/* Placeholder Image */}
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.JApTopaZEPFS-EMypu3zpAHaFj&pid=Api&P=0&h=220"
                alt="Placeholder"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="lg:w-[70%] mt-6 lg:mt-0">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 3000,
              }}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              modules={[Autoplay]}
              className="pb-8"
              wrapperClass="[&_.swiper-slide-active>.testimonial-card]:bg-background [&_.swiper-slide-active_.card-footer]:opacity-100 [&_.swiper-slide-active_.card-footer]:visible"
            >
              {testimonialsData.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-card bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center h-full max-w-[320px] mx-auto"> {/* Increased width for better content visibility */}
                    <div className="w-16 h-16 rounded-full border-2 border-gray-300 overflow-hidden mb-4">
                      <img
                        src="https://tse1.mm.bing.net/th?id=OIP.GKAbRpYzDlJa139WC8xPtwHaIC&pid=Api&P=0&h=220"
                        alt={`Testimonial ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div
                      className="text-gray-600 mb-4"
                      style={{
                        height: '12rem', // Set fixed height for consistent appearance
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {testimonial.content}
                    </div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.location}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <Enquiry_Form />
      </div>
    </section>
  );
};

export default Testimonials;
