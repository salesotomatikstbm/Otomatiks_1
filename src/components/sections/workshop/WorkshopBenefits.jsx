import React from "react";
import SectionName from "../../ui/sectionName";
import Title from "../../ui/title";

const WorkshopBenefits = () => {
  // Benefits content in JSON form
  const benefits = [
    { id: 1, title: "Enhanced Technical Skills" },
    { id: 2, title: "Exposure to Cutting-edge Technology" },
    { id: 3, title: "Fun and Engaging Learning Experience" },
    { id: 4, title: "Improved Critical Thinking" },
    { id: 5, title: "Boost in Confidence" },
    { id: 6, title: "Networking Opportunities" },
  ];

  return (
    <section className="mx-auto px-4 py-16 bg-[#066aab] ">
      {/* Header Section */}
      <div className="text-center mb-12 container ">
        <SectionName>Workshop Benefits</SectionName>
        <Title size="3.5xl" className="mt-4 font-bold">
          Benefits of Robotics Workshops
        </Title>
        
      </div>

      {/* Benefits Grid */}
      <div className="flex flex-wrap justify-center gap-8 container">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="bg-secondary/10 border border-secondary rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
          >
           
            <h3 className="text-xl font-semibold  text-white">
              {benefit.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkshopBenefits;
