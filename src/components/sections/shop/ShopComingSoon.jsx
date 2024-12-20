import React from "react";

const ShopComingSoon = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 text-center px-6 py-12">
      <div className="relative bg-white shadow-xl rounded-2xl max-w-4xl p-8 lg:p-12 overflow-hidden">
        <div className="absolute -top-20 -right-20 bg-primary rounded-full w-96 h-96 opacity-10"></div>
        <div className="absolute -bottom-20 -left-20 bg-secondary rounded-full w-96 h-96 opacity-10"></div>

        <h1 className="text-5xl lg:text-6xl font-extrabold text-secondary mb-4 animate-pulse">
          Coming Soon
        </h1>
        <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          We're building something incredible! Our shop page is under
          development and will be live soon. Stay tuned for updates and be the
          first to explore our collections.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
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
        <div className="mt-10">
          <iframe
            className="w-full aspect-video rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/I-vdhLprvus?si=fRouhedTDSB5JCf1"
            title="Shop Teaser"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-6 text-sm text-gray-500">
          <p>Have questions? Reach us at <a href="mailto:support@example.com" className="underline hover:text-primary">support@otomatiks.in</a></p>
        </div>
      </div>
    </section>
  );
};

export default ShopComingSoon;
