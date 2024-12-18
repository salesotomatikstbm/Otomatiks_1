import React from 'react';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';


const videos = [
    {
        src: "https://www.youtube.com/embed/lrOFpNBU6-0?si=yZ75TCdEsQX2jnWP",
    },
    {
        src: "https://www.youtube.com/embed/qspj8p3h7pQ?si=_G8btAmz8PiRqRMQ",
    },
    {
        src: "https://www.youtube.com/embed/b-SQdqbbl_U?si=c_xn1SIgdVMBTx9r",
    },
    {
        src: "https://www.youtube.com/embed/OB1X8ux2G6A?si=Xf4AiyEPVfN2yB5o",
    },
    {
        src: "https://www.youtube.com/embed/ytYiodAB2oA?si=cFAaBdX7LoJhiop9",
    },
    {
        src: "https://www.youtube.com/embed/e8HB_nM0Bu0?si=ofdjVv90u_xeAQQ6",
    }
];

const GlimplsVideo = () => {
    return (
        <section className="pt-10 pb-10">
            <div className="container">
                <div className="text-center mb-10">
                    <SectionName>Robotics 2024</SectionName>
                    <Title size="3.5xl">Relive the Moments, Redefine the Future!</Title>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    {videos.map((video, index) => (
                        <div key={index} className="relative flex flex-col items-center animate-fade-in">
                            <div className="relative w-full h-64 sm:h-72 md:h-96">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={video.src}
                                    title={`YouTube video player ${index + 1}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    className="rounded-[10px] shadow-lg hover:shadow-xl transition-shadow duration-300"
                                ></iframe>
                            </div>
                        </div>
                    ))}
                </div>
               
            </div>
        </section>
    );
}

export default GlimplsVideo;
