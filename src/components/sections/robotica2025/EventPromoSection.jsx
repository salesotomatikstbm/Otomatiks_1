import React from 'react';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';

const EventPromoSection = () => {
  return (
    <section className="relative py-8 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-y-0 lg:space-x-12">
        {/* Left Content */}
        <div className="lg:w-1/2 flex flex-col items-start space-y-6">
          <div className="text-center">
            <SectionName>Robotica 2025</SectionName>
            <Title size="3.5xl">Welcome to Robotica 2025!</Title>
          </div>
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
          <div className="flex flex-wrap sm:flex-nowrap text-nowrap gap-4 mt-6 py-5">
            <a
              href="https://www.robotica.org.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none bg-primary text-nowrap sm:flex-nowrap hover:bg-secondary text-white font-semibold text-lg px-8 py-3 rounded-full shadow-md transition-transform transform hover:scale-105 text-center"
            >
              Know More
            </a>
            <a
              href="https://pages.razorpay.com/robotica25"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none bg-secondary text-nowrap sm:flex-nowrap hover:bg-primary text-white font-semibold text-lg px-8 py-3 rounded-full shadow-md transition-transform transform hover:scale-105 text-center"
            >
              Register Now
            </a>
          </div>
        </div>
        {/* Right Graphic */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <div className="w-full aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/I-vdhLprvus?mute=1&si=fRouhedTDSB5JCf1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventPromoSection;
