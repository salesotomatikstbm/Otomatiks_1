import React from 'react'
import SlideUp from '@/lib/animations/slideUp'
import { cn } from '@/lib/utils'

const Title = ({ children, size, className }) => {

    // 7.5xl = 70px
    // 6xl = 60px
    // 5xl = 48px
    // 4xl = 36px
    // 3.5xl = 32px


    if (size === "7.5xl") {
        return (
            <SlideUp delay={2}>
                <h1 className={cn(`xl:text-[70px] lg:text-6xl md:text-5xl text-4xl font-bold xl:leading-[128%] lg:leading-[125%] md:leading-[120%]`, className)}>
                    {children}
                </h1>
            </SlideUp>
        )
    }
    if (size === "2xl") {
        return (
            <h5 className={cn(`font-extrabold text-muted-foreground lg:text-2xl md:text-xl text-xl md:leading-[140%]`, className)}>{children}</h5>
        )
    }
    if (size === "3.5xl") {
        return (
            <SlideUp delay={2}>
                <h2 className={cn(`font-bold lg:text-[32px] md:text-[28px] text-2xl lg:leading-[130%] md:leading-[120%] leading-[110%]`, className)}>
                    {children}
                </h2>
            </SlideUp>
        )
    }



}

export default Title