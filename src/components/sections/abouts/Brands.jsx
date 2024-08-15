import React from "react";
import PropTypes from "prop-types";
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';

const districts = [
  "Vellore",
  "Parrys, Chennai",
  "Annanagar, Chennai",
  "Tambaram",
  "Salem",
  "Attur",
  "Namakkal",
  "Gudiyatham",
  "Dindigul",
  "Madurai",
  "Theni",
  "Mumbai",
  "United Kingdom"
];

const Brands = ({ section_padding_bottom, section_padding_top }) => {
  return (
    <>
      {/* Desktop View */}
      <section className={`brands-area ${section_padding_bottom} ${section_padding_top} py-12 hidden lg:block`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <SectionName className="">Our Hubs</SectionName>
            <Title size="3.5xl">
              Innovation and Learning Hubs
            </Title>
          </div>

          <div className="flex justify-center items-center flex-wrap gap-4">
            {districts.map((district) => (
              <span
                key={district}
                className="text-xl font-semibold text-gray-800 bg-white border border-gray-300 rounded-full px-4 py-2 shadow-md transition-colors duration-300 hover:bg-orange-500 hover:text-white"
              >
                {district}
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
            <Title size="3.5xl">
              Innovation and Learning Hubs
            </Title>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {districts.map((district) => (
              <span
                key={district}
                className="text-lg font-semibold text-gray-800 bg-white border border-gray-300 rounded-full px-3 py-1 shadow-md transition-colors duration-300 hover:bg-orange-500 hover:text-white"
              >
                {district}
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
