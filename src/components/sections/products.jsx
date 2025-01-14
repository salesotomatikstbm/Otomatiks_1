import React from 'react'
import SectionName from '../ui/sectionName'
import Title from '../ui/title'
import car from "@/assets/images/projects/lab1.png"
import sun from "@/assets/images/projects/clone-sun.png"
import bard from "@/assets/images/shapes/bard.png"
import object from "@/assets/images/projects/clone-object.png"
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import SlideDown from '@/lib/animations/slideDown'
import SectionDescription from '../ui/sectionDescription'
import SlideUp from '@/lib/animations/slideUp'

const Products = () => {
    return (
        <section className="lg:pb-15 pb-10 relative">
            <div className=" lg:pt-[10px] pt-10">
                <div className="container">
                    <div className="flex flex-col justify-center items-center">
                        <SectionName>Robotics & AI Lab</SectionName>
                        <Title size={"3.5xl"} className={" mt-2.5 text-center"}>Where Creativity Meets Technology to Shape Tomorrow</Title>
                    </div>
                    <div className="lg:mt-15 mt-10">
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-7.5">
                            <div className="lg:max-w-[430px] w-full md:order-0 order-1">
                                <SlideUp> <h4 className="text-2xl font-semibold leading-[140%]">Empowering Young Innovators Through Hands-On Robotics & AI Learning</h4></SlideUp>
                                {/* <h3 className="text-destructive-foreground lg:text-[32px] text-2xl font-bold mt-[15px]">29.80$</h3> */}
                                <SectionDescription className={"mt-5 text-justify"}>At Otomatiks Robotics & AI Lab, we immerse students in the exciting world of technology, where they can unleash their creativity and innovation. Our lab is designed to provide hands-on learning experiences in Robotics, AI, and coding, allowing students to build and program their own projects. With guidance from expert mentors, students dive deep into real-world challenges, exploring how technology can solve problems and create opportunities.

</SectionDescription>
                                <div className="flex gap-8 lg:mt-10 mt-7">
                                    {/* <Button asChild size="lg" variant="">
                                        <Link to={"/about-us"} className='text-white'>Read More</Link>
                                    </Button> */}
                                    <Button asChild size="lg"  className="bg-primary text-destructive-foreground hover:text-white hover:bg-primary">
                                        <Link to={"/contact-us"} className='text-white'>Enquire Now</Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="md:order-1 order-0 relative z-[1] after:absolute after:bottom-0 after:left-0 after:z-[-1] after:w-full after:h-full after:max-h-[200px] ">
                                <SlideDown delay={2}>
                                <img src={car} alt="car-img" className="h-full w-full object-cover" />
                                </SlideDown>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="relative z-[1] pt-[120px]">
                    <img src={object} alt="object" />
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-[-1] ">
                        <img src={sun} alt="sun" className="animate-up-down" />
                    </div>
                </div>
            </div>
            <div className="absolute top-15 right-[90px] animate-left-right md:block hidden">
                <img src={bard} alt="bard" /> */}
            </div>
        </section>
    )
}

export default Products