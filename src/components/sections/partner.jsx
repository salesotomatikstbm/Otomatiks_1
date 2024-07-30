import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules';

import { partnerData } from '@/lib/fackdata/partnerData'

const Partner = () => {
    return (
        <div className="lg:pt-15 pt-10">
            <div className="lg:pt-[120px] pt-20">
            {/* bg-warm  */}
                <div className="container">
                    <Swiper
                        slidesPerView={5}
                        loop={true}
                        centeredSlides={true}
                        autoplay={{
                            delay: 5000,
                        }}
                        wrapperClass='[&_.swiper-slide-active>img]:invert-0'
                        modules={[Autoplay]}
                    >
                        {
                            partnerData.map(({ id, src }) => {
                                return (
                                    <SwiperSlide key={id} className='flex justify-center'>
                                        <img src={src} alt={`partner-${id}`} className="invert-[0.5] hover:invert-0 transition-all duration-500" />
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