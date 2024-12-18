import React from "react";

const Testimonials1 = () => {
  return (
    <div className="bg-blue-100 py-16" data-aos="fade-up" data-aos-duration="1000">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-3xl font-semibold mb-8">
          Testimonials from <span className="text-blue-600">Educational Leaders</span>
        </h1>

        <div className="overflow-x-auto">
          <div className="flex space-x-6 md:space-x-10 snap-x snap-mandatory">
            {/* Testimonial 1 */}
            <div className="flex-shrink-0 w-full md:w-96 bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out snap-start">
              <div className="flex items-center mb-4">
                <img
                  src="images/assest-narayani.webp"
                  alt="Vijay School Correspondent"
                  className="rounded-full w-20 h-20 object-cover mr-4"
                />
                <div>
                  <h2 className="text-xl font-semibold">Suresh Babu</h2>
                  <p className="text-gray-600">Director, Sri Puram Schools</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                "We have implemented Otomatiks Robotics in our schools for the past 5 years. Their innovative approach has introduced numerous technologies across all divisions, making learning both practical and impactful for our students. Our students find the robotics program highly beneficial."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="flex-shrink-0 w-full md:w-96 bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out snap-start">
              <div className="flex items-center mb-4">
                <img
                  src="images/assest-tr.jpg"
                  alt="Chairman of Spring Days"
                  className="rounded-full w-20 h-20 object-cover mr-4"
                />
                <div>
                  <h2 className="text-xl font-semibold">Mr. Rajendran</h2>
                  <p className="text-gray-600">Chairman, Spring Days Schools</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                "For the last decade, I’ve been observing the field, and I saw your presentation today. It’s remarkable that Otomatiks has grown by almost 30% compared to last year. This achievement is not just numbers, it reflects the quality of your work."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="flex-shrink-0 w-full md:w-96 bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out snap-start">
              <div className="flex items-center mb-4">
                <img
                  src="images/assest-hindu%20vidalaya%20principal.jpg"
                  alt="Principal of Hindu Vidyalaya"
                  className="rounded-full w-20 h-20 object-cover mr-4"
                />
                <div>
                  <h2 className="text-xl font-semibold">Mrs. Kriti Nivedita</h2>
                  <p className="text-gray-600">Principal, Hindu Vidyalaya Schools</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                "We have been associated with Otomatiks since 2017, and the impact has been remarkable. After introducing Otomatiks into our curriculum, I have seen our students develop innovative skills and a passion for learning. The students genuinely enjoy the process."
              </p>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials1;
