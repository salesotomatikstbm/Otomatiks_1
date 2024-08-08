import React from "react";
import PropTypes from "prop-types";
import SectionName from '../../ui/sectionName'
import Title from '../../ui/title'

const districts = [
  "Chennai",
  "Kallakurichi",
  "Coimbatore",
  "Madurai",
  "Salem",
  "Tiruchirappalli",
  "Erode",
  "Dindigul",
  "Tirunelveli",
  "Vellore"
];

const Brands = ({ section_padding_bottom, section_padding_top }) => {
  return (
    <div className={`brands-area ${section_padding_bottom} ${section_padding_top}`}>
      <div className="container">
        <div className="text-center text-black text-2xl font-medium mb-[30px]">
          <SectionName>Our Hubs</SectionName>
          <Title size={"3.5xl"}>Explore Our Reach Across Various Locations</Title>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-[40px]">
          {districts.map((district, index) => (
            <div key={index} className="bg-white p-4 border border-gray-200 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">{district}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Brands.propTypes = {
  section_padding_bottom: PropTypes.string,
  section_padding_top: PropTypes.string,
};

export default Brands;
