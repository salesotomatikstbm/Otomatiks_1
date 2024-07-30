import React from 'react'
import about_bg_2 from "@/assets/images/about/about-2.png"
import about_bg_3 from "@/assets/images/about/about-3.png"
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'
import Kindergarden from '@/assets/icons/kindergarden'
import SectionDescription from '@/components/ui/sectionDescription'
import SlideUp from '@/lib/animations/slideUp'
import SlideDown from '@/lib/animations/slideDown'

const AboutTwo = () => {
    return (
        <section className="lg:pt-15 lg:pb-15 pt-10 pb-10">
            <div className="container">
                <div className="grid xl:grid-cols-[45%_52%] lg:grid-cols-[40%_44%] grid-cols-1 xl:justify-between gap-7.5">
                    <div className="">
                        <SectionName>About Us</SectionName>
                        <Title size={"3.5xl"} className={"lg:max-w-[410px] mt-2.5"}>Invest in education invest in the future</Title>
                        <SectionDescription className={'mt-5'}>Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dictum facilisis sem. Imperdiet massa turpis sit proin metus volutpat loren ipsum Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dictum</SectionDescription>
                        <SectionDescription className={'mt-5'}>Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dictum facilisis sem. Imperdiet massa turpis sit proin metus volutpat loren ipsum Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dictum</SectionDescription>
                        <SlideUp delay={3}>
                            <div className="flex gap-8 mt-10">
                                <Button asChild size="lg" variant="pill" className="bg-primary border-primary hover:text-primary-foreground">
                                    <Link to={"/about-us"}>Read More</Link>
                                </Button>
                                <Button asChild size="lg" variant="pill" className="bg-transparent border-primary text-muted-foreground hover:text-cream-foreground hover:bg-primary">
                                    <Link to={"/contact-us"}>Contact Us</Link>
                                </Button>
                            </div>
                        </SlideUp>
                    </div>
                    <div className="flex items-center lg:gap-7.5 gap-5">
                        <div className="flex flex-col lg:gap-7.5 gap-5 w-full sm:w-auto">
                            <div className="bg-warm border-b-4 border-green rounded-tr-[64px] rounded-tl-[64px] md:px-12.5 px-7.5 sm:py-15 py-10 flex items-center justify-center gap-10 wow fadeInLeft" data-wow-delay="0.3s">
                                <Kindergarden height='60' width='60' />
                                <div>
                                    <h3 className="text-[32px] font-bold leading-[130%]">20K+</h3>
                                    <p>Students</p>
                                </div>
                            </div>
                            <SlideUp>
                                <img src={about_bg_2} alt="img-1" />
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
        </section>
    )
}

export default AboutTwo