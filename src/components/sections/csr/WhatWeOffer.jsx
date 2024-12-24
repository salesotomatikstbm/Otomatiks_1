import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faHeartbeat, faTree, faUsers } from '@fortawesome/free-solid-svg-icons'; // FontAwesome icons

import SectionName from '@/components/ui/sectionName';
import Title from '@/components/ui/title';

const WhatWeOffer = () => {
  return (
    <div className="mx-auto px-6 py-16 bg-[#066aab]">
      {/* Title Section */}
      <div className="text-center mb-16">
        <SectionName>What We Offer</SectionName>
        <Title size={"3.5xl"} className={""}> Our Commitment to Social Responsibility and Impact</Title>
      </div>

      {/* Offerings Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 container">

        {/* Offering 1 */}
        <div className="relative flex flex-col items-center bg-white p-6 border border-gray-300 rounded-lg shadow-lg mb-6">
          <div className="absolute inset-0 transform lg:rotate-45 md:rotate-0 bg-secondary opacity-10 rounded-lg"></div> {/* Rotated background */}
          <FontAwesomeIcon icon={faBook} className="w-16 h-16 text-secondary mb-6 z-10" />
          <h4 className="text-2xl text-center font-semibold mb-4 z-10">Education Initiatives</h4>
          <p className="text-gray-600 text-center z-10">
            We provide innovative educational programs that empower underprivileged communities and foster growth in the next generation.
          </p>
        </div>

        {/* Offering 2 */}
        <div className="relative flex flex-col items-center bg-white p-6 border border-gray-300 rounded-lg shadow-lg mb-6">
          <div className="absolute inset-0 transform lg:rotate-45 md:rotate-0 bg-secondary opacity-10 rounded-lg"></div> {/* Rotated background */}
          <FontAwesomeIcon icon={faHeartbeat} className="w-16 h-16 text-secondary mb-6 z-10" />
          <h4 className="text-2xl text-center font-semibold mb-4 z-10">Healthcare Support</h4>
          <p className="text-gray-600 text-center z-10">
            Our healthcare initiatives aim to provide access to quality medical care and support to communities in need.
          </p>
        </div>

        {/* Offering 3 */}
        <div className="relative flex flex-col items-center bg-white p-6 border border-gray-300 rounded-lg shadow-lg mb-6">
          <div className="absolute inset-0 transform lg:rotate-45 md:rotate-0 bg-secondary opacity-10 rounded-lg"></div> {/* Rotated background */}
          <FontAwesomeIcon icon={faTree} className="w-16 h-16 text-secondary mb-6 z-10" />
          <h4 className="text-2xl text-center font-semibold mb-4 z-10">Environmental Projects</h4>
          <p className="text-gray-600 text-center z-10">
            We focus on sustainability through environmental projects that help protect our planet for future generations.
          </p>
        </div>

        {/* Offering 4 */}
        <div className="relative flex flex-col items-center bg-white p-6 border border-gray-300 rounded-lg shadow-lg mb-6">
          <div className="absolute inset-0 transform lg:rotate-45 md:rotate-0 bg-secondary opacity-10 rounded-lg"></div> {/* Rotated background */}
          <FontAwesomeIcon icon={faUsers} className="w-16 h-16 text-secondary mb-6 z-10" />
          <h4 className="text-2xl text-center font-semibold mb-4 z-10">Community Development</h4>
          <p className="text-gray-600 text-center z-10">
            Our community development initiatives aim to uplift marginalized groups and provide them with tools for self-sufficiency.
          </p>
        </div>

      </div>
    </div>
  );
};

export default WhatWeOffer;
