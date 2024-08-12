import { servicesDataTwo } from '@/lib/fackdata/servicesDataTwo'
import React from 'react'
import ServiceCardTwo from './serviceCardTwo'
import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'
import SectionDescription from '@/components/ui/sectionDescription'
import ContactForm1 from '../ContactForm1'
const ServicesTwo = () => {
    return (
        <div className="lg:pb-15 pb-10">
            <div className="container">
                <div className="lg:pl-11">
                <SectionName>Robotics Courses</SectionName>
                <Title size={"3.5xl"} className={"pb-5"}>Lorem ipsum dolor sit amet consectetur adipiscing </Title>
                <SectionDescription>Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dictum facilisis sem. Imperdiet
                            massa turpis sit proin metus volutpat loren ipsum Lorem ipsum dolor sit amet consectetur. Amet
                            lectus mi ultricies dictum</SectionDescription>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-y-7.5 lg:gap-x-[74px] gap-x-5 lg:pt-15 pt-10">
                        {servicesDataTwo.map(({ icon, id, service_details, service_name }) => <ServiceCardTwo key={id} icon={icon} service_name={service_name} service_details={service_details} />)}
                    </div>
                </div>
                <ContactForm1 />
            </div>
        </div>
    )
}

export default ServicesTwo