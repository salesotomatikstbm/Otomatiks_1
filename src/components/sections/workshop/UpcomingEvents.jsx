import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionName from '@/components/ui/sectionName';
import Title from '@/components/ui/title';

const workshops = [
    {
        id: 1,
        title: 'Introduction to Robotics',
        date: 'Nov 20, 2024',
        description: 'Discover the exciting world of robotics with an introduction to core concepts. This beginner-friendly workshop will cover the fundamentals of robotic systems, allowing participants to understand how robots work. Through hands-on activities, students will build and program simple robots, sparking their curiosity for future innovation.',
        image: 'https://otomatiks.com/wp-content/uploads/2023/05/8N1A7021.jpg', 
    },
    {
        id: 2,
        title: 'AI in Robotics',
        date: 'Dec 15, 2024',
        description: 'Dive into the intersection of artificial intelligence and robotics to see how AI empowers machines to make decisions. This workshop covers basics in machine learning and AI applications in robotics, helping students grasp how robots can "think" and act autonomously. It’s an interactive session aimed at inspiring the next generation of AI innovators.',
        image: 'https://otomatiks.com/wp-content/uploads/2023/05/8N1A7021.jpg',
    },
    {
        id: 3,
        title: 'Hands-on Robotics Workshop',
        date: 'Jan 10, 2025',
        description: 'Experience a practical introduction to robotics with real-world tools. Participants will work on building small robots, learning wiring, assembly, and basic programming. This workshop emphasizes hands-on learning and creativity, offering valuable skills and knowledge to make robotics fun and approachable.',
        image: 'https://otomatiks.com/wp-content/uploads/2023/05/8N1A7021.jpg',
    },
];

export default function UpcomingEventsSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 700, 
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="py-12">
            <div className="container mx-auto px-6 text-center">
                <SectionName>Upcoming Workshops & Events</SectionName>
                <Title size="3.5xl" className="mt-2.5">
                    Join us in our upcoming events to dive deep into the world of robotics!
                </Title>

                <Slider {...settings} className="w-full mt-8">
                    {workshops.map((workshop) => (
                        <div key={workshop.id} className="p-4">
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                                <div className="flex justify-center items-center h-80 bg-gray-200">
                                    <img
                                        src={workshop.image}
                                        alt={workshop.title}
                                        className="object-cover h-full w-full rounded-t-lg"
                                    />
                                </div>
                                <div className="p-6 text-center lg:text-left">
                                    <h1 className="text-2xl font-semibold mb-2">{workshop.title}</h1>
                                    <p className=" mb-2">{workshop.date}</p>
                                    <p className=" mb-4">{workshop.description}</p>
                                    <button className="mt-4 px-6 py-2 bg-primary text-white rounded-full hover:bg-secondary transition">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}
