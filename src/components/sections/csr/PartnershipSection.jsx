import React from 'react';
import SectionName from '@/components/ui/sectionName';
import Title from '@/components/ui/title';
import img1 from "@/assets/images/csr/1.png";
import img2 from "@/assets/images/csr/2.png";
import img3 from "@/assets/images/csr/3.png";
import img4 from "@/assets/images/csr/4.png";

const partners = [
  {
    title: "Corporates",
    description:
      "Collaborate with us to drive innovation, promote corporate social responsibility, and create sustainable solutions for the future. Your corporate involvement helps us build a better world for everyone.",
    img: img4,
    imgAlt: "Corporates",
    imgCaption:
      "Join us in promoting innovation, collaboration, and sustainability. Corporate partnerships foster growth and mutual success.",
  },
  {
    title: "Individuals",
    description:
      "Collaborate with us for personal growth, educational opportunities, and skill development. We offer a variety of programs that cater to individual growth, empowering you to reach your full potential.",
    img: img2,
    imgAlt: "Individuals",
    imgCaption:
      "A dedicated space for individuals to explore collaborative opportunities for personal and professional growth.",
  },
  {
    title: "Not For Profits",
    description:
      "Join hands with us to create social change and support causes that matter. We believe in the power of collaboration to make a lasting impact. Our partnership helps foster a better future through collective efforts and shared resources.",
    img: img3,
    imgAlt: "Not For Profits",
    imgCaption:
      "Collaborate with not-for-profits to support communities, drive social change, and create meaningful programs.",
  },
];

const PartnerSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center flex flex-col items-center pb-8">
        <SectionName>Who Can Partner With Us</SectionName>
        <Title size={"3.5xl"} className={""}>
          Exploring Collaboration Opportunities Across Diverse Sectors
        </Title>
      </div>

      {partners.map((partner, index) => (
        <div
          key={index}
          className={`flex flex-col lg:flex-row lg:gap-8 ${
            index % 2 === 0 ? "" : "lg:flex-row-reverse"
          } items-center justify-between mb-8`}
        >
          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-left mb-4 lg:mb-0">
            <h4 className="text-3xl text-secondary font-semibold mb-2">
              {partner.title}
            </h4>
            <p className="text-gray-600">{partner.description}</p>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-full lg:w-10/12 p-6 border border-secondary rounded-lg shadow-lg">
              <img
                src={partner.img}
                alt={partner.imgAlt}
                className="w-full h-58 object-cover rounded-md mb-4"
              />
              <p className="text-gray-600">{partner.imgCaption}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PartnerSection;
