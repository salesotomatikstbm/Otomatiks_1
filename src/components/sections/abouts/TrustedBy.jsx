import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';

const TrustedBy = () => {
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
      <div className="container mx-auto px-4">
        <div className="row align-items-center">
          <div className="col-xl-12">
            <div className="section-heading text-center mb-8 mt-12">
              <SectionName>Our Patrons</SectionName>
              <Title size={"3.5xl"}>Trusted School Partners</Title>
            </div>
          </div>
        </div>
        <div className="row align-items-center mb-6">
          <div className="col-xl-12">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 1000, disableOnInteraction: false }}
              slidesPerView={5} // Default for larger screens
              spaceBetween={20}
              breakpoints={{
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2, // Show 2 slides on tablets
                  spaceBetween: 20,
                },
                576: {
                  slidesPerView: 2, // Show 2 slides on mobile devices
                  spaceBetween: 10, // Reduce space between slides for smaller screens
                },
              }}
              loop={true}
              pagination={false} // Remove pagination dots
            >
              {partners.map((partner, index) => (
                <SwiperSlide key={index} className="text-center">
                  <img
                    src={partner.logo}
                    alt={`Partner ${index + 1}`}
                    className="img-fluid mx-auto"
                    style={{
                      maxHeight: '120px', // Adjust max height for visibility
                      height: 'auto',
                      width: 'auto',
                      objectFit: 'contain', // Maintain aspect ratio
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
