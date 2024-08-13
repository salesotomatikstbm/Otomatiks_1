import SectionName from '@/components/ui/sectionName';
import Title from '@/components/ui/title';
import { branchesData } from '@/lib/fackdata/branchesData'; // Example data for branches
import React from 'react';
import BranchCard from './BranchCard';

const BranchesInfo = () => {
  return (
    <section className="lg:pt-15 lg:pb-15 pt-10 pb-10">
      <div className="container">
        <div className="text-center flex flex-col items-center">
          <SectionName>Our Branches</SectionName>
          <Title size={"3.5xl"} className={"lg:max-w-[520px]"}>
            Lorem Explore our branches across the World
          </Title>
        </div>
        <div className="lg:pt-15 pt-10">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7.5">
            {branchesData.map(({ id, name, location, contact, email }) => (
              <BranchCard key={id} name={name} location={location} contact={contact} email={email} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BranchesInfo;
