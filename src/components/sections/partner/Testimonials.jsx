import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';
import Enquiry_Form from './Enquiry_Form';

const Testimonials = () => {
  return (
    <section className="pt-15 pb-15 relative bg-warm">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex lg:flex-row flex-col justify-between lg:items-center">
          <div className="flex-shrink-0 flex-grow-0 basis-auto lg:w-[30%]">
            <SectionName>Testimonials of Our Robotics Franchisee</SectionName>
            <Title size={"3.5xl"} className={"mt-4 text-gray-800"}>
              Hear From Our Partners
            </Title>
          </div>
          <div className="flex-shrink-0 flex-grow-0 basis-auto lg:w-[50%]">
            {/* Add a section description here if needed */}
          </div>
        </div>

        {/* Swiper Testimonials */}
        <div className="lg:flex justify-between mt-8">
          <div className="flex-shrink-0 flex-grow-0 basis-auto lg:w-[25%]">
            <div className="relative lg:mt-7.5 mt-5">
              {/* Placeholder Image */}
              <img
                src="https://via.placeholder.com/150"
                alt="Placeholder"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="flex-shrink-0 flex-grow-0 basis-auto lg:w-[70%] mt-6 lg:mt-0">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 1000,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                }
              }}
              modules={[Autoplay]}
              className="pb-8"
              wrapperClass='[&_.swiper-slide-active>.testimonial-card]:bg-background [&_.swiper-slide-active_.card-footer]:opacity-100 [&_.swiper-slide-active_.card-footer]:visible'
            >
              {/* Testimonial 1 */}
              <SwiperSlide>
                <div className="testimonial-card bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transition-all duration-300 transform">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-gray-300 overflow-hidden mb-4">
                    <img
                      src="https://tse1.mm.bing.net/th?id=OIP.GKAbRpYzDlJa139WC8xPtwHaIC&pid=Api&P=0&h=220"
                      alt="Testimonial 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-600 text-center mb-4">
                    “The support and training we received have been exceptional. It has significantly boosted our business growth and student engagement.”
                  </p>
                  <p className="font-semibold text-gray-800">John Doe</p>
                  <p className="text-gray-500">Franchisee, XYZ Robotics</p>
                </div>
              </SwiperSlide>

              {/* Testimonial 2 */}
              <SwiperSlide>
                <div className="testimonial-card bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transition-all duration-300 transform">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-gray-300 overflow-hidden mb-4">
                    <img
                      src="https://tse1.mm.bing.net/th?id=OIP.GKAbRpYzDlJa139WC8xPtwHaIC&pid=Api&P=0&h=220"
                      alt="Testimonial 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-600 text-center mb-4">
                    “Joining this franchise has been one of the best decisions. The continuous support and resources provided are top-notch.”
                  </p>
                  <p className="font-semibold text-gray-800">Jane Smith</p>
                  <p className="text-gray-500">Franchisee, ABC Robotics</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="testimonial-card bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transition-all duration-300 transform">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-gray-300 overflow-hidden mb-4">
                    <img
                      src="https://tse1.mm.bing.net/th?id=OIP.GKAbRpYzDlJa139WC8xPtwHaIC&pid=Api&P=0&h=220"
                      alt="Testimonial 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-600 text-center mb-4">
                    “Joining this franchise has been one of the best decisions. The continuous support and resources provided are top-notch.”
                  </p>
                  <p className="font-semibold text-gray-800">Jane Smith</p>
                  <p className="text-gray-500">Franchisee, ABC Robotics</p>
                </div>
              </SwiperSlide>


              <SwiperSlide>
                <div className="testimonial-card bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transition-all duration-300 transform">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-gray-300 overflow-hidden mb-4">
                    <img
                      src="https://tse1.mm.bing.net/th?id=OIP.GKAbRpYzDlJa139WC8xPtwHaIC&pid=Api&P=0&h=220"
                      alt="Testimonial 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-600 text-center mb-4">
                    “Joining this franchise has been one of the best decisions. The continuous support and resources provided are top-notch.”
                  </p>
                  <p className="font-semibold text-gray-800">Jane Smith</p>
                  <p className="text-gray-500">Franchisee, ABC Robotics</p>
                </div>
              </SwiperSlide>


              <SwiperSlide>
                <div className="testimonial-card bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transition-all duration-300 transform">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-gray-300 overflow-hidden mb-4">
                    <img
                      src="https://tse1.mm.bing.net/th?id=OIP.GKAbRpYzDlJa139WC8xPtwHaIC&pid=Api&P=0&h=220"
                      alt="Testimonial 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-600 text-center mb-4">
                    “Joining this franchise has been one of the best decisions. The continuous support and resources provided are top-notch.”
                  </p>
                  <p className="font-semibold text-gray-800">Jane Smith</p>
                  <p className="text-gray-500">Franchisee, ABC Robotics</p>
                </div>
              </SwiperSlide>


              <SwiperSlide>
                <div className="testimonial-card bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transition-all duration-300 transform">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-gray-300 overflow-hidden mb-4">
                    <img
                      src="https://tse1.mm.bing.net/th?id=OIP.GKAbRpYzDlJa139WC8xPtwHaIC&pid=Api&P=0&h=220"
                      alt="Testimonial 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-600 text-center mb-4">
                    “Joining this franchise has been one of the best decisions. The continuous support and resources provided are top-notch.”
                  </p>
                  <p className="font-semibold text-gray-800">Jane Smith</p>
                  <p className="text-gray-500">Franchisee, ABC Robotics</p>
                </div>
              </SwiperSlide>

              {/* Additional Testimonials */}
              {/* Add more SwiperSlides as needed */}
            </Swiper>
          </div>
        </div>
        <Enquiry_Form />
      </div>
    </section>
  );
};

export default Testimonials;
