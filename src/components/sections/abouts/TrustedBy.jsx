import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionName from '../../ui/sectionName'
import Title from '../../ui/title'

const TrustedBy = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const partners = [
    {
      logo: 'https://otomatiks.com/wp-content/uploads/2023/08/1.png',
    },
    {
      logo: 'https://otomatiks.com/wp-content/uploads/2023/08/3.png',
    },
    {
      logo: 'https://otomatiks.com/wp-content/uploads/2023/08/17.png',
    },
    {
      logo: 'https://otomatiks.com/wp-content/uploads/2023/08/5.png',
    },
    {
      logo: 'https://otomatiks.com/wp-content/uploads/2023/08/25.png',
    },
    // Add more partners as needed
  ];

  return (
    <section className="partners section-padding-btm">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-12">
            <div className="section-heading text-center mb-8 mt-12">
            <SectionName>Our Valuable Partners</SectionName>
                                {/* <Title size={"3.5xl"}>Building Trust Through Expertise, Innovation, and Community</Title> */}
                         
            </div>
          </div>
        </div>
        <div className="row align-items-center mb-12">
          <div className="col-xl-12">
            <Slider {...settings}>
              {partners.map((partner, index) => (
                <div key={index} className="text-center">
                  <img
                    src={partner.logo}
                    alt={`Partner ${index + 1}`}
                    className="img-fluid mx-auto"
                    style={{ height: 'auto', marginTop: '0' }} // Remove margin-top space
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
