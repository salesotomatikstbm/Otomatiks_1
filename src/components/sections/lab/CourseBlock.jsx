import React from "react";
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';

const RoboticsAiLabSetup = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionName>How to Set Up Robotics & AI Lab</SectionName>
        <Title size={"3.5xl"} className={" mt-2.5 "}>Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dictum facilisis sem</Title>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="relative bg-warm p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
              1
            </div>
            <div className="pt-12 text-center">
              <h3 className="text-xl font-semibold mb-2">Share Your Requirement With Us</h3>
              <p className="text-gray-600">Based on your requirements & budget, we would suggest the best suitable lab for your school or college.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative bg-warm p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
              2
            </div>
            <div className="pt-12 text-center">
              <h3 className="text-xl font-semibold mb-2">Order Your Customized Lab</h3>
              <p className="text-gray-600">Based on the batch size, order the equipment and kits required for your lab.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative bg-warm p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
              3
            </div>
            <div className="pt-12 text-center">
              <h3 className="text-xl font-semibold mb-2">Setup Lab & Provide Training</h3>
              <p className="text-gray-600">Once you receive the equipment, our engineers will help your team set up the lab and provide the required training for operating the kits and equipment.</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative bg-warm p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
              4
            </div>
            <div className="pt-12 text-center">
              <h3 className="text-xl font-semibold mb-2">Launch Your Robotics & AI Lab</h3>
              <p className="text-gray-600">Get started by engaging students in teamwork and creating innovative projects.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoboticsAiLabSetup;
