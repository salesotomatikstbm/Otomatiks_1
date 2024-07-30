import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
import Mat from '@/assets/icons/mat';
import BabyBody from '@/assets/icons/baby-body';
import TeddyBear from '@/assets/icons/teddy-bear';

const ServiceCardOne = ({ service_name, service_details, src }) => {
    const renderIcon = (src) => {
        switch (src) {
            case 'mat':
                return <Mat />
            case 'baby-body':
                return <BabyBody />
            case 'teddy-bear':
                return <TeddyBear />

            default:
                break;
        }
    }

    return (
        <div className="service-card rounded-[10px] px-7.5 py-9 bg-transparent hover:bg-background transition-all duration-500 hover:shadow-3xl m-2.5 group/card">
            <i className="text-green-foreground">{renderIcon(src)}</i>
            <h4 className="lg:max-w-[176px] mt-5"><Link to={"/service-details"} className="lg:text-2xl text-xl font-semibold leading-[141%] group-hover/card:text-green-foreground transition-all duration-500 ">{service_name}</Link></h4>
            <div className="card-footer opacity-0 invisible transition-all duration-500 group-hover/card:opacity-100 group-hover/card:visible">
                <p className="mt-[15px] lg:max-w-[223px]">{service_details}</p>
                <Link to={"/service-details"} className="inline-flex items-center gap-2.5 lg:mt-7.5 mt-4 group/btn">
                    <span className="group-hover/btn:text-green-foreground transition-all duration-500">Read More</span>
                    <span className="group-hover/btn:ml-1 text-green-foreground transition-all duration-500"> <FaArrowRight /> </span>
                </Link>
            </div>
        </div>
    )
}

export default ServiceCardOne