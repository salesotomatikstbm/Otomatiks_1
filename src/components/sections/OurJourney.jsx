import React, { useState } from 'react';
import SectionName from '../ui/sectionName';
import Title from '../ui/title';
import { Icon } from '@iconify/react';
import playIcon from '@iconify-icons/bi/play-fill';
import PopupVideo from './course/Video';

const OurJourney = () => {
    const [showVideo, setShowVideo] = useState(false);

    const openModal = () => {
        setShowVideo(true);
    };

    const closeModal = () => {
        setShowVideo(false);
    };

    return (
        <section className="pt-10 pb-10 bg-warm">
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
                    <Title size="3.5xl">Our Vision To Reality: The Evolution of Otomatiks</Title>
                </div>

                <div className="flex justify-center items-center mb-10 relative">
                    <div className="relative w-full max-w-3xl">
                        <img 
                            src="https://bestwpware.com/react-templates/edumim/static/media/video.28396e783b15dc7b6cba.png" 
                            alt="video thumbnail" 
                            className="w-full h-auto rounded-[10px]" 
                        />
                        <button
                            onClick={openModal}
                            className="absolute inset-0 flex justify-center items-center"
                            aria-label="Play Video"
                        >
                            <div className="relative flex justify-center items-center">
                                {/* Pulsating Circle */}
                                <div className="absolute w-28 h-28 border-4 border-primary border-dotted rounded-full animate-pulse"></div>
                                {/* Play Icon */}
                                <div className="relative flex justify-center items-center w-20 h-20 rounded-full bg-white shadow-lg transition-transform transform hover:scale-110 hover:shadow-2xl">
                                    <Icon 
                                        icon={playIcon} 
                                        className="text-5xl text-primary" 
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
