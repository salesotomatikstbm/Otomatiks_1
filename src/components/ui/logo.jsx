import React from 'react'
import { Link } from 'react-router-dom'
import logo from "@/assets/images/logo.svg"
import logomobile from "@/assets/images/logo.png"
import { cn } from '@/lib/utils'

const Logo = ({ className }) => {
  return (
    <Link 
      to="/" 
      className={cn(
        "flex items-center gap-3 md:gap-4 lg:gap-5 xl:gap-6 shrink-0", 
        className
      )}
    >
      {/* Mobile Logo */}
      <img 
        src={logomobile} 
        alt="Otomatiks Logo Mobile" 
        className="block md:hidden h-16 w-auto object-contain"
      />

      {/* Desktop Logo */}
      <img 
        src={logo} 
        alt="Otomatiks Logo Desktop" 
        className="hidden md:block h-24 w-auto object-contain"
      />
    </Link>
  )
}

export default Logo
