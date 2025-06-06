import React, { useState } from 'react';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';
import { Icon } from '@iconify/react';
import playIcon from '@iconify-icons/bi/play-fill';
import PopupVideo from '../course/Video'; 
import Jounery from "@/assets/images/about/JourneyThumbnail.png";
const OurJourney = () => {
    const [showVideo, setShowVideo] = useState(false);

    const openModal = () => {
        setShowVideo(true);
    };

    const closeModal = () => {
        setShowVideo(false);
    };

    return (
        <section className="pt-10 pb-10">
            <div className="container">
                {/* Video Popup */}
                {showVideo && (
                    <PopupVideo
                        handler={closeModal}
                        videoSrc="https://www.youtube.com/embed/2dogph6uOLo?si=WMFMOhjkdFx9dOnb"
                    />
                )}

                <div className="text-center mb-10">
                    <SectionName>Our Journey</SectionName>
                    <Title size="3.5xl">Building a Legacy of Growth and Innovation</Title>
                </div>

                <div className="w-full mb-10 flex justify-center relative">
                    <div className="relative" style={{ maxWidth: '800px' }}>
                        <img 
                            src={Jounery}
                            alt="video thumbnail" 
                            className="w-full rounded-[10px]" 
                        />
                        <button
                            onClick={openModal}
                            className="absolute inset-0 flex justify-center items-center"
                            aria-label="Play Video"
                        >
                            <div className="relative flex justify-center items-center">
                                {/* Pulsating Circle */}
                                <div className="absolute w-24 h-24 border-4 border-primary border-dotted rounded-full animate-pulse"></div>
                                {/* Play Icon */}
                                <div className="relative flex justify-center items-center w-16 h-16 rounded-full bg-white shadow-lg transition-transform transform hover:scale-110 hover:shadow-2xl">
                                    <Icon 
                                        icon={playIcon} 
                                        className="text-4xl text-primary" 
                                    />
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurJourney;
