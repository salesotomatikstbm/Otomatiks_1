import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6'
import Logo from '@/components/ui/logo'
import SocalIcons from '@/components/ui/socalIcons'
import CopyRight from './copyRight'
import apple from "@/assets/images/shapes/bot.png"
import scissors from "@/assets/images/shapes/bot.png"
import ScrollUp from './scrollUp'
import Input from '@/components/ui/input'
import SlideUp from '@/lib/animations/slideUp'

const FooterTwo = () => {
    return (
        <footer className="pt-20 bg-[#066aab] relative">
            <div className="container">
                <div className="grid lg:grid-cols-[300px_auto_auto_268px] sm:grid-cols-2 grid-cols-1 gap-x-7.5 gap-y-10 justify-between">

                    <SlideUp delay={2}>
                        <Logo className="text-cream-foreground" />
                        <div className="mt-10">
                            <p className=" text-cream-foreground ">Shape Your Child’s Future. 
Our robotics classes are designed to help you discover the potential of this exciting field with the guidance of our experienced instructors.
</p>
                            <SocalIcons prentClass={"gap-5 lg:pt-7.5 pt-5"} className={"w-9 h-9 bg-primary border-none hover:bg-secondary"} />
                        </div>
                    </SlideUp>

                    <SlideUp delay={3}>
                        <div className="inline-block">
                            <h3 className="text-2xl font-semibold text-cream-foreground inline-block">Pages</h3>
                            <span className="block w-[100%] h-[1px] mt-2 bg-background relative after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:bg-background after:h-1.5 after:w-1.5 after:rounded-full"></span>
                        </div>
                        <ul className="flex flex-col lg:gap-[15px] gap-2.5 lg:pt-7.5 pt-5 min-w-[203px]">
                            <li><Link to="/about-us" className="text-cream-foreground transition-all duration-500 hover:ml-[5px] hover:text-primary-foreground">About Us</Link></li>
                            <li><Link to="/robotics-coding-courses" className="text-cream-foreground transition-all duration-500 hover:ml-[5px] hover:text-primary-foreground">Courses</Link></li>
                            <li><Link to="/robotics-coding-school-curriculum" className="text-cream-foreground transition-all duration-500 hover:ml-[5px] hover:text-primary-foreground">School Curriculum</Link></li>
                            <li><Link to="/franchise" className="text-cream-foreground transition-all duration-500 hover:ml-[5px] hover:text-primary-foreground">Franchise</Link></li>
                            <li><Link to="/robotica" className="text-cream-foreground transition-all duration-500 hover:ml-[5px] hover:text-primary-foreground">Robotica</Link></li>
                            <li><Link to="/blog" className="text-cream-foreground transition-all duration-500 hover:ml-[5px] hover:text-primary-foreground">Blogs</Link></li>
                            <li><Link to="/contact-us" className="text-cream-foreground transition-all duration-500 hover:ml-[5px] hover:text-primary-foreground">Contact Us</Link></li>
                        </ul>
                    </SlideUp>

                    <SlideUp delay={4}>
                        <div className="inline-block">
                            <h3 className="text-2xl font-semibold text-cream-foreground">India Operations</h3>
                            <span className="block w-[100%] h-[1px] mt-2 bg-background relative after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:bg-background after:h-1.5 after:w-1.5 after:rounded-full"></span>
                        </div>

                        <ul className="flex flex-col lg:gap-[15px] gap-2.5 lg:pt-7.5 pt-5">
                           
                            <li className="text-cream-foreground flex gap-4">
                                <FaEnvelope className='mt-1.5' /> <Link to="/contact-us">support@otomatiks.in</Link>
                            </li>
                            <li className="text-cream-foreground flex gap-4">
                                <FaPhone className='mt-1.5' /> <Link to="/contact-us">+91 90432 09448</Link>
                            </li>
                            <li className="text-cream-foreground flex gap-4">
                                <FaLocationDot className='mt-1.5' /> <span className="max-w-[168px]">
                                A2, 36, 12th cross road, Suthanthira Ponvizha Nagar, Gandhi Nagar, Vellore, Tamil Nadu 632006
</span>
                            </li>
                        </ul>
                    </SlideUp>

                    <SlideUp delay={5}>
                        <div className="inline-block">
                            <h3 className="text-2xl font-semibold text-cream-foreground inline-block">Global Operations</h3>
                            <span className="block w-[100%] h-[1px] mt-2 bg-background relative after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:bg-background after:h-1.5 after:w-1.5 after:rounded-full"></span>
                        </div>
                        <div className="lg:pt-7.5 pt-5">
                        <ul className="flex flex-col lg:gap-[15px] gap-2.5 ">
                           
                           <li className="text-cream-foreground flex gap-4">
                               <FaEnvelope className='mt-1.5' /> <Link to="/contact-us">uae@otomatiks.com</Link>
                           </li>
                           <li className="text-cream-foreground flex gap-4">
                               <FaPhone className='mt-1.5' /> <Link to="/contact-us">+971 56 211 8618                               </Link>
                           </li>
                           <li className="text-cream-foreground flex gap-4">
                               <FaLocationDot className='mt-1.5' /> <span className="max-w-[168px]">Otomatiks Training Centre, #608, Fortune Executive Tower, Cluster N, Jumeirah Lake Towers (JLT), Dubai.</span>
                           </li>
                       </ul>
                        </div>
                    </SlideUp>
                    {/* <!-- Newsletter end --> */}
                </div>
                <CopyRight color={"text-cream-foreground opacity-80"} />
            </div>
            <ScrollUp />
            <div>
                <div className="absolute right-[68px] top-[40%] animate-up-down lg:hidden">
                    <img src={apple} alt="img" />
                </div>
                <div className="absolute left-[45%] lg:top-1/2 top-[40%]">
                    {/* <img src={scissors} alt="img" /> */}
                </div>
            </div>
        </footer>
    )
}

export default FooterTwo