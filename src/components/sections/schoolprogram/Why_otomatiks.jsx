import React from 'react';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';
import { FaUsers, FaHandsHelping, FaChalkboardTeacher, FaBook, FaUserTie, FaAward } from 'react-icons/fa';
import PopupSchool from './PopupSchool';

const WhyOtomatiks = () => {
  const sections = [
    {
      icon: <FaBook />,
      title: "Integrated Curriculum",
      description: "Our curriculum aligns with NCERT, CBSE, IGCSE, ICSE, and Matriculation boards, making it easy for students to connect robotics with their school subjects."
    },
    {
      icon: <FaUserTie />,
      title: "Experienced Instructors",
      description: "Our instructors are experts in Electronics, Mechanical, and Programming, bringing real-world knowledge to school robotics sessions for impactful learning."
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Hands-On Learning",
      description: "Our modules provide engaging, hands-on experiences that encourage skill development and practical application of robotics concepts."
    },
    {
      icon: <FaHandsHelping />,
      title: "Student Support",
      description: "We provide dedicated support to students, helping them troubleshoot and develop their skills throughout the robotics training journey."
    },
    {
      icon: <FaUsers />,
      title: "Diverse Participation",
      description: "Our robotics programs have engaged over 100,000 students from 3rd to 12th grade, covering schools across various regions in the country."
    },
    {
      icon: <FaAward />,
      title: "Achievements in Robotics",
      description: "Our programs have produced national and state-level winners, inspiring students to excel in school-level robotics competitions."
    }
  ];

  return (
    <div className="py-12 container mx-auto lg:px-8">
      <div className="text-center mb-12">
        <SectionName>Why Otomatiks</SectionName>
        <Title size={"3.5xl"} className={"mt-4"}>
          What Value Do We Bring to Schools?
        </Title>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-center">
        {sections.map((section, index) => (
          <div
            key={index}
            className="relative bg-white p-6 rounded-lg border border-secondary shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex justify-center items-center mb-6">
              <div className="w-16 h-16 bg-primary text-white text-3xl flex items-center justify-center rounded-full shadow-lg mb-4">
                {section.icon}
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-secondary">{section.title}</h3>
            <p className="text-base text-gray-600">{section.description}</p>
          </div>
        ))}
      </div>
      <div className="lg:mt-10 mt-4">
          <PopupSchool />
        </div>
    </div>
    
  );
};

export default WhyOtomatiks;
