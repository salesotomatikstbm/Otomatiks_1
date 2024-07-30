import React from 'react'
import service_details_1 from "@/assets/images/services/service-details-1.png"
import service_details_2 from "@/assets/images/services/service-details-2.png"
import service_details_3 from "@/assets/images/services/service-details-3.png"
import service_details_4 from "@/assets/images/services/service-details-4.png"
import service_details_5 from "@/assets/images/services/service-details-5.png"
import { servicesDataTwo } from '@/lib/fackdata/servicesDataTwo'
import { FaAngleRight, FaAnglesRight } from 'react-icons/fa6'
import Toys from '@/assets/icons/toys'
import Feeder from '@/assets/icons/feeder'
import Car from '@/assets/icons/car'
import SlideUp from '@/lib/animations/slideUp'

const ServiceArtical = () => {
    const renderIcon = (icon) => {
        switch (icon) {
            case 'car':
                return <Car />
            case 'toys':
                return <Toys />
            case 'feeder':
                return <Feeder />

            default:
                break;
        }
    }
    return (
        <section className="lg:pt-15 pt-10">
            <div className="container">
                <SlideUp>
                    <img src={service_details_1} alt="details" />
                </SlideUp>
                <SlideUp delay={2}>
                    <div className="lg:pt-7.5 pt-5 ">
                        <h4 className="lg:text-3xl text-2xl lg:leading-[148%] leading-[130%] font-bold  font-nunito">Discover the power of education Knowledge is the key</h4>
                        <p className="lg:pt-7 pt-4">There are many variations passages a This category focariatio of deign Redefining the an the  concept of living This category focuses on the design and construction of bu a arrangement furniture and decorative elements within them focariatio of deign There are many variations passages a This category focariatio of deign Redefining the an the  concept of living This category focuses on the design and construction of bu a arrangement furniture</p>
                        <div className="lg:pt-7.5 pt-5 flex flex-col lg:flex-row justify-between lg:gap-7.5 lg:gap-y-[22px] gap-4">
                            <div className="flex flex-col lg:gap-y-[22px] gap-4">
                                <p className="flex items-center gap-[15px]"><i className="text-secondary-foreground"><FaAngleRight /></i> Education is the key to success. It empowers individuals with knowledge</p>
                                <p className="flex items-center gap-[15px]"><i className="text-secondary-foreground"><FaAngleRight /></i> Education opens doors to opportunities, fosters critical thinking, and promote</p>
                            </div>
                            <div className="flex flex-col lg:gap-y-[22px] gap-4">
                                <p className="flex items-center gap-[15px]"><i className="text-secondary-foreground"><FaAngleRight /></i> Education is the key to success. It empowers individuals with knowledge</p>
                                <p className="flex items-center gap-[15px]"><i className="text-secondary-foreground"><FaAngleRight /></i> Education opens doors to opportunities, fosters critical thinking, and promote</p>
                            </div>
                        </div>
                        <div className="mt-10 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7.5">
                            <div>
                                <img src={service_details_2} alt="img-1" className="w-full" />
                            </div>
                            <div>
                                <img src={service_details_3} alt="img-1" className="w-full" />
                            </div>
                            <div>
                                <img src={service_details_4} alt="img-1" className="w-full" />
                            </div>
                        </div>
                        <div className="lg:pt-[70px] pt-10 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7.5">
                            {servicesDataTwo.slice(0, 3).map(({ icon, id, service_details, service_name }) => {
                                return (
                                    <div key={id} className="bg-warm rounded-[10px] lg:p-7.5 p-4 ">
                                        <div className="bg-background rounded-[10px] p-3.5 lg:max-w-[88px] max-w-[70px] lg:max-h-[88px] max-h-[70px]">
                                            <i className="text-green-foreground">{renderIcon(icon)}</i>
                                        </div>
                                        <div className="lg:mt-5 pt-3">
                                            <h4 className="text-2xl font-semibold leading-[140%]">{service_name}</h4>
                                            <p className="lg:pt-[18px] pt-3">{service_details}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </SlideUp>
                <div className="pt-10">
                    <SlideUp delay={3}>
                        <div className="max-w-[790px]">
                            <h4 className="text-2xl font-semibold leading-[140%]">Service all details</h4>
                            <p className="mt-[18px]">There are many variations passages a This category focariatio of deign Redefining the an the  concept of living This category focuses on the design and construction of bu a arrangement furniture and decorative elements within them focariatio of deign</p>
                        </div>
                    </SlideUp>
                    <SlideUp delay={4}>
                        <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-7.5 lg:pt-7.5 pt-5">
                            <ul className="flex lg:gap-y-7.5 gap-y-5 flex-col">
                                <li className="flex items-center gap-[15px] text-[#686868]"><i className="text-secondary-foreground"> <FaAnglesRight /> </i> <span>It plays a vital role in shaping the future generation and promoting</span> </li>
                                <li className="flex items-center gap-[15px] text-[#686868]"><i className="text-secondary-foreground"> <FaAnglesRight /> </i> <span>Education encompasses formal learning in schools, colleges, and universities</span> </li>
                                <li className="flex items-center gap-[15px] text-[#686868]"><i className="text-secondary-foreground"> <FaAnglesRight /> </i> <span>Education opens doors to opportunities, fosters critical thinking, and promote</span> </li>
                                <li className="flex items-center gap-[15px] text-[#686868]"><i className="text-secondary-foreground"> <FaAnglesRight /> </i> <span>Man encompasses formal learning in schools, colleges, and universities</span> </li>
                            </ul>
                            <div>
                                <img src={service_details_5} alt="service-details-5" />
                            </div>
                        </div>
                    </SlideUp>
                </div>
            </div>
        </section>
    )
}

export default ServiceArtical