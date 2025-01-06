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
      "Collaborate with us to drive innovation, promote corporate social responsibility, and create sustainable solutions for the future.",
    img: img4,
    imgAlt: "Corporates",
    imgCaption: "Corporate partnerships foster growth and mutual success.",
  },
  {
    title: "Individuals",
    description:
      "Collaborate with us for personal growth, educational opportunities, and skill development.",
    img: img2,
    imgAlt: "Individuals",
    imgCaption:
      "A dedicated space for individuals to explore personal and professional growth.",
  },
  {
    title: "Not For Profits",
    description:
      "Join hands with us to create social change and support causes that matter. Collaboration makes a lasting impact.",
    img: img3,
    imgAlt: "Not For Profits",
    imgCaption: "Support communities and create meaningful programs.",
  },
];

const PartnerSection = () => {
  return (
    <div className="mx-auto px-4 py-16 bg-[#066aab]">
      {/* Section Header */}
      <div className="text-center container mb-12">
        <SectionName>Who Can Partner With Us</SectionName>
        <Title size="3.5xl" className="mt-4">
          Collaborate Across Sectors for a Better Future
        </Title>
      </div>

      {/* Partner Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
          >
            {/* Image */}
            <img
              src={partner.img}
              alt={partner.imgAlt}
              className="w-full h-48 object-cover"
            />
            {/* Text Content */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-primary mb-2">
                {partner.title}
              </h3>
              <p className="text-gray-600 mb-4">{partner.description}</p>
              <p className="text-sm text-gray-500 italic">
                {partner.imgCaption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerSection;
