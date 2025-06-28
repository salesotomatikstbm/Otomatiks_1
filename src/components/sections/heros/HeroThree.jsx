import React, { useState } from "react";
import { Link } from "react-router-dom";
import PopupVideo from "../course/Video"; 
import { Icon } from '@iconify/react'; 
import playIcon from '@iconify-icons/bi/play-fill'; 
import { Button } from '@/components/ui/button';
import bgImage from "@/assets/images/banner/hero.png";
import bg from "@/assets/images/banner/bg.png";

export default function HeroThree() {
  const [showVideo, setShowVideo] = useState(false);

  const openModal = () => setShowVideo(true);
  const closeModal = () => setShowVideo(false);

  return (
    <section
      className="relative flex items-center py-16 bg-no-repeat bg-center bg-cover"
      id="home"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container relative">
        <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-6 relative ml-3">
          <div className="lg:col-span-7 md:me-6">
            
            <h1 className="font-semibold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl mb-5">
              Shape Your <span className="font-bold">Child’s Future</span>
            </h1>

            <p className="text-lg text-black max-w-xl">
              Our robotics classes are designed to help you discover the potential of this exciting field with the guidance of our experienced instructors.
            </p>

            <div className="relative mt-6 space-x-3 flex items-center">
              <Button asChild variant="secondary">
                <Link to="/robotics-coding-courses" className="bg-primary">
                  Our Courses
                </Link>
              </Button>

              <div className="relative flex items-center justify-center">
                <div className="absolute h-24 w-24 rounded-full bg-teal-500/30 animate-ping"></div>

                <button
                  onClick={openModal}
                  className="inline-flex items-center justify-center tracking-wide text-base text-white bg-teal-500 rounded-full h-16 w-16 hover:bg-teal-600 ms-4 hover:scale-110 transition-all duration-300 shadow-lg z-10"
                  aria-label="Play Course Introduction Video"
                >
                  <Icon icon={playIcon} className="text-3xl" />
                </button>
              </div>
            </div>

            {showVideo && (
              <PopupVideo
                handler={closeModal}
                videoSrc="https://www.youtube.com/embed/2dogph6uOLo?si=oYt2OwAhKdgTyrx8"
              />
            )}
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative">
              <img
                src={bgImage}
                alt="Robotics Class for Children"
                style={{ width: "50%", height: "10%" }}
                className="mx-auto rounded-[150px] rounded-br-2xl shadow dark:shadow-gray-700 w-[90%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
