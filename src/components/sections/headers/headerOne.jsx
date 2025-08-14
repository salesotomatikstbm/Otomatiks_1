import React, { useState } from 'react'
import DesktopMenu from './desktopMenu'
import MobileMenu from './mobileMenu'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6"
import TopHeader from './topHeader'
import SearchForm from './searchForm'
import Logo from '@/components/ui/logo'
import StickyHeader from '@/components/ui/stickyHeader'

const HeaderOne = () => {
    const [isSerchActive, setIsSerchActive] = useState(false)
    const [isMobleMenuActive, setIsMobleMenuActive] = useState(false)

    return (
        <StickyHeader>
            {/* Removed trailing space from id */}
            <header id="header" className="sticky top-0 transition-[top] duration-300 z-40">
                <div id="header-container">
                    <TopHeader />
                    <div className="[.header-pinned_&]:shadow-md bg-background transition-all duration-300">



                   <div className="w-full px-4 md:px-6 lg:px-8">
    <div className="flex justify-between items-center max-w-[1400px] mx-auto">
        {/* Logo */}
        <Logo className="flex-shrink-0" />

        {/* Menu + Buttons */}
        <div className="flex items-center gap-4">
            {/* Desktop Menu */}
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

            {/* Mobile Menu */}
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
