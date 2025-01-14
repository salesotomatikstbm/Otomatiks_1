import React from 'react';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';
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
import Img38 from "../../../assets/images/patrons/38.png";
const images = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
  Img11,
  Img12,
  Img13,
  Img14,
  Img15,
  Img16,
  Img17,
  Img18,
  Img19,
  Img20,
  Img21,
  Img22,
  Img23,
  Img24,
  Img25,
  Img26,
  Img27,
  Img28,
  Img29,
  Img30,
  Img31,
  Img32,
  Img33,
  Img34,
  Img35,
  Img36,
  Img37,
  Img38,
];

const Our_Patrons = () => {
  return (
    <section className="py-16 bg-[#066aab]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <SectionName className="">Our Patrons</SectionName>
          <Title size="3.5xl" className="mt-4 font-bold text-white">
          Celebrating the Visionaries Who Support Our Mission
          </Title>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-8">
          {images.map((src, index) => (
            <div
              key={index}
              className="group rounded-[8px] bg-background shadow-3xl border-2 border-transparent hover:border-green transition-all duration-500 flex flex-col justify-center"
            >
              <img
                alt={`Patron ${index + 1}`}
                src={src}
                className="w-full  h-30 object-contain transition-transform duration-300 ease-in-out transform group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Our_Patrons;
