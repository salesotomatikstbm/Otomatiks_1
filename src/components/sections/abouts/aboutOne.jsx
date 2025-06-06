import React from 'react';
import { Link } from 'react-router-dom';
import Title from '@/components/ui/title';
import about_img_1 from "@/assets/images/about/about-1.png";
import icreement from "@/assets/images/about/icreement.png";
import shap_1 from "@/assets/images/about/shap-1.png";
import customer from "@/assets/images/about/customer.png";
import { Button } from '@/components/ui/button';
import SectionName from '@/components/ui/sectionName';
import { cn } from '@/lib/utils';
import SlideUp from '@/lib/animations/slideUp';
import SectionDescription from '@/components/ui/sectionDescription';
import bg from "@/assets/images/shape.png";
const AboutOne = ({ gridClass, isAboutpage }) => {
    return (
        
        <section className="lg:pt-0 pt-0 lg:pb-15 pb-10" >
            <div className="container" >
            <div className={cn("grid lg:grid-cols-[50%_50%] grid-cols-1 items-center lg:ml-4 md:gap-6", gridClass)}>

                    <div className="relative sm:block hidden">
                        <div className="flex sm:flex-row flex-col sm:items-end gap-6">
                            <SlideUp>
                                <div className="relative">
                                    <div>
                                        <img src={shap_1} alt="shap" />
                                    </div>
                                    <div className="ml-9">
                                        <img src={about_img_1} alt="about-bg" className="w-full" />
                                    </div>
                                    <div className="absolute -bottom-12.5 left-0 bg-[#066aab] rounded-[10px] py-4 px-[22px] flex items-center gap-3">
                                        <div className="bg-background w-11 h-11 rounded-full flex justify-center items-center">
                                            <img src={customer} alt="customer" />
                                        </div>
                                        <div>
                                            <h6 className="text-cream-foreground font-bold text-2xl">1,00,000+</h6>
                                            <p className="text-cream-foreground">Students Trained</p>
                                        </div>
                                    </div>
                                </div>
                            </SlideUp>
                            <div className="flex sm:flex-col gap-8">
                                <div className="bg-[#066aab] max-w-[212px] rounded-[11px] px-5 pt-[22px] pb-6 flex flex-col items-center justify-center text-center hidden sm:flex">
                                    <img src={icreement} alt="icreement" />
                                    <h6 className="text-cream-foreground text-xl font-bold">Otomatiks</h6>
                                    <p className="text-cream-foreground">Robotics Academy</p>
                                </div>
                                <div className="bg-[#066aab] max-w-[212px] rounded-[11px] px-5 pt-[22px] pb-6 flex flex-col justify-center hidden sm:flex drop-shadow-[0px_4.8px_24.4px_rgba(19,16,34,0.10)]">
                                    <h6 className=" text-cream-foreground text-[32px] font-bold ">14+</h6>
                                    <p className="text-cream-foreground">Years Of Exp</p>
                                </div>
                                <div className="bg-[#066aab] max-w-[212px] rounded-[11px] px-5 pt-[22px] pb-6 flex flex-col justify-center hidden sm:flex drop-shadow-[0px_4.8px_24.4px_rgba(19,16,34,0.10)]">
                                    <h6 className="text-cream-foreground text-[32px] font-bold ">20</h6>
                                    <p className="text-cream-foreground">Our Hubs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- right side start --> */}
                    <div className={`${isAboutpage ? "" : "lg:max-w-[839px]"} pt-7.5`}>
                        <SectionName>Our Story</SectionName>
                        <Title size={"3.5xl"} className={""}>
                        Empowering Young Innovators Through Creativity and Technology
                        </Title>
                        <SectionDescription>
                            <div className="flex items-start mt-4 mb-4 text-justify">
                                <p>
                                    At Otomatiks, we believe in the power of curiosity and innovation to shape the future. Our journey began with a passion for robotics and a vision to make cutting-edge technology accessible to young minds. Founded by a team of educators and tech enthusiasts, Otomatiks has grown into a leading provider of Robotics & AI education, empowering students to become tomorrow's innovators.
                                </p>
                            </div>
                            <div className="flex items-start mb-4 text-justify">
                                <p>
                                    We started with a simple idea: to create hands-on learning experiences that ignite a love for science, technology, engineering, and mathematics (STEM). From our first classroom workshop to partnering with schools nationwide, we've been committed to nurturing creativity and critical thinking in students of all ages.
                                </p>
                            </div>
                            {/* <div className="flex items-start mb-4">
                                <p>
                                    Our mission is to inspire the next generation to explore the endless possibilities of robotics and artificial intelligence. Through our programs, we aim to equip students with the skills and knowledge they need to thrive in an increasingly tech-driven world. Join us on this exciting journey as we continue to inspire, educate, and innovate!
                                </p>
                            </div> */}
                        </SectionDescription>

                        {/* New Sections with Borders and Styling */}
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 mt-10">
                            <div className="flex-1 border-2 border-[#066aab] rounded-lg p-6 bg-background drop-shadow-lg   transition duration-300">
                            <SectionName className="text-center hover:bg-white">Our Vision</SectionName>
                                <SectionDescription className="text-center mt-4">
                                    <p className="hover:text-primary">
                                        To make students globally recognized by changing the way they think.
                                    </p>
                                </SectionDescription>
                                
                            </div>

                            <div className="flex-1 border-2 border-[#066aab] rounded-lg p-6 bg-background drop-shadow-lg transition duration-300">
                            <SectionName className="text-center hover:text-primary">Our Mission</SectionName>
                                <SectionDescription className="text-center mt-4">
                                    <p className="hover:text-primary">
                                        To bridge the gap between academics and real-time environments.
                                    </p>
                                </SectionDescription>
                            </div>
                        </div>
                    </div>
                    {/* <!-- right side end --> */}
                </div>
            </div>
        </section>
    )
}

export default AboutOne
