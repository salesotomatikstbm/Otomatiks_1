import React from 'react'
import { cn } from '@/lib/utils'
import SlideUp from '@/lib/animations/slideUp'

const SectionName = ({ className, children }) => {
  return (
    <SlideUp>
      <p className={cn("text-secondary-foreground font-bubblegum-sans text-[19px]", className)}>{children}</p>
    </SlideUp>
  )
}

export default SectionName