import React from 'react'
import { Link } from 'react-router-dom'
import logo from "@/assets/images/logo.svg" // Ensure path is correct
import { cn } from '@/lib/utils'

const Logo = ({ className }) => {
  return (
    <Link 
      to="/" 
      className={cn("flex items-center gap-1 shrink-0", className)}
    >
      <img 
        src={logo} 
        alt="Otomatiks Logo" 
        className="h-24 w-auto object-contain" // Increased height from h-10 to h-14
      />
      {/* <span className="font-bold text-3xl">Otomatiks</span> */}
    </Link>
  )
}

export default Logo
