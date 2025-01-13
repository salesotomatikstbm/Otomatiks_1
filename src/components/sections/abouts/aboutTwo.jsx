import React from 'react';
import about_bg_2 from "@/assets/images/about/about-2.png";
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
import PopupSchool from '../schoolprogram/PopupSchool';

const AboutTwo = () => {
    return (
        <section className="lg:pt-15 lg:pb-15 pt-10 pb-10">
            <div className="container">
                <div className="grid xl:grid-cols-[45%_52%] lg:grid-cols-[40%_44%] grid-cols-1 xl:justify-between gap-7.5">
                    <div>
                        <SectionName>Why Choose Otomatiks Workshop?</SectionName>
                        <Title size={"3.5xl"} className={"lg:max-w-[610px] mt-2.5"}>
                            Experience the Future of Learning with Otomatiks Workshops
                        </Title>
                        <SectionDescription className="mt-5">
                            At Otomatiks, we offer transformative workshops that combine innovation, creativity, and technology to inspire the next generation. Our programs are designed to equip students with hands-on experience in Robotics, AI, and Coding, ensuring they are ready for tomorrow's challenges.
                        </SectionDescription>
                        <SectionDescription className="mt-5">
                            <li>Engage in dynamic, hands-on projects</li>
                            <li>Explore cutting-edge technologies</li>
                            <li>Learn from experienced instructors</li>
                            <li>Boost critical thinking and teamwork skills</li>
                            <li>Gain insights into STEM careers and trends</li>
                            <li>Build confidence through real-world problem-solving</li>
                        </SectionDescription>
                        <SlideUp delay={3}>
                            <div className="flex gap-8 mt-10">
                                {/* <Button asChild size="lg" variant="pill" className="bg-secondary border-secondary hover:text-primary-foreground">
                                    <Link to={"/about-us"}>Learn More</Link>
                                </Button> */}
                                <Button asChild size="lg" variant="pill" className="bg-transparent border-primary text-muted-foreground hover:text-cream-foreground hover:bg-primary">
                                    <PopupSchool />
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
                                    <p>Happy Participants</p>
                                </div>
                            </div>
                            <SlideUp>
                            <div className="hidden md:block">
                                <img src={about_bg_2} alt="Workshop Preview" />
                            </div>
                            </SlideUp>
                        </div>
                        <SlideDown>
                            <div className="hidden md:block">
                                <img src={about_bg_3} alt="Workshop Preview" />
                            </div>
                        </SlideDown>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutTwo;
