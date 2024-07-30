import SlideUp from '@/lib/animations/slideUp'
import { cn } from '@/lib/utils'
import React from 'react'

const SectionDescription = ({ children, className }) => {
    return (
        <SlideUp delay={2}>
            <p className={cn("", className)}>{children}</p >
        </SlideUp>
    )
}

export default SectionDescription