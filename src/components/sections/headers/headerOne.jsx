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
            <header id="header " className="sticky top-0 transition-[top] duration-300 z-40">
                <div id="header-container">
                    <TopHeader />
                    <div className="[.header-pinned_&]:shadow-md bg-background transition-all duration-300">
                        <div className="container py-5">
                            <div className="flex justify-between items-center">
                                {/* Logo */}
                                <Logo className="flex-shrink-0" />

                                {/* Menu + Buttons */}
                                <div className="flex items-center">
                                    {/* Mobile Menu Trigger */}
                                    <div 
                                        className="flex lg:hidden flex-col items-end cursor-pointer transition-all duration-500" 
                                        onClick={() => setIsMobleMenuActive(true)}
                                    >
                                        <span className="block h-[3px] w-5 bg-muted"></span>
                                        <span className="block h-[3px] w-7.5 bg-muted mt-2"></span>
                                        <span className="block h-[3px] w-5 bg-muted mt-2"></span>
                                    </div>

                                    {/* Mobile Menu */}
                                    <MobileMenu 
                                        isMobleMenuActive={isMobleMenuActive} 
                                        setIsMobleMenuActive={setIsMobleMenuActive} 
                                    />

                                    {/* Desktop Menu */}
                                    <div className="hidden lg:flex items-center gap-6">
                                        <DesktopMenu />
                                        <Button 
                                            asChild 
                                            variant="secondary" 
                                            className="bg-primary hover:bg-secondary"
                                        >
                                            <Link to="/contact-us">Contact Us <FaArrowRight /></Link>
                                        </Button>
                                    </div>

                                    {/* Search Form */}
                                    <SearchForm 
                                        isSerchActive={isSerchActive} 
                                        setIsSerchActive={setIsSerchActive} 
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
