import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMonitor, FiTrendingUp } from "react-icons/fi";
import CountUp from "react-countup";
import PopupVideo from "../course/Video"; // Importing PopupVideo
import { Icon } from '@iconify/react'; // Import Iconify
import playIcon from '@iconify-icons/bi/play-fill'; // Import the play icon
import { Button } from '@/components/ui/button'
import bgImage from "@/assets/images/banner/hero.png"
import bg from "@/assets/images/banner/bg.png"
export default function HeroThree() {
  const [showVideo, setShowVideo] = useState(false);

  // Functions to open and close the modal
  const openModal = () => {
    setShowVideo(true);
  };

  const closeModal = () => {
    setShowVideo(false);
  };

  return (
    <section
      className="relative flex items-center md:h-screen lg:py-80 py-16 lg:pb-55 bg-no-repeat bg-center bg-cover"
      id="home"
      style={{ backgroundImage: `url(${bg})` }}>
    
      <div className="container relative">
        <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-6 gap-6 relative">
          <div className="lg:col-span-7 md:me-6">
            <h4 className="font-semibold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl mb-5">
              Shape Your<span className="text-teal-500 font-bold"> Child’s Future,</span> Explore Possibilities
            </h4>
            <p className="text-slate-800 text-lg max-w-xl">
              Our robotics classes are designed to help you discover the potential of this exciting field with the guidance of our experienced instructors.
            </p>
            <div className="relative mt-6 space-x-3 flex items-center">
              {/* Our Courses Button */}
              <Button asChild variant={"secondary"}>
                <Link to="/robotics-coding-courses" className='bg-primary'>
                  Our Courses
                </Link>
              </Button>

              {/* Play Icon Button */}
             {/* Play Icon Button */}
             <div className="relative flex items-center justify-center">
  <div className="absolute h-24 w-24 rounded-full bg-teal-500/30 animate-ping"></div>
  
  {/* Inner Button */}
  <button
    onClick={openModal}
    className="inline-flex items-center justify-center tracking-wide text-base text-white bg-teal-500 rounded-full h-16 w-16 hover:bg-teal-600 ms-4 hover:scale-110 transition-all duration-300 shadow-lg z-10"
  >
    <Icon icon={playIcon} className="text-3xl" />
  </button>
</div>


              <small className="text-sm font-medium uppercase align-middle ms-2"></small>
            </div>

            {/* Video Popup Modal */}
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
                style={{ width: "80%", height: "auto" }}
                className="mx-auto rounded-[150px] rounded-br-2xl shadow dark:shadow-gray-700 w-[90%]"
                alt="Business"
              />

              {/* Visitor and Progress info */}
              {/* <div className="absolute bottom-20 left-0 right-0 mx-auto flex justify-between items-center p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-60 m-3 z-10">
                <div className="flex items-center">
                  <div className="flex items-center justify-center h-[65px] min-w-[65px] bg-teal-500/5 text-teal-500 text-center rounded-full me-3">
                    <FiMonitor className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <span className="text-slate-400">Visitor</span>
                    <p className="text-xl font-bold">
                      <CountUp className="counter-value" start={0} end={4589} />
                    </p>
                  </div>
                </div>
                <span className="text-red-600 flex items-center">
                  <FiTrendingUp className="me-1" /> 0.5%
                </span>
              </div> */}

              {/* <div className="absolute top-16 right-0 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-48 m-3 z-10">
                <h5 className="text-lg font-semibold mb-3">Manage Software</h5>
                <div className="flex justify-between mt-3 mb-2">
                  <span className="text-slate-400">Progress</span>
                  <span className="text-slate-400">84%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                  <div
                    className="bg-teal-500 h-[6px] rounded-full"
                    style={{ width: "84%" }}
                  ></div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
