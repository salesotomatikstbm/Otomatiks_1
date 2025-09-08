import React, { useState } from "react";
import SectionName from "../../ui/sectionName";
import Title from "../../ui/title";
import { 
  FaLaptopCode, FaRobot, FaPiggyBank, 
  FaBrain, FaCalculator, FaBookOpen, FaFlask 
} from "react-icons/fa";

const Programs = () => {
  const [activeCategory, setActiveCategory] = useState("kids");
  const [hoveredProgram, setHoveredProgram] = useState(null);

  const kidsPrograms = [
    { 
      icon: <FaLaptopCode />, 
      title: "Coding", 
      description: "Create with logic", 
      message: "Kids learn the building blocks of technology through coding." 
    },
    { 
      icon: <FaRobot />, 
      title: "Robotics", 
      description: "Build real tech", 
      message: "Hands-on robotics to nurture problem-solving & creativity." 
    },
    { 
      icon: <FaCalculator />, 
      title: "Math", 
      description: "Master number skills", 
      message: "Fun math to strengthen logical & analytical skills." 
    },
    { 
      icon: <FaBookOpen />, 
      title: "English", 
      description: "Express with impact", 
      message: "Improve communication and creative expression." 
    },
    { 
      icon: <FaFlask />, 
      title: "Science", 
      description: "Explore with curiosity", 
      message: "Exciting experiments & real-world science exploration." 
    },
  ];

  const professionalPrograms = [
    { 
      icon: <FaPiggyBank />, 
      title: "Financial Literacy", 
      description: "Smart money habits", 
      message: "Master budgeting, saving, and investing for the future." 
    },
    { 
      icon: <FaBrain />, 
      title: "Gen AI", 
      description: "Future-ready thinking", 
      message: "Learn Generative AI to stay ahead in modern industries." 
    },
  ];

  const programs = activeCategory === "kids" ? kidsPrograms : professionalPrograms;

  return (
    <div className="bg-warm py-20 lg:px-8">
      {/* Header */}
      <div className="text-center mb-14">
        <SectionName>Explore Our Programs</SectionName>
        <Title size={"3.5xl"} className="mt-4 text-gray-800">
          Revolutionizing the Future with Cutting-Edge Education
        </Title>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Whether for kids or professionals, our programs are designed to build
          future-ready skills through fun, engaging, and practical learning.
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className="flex justify-center space-x-6 mb-14">
        <button
          className={`py-3 px-8 text-lg font-medium rounded-full transition-all duration-300 shadow-md 
            ${activeCategory === "kids"
              ? "bg-[#066aab] text-white scale-105"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}
          onClick={() => setActiveCategory("kids")}
        >
          Programs for Kids
        </button>
        <button
          className={`py-3 px-8 text-lg font-medium rounded-full transition-all duration-300 shadow-md 
            ${activeCategory === "professionals"
              ? "bg-[#066aab] text-white scale-105"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}
          onClick={() => setActiveCategory("professionals")}
        >
          Programs for Professionals
        </button>
      </div>

      {/* Program List (Hub-style) */}
      <ul className="flex flex-wrap justify-center gap-6 relative">
        {programs.map((program, index) => (
          <li
            key={index}
            className="relative"
            onMouseEnter={() => setHoveredProgram(program.title)}
            onMouseLeave={() => setHoveredProgram(null)}
          >
            <button
              type="button"
              className="flex items-center gap-2 text-lg font-semibold text-gray-800 bg-white border border-gray-300 
              rounded-full px-6 py-3 shadow-md transition-colors duration-300 hover:bg-blue-600 hover:text-white"
              aria-haspopup="true"
              aria-expanded={hoveredProgram === program.title}
              aria-label={`More info about ${program.title}`}
            >
              <span className="text-xl">{program.icon}</span>
              {program.title}
            </button>

            {hoveredProgram === program.title && (
              <div className="absolute top-[110%] left-1/2 transform -translate-x-1/2 w-[280px] z-10">
                <div className="bg-white shadow-md rounded-lg p-4">
                  <h3 className="font-semibold text-lg text-gray-800">{program.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{program.description}</p>
                  <p className="text-sm text-gray-500 mt-2">{program.message}</p>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Programs;
