import React from 'react';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';
import { FaUsers, FaShieldAlt, FaChalkboardTeacher, FaBook, FaUserTie, FaAward } from 'react-icons/fa';

const WhyOtomatiks = () => {
  const sections = [
    {
      icon: <FaUsers />,
      title: "Participants Diversity",
      description: "We have trained more than 100,000+ students to date, ranging from 3rd Grade to 12th Grade from various parts of the country."
    },
    {
      icon: <FaShieldAlt />,
      title: "Safety",
      description: "Our long-standing reputation for safety is one of the most often stated reasons by parents for using our Robotics Training Services in Equipment Handling."
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Experiential Learning",
      description: "The modules are structured to keep the students engaged with relevant, sequential experiences that promote skill mastery & incorporate reflection & transference."
    },
    {
      icon: <FaBook />,
      title: "Curriculum Mapping with Academics",
      description: "We have designed a curriculum that has been mapped with the NCERT/CBSE/IGCSE/ICSE & Matriculation Board, allowing students to relate it to their regular academics."
    },
    {
      icon: <FaUserTie />,
      title: "Instructor Team",
      description: "Our instructors are highly qualified and experienced in creating engaging sessions for greater impact. Our domain expertise includes Electronics, Electrical, Mechanical, and Programming."
    },
    {
      icon: <FaAward />,
      title: "Excellence at All Levels",
      description: "We have created 4 National Level Winners, 6 South India Level Winners, 4 State Level Winners, 3 District Level Winners, and more than 100+ School Level Winners."
    }
  ];

  return (
    <div className="py-16 container mx-auto px-4 lg:px-8">
      <div className="text-center mb-12">
        <SectionName>Why Otomatiks</SectionName>
        <Title size={"3.5xl"} className={"mt-4"}>
          What Value Do We Bring to Schools?
        </Title>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section, index) => (
          <div
            key={index}
            className="relative bg-white p-6 rounded-lg border border-primary shadow-md transition-transform duration-300 transform hover:bg-secondary  hover:scale-105"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="text-4xl text-primary p-4  rounded-full transition-transform duration-300 transform hover:bg-white ">
                {section.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-4 transition-transform duration-300 transform ">
              {section.title}
            </h3>
            <p className="text-gray-600 text-center transition-transform duration-300 transform ">
              {section.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyOtomatiks;
