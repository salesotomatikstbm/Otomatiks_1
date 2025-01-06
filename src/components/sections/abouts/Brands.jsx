import React, { useState } from "react";
import PropTypes from "prop-types";
import SectionName from "../../ui/sectionName";
import Title from "../../ui/title";
import BranchCard from '../BranchCard';

// Array of districts with contact numbers and other branch info
const districts = [
  { name: "Vellore", contact: "123-456-7890", email: "vellore@example.com", location: "Vellore" },
  { name: "Parrys, Chennai", contact: "234-567-8901", email: "parrys@example.com", location: "Chennai" },
  { name: "Annanagar, Chennai", contact: "345-678-9012", email: "annanagar@example.com", location: "Chennai" },
  { name: "Tambaram", contact: "456-789-0123", email: "tambaram@example.com", location: "Tambaram" },
  { name: "Salem", contact: "567-890-1234", email: "salem@example.com", location: "Salem" },
  { name: "Attur", contact: "678-901-2345", email: "attur@example.com", location: "Attur" },
  { name: "Namakkal", contact: "789-012-3456", email: "namakkal@example.com", location: "Namakkal" },
  { name: "Gudiyatham", contact: "890-123-4567", email: "gudiyatham@example.com", location: "Gudiyatham" },
  { name: "Dindigul", contact: "901-234-5678", email: "dindigul@example.com", location: "Dindigul" },
  { name: "Madurai", contact: "012-345-6789", email: "madurai@example.com", location: "Madurai" },
  { name: "Theni", contact: "123-456-7891", email: "theni@example.com", location: "Theni" },
  { name: "Mumbai", contact: "234-567-8902", email: "mumbai@example.com", location: "Mumbai" },
  { name: "United Kingdom (UK)", contact: "345-678-9013", email: "uk@example.com", location: "United Kingdom" },
  { name: "United Arab Emirates (UAE)", contact: "456-789-0124", email: "uae@example.com", location: "UAE" }
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
                    <BranchCard
                      location={district.location}
                      contact={district.contact}
                      email={district.email}
                    />
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
                className="relative text-lg font-semibold text-gray-800 bg-white border border-gray-300 rounded-full px-3 py-1 shadow-md transition-colors duration-300 hover:bg-orange-500 hover:text-white"
                onMouseEnter={() => setHoveredDistrict(district.name)} // Set the hovered district
                onMouseLeave={() => setHoveredDistrict(null)} // Reset on mouse leave
              >
                {district.name}
                {/* Show BranchCard when the district is hovered */}
                {hoveredDistrict === district.name && (
                  <div className="absolute top-[-120%] left-1/2 transform -translate-x-1/2 w-[280px] z-10">
                    <div className="bg-white shadow-md rounded-lg p-4">
                      <div className="text-gray-800">
                        <h3 className="font-semibold text-lg">{district.location}</h3>
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
