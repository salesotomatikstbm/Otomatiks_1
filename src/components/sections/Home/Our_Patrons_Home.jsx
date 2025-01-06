import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import React from 'react';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';
import Slider from 'react-slick';
import Img1 from "../../../assets/images/patrons/1.png";
import Img2 from "../../../assets/images/patrons/2.png";
import Img3 from "../../../assets/images/patrons/3.png";
import Img4 from "../../../assets/images/patrons/4.png";
import Img5 from "../../../assets/images/patrons/5.png";
import Img6 from "../../../assets/images/patrons/6.png";
import Img7 from "../../../assets/images/patrons/7.png";
import Img8 from "../../../assets/images/patrons/8.png";
import Img9 from "../../../assets/images/patrons/9.png";
import Img10 from "../../../assets/images/patrons/10.png";
import Img11 from "../../../assets/images/patrons/11.png";
import Img12 from "../../../assets/images/patrons/12.png";
import Img13 from "../../../assets/images/patrons/13.png";
import Img14 from "../../../assets/images/patrons/14.png";
import Img15 from "../../../assets/images/patrons/15.png";
import Img16 from "../../../assets/images/patrons/16.png";
import Img17 from "../../../assets/images/patrons/17.png";
import Img18 from "../../../assets/images/patrons/18.png";
import Img19 from "../../../assets/images/patrons/19.png";
import Img20 from "../../../assets/images/patrons/20.png";
import Img21 from "../../../assets/images/patrons/21.png";
import Img22 from "../../../assets/images/patrons/22.png";
import Img23 from "../../../assets/images/patrons/23.png";
import Img24 from "../../../assets/images/patrons/24.png";
import Img25 from "../../../assets/images/patrons/25.png";
import Img26 from "../../../assets/images/patrons/26.png";
import Img27 from "../../../assets/images/patrons/27.png";
import Img28 from "../../../assets/images/patrons/28.png";
import Img29 from "../../../assets/images/patrons/29.png";
import Img30 from "../../../assets/images/patrons/30.png";
import Img31 from "../../../assets/images/patrons/31.png";
import Img32 from "../../../assets/images/patrons/32.png";
import Img33 from "../../../assets/images/patrons/33.png";
import Img34 from "../../../assets/images/patrons/34.png";
import Img35 from "../../../assets/images/patrons/35.png";
import Img36 from "../../../assets/images/patrons/36.png";
import Img37 from "../../../assets/images/patrons/37.png";
import PopupSchool from '../schoolprogram/PopupSchool';

const images = [
  Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12, Img13,
  Img14, Img15, Img16, Img17, Img18, Img19, Img20, Img21, Img22, Img23, Img24, Img25,
  Img26, Img27, Img28, Img29, Img30, Img31, Img32, Img33, Img34, Img35, Img36, Img37
];

const Our_Patrons_Home = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Show 3 items by default
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
    <section className="py-16 bg-[#066aab]">
      <div className="text-center mb-12">
        <SectionName>Our Academic Partner</SectionName>
        <Title size="3.5xl" className="mt-4 font-bold">
          Celebrating Our Trusted Collaborators and Supporters
        </Title>
      </div>
      <div className="container mx-auto px-4 lg:px-8 overflow-hidden">
        {/* Slider Component */}
        <Slider {...sliderSettings} className="patron-slider">
          {images.map((src, index) => (
            <div key={index} className="p-4">
              <div className="border border-gray-300 bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  alt={`Patron ${index + 1}`}
                  src={src}
                  className="w-full h-32 object-contain rounded-md" // Use object-contain for better fit
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="lg:pt-15 pt-10">
        <PopupSchool />
      </div>
    </section>
  );
};

export default Our_Patrons_Home;
