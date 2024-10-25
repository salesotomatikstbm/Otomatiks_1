// components/EventPromoSection.js
import React from 'react';

const EventPromoSection = () => {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="container mx-auto max-w-5xl text-center flex flex-col items-center space-y-8">
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-secondary">
          Welcome to <span className="text-primary">Robotica 2025</span>
        </h1>
        <p className="max-w-3xl text-lg lg:text-xl text-gray-700 leading-relaxed">
          Robotica’25 isn’t just a competition; it’s a celebration of innovation and creativity in the realm of robotics. Building on the success of previous events, where over 2500 participants from 80+ schools joined, this year promises to surpass all expectations.
        </p>
        <p className="max-w-2xl text-md lg:text-lg text-gray-600">
          Get ready for hands-on workshops, expert talks, exhibitions, and valuable networking opportunities designed to elevate your knowledge in robotics and AI.
        </p>
        <div className="max-w-3xl space-y-6">
          <h2 className="text-2xl font-semibold text-secondary">
            Event Highlights
          </h2>
          <ul className="text-gray-700 list-disc list-inside space-y-3 text-lg lg:text-xl">
            <li>Interactive robotics competitions designed to challenge and inspire</li>
            <li>Hands-on workshops led by industry experts and educators</li>
            <li>Exhibitions showcasing the latest robotics technology and innovations</li>
            <li>Networking sessions with industry leaders, researchers, and fellow participants</li>
            <li>Special guest lectures on artificial intelligence, automation, and more</li>
          </ul>
        </div>
        <p className="text-gray-600 text-md lg:text-lg">
          Don’t miss the chance to be part of Robotica 2025 – where the future of robotics unfolds!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a
            href="https://www.robotica.org.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-secondary text-white font-semibold text-lg lg:text-xl px-8 py-3 rounded-full shadow-lg transition-all duration-300"
          >
            Know More
          </a>
          <a
            href="https://pages.razorpay.com/robotica25"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary hover:bg-primary text-white font-semibold text-lg lg:text-xl px-8 py-3 rounded-full shadow-lg transition-all duration-300"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventPromoSection;
