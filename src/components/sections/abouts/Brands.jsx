import React, { useState } from "react";
import PropTypes from "prop-types";
import SectionName from "../../ui/sectionName";
import Title from "../../ui/title";
import BranchCard from '../BranchCard';

// Array of districts with contact numbers and other branch info
const districts = [
  { name: "Vellore", contact: "+91 9043209448", email: "vellore@otomatiks.in", location: "Vellore" },
  { name: "Parrys, Chennai", contact: "+91 9600015954", email: "chennai@otomatiks.in", location: "Chennai" },
  { name: "Annanagar, Chennai", contact: "+91 7603849783", email: "otomatiksannanagar@gmail.com", location: "Chennai" },
  { name: "Tambaram", contact: "+91 8610210593", email: "otomatikstambaram@gmail.com", location: "Tambaram" },
  { name: "Salem", contact: "+91 9360404063", email: "salem.otomatiks@gmail.com", location: "Salem" },
  { name: "Attur", contact: "+91 9994506530", email: "otomatiksattur@gmail.com", location: "Attur" },
  { name: "Namakkal", contact: "+91 9994570354", email: "otomatiksnkl@gmail.com", location: "Namakkal" },
  { name: "Gudiyatham", contact: "+91 ", email: "", location: "Gudiyatham" },
  { name: "Dindigul", contact: "+91 9876543210", email: "dindigul@example.com", location: "Dindigul" },
  { name: "Madurai", contact: "+91 9988776655", email: "madurai@example.com", location: "Madurai" },
  { name: "Theni", contact: "+91 8899776655", email: "theni@example.com", location: "Theni" },
  { name: "Mumbai", contact: "+91 9988665544", email: "mumbai@example.com", location: "Mumbai" },
  { name: "United Kingdom (UK)", contact: "+91 7985783392", email: "uk@example.com", location: "United Kingdom" },
  { name: "United Arab Emirates (UAE)", contact: "+91", email: "", location: "UAE" },
  { name: "Thirunelveli", contact: "+91 9043337564", email: "thirunelveli@otomatiks.in", location: "Thirunelveli" },
  { name: "Bangalore", contact: "+91 8792076264", email: "bangalore@otomatiks.in", location: "Bangalore" }
];


const Brands = ({ section_padding_bottom, section_padding_top }) => {
  const [hoveredDistrict, setHoveredDistrict] = useState(null); // Track the hovered district

  return (
    <>
      {/* Desktop View */}
      <section className={`brands-area ${section_padding_bottom} ${section_padding_top} py-12 hidden lg:block`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <SectionName className="">Our Hubs</SectionName>
            <Title size="3.5xl">Centers of Innovation and Knowledge</Title>
          </div>

          <div className="flex justify-center items-center flex-wrap gap-4 relative">
            {districts.map((district) => (
              <span
                key={district.name}
                className="relative text-xl font-semibold text-gray-800 bg-white border border-gray-300 rounded-full px-4 py-2 shadow-md transition-colors duration-300 hover:bg-orange-500 hover:text-white"
                onMouseEnter={() => setHoveredDistrict(district.name)} // Set the hovered district
                onMouseLeave={() => setHoveredDistrict(null)} // Reset on mouse leave
              >
                {district.name}
                {/* Show BranchCard when the district is hovered */}
                {hoveredDistrict === district.name && (
                  <div className="absolute top-[100%] left-1/2 transform -translate-x-1/2 w-[280px] z-10">
                    <div className="bg-white shadow-md rounded-lg p-4">
                      <h3 className="font-semibold text-lg text-gray-800">{district.location}</h3>
                      <p className="text-sm mt-2">
                        {/* Clickable Phone Number */}
                        <a href={`tel:${district.contact}`} className="text-orange-500 hover:underline">{district.contact}</a>
                      </p>
                      <p className="text-sm mt-2">
                        {/* Clickable Email */}
                        <a href={`mailto:${district.email}`} className="text-orange-500 hover:underline">{district.email}</a>
                      </p>
                    </div>
                  </div>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile View */}
      <section className={`brands-area ${section_padding_bottom} ${section_padding_top} py-8 lg:hidden`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <SectionName className="">Our Hubs</SectionName>
            <Title size="3.5xl">Centers of Innovation and Knowledge</Title>
          </div>

          <div className="flex flex-wrap justify-center gap-3 relative">
            {districts.map((district) => (
              <span
                key={district.name}
                className="relative text-xl font-semibold text-gray-800 bg-white border border-gray-300 rounded-full px-4 py-2 shadow-md transition-colors duration-300 hover:bg-orange-500 hover:text-white"
                onMouseEnter={() => setHoveredDistrict(district.name)} // Set the hovered district
                onMouseLeave={() => setHoveredDistrict(null)} // Reset on mouse leave
              >
                {district.name}
                {/* Show BranchCard when the district is hovered */}
                {hoveredDistrict === district.name && (
                  <div className="absolute top-[-120%] left-1/2 transform -translate-x-1/2 w-[280px] z-10">
                    <div className="bg-white shadow-md rounded-lg p-4">
                      <h3 className="font-semibold text-lg text-gray-800">{district.location}</h3>
                      <p className="text-sm mt-2">
                        {/* Clickable Phone Number */}
                        <a href={`tel:${district.contact}`} className="text-orange-500 hover:underline">{district.contact}</a>
                      </p>
                      <p className="text-sm mt-2">
                        {/* Clickable Email */}
                        <a href={`mailto:${district.email}`} className="text-orange-500 hover:underline">{district.email}</a>
                      </p>
                    </div>
                  </div>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

Brands.propTypes = {
  section_padding_bottom: PropTypes.string,
  section_padding_top: PropTypes.string,
};

export default Brands;
