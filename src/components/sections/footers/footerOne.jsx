import React from 'react'
import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Logo from '@/components/ui/logo'
import SocalIcons from '@/components/ui/socalIcons'
import CopyRight from './copyRight'
import ScrollUp from './scrollUp'
import SlideUp from '@/lib/animations/slideUp'

const FooterOne = () => {
    return (
        <footer className="pt-[70px] relative">
            <div className="container">
                <div className="grid lg:grid-cols-[370px_auto_auto] sm:grid-cols-2 grid-cols-1 justify-between gap-7.5">
                    <SlideUp delay={2}>
                        <Logo />
                        <p className="pt-4">Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dictum facilisi Imperdiet massa turpis sit proin loren ipsum</p>
                        <SocalIcons prentClass={"gap-5 pt-7.5"} className={"w-9 h-9 bg-warm text-muted-foreground hover:text-cream-foreground hover:bg-green"} />
                    </SlideUp>

                    <SlideUp delay={3}>
                        <h3 className="text-2xl font-semibold">Pages</h3>
                        <ul className="flex flex-col gap-[15px] pt-5 min-w-[203px]">
                            <li><Link to="/about-us" className="text-[#686868] transition-all duration-500 hover:ml-1 hover:text-primary-foreground">About Us</Link></li>
                            <li><Link to="/services" className="text-[#686868] transition-all duration-500 hover:ml-1 hover:text-primary-foreground">Our Courses</Link></li>
                            <li><Link to="/blog" className="text-[#686868] transition-all duration-500 hover:ml-1 hover:text-primary-foreground">School Program</Link></li>
                            <li><Link to="/faq" className="text-[#686868] transition-all duration-500 hover:ml-1 hover:text-primary-foreground">Blogs</Link></li>
                            
                        </ul>
                    </SlideUp>

                    <SlideUp delay={4}>
                        <h3 className="text-2xl font-semibold">Contact</h3>
                        <ul className="flex flex-col gap-[15px] pt-5">
                           
                            <li>
                                <p className="text-[#686868] flex items-center gap-4">
                                    <span className="w-11 h-11 rounded-full border border-gray-200 flex justify-center items-center text-green-foreground"><FaEnvelope /></span> <Link to="">support@otomatiks.in</Link>
                                </p>
                            </li>
                            <li>
                                <p className="text-[#686868] flex items-center gap-4">
                                    <span className="w-11 h-11 rounded-full border border-gray-200 flex justify-center items-center text-green-foreground"><FaPhone /></span> <Link to="">+91 90432 09448</Link>
                                </p>
                            </li>
                            <li>
                                <p className="text-[#686868] flex items-center gap-4">
                                    <span className="w-11 h-11 rounded-full border border-gray-200 flex justify-center items-center text-green-foreground"><FaLocationDot /></span> <span className="max-w-[168px]">Otomatiks Activity Centre, No. A2/36, 12th East Cross Road Opp B&B Golden Gate Apartment, Gandhi Nagar, Vellore-632006, Tamil Nadu 632006</span>
                                </p>
                            </li>
                        </ul>
                    </SlideUp>
                </div>
                <CopyRight />
            </div>
            <ScrollUp />
        </footer>
    )
}

export default FooterOne