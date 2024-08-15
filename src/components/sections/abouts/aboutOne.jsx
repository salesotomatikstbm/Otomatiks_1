import React from 'react'
import { Link } from 'react-router-dom'
import Title from '@/components/ui/title'
import about_img_1 from "@/assets/images/about/about-1.png"
import icreement from "@/assets/images/about/icreement.png"
import shap_1 from "@/assets/images/about/shap-1.png"
import customer from "@/assets/images/about/customer.png"
import { Button } from '@/components/ui/button'
import SectionName from '@/components/ui/sectionName'
import { cn } from '@/lib/utils'
import SlideUp from '@/lib/animations/slideUp'
import SectionDescription from '@/components/ui/sectionDescription'


const AboutOne = ({ gridClass, isAboutpage }) => {
    // 'gridClass' and 'isAboutpage' props come frome about-us and home-1 page
    return (
        <section className="lg:pt-15 pt-10 lg:pb-15 pb-10">
            <div className="container">
                <div className={cn("grid lg:grid-cols-[60%_40%] grid-cols-1 items-center", gridClass)}>
                    <div className="relative">
                        <div className="flex sm:flex-row flex-col sm:items-end gap-6">
                            <SlideUp>
                                <div className="relative">
                                    <div>
                                        <img src={shap_1} alt="shap" />
                                    </div>
                                    <div className="ml-9">
                                        <img src={about_img_1} alt="about-bg" className="w-full" />
                                    </div>
                                    <div className="absolute -bottom-12.5 left-0 bg-primary rounded-[10px] py-4 px-[22px] flex items-center gap-3">
                                        <div className="bg-background w-11 h-11 rounded-full flex justify-center items-center">
                                            <img src={customer} alt="customer" />
                                        </div>
                                        <div>
                                            <h6 className="text-cream-foreground font-bold text-2xl">1,00,000+</h6>
                                            <p className="text-cream-foreground">Students </p>
                                        </div>
                                    </div>
                                </div>
                            </SlideUp>
                            <div className="flex sm:flex-col gap-8">
                                <div className="bg-warm max-w-[212px] rounded-[11px] px-5 pt-[22px] pb-6 flex flex-col items-center justify-center text-center hidden sm:flex">
                                    <img src={icreement} alt="icreement" />
                                    <h6 className="text-xl font-bold">Otomatiks</h6>
                                    <p>Robotics Academy</p>
                                </div>
                                <div className="bg-background max-w-[212px] rounded-[11px] px-5 pt-[22px] pb-6 flex flex-col justify-center hidden sm:flex drop-shadow-[0px_4.8px_24.4px_rgba(19,16,34,0.10)]">
                                    <h6 className="text-[32px] font-bold text-secondary-foreground">13+</h6>
                                    <p>Years Of Exp</p>
                                </div>
                                <div className="bg-background max-w-[212px] rounded-[11px] px-5 pt-[22px] pb-6 flex flex-col justify-center hidden sm:flex drop-shadow-[0px_4.8px_24.4px_rgba(19,16,34,0.10)]">
                                    <h6 className="text-[32px] font-bold text-secondary-foreground">13</h6>
                                    <p>Our Hubs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- right side start --> */}
                    <div className={`${isAboutpage ? "" : "lg:max-w-[439px]"} pt-7.5`}>
                        <SectionName>Our Story</SectionName>
                        <Title size={"3.5xl"} className={"pb-5"}>Igniting Young Minds with Innovation: The Story of Otomatiks
                        </Title>




                        <SectionDescription>
                            <div className="flex items-start mb-4">
                               
                                <p>At Otomatiks, we believe in the power of curiosity and innovation to shape the future. Our journey began with a passion for robotics and a vision to make cutting-edge technology accessible to young minds. Founded by a team of educators and tech enthusiasts, Otomatiks has grown into a leading provider of Robotics & AI education, empowering students to become tomorrow's innovators.
                                </p>
                            </div>
                            <div className="flex items-start mb-4">
                            
                                <p>We started with a simple idea: to create hands-on learning experiences that ignite a love for science, technology, engineering, and mathematics (STEM). From our first classroom workshop to partnering with schools nationwide, we've been committed to nurturing creativity and critical thinking in students of all ages. 
                                </p>
                            </div>
                            <div className="flex items-start mb-4">
                              
                                <p>Our mission is to inspire the next generation to explore the endless possibilities of robotics and artificial intelligence. Through our programs, we aim to equip students with the skills and knowledge they need to thrive in an increasingly tech-driven world. Join us on this exciting journey as we continue to inspire, educate, and innovate!</p>
                            </div>
                        </SectionDescription>

                        
                        
                        



                        {/* <div className='lg:mt-10 mt-7'>
                            <Button asChild variant="outline">
                                <Link to="/about-us">Get a quote</Link>
                            </Button>
                        </div> */}

                    </div>
                    {/* <!-- right side end --> */}
                </div>
            </div>
        </section>
    )
}

export default AboutOne