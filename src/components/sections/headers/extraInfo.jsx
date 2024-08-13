import SocalIcons from '@/components/ui/socalIcons';
import React from 'react'
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";

const ExtraInfo = () => {
    return (
        <div className="mt-5">
            <div className="mt-5 mb-6">
                <a href="/contact-us" className="bg-primary text-cream-foreground rounded-md flex items-center justify-center sm:justify-start gap-2.5 py-2 px-4 w-full sm:w-auto btn after:bg-green">
                    Contact Us 
                    <span>
                        <i className="fa-solid fa-arrow-right"></i>
                    </span>
                </a>
            </div>
            <div>
                <h4 className="text-xl font-bold text-[#385469]">Contact Info</h4>
                <ul className="mt-5 flex flex-col gap-[15px]">
                    <li className='flex items-center gap-2'>
                        <FaPhone className="text-primary-foreground" /> 
                        <a href="" className="ml-2.5"> +91 90432 09448</a>
                    </li>
                    <li className='flex items-center gap-2'>
                        <FaEnvelope className="text-primary-foreground" /> 
                        <a href="" className="ml-2.5">support@otomatiks.in</a>
                    </li>
                    <li className='flex items-center gap-2'>
                        <FaLocationDot className="text-primary-foreground" /> 
                        <span className="ml-2.5">Vellore-632006</span>
                    </li>
                </ul>
            </div>
            <SocalIcons className={"w-11 h-11 bg-white text-muted-foreground"} />
        </div>
    )
}

export default ExtraInfo;
