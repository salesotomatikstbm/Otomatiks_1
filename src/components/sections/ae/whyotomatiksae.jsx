import React from "react";
import SectionName from "../../ui/sectionName";
import Title from "../../ui/title";
import { 
  FaRobot, FaCertificate, FaChalkboardTeacher, 
  FaUsers, FaBuilding, FaGlobe 
} from "react-icons/fa";
import PopupSchool from "./PopupSchool";

const WhyOtomatiksAe = () => {
  const sections = [
    {
      icon: <FaRobot />,
      title: "Hands-on Learning",
      description:
        "Build real robots & AI projects with guided mentorship, ensuring practical and immersive learning experiences.",
    },
    {
      icon: <FaCertificate />,
      title: "Certified STEM Curriculum",
      description:
        "Globally recognized modules aligned with modern standards, ensuring students gain a strong foundation in STEM.",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Expert Trainers",
      description:
        "Experienced instructors who make learning fun and effective, bringing real-world knowledge into the classroom.",
    },
    {
      icon: <FaUsers />,
      title: "1,00,000+ Students Trained",
      description:
        "Trusted by parents and schools across UAE, India, and the UK, with over 1 lakh students successfully trained.",
    },
    {
      icon: <FaBuilding />,
      title: "14+ Years of Experience",
      description:
        "Delivering innovative Robotics, AI, IoT, and STEM education with proven teaching methodologies since 2010.",
    },
    {
      icon: <FaGlobe />,
      title: "20+ Hubs or Offline Branches",
      description:
        "A growing network of learning centers worldwide, ensuring students get hands-on experiences at state-of-the-art facilities near them.",
    },
  ];

  return (
    <div className="py-16 container mx-auto lg:px-8">
      {/* Header */}
      <div className="text-center mb-14">
        <SectionName>Why Parents & Schools Choose Otomatiks</SectionName>
        <Title size={"3.5xl"} className="mt-3">
          Revolutionizing the Future with Cutting-Edge Innovation
        </Title>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Trusted by parents and schools across the globe — here’s why Otomatiks is the first choice for Robotics & STEM learning.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg 
              transition-all duration-300 p-8 text-center max-w-[400px] mx-auto"
          >
            {/* Icon */}
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full 
              bg-[#066aab] text-white text-3xl mb-6 shadow-md">
              {section.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{section.title}</h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">{section.description}</p>
          </div>
        ))}
      </div>

      {/* Popup */}
      <div className="lg:mt-12 mt-8">
        <PopupSchool />
      </div>
    </div>
  );
};

export default WhyOtomatiksAe;
