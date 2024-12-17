import React from "react";
import { Icon } from "@iconify/react";
import Title from '@/components/ui/title';
import SectionName from '@/components/ui/sectionName';
import SectionDescription from '@/components/ui/sectionDescription';

const Feature = () => {
  return (
    <div className="py-16 ">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Title */}
        <div className="text-center mb-12">
          <SectionName>Why Robotics for Kids</SectionName>
          <Title size="3.5xl" className="mb-4">
            Empowering Young Minds through Robotics Education
          </Title>
        </div>

        {/* Feature Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          <FeatureCard
            icon="codicon:globe"
            title="Boosts Problem Solving Skills"
            description="Robotics challenges students to think critically, identify problems, and find innovative solutions."
          />
          <FeatureCard
            icon="healthicons:i-training-class-outline"
            title="Encourages Creativity"
            description="Building and programming robots encourages kids to bring their ideas to life."
          />
          <FeatureCard
            icon="fluent:handshake-32-regular"
            title="Prepares for Future Careers"
            description="Learning robotics equips students with valuable skills for STEM careers."
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="relative bg-white rounded-xl shadow-lg p-6 max-w-sm w-full overflow-hidden group text-center">
      {/* Decorative Wave Shape */}
      <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-10 transform scale-125 -translate-y-10 group-hover:translate-y-0 transition-all duration-500 rounded-tl-full rounded-br-full"></div>

      {/* Icon */}
      <div className="relative z-10 w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white text-3xl mb-4 mx-auto">
        <Icon icon={icon} />
      </div>

      {/* Content */}
      <h4 className="relative z-10 text-lg font-semibold text-gray-800 mb-3">
        {title}
      </h4>
      <p className="relative z-10 text-gray-600">{description}</p>
    </div>
  );
};
