import React from 'react';
import about_bg_2 from "@/assets/images/about/about-2.mp4";
import about_bg_3 from "@/assets/images/about/about-3.png";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SectionName from '@/components/ui/sectionName';
import Title from '@/components/ui/title';
import Kindergarden from '@/assets/icons/kindergarden';
import SectionDescription from '@/components/ui/sectionDescription';
import SlideUp from '@/lib/animations/slideUp';
import SlideDown from '@/lib/animations/slideDown';
import PopupWorkshop from '../workshop/PopupWorkshop';

const AboutTwo = () => {
    return (
        <section className="lg:pt-15 lg:pb-15 pt-10 pb-10">
            <div className="container">
                <div className="grid xl:grid-cols-[45%_52%] lg:grid-cols-[40%_44%] grid-cols-1 xl:justify-between gap-7.5">
                    <div>
                        <SectionName>About Our Robotics Workshops</SectionName>
                        <Title size={"3.5xl"} className={"lg:max-w-[610px] mt-2.5"}>
                            Fostering Creativity and Problem-Solving with Robotics Education
                        </Title>
                        <SectionDescription className="mt-5">
                            Attending robotics workshops can lead to improved critical thinking, as well as boost confidence and promote innovation and entrepreneurship.
                        </SectionDescription>
                        <SectionDescription className="mt-5">
                            <li>Hands-on learning experiences with robotics kits</li>
                            <li>Opportunities to build and program robots</li>
                            <li>Introduction to foundational STEM concepts</li>
                            <li>Encouragement of teamwork and collaboration</li>
                            <li>Development of problem-solving skills</li>
                            <li>Insight into future technology trends</li>
                        </SectionDescription>
                        <SlideUp delay={3}>
                            <div className="flex gap-8 mt-10">
                                <Button asChild size="lg" variant="pill" className="bg-secondary border-secondary hover:text-primary-foreground">
                                    <Link to={"/about-us"}>Read More</Link>
                                </Button>
                                <Button asChild size="lg" variant="pill" className="bg-transparent border-primary text-muted-foreground hover:text-cream-foreground hover:bg-primary">

                                    <PopupWorkshop />
                                </Button>
                            </div>
                        </SlideUp>
                    </div>
                    <div className="flex items-center lg:gap-7.5 gap-5">
                        <div className="flex flex-col lg:gap-7.5 gap-5 w-full sm:w-auto">
                            <div className="bg-warm border-b-4 border-green rounded-tr-[64px] rounded-tl-[64px] md:px-12.5 px-7.5 sm:py-15 py-10 flex items-center justify-center gap-10 wow fadeInLeft" data-wow-delay="0.3s">
                                <Kindergarden height='60' width='60' />
                                <div>
                                    <h3 className="text-[32px] font-bold leading-[130%]">5K+</h3>
                                    <p>Students</p>
                                </div>
                            </div>
                            <SlideUp>
                                <div className="flex justify-center sm:justify-start">
                                    <video
                                        src={about_bg_2}
                                        autoPlay
                                        muted
                                        loop
                                        className="mx-auto block w-full rounded-lg shadow-lg"
                                    ></video>

                                </div>
                            </SlideUp>
                        </div>
                        <SlideDown>
                            <div className="hidden md:block">
                                <img src={about_bg_3} alt="img-2" />
                            </div>
                        </SlideDown>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </section>
    );
};

export default AboutTwo;
