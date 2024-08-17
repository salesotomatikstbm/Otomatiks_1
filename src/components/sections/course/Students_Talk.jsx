import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import videoSlideOne from '../../../assets/images/services/video-slide-1.jpg';
import videoSlideTwo from '../../../assets/images/services/video-slide-2.jpg';
import videoThumb from '../../../assets/images/services/video-thumb-1.jpg';
import PopupVideo from './Video';
import Title from '@/components/ui/title';
import SectionName from '@/components/ui/sectionName';
import SectionDescription from '@/components/ui/sectionDescription';

function Students_Talk({ className }) {
    const [showVideo, setShowVideo] = useState(false);
    const handleVideoShow = () => {
        setShowVideo(!showVideo);
    };
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
        <>
            {showVideo && (
                <PopupVideo
                    handler={handleVideoShow}
                    videoSrc="https://www.youtube.com/embed/NmGpsy93DCk?si=iz8SbfNROwdlXEyM"
                    />
            )}
            <section className={`appie-video-player-area mt-10 pb-100 ${className || ''}`}>
                <div className="container py-12">
                    {/* Text content */}
                    <div className="row mb-4">
                        <div className="col-lg-12">
                            <SectionName>Our Students Talk/Projects display</SectionName>
                            <Title size="3.5xl" className="pb-5">
                                Lorem ipsum dolor sit amet consectetur adipiscing
                            </Title>
                            <SectionDescription>
                                Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dictum facilisis sem. Imperdiet
                                massa turpis sit proin metus volutpat loren ipsum Lorem ipsum dolor sit amet consectetur.
                            </SectionDescription>
                        </div>
                    </div>

                    {/* Grid container for video thumbnail and slider */}
                    <div className="video-section grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                        {/* Video Thumbnail */}
                        <div className="flex justify-center items-center mb-4 md:mb-0">
                            <div className="relative w-full max-w-xs md:max-w-lg" style={{ maxWidth: '600px' }}>
                                <img
                                    src={videoThumb}
                                    alt="Video Thumbnail"
                                    className="w-full h-auto rounded"
                                    style={{ height: '350px', objectFit: 'cover' }} // Ensure equal height
                                />
                                <button
                                    onClick={handleVideoShow}
                                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full"
                                    aria-label="Play Video"
                                    style={{
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: '60px',
                                        height: '60px',
                                    }}
                                >
                                    <i className="fas fa-play text-white text-2xl" />
                                </button>
                            </div>
                        </div>

                        {/* Video Slider */}
                        <div className="flex justify-center items-center">
                            <div
                                className="relative w-full"
                                style={{ maxWidth: '600px' }} // Ensure the slider has the same max-width
                            >
                                <button
                                    onClick={sliderPrev}
                                    className="slick-arrow slick-prev absolute left-2 top-1/2 transform -translate-y-1/2 z-10"
                                    aria-label="Previous"
                                >
                                    <i className="fal fa-arrow-left" />
                                </button>
                                <Slider ref={sliderRef} {...settings}>
                                    <div className="item">
                                        <img
                                            src={videoSlideOne}
                                            alt="Slide 1"
                                            className="w-full h-auto rounded"
                                            style={{ height: '300px', objectFit: 'cover' }} // Ensure equal height
                                        />
                                    </div>
                                    <div className="item">
                                        <img
                                            src={videoSlideTwo}
                                            alt="Slide 2"
                                            className="w-full h-auto rounded"
                                            style={{ height: '300px', objectFit: 'cover' }} // Ensure equal height
                                        />
                                    </div>
                                </Slider>
                                <button
                                    onClick={sliderNext}
                                    className="slick-arrow slick-next absolute right-2 top-1/2 transform -translate-y-1/2 z-10"
                                    aria-label="Next"
                                >
                                    <i className="fal fa-arrow-right" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Students_Talk;
