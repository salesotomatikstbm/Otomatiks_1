import React from 'react';

const services = [
  {
    id: 1,
    iconClass: "icon-5",
    title: "Clinical Microbiology Tests",
    description: "Excepteur sint ocecat pro dent sunt in culpa.",
  },
  {
    id: 2,
    iconClass: "icon-6",
    title: "Testing for Traces & Impurities",
    description: "Excepteur sint ocecat pro dent sunt in culpa.",
  },
  {
    id: 3,
    iconClass: "icon-7",
    title: "Clinical Biochemistry Tests",
    description: "Excepteur sint ocecat pro dent sunt in culpa.",
  },
  {
    id: 4,
    iconClass: "icon-8",
    title: "Clinical Histopatology Tests",
    description: "Excepteur sint ocecat pro dent sunt in culpa.",
  },
];

const ServiceSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h6 className="text-lg font-semibold text-blue-600 mb-2">Laboratory Services</h6>
          <h2 className="text-3xl font-bold leading-snug">
            Reliable & High-Quality <br />
            Laboratory Service
          </h2>
        </div>
        <div className="flex flex-wrap -mx-4">
          {services.map((service) => (
            <div key={service.id} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-white p-6 shadow-lg rounded-md transition-transform duration-500 ease-in-out transform hover:scale-105">
                <div className="text-center mb-4">
                  <i className={`text-4xl ${service.iconClass}`} />
                </div>
                <h4 className="text-xl font-semibold mb-2">
                  {service.title}
                </h4>
                <p className="mb-4">{service.description}</p>
                <div className="text-center">
                  <a
                    href="#"
                    className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
