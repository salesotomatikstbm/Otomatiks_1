import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import videoSlideOne from '../../../assets/images/services/video-slide-2.jpg';
import videoSlideTwo from '../../../assets/images/services/video-slide-2.jpg';
import Title from '@/components/ui/title';
import SectionName from '@/components/ui/sectionName';
import SectionDescription from '@/components/ui/sectionDescription';

function Students_Talk({ className }) {
    const sliderRef = useRef();
    const settings = {
        autoplay: true,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const sliderNext = () => {
        sliderRef.current.slickNext();
    };
    const sliderPrev = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <section className={`appie-video-player-area mt-10 pb-100 bg-[#066aab] ${className || ''}`}>
            <div className="container py-12">
                {/* Text content */}
                <div className="row mb-4">
                    <div className="col-lg-12">
                        <SectionName>Our Students Talk/Projects display</SectionName>
                        <Title size="3.5xl" className="pb-5">
                            Hear What Our Students Have to Say!
                        </Title>
                        {/* <SectionDescription className={"text-white"} >
                            Our students are passionate about robotics! Here are some of their exciting projects and experiences that showcase their creativity and skills.
                        </SectionDescription> */}
                    </div>
                </div>

                {/* Grid container for video and slider */}
                <div className="video-section grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    {/* Embedded YouTube Video */}
                    <div className="flex justify-center items-center mb-4 md:mb-0">
                        <div className="relative w-full max-w-xs md:max-w-lg" style={{ maxWidth: '600px' }}>
                            <iframe
                                width="100%"
                                height="360"
                                src="https://www.youtube.com/embed/uC-K8NP2Khw?si=0zAv06pYjBnl3uM1"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* Image Slider */}
                    <div className="flex justify-center items-center">
                        <div
                            className="relative w-full"
                            style={{ maxWidth: '600px' }} // Ensure the slider has the same max-width
                        >
                            <Slider ref={sliderRef} {...settings}>
                                <div className="item">
                                    <img
                                        src={videoSlideOne}
                                        alt="Student Project 1"
                                        className="w-full h-auto rounded"
                                        style={{ height: '415px', objectFit: 'cover' }} // Ensure equal height
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        src={videoSlideTwo}
                                        alt="Student Project 2"
                                        className="w-full h-auto rounded"
                                        style={{ height: '415px', objectFit: 'cover' }} // Ensure equal height
                                    />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Students_Talk;
