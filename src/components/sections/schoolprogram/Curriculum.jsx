import React from "react";
import SectionName from "../../ui/sectionName";
import Title from "../../ui/title";

const Curriculum = () => {
  // Curriculum topics in JSON form
  const topics = [
    { id: 1, title: "Programming Languages" },
    { id: 2, title: "Sensors" },
    { id: 3, title: "Actuators" },
    { id: 4, title: "Control Systems" },
    { id: 5, title: "Machine Learning" },
    { id: 6, title: "Networking" },
    { id: 7, title: "Artificial Intelligence" },
    { id: 8, title: "Robotics Design and Mechanics" },
    { id: 9, title: "Embedded Systems" },
    { id: 10, title: "Robot Perception" },
    { id: 11, title: "Automation and Control" },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <SectionName>Robotics Curriculum</SectionName>
        <Title size="3.5xl" className="mt-4 font-bold">
          Our School Curriculum
        </Title>
        <p className="text-lg mx-auto mt-4 max-w-5xl">
          A robotics curriculum designed to equip students with essential skills and knowledge in robotics, programming, electronics, mechanical design, and more. Otomatiks offers top-tier education to build future robotics experts.
        </p>
      </div>

      {/* Curriculum Topics */}
      <div className="flex flex-wrap justify-center gap-8">
  {topics.map((topic) => (
    <div
      key={topic.id}
      className="bg-secondary/10 border border-secondary rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
    >
      <h3 className="text-xl font-semibold text-gray-800">{topic.title}</h3>
    </div>
  ))}
</div>



    </section>
  );
};

export default Curriculum;
