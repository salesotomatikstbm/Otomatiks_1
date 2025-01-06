import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import SectionName from '../../../../src/components/ui/sectionName';
import Title from '../../../../src/components/ui/title';
import testi1 from "@/assets/images/partner/testi1.png";
import testi2 from "@/assets/images/partner/testi2.png";
import testi3 from "@/assets/images/partner/testi3.png";
import TestiHome from '../TestiHome';
// Sample data for testimonials
const videos = [
  {
      src: "https://www.youtube.com/embed/6-EccKrkbRw?si=vuurX5a2pI0l403O",
  },
  {
      src: "https://www.youtube.com/embed/GzZeMbQuU7I?si=gGJOna9Xb9nofHmh",
  },
  {
    src: "https://www.youtube.com/embed/_-cB389xycQ?si=4IPxXR9yMYLSbUy6",
},
{
    src: "https://www.youtube.com/embed/pm5by5b-Zpk?si=3fuRqlQ6Wu_mKijV",
}
];
const testimonials = [
  {
    name: "Mr. Suresh Babu",
    rating: 5,
    review: "We have implemented Otomatiks Robotics in our schools for the past 5 years. Their innovative approach has introduced numerous technologies across all divisions, making learning both practical and impactful for our students. Our students find the robotics program highly beneficial.",
    location: "Director, Sri Puram Schools",
    profilePicture: testi3
  },
  {
    name: "Mr. Rajendran",
    rating: 5,
    review: "For the last decade, I’ve been observing the field, and I saw your presentation today. It’s remarkable that Otomatiks has grown by almost 30% compared to last year. This achievement is not just numbers, it reflects the quality of your work.",
    location: "Chairman, Spring Days Schools",
    profilePicture: testi1
  },
  {
    name: "Mrs. Kriti Nivedita",
    rating: 5,
    review: "We have been associated with Otomatiks since 2017, and the impact has been remarkable. After introducing Otomatiks into our curriculum, I have seen our students develop innovative skills and a passion for learning. The students genuinely enjoy the process.",
    location: "Principal, Hindu Vidyalaya Schools",
    profilePicture: testi2
  },

];

const HomeTestimonial = () => {
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
    <section className="mx-auto px-4 py-16">
     <div className="text-center mb-12">
          <SectionName>What Our Clients Say</SectionName>
          <Title size="3.5xl" className="mt-4 font-bold">
          Trusted Feedback from Those Who Matter Most
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
              width="90%"
              height="90%"
              src={video.src}
              title={`YouTube video player ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-[10px] shadow-lg hover:shadow-xl transition-shadow duration-300"
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

export default HomeTestimonial;
