import React, { useState } from "react";
import PropTypes from "prop-types";
import SectionName from "../../ui/sectionName";
import Title from "../../ui/title";

// Array of districts with contact numbers
const districts = [
  { name: "Vellore", contact: "123-456-7890" },
  { name: "Parrys, Chennai", contact: "234-567-8901" },
  { name: "Annanagar, Chennai", contact: "345-678-9012" },
  { name: "Tambaram", contact: "456-789-0123" },
  { name: "Salem", contact: "567-890-1234" },
  { name: "Attur", contact: "678-901-2345" },
  { name: "Namakkal", contact: "789-012-3456" },
  { name: "Gudiyatham", contact: "890-123-4567" },
  { name: "Dindigul", contact: "901-234-5678" },
  { name: "Madurai", contact: "012-345-6789" },
  { name: "Theni", contact: "123-456-7891" },
  { name: "Mumbai", contact: "234-567-8902" },
  { name: "United Kingdom (UK)", contact: "345-678-9013" },
  { name: "United Arab Emirates (UAE)", contact: "456-789-0124" }
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
            <Title size="3.5xl">Innovation and Learning Hubs</Title>
          </div>

          <div className="flex justify-center items-center flex-wrap gap-4">
            {districts.map((district) => (
              <span
                key={district.name}
                className="relative text-xl font-semibold text-gray-800 bg-white border border-gray-300 rounded-full px-4 py-2 shadow-md transition-colors duration-300 hover:bg-orange-500 hover:text-white"
                onMouseEnter={() => setHoveredDistrict(district.name)} // Set the hovered district
                onMouseLeave={() => setHoveredDistrict(null)} // Reset on mouse leave
              >
                {district.name}
                {/* Show contact number separately above the district */}
                {hoveredDistrict === district.name && (
                  <a
                    href={`tel:${district.contact}`} // Use the "tel:" protocol to open dialer
                    className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 text-sm text-gray-700 bg-white px-2 py-1 rounded shadow-md whitespace-nowrap"
                  >
                    {district.contact}
                  </a>
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
            <Title size="3.5xl">Innovation and Learning Hubs</Title>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {districts.map((district) => (
              <span
                key={district.name}
                className="relative text-lg font-semibold text-gray-800 bg-white border border-gray-300 rounded-full px-3 py-1 shadow-md transition-colors duration-300 hover:bg-orange-500 hover:text-white"
                onMouseEnter={() => setHoveredDistrict(district.name)} // Set the hovered district
                onMouseLeave={() => setHoveredDistrict(null)} // Reset on mouse leave
              >
                {district.name}
                {/* Show contact number separately above the district */}
                {hoveredDistrict === district.name && (
                  <a
                    href={`tel:${district.contact}`} // Use the "tel:" protocol to open dialer
                    className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 text-sm text-gray-700 bg-white px-2 py-1 rounded shadow-md whitespace-nowrap"
                  >
                    {district.contact}
                  </a>
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
