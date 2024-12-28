import React from "react";

const ShopComingSoon = () => {
  return (
    <section className="flex items-center justify-center min-h-screen text-center py-8">
      <div className="relative flex flex-col items-center justify-center gap-8 w-full max-w-screen-lg">
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-secondary mb-4 animate-pulse">
          Coming Soon
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          We're building something incredible! Our shop page is under development and will be live soon. Stay tuned for updates and be the first to explore our collections.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mt-6">
          <button
            className="bg-primary hover:bg-secondary text-white font-bold text-lg lg:text-xl px-8 py-3 rounded-full shadow-md transition-transform transform hover:scale-105"
          >
            Notify Me
          </button>
          <a
            href="/"
            className="bg-secondary hover:bg-gray-300 text-gray-700 font-bold text-lg lg:text-xl px-8 py-3 rounded-full shadow-md transition-transform transform hover:scale-105"
          >
            Go Back Home
          </a>
        </div>
        <div className="flex justify-center w-full">
          <iframe
            className="w-full aspect-video rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/I-vdhLprvus?si=fRouhedTDSB5JCf1"
            title="Shop Teaser"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="text-sm text-gray-500 mt-6">
          <p>
            Have questions? Reach us at{" "}
            <a href="mailto:support@example.com" className="underline hover:text-primary">
              support@otomatiks.in
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShopComingSoon;
