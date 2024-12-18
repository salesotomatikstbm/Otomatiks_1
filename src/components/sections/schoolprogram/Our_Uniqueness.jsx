import React from 'react';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';
import CourseForm from './CourseForm';
import Impact from "../../../assets/images/School_Curiculumn/impact.png";

const Our_Uniqueness = () => {
  return (
    <section className="py-12 bg-[#066aab]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 justify-between mb-12">
          {/* Image Section */}
          <div className="hidden lg:block relative w-full max-w-[500px]">
            <img
              alt=""
              aria-hidden="true"
              src={Impact}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <img
              alt="Our Uniqueness"
              srcSet={Impact}
              src=""
              loading="lazy"
              className="relative w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col space-y-12 lg:space-y-14 ">
            <div className="text-center ">
              <SectionName className="">Our Impact & Excellence</SectionName>
              <Title size="3.5xl" className="mt-4 ">
              A Legacy of Growth and Success
              </Title>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

            <div className="bg-white p-3 md:p-5 text-xl flex flex-col rounded-md border border-gray-300">
                <p className="text-3xl font-bold pb-2">13+</p> Years of Industry Experience
              </div>
              <div className="bg-white p-3 md:p-5 text-xl flex flex-col rounded-md border border-gray-300">
                <p className="text-3xl font-bold pb-2">1 Lakh+</p> Lives Upskilled
              </div>
              <div className="bg-white p-3 md:p-5 text-xl flex flex-col rounded-md border border-gray-300">
                <p className="text-3xl font-bold pb-2">80+</p> Mentors
              </div>
              <div className="bg-white p-3 md:p-5 text-xl flex flex-col rounded-md border border-gray-300">
                <p className="text-3xl font-bold pb-2">10+</p> Branches
              </div>
              <div className="bg-white p-3 md:p-5 text-xl flex flex-col rounded-md border border-gray-300">
                <p className="text-3xl font-bold pb-2">13,000+</p> Students Every Year
              </div>
           
              <div className="bg-white p-3 md:p-5 text-xl flex flex-col rounded-md border border-gray-300">
                <p className="text-3xl font-bold pb-2">85%</p> Client Retention Rate
              </div>
              
            </div>
            <div className="lg:hidden relative w-full max-w-[600px]">
              <img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                className="absolute inset-0 w-full h-full object-cover"
              />
              <img
                alt="Our Uniqueness"
                srcSet='https://img.freepik.com/free-vector/organic-flat-medical-conference-illustration_23-2148892742.jpg?ga=GA1.1.2071195669.1721226201&semt=ais_user'
                src="https://fastly.codingal.com/images/locale-images/us/teachers/teachers1.png"
                loading="lazy"
                className="relative w-full h-full object-cover"
              />
            </div>
            
          </div>
        </div>
        <CourseForm />
      </div>
    </section>
  );
};

export default Our_Uniqueness;
