import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faHeartbeat, faTree, faUsers } from '@fortawesome/free-solid-svg-icons'; // FontAwesome icons

import SectionName from '@/components/ui/sectionName';
import Title from '@/components/ui/title';

// Array for content
const offerings = [
  {
    icon: faBook,
    title: "Robotics Training",
    description: "We provide innovative educational programs that empower underprivileged communities and foster growth in the next generation.",
  },
  {
    icon: faHeartbeat,
    title: "Software Training",
    description: "Our healthcare initiatives aim to provide access to quality medical care and support to communities in need.",
  },
  {
    icon: faTree,
    title: "Robotics & AI Lab",
    description: "We focus on sustainability through environmental projects that help protect our planet for future generations.",
  },
  {
    icon: faUsers,
    title: "Workshop",
    description: "Our community development initiatives aim to uplift marginalized groups and provide them with tools for self-sufficiency.",
  },
];

const WhatWeOffer = () => {
  return (
    <div className="mx-auto px-6 py-16 bg-[#066aab]">
      {/* Title Section */}
      <div className="text-center mb-16">
        <SectionName>What We Offer</SectionName>
        <Title size={"3.5xl"} className={""}>Our Commitment to Social Responsibility and Impact</Title>
      </div>

      {/* Offerings Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 container">
        {offerings.map((offering, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center bg-white p-6 border border-gray-300 rounded-lg shadow-lg mb-6"
          >
            <div className="absolute inset-0 transform lg:rotate-45 md:rotate-0 bg-secondary opacity-10 rounded-lg"></div>
            <FontAwesomeIcon
              icon={offering.icon}
              className="w-16 h-16 text-secondary mb-6 z-10"
            />
            <h4 className="text-2xl text-center font-semibold mb-4 z-10">
              {offering.title}
            </h4>
            <p className="text-gray-600 text-center z-10">{offering.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeOffer;
