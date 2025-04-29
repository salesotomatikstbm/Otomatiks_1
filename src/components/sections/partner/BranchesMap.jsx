import React from 'react';
import mapImage from "@/assets/images/partner/assest-map.jpg"; 
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';
import Counter from './Counter';

const BranchesMap = () => {
  return (
    <div className="py-16 bg-[#066aab]">
      <div className="container mx-auto px-4">
      <div className="mb-2 text-center">
          <SectionName>Our Branches</SectionName>
          <Title size={"3.5xl"} className={"mt-4 text-white"}>
          Discover Our Network of Branches
          </Title>
        </div>
        <Counter />
        <img src={mapImage} className="w-full h-auto" alt="Map showing our branches" />
      </div>
    </div>
  );
};

export default BranchesMap;
