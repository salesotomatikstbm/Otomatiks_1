import React from "react";
import { Icon } from '@iconify/react';
import Title from '@/components/ui/title';
import SectionName from '@/components/ui/sectionName';
import SectionDescription from '@/components/ui/sectionDescription';

const Feature = () => {
  return (
    <div className="feature-area py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center">
          <SectionName className="">Why Robotics for Kids</SectionName>
          <Title size={"3.5xl"} className={"text-gray-800 mb-8"}>
            Discover the Future with Robotics Education
          </Title>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
          <FeatureCard
            icon="codicon:globe"
            title="Learn Anywhere, Anytime"
            description="Access a world of knowledge from the comfort of your home. Our robotics courses are flexible, allowing students to learn at their own pace."
          />
          <FeatureCard
            icon="healthicons:i-training-class-outline"
            title="Expert Guidance"
            description="Our instructors are industry leaders with deep expertise in robotics. They are committed to helping students excel through personalized teaching methods."
          />
          <FeatureCard
            icon="fluent:handshake-32-regular"
            title="24/7 Support"
            description="We offer dedicated support around the clock to ensure a seamless learning experience. Our team is always ready to assist with any questions."
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="relative group transform transition-transform duration-500 hover:scale-105">
      <div className="bg-white shadow-xl rounded-xl overflow-hidden p-8 flex flex-col items-center text-center">
        <div
          className="h-20 w-20 flex items-center justify-center bg-red-400 rounded-full mb-6 text-white text-4xl
            group-hover:bg-secondary-foreground transition-all duration-300"
        >
          <Icon icon={icon} />
        </div>
        <h4 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-secondary-foreground transition-colors duration-300">
          {title}
        </h4>
        <SectionDescription className="text-gray-700 mb-6">
          {description}
        </SectionDescription>
        <a
          href="#"
          className="text-secondary-foreground hover:text-warm transition-colors duration-300 inline-flex items-center"
        >
          Learn More
          <Icon icon="carbon:arrow-right" className="ml-2" />
        </a>
      </div>
      <div className="absolute inset-0 bg-warm opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"></div>
    </div>
  );
};
