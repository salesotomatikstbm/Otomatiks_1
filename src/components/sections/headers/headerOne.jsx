import React, { useState } from 'react'
import DesktopMenu from './desktopMenu'
import MobileMenu from './mobileMenu'
import logo from "@/assets/images/logo.png"
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { FaMagnifyingGlass, FaArrowRight } from "react-icons/fa6";
import TopHeader from './topHeader'
import SearchForm from './searchForm'
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
                        <div className="container py-5 ">
                            <div className="flex justify-between items-center ">
                                <Logo />
                                <div className="flex items-center">
                                    <DesktopMenu />
                                    <MobileMenu isMobleMenuActive={isMobleMenuActive} setIsMobleMenuActive={setIsMobleMenuActive} />

                                    <div className="flex items-center gap-6 ">
                                        <div className="ml-16 cursor-pointer" onClick={() => setIsSerchActive(true)}>
                                            <FaMagnifyingGlass className='text-xl' />
                                        </div>
                                        <Button asChild variant="ghost" className="sm:flex hidden">
                                            <Link to={"/contact-us"}> Get A Quote <FaArrowRight /></Link>
                                        </Button>

                                        <div className="flex xl:hidden flex-col items-end cursor-pointer transition-all duration-500" onClick={() => setIsMobleMenuActive(true)}>
                                            <span className="block h-[3px] w-5 bg-muted"></span>
                                            <span className="block h-[3px] w-7.5 bg-muted mt-2"></span>
                                            <span className="block h-[3px] w-5 bg-muted mt-2"></span>
                                        </div>
                                    </div>

                                    <SearchForm isSerchActive={isSerchActive} setIsSerchActive={setIsSerchActive} />
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