import React from 'react'
import SectionName from '../ui/sectionName'
import Title from '../ui/title'

import ServiceCardTwo from './course/serviceCardTwo'
import pencil_rocket from "@/assets/images/shapes/pencil-rocket.png"
import { servicesDataTwo } from '@/lib/fackdata/servicesDataTwo'

const Programs = () => {
  return (
    <section className="lg:pb-15 pb-10 relative">
    <div className="container">
        <div className="text-center flex flex-col items-center">
            <SectionName className={""}>Empowering Communities through CSR Education</SectionName>
            <Title size={"3.5xl"} className={"lg:max-w-[830px]"}>Our mission is to inspire and educate the next generation in STEM fields.</Title>
        </div>
        <div className="lg:pl-11">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-y-7.5 lg:gap-x-[74px] gap-x-5 lg:pt-15 pt-10">
                {
                    servicesDataTwo.slice(0, 5).map(({icon, id, service_details, service_name}) => <ServiceCardTwo key={id} icon={icon} service_name={service_name} service_details={service_details} />)
                }
            </div>
        </div>
    </div>

    <div className="absolute top-15 right-11 z-[-1] lg:max-w-full max-w-36 md:block hidden animate-left-right">
        <img src={pencil_rocket} alt="pencil" className="w-full h-auto" />
    </div>

</section>
  )
}

export default Programs