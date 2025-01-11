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
    },
    {
        src: "https://www.youtube.com/embed/xrFXrNqSTcg?si=pA8qlFDasGF2BBGA",
    },
    {
        src: "https://www.youtube.com/embed/2GOwZnxwNeE?si=xqIwJtCvXCgplzj6",
    },
    {
        src: "https://www.youtube.com/embed/h-tw7vt0JoY?si=eC1CsVZor2q_Zumy",
    },
    {
        src: "https://www.youtube.com/embed/8j9k3Nw4jpo?si=28EhSsnJrmZjXPZN",
    },
    {
        src: "https://www.youtube.com/embed/jst6cPwlfkY?si=3huVYatikRJxCLM6",
    },
    {
        src: "https://www.youtube.com/embed/j1bRNPJdJI8?si=DWyXjKTFbw3E5GAK",
    }
];

const GlimplsVideo = () => {
    return (
        <section className="py-16 pb-10 bg-[#066aab]">
            <div className="container">
                <div className="text-center mb-10">
                    <SectionName>Glimpse Video</SectionName>
                    <Title size="3.5xl">A Visual Journey Through Our Events</Title>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                    {videos.map((video, index) => (
                        <div key={index} className="relative flex flex-col items-center animate-fade-in">
                            <div className="relative w-full h-54 sm:h-72 md:h-96">
                                <iframe
                                    width="100%"
                                    height="80%"
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
