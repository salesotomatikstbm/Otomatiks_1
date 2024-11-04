import React from 'react';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';
import { FaUsers, FaHandsHelping, FaChalkboardTeacher, FaBook, FaUserTie, FaAward } from 'react-icons/fa';


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
            className="relative bg-white p-6 rounded-lg border border-secondary shadow-md transition-transform duration-300 transform hover:bg-[#066aab] hover:text-white hover:scale-105"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="text-4xl text-primary p-4  rounded-full transition-transform duration-300 transform hover:bg-white  ">
                {section.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold  text-center mb-4 transition-transform duration-300 transform hover:text-white">
              {section.title}
            </h3>
            <p className="text-center transition-transform duration-300 transform hover:text-white ">
              {section.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyOtomatiks;
