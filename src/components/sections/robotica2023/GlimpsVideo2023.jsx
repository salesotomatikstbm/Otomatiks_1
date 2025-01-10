import React from 'react';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';


const videos = [
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

const GlimplsVideo2023 = () => {
    return (
        <section className="pt-10 py-16 pb-10">
            <div className="container">
                {/* <div className="text-center mb-10">
                    <SectionName>Robotica 2023</SectionName>
                    <Title size="3.5xl">Relive the Moments, Redefine the Future!</Title>
                </div> */}

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

export default GlimplsVideo2023;
