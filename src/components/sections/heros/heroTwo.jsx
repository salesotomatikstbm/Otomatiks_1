import React from 'react'
import banner from "@/assets/images/banner/banner-v2-thumb.png"
import kite from "@/assets/images/shapes/kite.png"
import arrow from "@/assets/images/shapes/arrow.png"
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import Title from '@/components/ui/title'
import SectionDescription from '@/components/ui/sectionDescription'
import SlideLeft from '@/lib/animations/slideLeft'

const HeroTwo = () => {
    return (
        <section className="lg:pb-15 pb-10">
            <div className="bg-warm min-[1800px]:pt-[291px] pt-48 min-[1800px]:pb-[179px] lg:pb-32 pb-20 relative z-[1] overflow-hidden after:absolute after:bottom-0 after:left-0 after:bg-[linear-gradient(180deg,_rgba(255,255,255,0.00)_0%,_#FFF_100%)] after:w-full after:h-full after:max-h-[257px]">
                <div className="container">
                    <div className="max-w-[633px] w-full h-full bg-[linear-gradient(180deg,_rgba(255,255,255,0.00)_0%,_#FFF_50%_rgba(255,255,255,0.00)_100%)]">
                        <Title size={"7.5xl"}>Building a Better Future through</Title>
                        <SectionDescription className={"mt-5 xl:text-inherit text-muted-foreground"}>
                            Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dictum facilisis sem.
                            Imperdiet massa turpis sit proin metus volutpat loren ipsum Lorem ipsum dolor sit amet consectetur.
                            Amet lectus mi ultricies dictum
                        </SectionDescription>

                        <div className=" mt-10 flex items-start gap-9">
                            <Button asChild size="lg" variant="pill" className="bg-primary border-primary hover:text-primary-foreground">
                                <Link to={"/about-us"}>Read More</Link>
                            </Button>

                            <img src={arrow} alt="arrow" />
                        </div>
                    </div>
                </div>

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary w-[284px] h-[284px] rounded-full opacity-30 blur-[200px]"></div>
                <div className="absolute right-0 bottom-0 z-[-1] opacity-50 2xl:opacity-100 max-w-[580px] lg:max-w-[650px] xl:max-w-[750px] min-[1800px]:max-w-full">
                    <SlideLeft>
                        <img src={banner} alt="banner background" />
                    </SlideLeft>
                </div>
                <div className="absolute left-10 bottom-25 z-[-1] xl:block hidden">
                    <img src={kite} alt="kite" />
                </div>
            </div>
        </section>
    )
}

export default HeroTwo