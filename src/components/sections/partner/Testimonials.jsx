import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';
import Enquiry_Form from './Enquiry_Form';
import testimonial from "@/assets/images/partner/testimonial.png";  // Placeholder Image
import testi1 from "@/assets/images/partner/testi1.png";
import testi2 from "@/assets/images/partner/testi2.png";
import testi3 from "@/assets/images/partner/testi3.png";

const Testimonials = () => {
  const testimonialsData = [
    { 
      name: "Mr. Suresh Babu", 
      location: "Director, Sri Puram Schools", 
      content: "We have implemented Otomatiks Robotics in our schools for the past 5 years. Their innovative approach has introduced numerous technologies across all divisions, making learning both practical and impactful for our students. Our students find the robotics program highly beneficial.", 
      image: testi3 
    },
    { 
      name: "Mr. Rajendran", 
      location: "Chairman, Spring Days Schools", 
      content: "For the last decade, I’ve been observing the field, and I saw your presentation today. It’s remarkable that Otomatiks has grown by almost 30% compared to last year. This achievement is not just numbers, it reflects the quality of your work.", 
      image: testi1 
    },
    { 
      name: "Mrs. Kriti Nivedita", 
      location: "Principal, Hindu Vidyalaya Schools", 
      content: "We have been associated with Otomatiks since 2017, and the impact has been remarkable. After introducing Otomatiks into our curriculum, I have seen our students develop innovative skills and a passion for learning. The students genuinely enjoy the process.", 
      image: testi2 
    },
    { 
      name: "Mr. Suresh Babu", 
      location: "Director, Sri Puram Schools", 
      content: "We have implemented Otomatiks Robotics in our schools for the past 5 years. Their innovative approach has introduced numerous technologies across all divisions, making learning both practical and impactful for our students. Our students find the robotics program highly beneficial.", 
      image: testi3 
    },
    { 
      name: "Mr. Rajendran", 
      location: "Chairman, Spring Days Schools", 
      content: "For the last decade, I’ve been observing the field, and I saw your presentation today. It’s remarkable that Otomatiks has grown by almost 30% compared to last year. This achievement is not just numbers, it reflects the quality of your work.", 
      image: testi1 
    },
    { 
      name: "Mrs. Kriti Nivedita", 
      location: "Principal, Hindu Vidyalaya Schools", 
      content: "We have been associated with Otomatiks since 2017, and the impact has been remarkable. After introducing Otomatiks into our curriculum, I have seen our students develop innovative skills and a passion for learning. The students genuinely enjoy the process.", 
      image: testi2 
    },
    
  ];

  return (
    <section className="pt-15 pb-15 relative bg-[#066aab]">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex lg:flex-row flex-col justify-between lg:items-center">
          <div className="lg:w-[100%] mb-6 lg:mb-0 text-center">
            <SectionName>Testimonials of Our Robotics Franchisee</SectionName>
            <Title size="3.5xl" className="mt-4 text-white">
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
                src={testimonial}
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
                    <div className="w-18 h-16 rounded-full border-2 border-gray-300 overflow-hidden mb-4">
                      <img
                        src={testimonial.image}  // Dynamically using the correct image for each testimonial
                        alt={`Testimonial ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div
                      className="text-gray-600 mb-4"
                      style={{
                        height: '18rem', // Set fixed height for consistent appearance
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
