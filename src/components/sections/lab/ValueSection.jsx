import React from 'react';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';
import lab from "@/assets/images/projects/ailab.mp4"

const ValueSection = () => {
  const values = [
    { title: "Innovative Solutions", description: "We provide cutting-edge technology and innovative solutions that enhance learning and engagement." },
    { title: "Comprehensive Training", description: "We offer thorough training programs to equip users with the knowledge and skills needed for success." },
    { title: "Ongoing Support", description: "Our support team is available to assist with any questions or issues that may arise." },
    { title: "Custom Solutions", description: "We tailor our solutions to meet the specific needs of each client, ensuring optimal results." },
    { title: "State-of-the-Art Equipment", description: "We provide access to the latest equipment and technologies to enhance the learning experience." }
  ];

  return (
    <div className="py-16 ">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className=" mb-12">
          <SectionName className={"text-center"}>Our Value Proposition</SectionName>
          <Title size={"3.5xl"} className={" mt-2.5 text-center"}>Unlocking Potential Through Innovative Solutionsg</Title>

        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1 hidden lg:block">
            <video
              src={lab}
              autoPlay
              muted
              loop
              className="mx-auto block w-full rounded-lg shadow-lg"
            ></video>
          </div>

          {/* Value List */}
          <div className="order-1 lg:order-2 space-y-6">
            {values.map((value, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 text-white bg-secondary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                  {index + 1}
                </div>
                <div className="ml-6 ">
                  <h3 className="text-xl text-secondary font-semibold mb-2">{value.title}</h3>
                  <p className="">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueSection;
