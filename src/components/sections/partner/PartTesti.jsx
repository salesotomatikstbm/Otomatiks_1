import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';
import testi1 from "@/assets/images/partner/testi1.png";
import testi2 from "@/assets/images/logo2.png";
import testi3 from "@/assets/images/partner/testi3.png";
import TestiHome from '../TestiHome';
import PopupPartner from './PopupPartner';
import PopupSchool from '../schoolprogram/PopupSchool';
// Sample data for testimonials
const videos = [
  {
    src: "https://www.youtube.com/embed/Z8FZQDLmHPs?si=iQVmamioT02qSt0j",
  },
  {
    src: "https://www.youtube.com/embed/bNY606fSYYI",
  },

];
const testimonials = [
  
  {
    name: "Sai Charan N",
    rating: 5,
    review:
      "This franchise is a step ahead in the robotics education industry. From state-of-the-art courses to well-structured guidance, it has given us the tools to create a meaningful impact in our community. A truly rewarding experience.",
    location: "Branch Head, Annanagar",
    profilePicture: testi2,
  },
  {
    name: "Aiswarya S",
    rating: 5,
    review:
      "Being a part of this franchise has been a remarkable journey. The support, resources, and vision provided have helped us deliver top-notch robotics education. It's a perfect choice for those seeking to lead in this growing field.",
    location: "Branch Head, Attur",
    profilePicture: testi2,
  },
  {
    name: "Mrs. Gomathi A",
    rating: 5,
    review:
      "Joining this robotics franchise has been a game-changer for us. The advanced technology and innovative solutions have not only enhanced our offerings but also provided immense value to our students. It's a partnership that inspires growth and excellence.",
    location: "Branch Manager, Tambaram",
    profilePicture: testi2,
  },
];


const PartTesti = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <section className="mx-auto px-4 py-16 bg-[#066aab]">
     <div className="text-center mb-12">
          <SectionName>Testimonials of Our Robotics Franchisee</SectionName>
          <Title size="3.5xl" className="mt-4 font-bold text-white">
          Hear From Our Partners
          </Title>
        </div>
      <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white bg-background shadow-3xl border-2 border-transparent hover:border-green transition-all duration-500 flex flex-col justify-center p-7 rounded-tl-[50px] rounded-br-[50px] rounded-tr-[10px] rounded-bl-[10px] max-w-[410px] mx-auto group/branch shadow-md rounded-lg p-6 flex flex-col justify-between"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.profilePicture}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>

            {/* Review Slider */}
            <div className="mb-4">
              
                <p className="text-lg text-gray-700">{testimonial.review}</p>
            
            </div>

            {/* Rating */}
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 17.75l5.45 3.2-1.45-6.4 4.55-4.2-6.35-.5L12 2 9.8 9.3l-6.35.5 4.55 4.2-1.45 6.4L12 17.75z"
                  />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
      <section className="pt-10 container">
  <div className="">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {videos.map((video, index) => (
        <div
        key={index}
        className="relative flex flex-col items-center justify-center animate-fade-in"
      >
        <div className="relative bg-background shadow-3xl border-2 border-transparent hover:border-green transition-all duration-500 flex flex-col justify-center p-7 rounded-tl-[50px] rounded-br-[50px] rounded-tr-[10px] rounded-bl-[10px] max-w-[610px] mx-auto group/branch w-full flex justify-center items-center h-72 sm:h-80 md:h-[450px]">
          <iframe
            width="100%" /* Ensure full width */
            height="100%" /* Ensure full height */
            src={video.src}
            title={`YouTube video player ${index + 1}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-[10px] shadow-lg hover:shadow-xl transition-shadow duration-300 sm:w-[90%] sm:h-[90%] md:w-[85%] md:h-[85%]" /* Adjust size for larger screens */
          ></iframe>
        </div>
      </div>
      ))}
    </div>
  </div>
</section>

    </section>
  );
};

export default PartTesti;
