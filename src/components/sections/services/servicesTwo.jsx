import { servicesDataTwo } from '@/lib/fackdata/servicesDataTwo'
import React from 'react'
import ServiceCardTwo from './serviceCardTwo'

const ServicesTwo = () => {
    return (
        <div className="lg:pb-15 pb-10">
            <div className="container">
                <div className="lg:pl-11">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-y-7.5 lg:gap-x-[74px] gap-x-5 lg:pt-15 pt-10">
                        {servicesDataTwo.map(({ icon, id, service_details, service_name }) => <ServiceCardTwo key={id} icon={icon} service_name={service_name} service_details={service_details} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesTwo