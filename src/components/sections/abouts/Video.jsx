import React, { useState } from "react";
import Brands from "./Brands-1";
import { Icon } from '@iconify/react';
import playFill from '@iconify-icons/bi/play-fill';
import SectionName from '../../ui/sectionName'
import Title from '../../ui/title'
import Brands1 from '@/components/sections/abouts/Brands'
const Video = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const videoImageUrl = "https://bestwpware.com/react-templates/edumim/static/media/video.28396e783b15dc7b6cba.png";
  const videoUrl = "https://www.youtube.com/embed/NmGpsy93DCk?autoplay=1";

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="relative video-area section-padding-bottom z-[1]">
      <div
        className="bg-[url('https://example.com/path-to-your-background-image.png')] bg-cover bg-no-repeat bg-center absolute left-0 top-0 h-full w-full z-[-1]"
      ></div>
      <div className="container">
        <div className="flex flex-col items-center mb-20">
          <SectionName>Our Team</SectionName>
          <Title size={"3.5xl"}>Lorem Unlocking the Power of Wonderworks Child</Title>

          <div className="video-wrapper flex justify-center mb-10 relative">
            <div className="xl:h-[500px] lg:h-[400px] h-[300px] max-w-[800px] p-6 bg-white shadow-[0px_0px_60px_0px_rgba(0,0,0,0.05)] rounded-lg relative">
              <img
                src={videoImageUrl}
                alt="Video thumbnail"
                className="object-cover w-full h-full block"
              />
              <div
                className="h-[60px] w-[60px] mx-auto absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col justify-center items-center"
              >
                <div className="animate-ping absolute inline-flex h-full w-full rounded-full ring-white ring-2"></div>
                <button
                  onClick={openModal}
                  className="bg-white w-15 h-15 flex flex-col justify-center items-center rounded-full text-3xl text-primary"
                >
                  <Icon icon={playFill} className="text-3xl" />
                </button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="max-w-[800px] mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla at scelerisque egestas, odio nisi iaculis lacus, nec condimentum odio ligula ac nisi.
            </p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[10]" onClick={closeModal}>
          <div className="relative bg-white p-4">
            <iframe
              src={videoUrl}
              title="YouTube video"
              width="600"
              height="340"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black text-2xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <Brands1 />
    </section>
  );
};

export default Video;
