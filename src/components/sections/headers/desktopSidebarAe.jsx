import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import Logo from '@/components/ui/logo'
import SocalIcons from '@/components/ui/socalIcons'
import { FaArrowRight, FaEnvelope, FaLocationDot, FaPhone, FaXmark } from 'react-icons/fa6'

const DesktopSidebar = ({ active, setActive }) => {
    return (
        <div className="xl:block hidden">
            <div className={`fixed left-0 top-0 w-full h-full bg-black/30 transition-all ${active ? "visible" : "invisible"}`} onClick={() => setActive(false)}></div>
            <nav className={`bg-warm border-l-2 border-l-primary w-full max-w-md min-h-screen h-full overflow-y-auto p-7 shadow-md fixed  ${active ? "right-0" : "-right-full"} top-0 z-50 transition-all duration-500`}>
                <div className="flex justify-between items-center">
                    <Logo />
                    <div className="bg-primary w-10 h-10 text-cream-foreground flex items-center justify-center rounded-[4px] left-4 cursor-pointer " onClick={() => setActive(false)}>
                        <FaXmark className="text-xl" />
                    </div>
                </div>
                <div className="mt-6">
                    <p>Our robotics classes are designed to help you discover the potential of this exciting field with the guidance of our experienced instructors.</p>
                </div>


                <div className="mt-5">
                    <div>
                        <h4 className="text-xl font-bold text-[#385469]">Contact Info</h4>
                        <ul className="mt-5 flex flex-col gap-[15px]">
                            <li className='flex items-center'>
                                <FaPhone className='text-primary-foreground' /> <a href="" className="ml-2.5">+971 52 883 4358</a>
                            </li>
                            <li className='flex items-center'>
                                <FaEnvelope className='text-primary-foreground' /> <a href="" className="ml-2.5">uae@otomatiks.com</a>
                            </li>
                            <li className='flex items-center'>
                                <FaLocationDot className='text-primary-foreground' /> <span className="ml-2.5">Dubai</span>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-5">
                        <Button asChild className="text-cream-foreground w-full">
                            <Link to={"/contact-us"}>Contact Us <FaArrowRight /> </Link>
                        </Button>
                    </div>
                    <SocalIcons prentClass={"mt-6"} className={"w-11 h-11 text-muted-foreground bg-background hover:text-cream-foreground"} />
                </div>

            </nav>
        </div>
    )
}

export default DesktopSidebar