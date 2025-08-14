import React from 'react'
import { Link } from 'react-router-dom'
import logomobile from "@/assets/images/logo.png" 
import { cn } from '@/lib/utils'

const Logo = ({ className }) => {
  return (
    <Link 
      to="/" 
      className={cn(
        "flex items-center gap-3 md:gap-4 shrink-0", 
        className
      )}
    >
      <img 
        src={logomobile} 
        alt="Otomatiks Logo" 
        className="h-16 w-auto object-contain"
      />
    </Link>
  )
}

export default Logo
