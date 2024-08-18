import React from "react";
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';
import Enquiry_Form from "../abouts/Enquiry_Form";

const RoboticsAiLabSetup = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center">
          <SectionName>How to Set Up Robotics & AI Lab</SectionName>
          <Title size="3xl" className="mt-4">Step-by-Step Guide to Setting Up Your Lab</Title>
        </div>

        {/* Steps Grid */}
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: "1",
              title: "Share Your Requirement",
              description: "Based on your requirements & budget, we suggest the best suitable lab for your school or college."
            },
            {
              step: "2",
              title: "Order Your Customized Lab",
              description: "Based on the batch size, order the equipment and kits required for your lab."
            },
            {
              step: "3",
              title: "Setup Lab & Provide Training",
              description: "Our engineers help set up the lab and provide training on operating the kits and equipment."
            },
            {
              step: "4",
              title: "Launch Your Robotics & AI Lab",
              description: "Start engaging students in teamwork and creating innovative projects."
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                {item.step}
              </div>
              <div className="pt-12 text-center">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Enquiry Form */}
        <div className="mt-16">
          <Enquiry_Form />
        </div>
      </div>
    </section>
  );
};

export default RoboticsAiLabSetup;
