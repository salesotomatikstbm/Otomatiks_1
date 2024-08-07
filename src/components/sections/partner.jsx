import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules';

import { partnerData } from '@/lib/fackdata/partnerData'

const Partner = () => {
    return (
        <div>
            <div>
                <div className="container">
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={20}
                        loop={true}
                        centeredSlides={true}
                        autoplay={{
                            delay: 5000,
                        }}
                        wrapperClass='[&_.swiper-slide-active>img]:invert-0'
                        modules={[Autoplay]}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            1280: {
                                slidesPerView: 5,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        {
                            partnerData.map(({ id, src }) => {
                                return (
                                    <SwiperSlide key={id} className='flex justify-center'>
                                        <img 
                                            src={src} 
                                            alt={`partner-${id}`} 
                                            className="invert-[0.5] hover:invert-0 transition-all duration-500 sm:mr-0 mr-4"
                                        />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Partner
