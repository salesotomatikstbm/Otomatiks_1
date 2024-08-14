import React from 'react';
import about from '@/assets/images/faq/about-1.png';
import shape2 from '@/assets/images/faq/shape-2.png';
import shape5 from '@/assets/images/faq/shape-5.png';

const AboutSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <div className="mb-6">
                <h6 className="text-blue-600 text-lg font-semibold mb-2">About Research</h6>
                <h2 className="text-3xl font-bold leading-snug">
                  Reliable Journal of Medical Health Research.
                </h2>
              </div>
              <div className="mb-4">
                <p className="text-gray-700">
                  Excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum. sed spiciatis unde omnis natus error Inventore.
                </p>
              </div>
              <div className="mb-6">
                <p className="text-gray-700">
                  quasi architebeat vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptassit.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>The Mycobacteriology Section</li>
                  <li>The Aerobic Bacteriology Section</li>
                </ul>
              </div>
              <div>
                <a
                  href="/research.html"
                  className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Our Services
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="relative bg-white p-8 shadow-lg rounded-lg">
              <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
                <div
                  className="absolute top-0 left-0 w-1/2 h-1/2 bg-no-repeat bg-cover"
                  style={{ backgroundImage: `url(${shape5})` }}
                />
                <div
                  className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-no-repeat bg-cover"
                  style={{ backgroundImage: `url(${shape2})` }}
                />
              </div>
              <figure className="relative z-10">
                <img src={about} alt="About" className="w-full rounded-lg" />
              </figure>
              <div className="absolute bottom-4 left-4 z-10">
                <h2 className="text-4xl font-bold text-gray-800">20</h2>
                <h5 className="text-xl text-gray-600">Years of Experience</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
