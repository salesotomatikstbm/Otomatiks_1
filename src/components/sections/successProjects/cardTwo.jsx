import { cn } from '@/lib/utils';
import React from 'react'
import CountUp from 'react-countup';

const CardTwo = ({ icon, title, number, color }) => {
    return (
        <div className="bg-background shadow-3xl rounded-[10px] lg:pl-[70px] pr-3 pl-7.5 lg:pt-[38px] pt-5 lg:pb-12 pb-5 flex justify-center md:justify-normal items-center gap-10 ">
            <i className={cn("text-destructive-foreground", color)}>{icon}</i>
            <div>
                <h2 className="lg:text-[70px] text-5xl font-bold leading-[117%] stroke-primary counter"><CountUp start={0} end={number} enableScrollSpy={true} separator='' />+</h2>
                <h6 className="text-xl font-bold leading-[130%]">{title}</h6>
            </div>
        </div>
    )
}

export default CardTwo