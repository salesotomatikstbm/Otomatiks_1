import React from 'react'
import { Link } from 'react-router-dom'
import { FaCalendarDays, FaComments, FaUser } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'
import SlideUp from '@/lib/animations/slideUp'

const CardThree = ({ src, title }) => {
    return (
        <SlideUp delay={2}>
            <div className="shadow-4xl bg-background rounded-[10px] group">
                <img src={src} alt="blog-img-1" />
                <div className="pt-7.5 pb-10 lg:px-10 px-5">
                    <h4><Link to={"/blog-details"} className="lg:text-[28px] sm:text-[26px] text-xl font-bold lg:leading-[148%] sm:leading-[140%] leading-[120%] group-hover:text-secondary-foreground transition-all duration-500">{title}</Link></h4>
                    <div className="lg:mt-10 mt-7">
                        <Button asChild variant={"outline"}>
                            <Link to={"/blog-details"}>Read More</Link>
                        </Button>
                    </div>
                    <ul className="flex gap-7.5 pt-5 flex-wrap">
                        <li className='flex items-center gap-1'> <FaCalendarDays /> <span className="text-[#686868] ml-1">January 19, 2024</span> </li>
                        <li className='flex items-center gap-1'> <FaUser /> <span className="text-[#686868] ml-1">By admin</span> </li>
                        <li className='flex items-center gap-1'> <FaComments /> <span className="text-[#686868] ml-1">Comments (05)</span> </li>
                    </ul>
                </div>
            </div>
        </SlideUp>
    )
}

export default CardThree