import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCode, faDesktop, faHeartbeat, faRobot, faTools, faTree, faUsers } from '@fortawesome/free-solid-svg-icons'; // FontAwesome icons

import SectionName from '@/components/ui/sectionName';
import Title from '@/components/ui/title';

// Array for content
const offerings = [
  {
    icon: faRobot,
    title: "Robotics Training",
    description: "We are empowering students with hands-on robotics training, helping them develop critical skills for the future.",
  },
  {
    icon: faCode,
    title: "Software Training",
    description: "Through software training, we are fostering the next generation of tech innovators by teaching students the fundamentals of programming.",
  },
 
  {
    icon: faTools,
    title: "Workshop",
    description: "Our workshops are designed to inspire creativity, collaboration, and problem-solving skills among students through practical, real-world projects.",
  },
  {
    icon: faDesktop,
    title: "Robotics & AI Lab",
    description: "We are providing students with access to a state-of-the-art Robotics & AI Lab, allowing them to explore and experiment with cutting-edge technology.",
  },
];

const WhatWeOffer = () => {
  return (
    <div className="mx-auto px-6 py-16  ">
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
            <div className="absolute inset-0 transform lg:rotate-45 md:rotate-0 bg-primary opacity-10 rounded-lg"></div>
            <FontAwesomeIcon
              icon={offering.icon}
              className="w-16 h-16 text-secondary mb-6 z-10"
            />
            <h4 className="text-2xl text-center text-primary font-semibold mb-4 z-10">
              {offering.title}
            </h4>
            <p className="text-center z-10">{offering.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeOffer;
