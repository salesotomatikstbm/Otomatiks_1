import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import videoSlideOne from '../../../assets/images/services/video-slide-1.jpg';
import videoSlideTwo from '../../../assets/images/services/video-slide-2.jpg';
import videoThumb from '../../../assets/images/services/video-thumb-1.jpg';
import PopupVideo from './Video';
import Title from '@/components/ui/title'
import SectionName from '@/components/ui/sectionName'
import SectionDescription from '@/components/ui/sectionDescription'

function Students_Talk({ className }) {
    const [showVideo, setshowVideoValue] = useState(false);
    const handleVideoShow = (e) => {
        e.preventDefault();
        setshowVideoValue(!showVideo);
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
                    handler={(e) => handleVideoShow(e)}
                    videoSrc="//www.youtube.com/embed/EE7NqzhMDms?autoplay=1"
                />
            )}
            <section className={`appie-video-player-area mt-10 pb-100 ${className || ''}`}>
                <div className="container">
                    {/* Text content */}
                    <div className="row mb-4 ">
                        <div className="col-lg-12">
                        <SectionName>Our Students Talk/Projects display</SectionName>
          <Title size={"3.5xl"} className={"pb-5"}>Lorem ipsum dolor sit amet consectetur adipiscing</Title>
          <SectionDescription>Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dictum facilisis sem. Imperdiet
                            massa turpis sit proin metus volutpat loren ipsum Lorem ipsum dolor sit amet consectetur. </SectionDescription>
           
                        </div>
                    </div>

                    {/* Grid container for video thumbnail and slider */}
                    <div className="video-section grid grid-cols-2 gap-16 justify-content-center">
                        {/* Video Thumbnail */}
                        <div className="col-lg-6 d-flex justify-content-center align-items-center">
                            <div className="appie-video-player-item position-relative">
                                <div className="thumb">
                                    <img
                                        src={videoThumb}
                                        alt="Video Thumbnail"
                                        className="img-fluid rounded"
                                        style={{ maxWidth: '100%', height: '200%' }}
                                    />
                                    <div className="video-popup">
                                        <a
                                            onClick={(e) => handleVideoShow(e)}
                                            role="button"
                                            href="#"
                                            className="btn btn-outline-light rounded-circle"
                                            style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                                        >
                                            <i className="fas fa-play" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Video Slider */}
                        <div className="col-lg-6 d-flex justify-content-center align-items-center">
                            <div
                                className="appie-video-player-slider position-relative"
                                style={{ width: '100%' }}
                            >
                                <button
                                    onClick={sliderPrev}
                                    className="slick-arrow slick-prev"
                                    aria-label="Previous"
                                    style={{ position: 'absolute', left: '10px', zIndex: 1 }}
                                >
                                    <i className="fal fa-arrow-left" />
                                </button>
                                <Slider ref={sliderRef} {...settings}>
                                    <div className="item">
                                        <img
                                            src={videoSlideOne}
                                            alt="Slide 1"
                                            className="img-fluid rounded"
                                            style={{ maxWidth: '100%', height: 'auto' }}
                                        />
                                    </div>
                                    <div className="item">
                                        <img
                                            src={videoSlideTwo}
                                            alt="Slide 2"
                                            className="img-fluid rounded"
                                            style={{ maxWidth: '100%', height: 'auto' }}
                                        />
                                    </div>
                                </Slider>
                                <button
                                    onClick={sliderNext}
                                    className="slick-arrow slick-next"
                                    aria-label="Next"
                                    style={{ position: 'absolute', right: '10px', zIndex: 1 }}
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
