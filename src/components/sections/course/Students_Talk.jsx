import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import videoSlideOne from '../../../assets/images/services/slider1.png';
import videoSlideTwo from '../../../assets/images/services/slider2.png';
import videoSlideThree from '../../../assets/images/services/slider3.png';
import videoSlideFour from '../../../assets/images/services/slider4.png';
import videoSlideFive from '../../../assets/images/services/slider5.png';
import Title from '@/components/ui/title';
import SectionName from '@/components/ui/sectionName';

function Students_Talk({ className }) {
    const videoSliderRef = useRef();

    const settings = {
        autoplay: true,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section className={`appie-video-player-area mt-10 pb-100 bg-[#066aab] ${className || ''}`}>
            <div className="container py-12">
                {/* Text Content */}
                <div className="row mb-8">
                    <div className="col-lg-12 text-center">
                        <SectionName>Our Students Talk/Projects Display</SectionName>
                        <Title size="3.5xl" className="pb-5 text-white">
                            Hear What Our Students Have to Say!
                        </Title>
                    </div>
                </div>

                {/* Video and Image Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* YouTube Video Slider */}
                    <div className="video-slider">
                        <div className="relative w-full max-w-[600px] mx-auto">
                            <Slider ref={videoSliderRef} {...settings}>
                                <div className="item">
                                    <iframe
                                        width="100%"
                                        height="415"
                                        src="https://www.youtube.com/embed/vn_0mtMJels?si=UlbMg9QHogOn7I1G"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        className="rounded-xl"
                                    ></iframe>
                                </div>
                                <div className="item">
                                    <iframe
                                        width="100%"
                                        height="415"
                                        src="https://www.youtube.com/embed/pbe4sUyQBMk?si=KXemEvxW2WZI2aaj"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        className="rounded-xl"
                                    ></iframe>
                                </div>
                            </Slider>
                        </div>
                    </div>

                    {/* Image Grid */}
                    <div className="image-grid grid grid-cols-2 gap-4">
                        <div className="image-item">
                            <img
                                src={videoSlideOne}
                                alt="Student Project 1"
                                className="w-full h-[200px] object-cover rounded-xl"
                            />
                        </div>
                        <div className="image-item">
                            <img
                                src={videoSlideTwo}
                                alt="Student Project 2"
                                className="w-full h-[200px] object-cover rounded-xl"
                            />
                        </div>
                        <div className="image-item">
                            <img
                                src={videoSlideThree}
                                alt="Student Project 3"
                                className="w-full h-[200px] object-cover rounded-xl"
                            />
                        </div>
                        <div className="image-item">
                            <img
                                src={videoSlideFour}
                                alt="Student Project 4"
                                className="w-full h-[200px] object-cover rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Students_Talk;
