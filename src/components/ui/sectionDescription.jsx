import SlideUp from '@/lib/animations/slideUp'
import { cn } from '@/lib/utils'
import React from 'react'

const SectionDescription = ({ children, className }) => {
  return (
    <SlideUp delay={2}>
      <div className={cn("", className)}>
        {children}
      </div>
    </SlideUp>
  )
}

export default SectionDescription
