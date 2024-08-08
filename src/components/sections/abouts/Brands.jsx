/* eslint-disable jsx-a11y/anchor-is-valid */
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
        <Title size={"3.5xl"}>Lorem Unlocking the Power of Wonderworks Child</Title>
        
        </div>

        <div className="text-center mb-[40px]"> {/* Adjust margin-bottom here */}
          <span className="text-lg text-gray-700">
            {districts.join(' | ')}
          </span>
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
