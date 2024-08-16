import React from 'react';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';

const images = [
  "https://otomatiks.com/wp-content/uploads/2023/08/6.png",
  "https://otomatiks.com/wp-content/uploads/2023/08/6.png",
  "https://otomatiks.com/wp-content/uploads/2023/08/6.png",
  "https://otomatiks.com/wp-content/uploads/2023/08/6.png",
  "https://otomatiks.com/wp-content/uploads/2023/08/6.png",
  "https://otomatiks.com/wp-content/uploads/2023/08/6.png",
  "https://otomatiks.com/wp-content/uploads/2023/08/6.png",
  "https://otomatiks.com/wp-content/uploads/2023/08/6.png",
  "https://otomatiks.com/wp-content/uploads/2023/08/6.png",
  "https://otomatiks.com/wp-content/uploads/2023/08/6.png",
  "https://otomatiks.com/wp-content/uploads/2023/08/6.png",
  "https://otomatiks.com/wp-content/uploads/2023/08/6.png",
  "https://otomatiks.com/wp-content/uploads/2023/08/6.png",
  "https://otomatiks.com/wp-content/uploads/2023/08/6.png",
  "https://otomatiks.com/wp-content/uploads/2023/08/6.png",
  "https://otomatiks.com/wp-content/uploads/2023/08/6.png",
  "https://otomatiks.com/wp-content/uploads/2023/08/6.png",
  "https://otomatiks.com/wp-content/uploads/2023/08/6.png",
  "https://otomatiks.com/wp-content/uploads/2023/08/6.png",
  "https://otomatiks.com/wp-content/uploads/2023/08/6.png",
];

const Our_Patrons = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <SectionName className="">Our Patrons</SectionName>
          <Title size="3.5xl" className="mt-4 text-gray-800">
            Our Esteemed Partners
          </Title>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-md">
              <img
                alt={`Patron ${index + 1}`}
                src={src}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Our_Patrons;
