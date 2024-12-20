import React from 'react';

const EventPromoSection = () => {
  return (
    <section className="relative py-12 lg:py-16 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-12">
        {/* Left Content */}
        <div className="lg:w-1/2 flex flex-col items-start space-y-6">
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-secondary leading-tight">
            Welcome to <span className="text-primary">Robotica 2025</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
            Robotica’25 isn’t just a competition; it’s a celebration of innovation and creativity in the realm of robotics. Building on the success of previous events, where over 2500 participants from 80+ schools joined, this year promises to surpass all expectations.
          </p>
          <p className="text-md lg:text-lg text-gray-600">
            Get ready for hands-on workshops, expert talks, exhibitions, and valuable networking opportunities designed to elevate your knowledge in robotics and AI.
          </p>
          <div className="w-full">
            <h2 className="text-2xl font-semibold text-secondary mb-4">
              Event Highlights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white shadow-lg rounded-xl p-4">
                <p className="text-gray-700 font-medium">🔹 Robotics Competitions</p>
                <p className="text-sm text-gray-600">Interactive and inspiring challenges.</p>
              </div>
              <div className="bg-white shadow-lg rounded-xl p-4">
                <p className="text-gray-700 font-medium">🔹 Hands-On Workshops</p>
                <p className="text-sm text-gray-600">Led by industry experts.</p>
              </div>
              <div className="bg-white shadow-lg rounded-xl p-4">
                <p className="text-gray-700 font-medium">🔹 Exhibitions</p>
                <p className="text-sm text-gray-600">Latest robotics technology.</p>
              </div>
              <div className="bg-white shadow-lg rounded-xl p-4">
                <p className="text-gray-700 font-medium">🔹 Guest Lectures</p>
                <p className="text-sm text-gray-600">Insights on AI and automation.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a
              href="https://www.robotica.org.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-secondary text-white font-semibold text-lg px-8 py-3 rounded-full shadow-md transition-transform transform hover:scale-105"
            >
              Know More
            </a>
            <a
              href="https://pages.razorpay.com/robotica25"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary hover:bg-primary text-white font-semibold text-lg px-8 py-3 rounded-full shadow-md transition-transform transform hover:scale-105"
            >
              Register Now
            </a>
          </div>
        </div>
        {/* Right Graphic */}
         <div className="lg:w-1/2 flex justify-center items-center">
         <iframe
                                        width="100%"
                                        height="415"
                                        src="https://www.youtube.com/embed/I-vdhLprvus?si=fRouhedTDSB5JCf1"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        className="rounded"
                                    ></iframe>
        </div>
      </div>
    </section>
  );
};

export default EventPromoSection;
