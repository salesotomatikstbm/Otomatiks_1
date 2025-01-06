import React from 'react';
import Slider from 'react-slick'; // Import React Slick for the slider
import testi1 from "@/assets/images/partner/testi1.png";
import testi2 from "@/assets/images/partner/testi2.png";
import testi3 from "@/assets/images/partner/testi3.png";
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';

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
];

const TestimonialCard = ({ name, location, content, image }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-white rounded-xl shadow-lg p-8 my-6 hover:shadow-xl  transform hover:scale-105 transition duration-300 ease-in-out ">
      <div className="w-full lg:w-1/3 mb-6 lg:mb-0 flex justify-center">
        <img 
          src={image} 
          alt={name} 
          className="w-60 h-60 rounded-full object-cover border-4 border-[#066aab] transform transition duration-300 ease-in-out"
        />
      </div>
      <div className="w-full lg:w-2/3 text-center lg:text-left mt-6 lg:mt-0 lg:pl-8 bg-background shadow-3xl border-2 border-transparent hover:border-green transition-all duration-500 flex flex-col justify-center p-7 rounded-tl-[50px] rounded-br-[50px] rounded-tr-[10px] rounded-bl-[10px] max-w-[510px] mx-auto group/branch">
        <h4 className="text-2xl font-semibold text-[#066aab] mb-2">{name}</h4>
        <p className="text-lg text-gray-500 mb-4">{location}</p>
        <p className="text-base text-gray-700">{content}</p>
      </div>
    </div>
  );
};

const Testi = () => {
  const settings = {
    dots: false, // Optional: add dots for navigation
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
  };

  return (
    <section className="py-16 bg-[#066aab]">
      <div className="lg:w-[100%] lg:mb-0 text-center">
        <SectionName>Testimonials of Our Robotics Franchisee</SectionName>
        <Title size="3.5xl" className="mt-4">
          Hear From Our Partners
        </Title>
      </div>
      <div className="container mx-auto text-center">
        <Slider {...settings}>
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              location={testimonial.location}
              content={testimonial.content}
              image={testimonial.image}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testi;
