import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import SocalIcons from '@/components/ui/socalIcons';

const TopHeader = () => {
    return (
        <div id="top-header" className="bg-[#066aab] sm:block hidden">
            <div className="container">
                <div className="flex lg:flex-row flex-col justify-between items-center gap-2 py-[13px]">
                    <div>
                        <ul className="flex gap-7.5">
                            <li className='text-cream-foreground flex items-center gap-4'>
                                <FaPhone /> <Link to={"#"}>+91 90432 09448</Link>
                            </li>
                            <li className='text-cream-foreground flex items-center gap-4'>
                                <FaEnvelope /> <Link to={"#"}>support@otomatiks.in</Link>
                            </li>
                            {/* <li className='text-cream-foreground flex items-center gap-4'>
                                <FaLocationDot /> <span>Vellore-632006</span>
                            </li> */}
                        </ul>
                    </div>
                    <div>
                        <SocalIcons className={"text-xs"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader