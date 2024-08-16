import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';

import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'
import ServiceCardOne from './serviceCardOne'
import man_img from "@/assets/images/shapes/man.png"
import { Button } from '@/components/ui/button'
import { FaArrowRight } from 'react-icons/fa6'
import { servicesDataOne } from '@/lib/fackdata/servicesDataOne';
import SectionDescription from '@/components/ui/sectionDescription';

const ServicesOne = () => {
    const pagination = {
        clickable: true,
        el: ".service-pagination"
    }
    return (
        <section className="pt-15 pb-15 relative bg-warm lg:bg-transparent services">
            <div className="container">
                <div className="relative after:absolute after:right-0 after:top-0 after:lg:bg-warm after:bg-transparent after:w-[calc(100%-279px)] after:h-[calc(100%-120px)] after:rounded-[10px] after:z-[-1]">
                    <div className="flex lg:flex-row flex-col justify-between lg:items-center">
                        <div className="flex-shrink-0 flex-grow-0 basis-auto lg:w-[30%]">
                            <SectionName>Robotics Courses</SectionName>
                            <Title size={"3.5xl"}>Lorem ipsum dolor sit amet consectetur</Title>
                        </div>
                        <div className="flex-shrink-0 flex-grow-0 basis-auto lg:w-[50%]">
                            <SectionDescription>Lorem ipsum dolor sit amet consectetur adipiscing elit platea pharetra, nostra mattis hendrerit proin mollis pretium facilisi in, ligula volutpat </SectionDescription>
                        </div>

                    </div>
                    <div className="lg:flex justify-between">
                        <div className="flex-shrink-0 flex-grow-0 basis-auto lg:w-[25%]">
                            <div className="relative lg:mt-7.5 mt-5">
                                <div className="service-pagination"></div>
                                <div className="lg:mt-10 mt-5">
                                    <Button asChild variant="outline" className="text-foreground border-secondary">
                                        <Link to="/services">Read More <FaArrowRight className='text-secondary-foreground transition-all duration-300 group-hover:text-cream-foreground' /></Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="flex-shrink-0 flex-grow-0 basis-auto lg:w-[70%] mt-6 lg:mt-0">
                            <div>
                                <Swiper
                                    spaceBetween={2}
                                    pagination={pagination}
                                    centeredSlides={true}
                                    loop={true}
                                    autoplay={{
                                        delay: 5000,
                                    }}
                                    breakpoints={{
                                        320: {
                                            slidesPerView: 1,
                                        },
                                        576: {
                                            slidesPerView: 2,
                                        },
                                        10240: {
                                            slidesPerView: 3,
                                        },
                                        1290: {
                                            slidesPerView: 3,
                                        }
                                    }}
                                    modules={[Pagination, Autoplay]}
                                    wrapperClass='[&_.swiper-slide-active>.service-card]:bg-background [&_.swiper-slide-active_.card-footer]:opacity-100 [&_.swiper-slide-active_.card-footer]:visible '
                                >
                                    {
                                        servicesDataOne.map(({id, service_details, service_name, src}) => <SwiperSlide key={id}><ServiceCardOne service_details={service_details} service_name={service_name} src={src} /></SwiperSlide>)
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- shap start --> */}
            <div className="absolute left-4 bottom-3 animate-left-right sm:block hidden">
                <img src={man_img} alt="img" />
            </div>
            {/* <!-- shap end --> */}
        </section>
    )
}

export default ServicesOne