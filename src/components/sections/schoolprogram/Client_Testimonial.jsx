import React from 'react';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';

const videos = [
    {
        src: "https://www.youtube.com/embed/_-cB389xycQ?si=4IPxXR9yMYLSbUy6",
    },
    {
        src: "https://www.youtube.com/embed/pm5by5b-Zpk?si=3fuRqlQ6Wu_mKijV",
    },
    {
        src: "https://www.youtube.com/embed/6-EccKrkbRw?si=vuurX5a2pI0l403O",
    },
    {
        src: "https://www.youtube.com/embed/GzZeMbQuU7I?si=gGJOna9Xb9nofHmh",
    }
];

const Client_Testimonial = () => {
    return (
        <section className="pt-10 pb-10 bg-[#066aab]">
            <div className="container">
                <div className="text-center mb-10">
                    <SectionName>Client Testimonials</SectionName>
                    <Title size="3.5xl">Stories of Success and Satisfaction</Title>
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

export default Client_Testimonial;
