import React from "react";

const Flowchart = () => {
  const steps = [
    "Official Meeting & Screening",
    "Franchisee Proposal Discussion",
    "Franchisee Agreement Signing",
    "Franchisee Office Setup",
    "Inauguration of Franchisee",
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Open Doors to Innovation</h2>
          <p className="text-gray-600 mt-4">
            Follow these steps to embark on an exciting journey with us.
          </p>
        </div>

        {/* Flowchart Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={`${(index + 1) * 100}`}
            >
              <div className="w-12 h-12 mx-auto flex items-center justify-center bg-secondary text-white rounded-full mb-4">
                <span className="text-lg font-bold">{index + 1}</span>
              </div>
              <p className="text-lg font-medium text-gray-800">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flowchart;
