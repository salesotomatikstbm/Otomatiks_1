import React, { useState } from 'react';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';
import { Icon } from '@iconify/react';
import playIcon from '@iconify-icons/bi/play-fill';
import PopupVideo from '../course/Video'; // Adjust the path if necessary

const Video = () => {
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
                    <SectionName>Our Team
                    </SectionName>
                    <Title size="3.5xl">Meet the Innovators Behind Otomatiks</Title>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between mb-10 relative">
                    <div className="lg:w-1/2 lg:pr-10 relative">
                        <img 
                            src="https://bestwpware.com/react-templates/edumim/static/media/video.28396e783b15dc7b6cba.png" 
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

                    <div className="lg:w-1/2 lg:pl-10 mt-10 lg:mt-0">
                        <p className="text-lg mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel urna nec nunc gravida vestibulum. Proin fringilla, sapien sit amet vulputate sollicitudin, sapien orci faucibus augue, at consequat libero quam ac mauris.
                        </p>
                        <div className="flex justify-center items-center">
                            {/* Uncomment and adjust the Rating component if needed */}
                            {/* <Rating star={5} /> */}
                        </div>
                    </div>
                </div>
                {/* Removed the Swiper slider section */}
            </div>
        </section>
    );
}

export default Video;
