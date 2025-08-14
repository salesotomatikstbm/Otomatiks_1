import React, { useState } from 'react'
import DesktopMenu from './desktopMenu'
import MobileMenu from './mobileMenu'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6"
import TopHeader from './topHeader'
import Logo from '@/components/ui/logo'
import StickyHeader from '@/components/ui/stickyHeader'

const HeaderOne = () => {
    const [isSerchActive, setIsSerchActive] = useState(false)
    const [isMobleMenuActive, setIsMobleMenuActive] = useState(false)

    return (
        <StickyHeader>
            <header id="header" className="sticky top-0 transition-[top] duration-300 z-40">
                <div id="header-container">
                    <TopHeader />
                    <div className="[.header-pinned_&]:shadow-md bg-background transition-all duration-300">
                        
                        <div className="w-full px-4 md:px-6 lg:px-8">
                            <div className="flex justify-between items-center max-w-[1400px] mx-auto">
                                
                                {/* Logo */}
                                <Logo className="flex-shrink-0" />

                                {/* Desktop Menu & Contact Button */}
                                <div className="hidden md:flex items-center gap-6">
                                    <DesktopMenu />
                                    <Button 
                                        asChild 
                                        variant="secondary" 
                                        className="bg-primary hover:bg-secondary flex items-center gap-2"
                                    >
                                        <Link to="/contact-us">
                                            Contact Us <FaArrowRight />
                                        </Link>
                                    </Button>
                                </div>

                                {/* Mobile Menu Toggle */}
                                <div className="flex md:hidden items-center">
                                    <button 
                                        onClick={() => setIsMobleMenuActive(true)} 
                                        className="p-2 rounded-md hover:bg-gray-100"
                                        aria-label="Open menu"
                                    >
                                        {/* Hamburger Icon */}
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            fill="none" 
                                            viewBox="0 0 24 24" 
                                            strokeWidth={1.5} 
                                            stroke="currentColor" 
                                            className="w-6 h-6"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" 
                                            />
                                        </svg>
                                    </button>

                                    {/* Mobile Menu Drawer */}
                                    <MobileMenu 
                                        isMobleMenuActive={isMobleMenuActive} 
                                        setIsMobleMenuActive={setIsMobleMenuActive} 
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        </StickyHeader>
    )
}

export default HeaderOne
