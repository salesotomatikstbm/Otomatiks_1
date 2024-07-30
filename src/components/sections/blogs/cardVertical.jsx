import React from 'react'
import { Link } from 'react-router-dom'
import { FaCalendarDays, FaRegUser, FaArrowRight } from "react-icons/fa6";
import SlideUp from '@/lib/animations/slideUp';

const CardVertical = ({ title, date, author, thumb }) => {
    return (
        <SlideUp delay={2}>
            <div className="bg-background rounded-[10px] flex flex-col items-start gap-5 shadow-4xl h-full">
                <div className="w-full">
                    <img src={thumb} alt="blog-img-3" className="w-full" />
                </div>
                <div className="px-10 pb-10">
                    <div className="lg:pb-5 md:pb-4 pb-3 flex items-center gap-5">
                        <p><FaCalendarDays className="text-secondary-foreground mr-1 inline-block" /><small>{date}</small></p>
                        <p><FaRegUser className="text-secondary-foreground mr-1 inline-block" /><small>By {author}</small></p>
                    </div>
                    <h3 ><Link to="/blog-details" className="md:text-2xl text-xl md:leading-[141%] leading-[120%] font-semibold hover:text-secondary-foreground transition-all duration-500">{title}</Link></h3>
                    <Link to="/blog-details" className="inline-flex items-center gap-2.5 lg:mt-6 mt-4 group/btn">
                        <span className="group-hover/btn:text-secondary-foreground transition-all duration-500">Read More</span>
                        <span className="group-hover/btn:ml-1 group-hover/btn:text-secondary-foreground transition-all duration-500"> <FaArrowRight /></span>
                    </Link>
                </div>
            </div>
        </SlideUp>
    )
}

export default CardVertical