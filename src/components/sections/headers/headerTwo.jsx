import Logo from '@/components/ui/logo'
import React, { useState } from 'react'
import SearchForm from './searchForm'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import DesktopMenu from './desktopMenu'
import MobileMenu from './mobileMenu'
import StickyHeader from '@/components/ui/stickyHeader'
import DesktopSidebar from './desktopSidebar'

const HeaderTwo = () => {
    const [isSerchActive, setIsSerchActive] = useState(false)
    const [isMobleMenuActive, setIsMobleMenuActive] = useState(false)

    return (
        <StickyHeader>
            <header id="header" className="sticky top-0 transition-[top] duration-300 z-40">
                <div id="header-container" className="absolute top-0 left-0 w-full z-40">
                    <div className="container lg:pt-5 lg:pb-5 py-6 lg:py-0 px-10 bg-background relative border-b-8 border-b-primary rounded-br-[10px] rounded-bl-[10px] shadow-md">

                        <div className="flex items-center justify-between">
                            <Logo />
                            <DesktopMenu />
                            <MobileMenu isMobleMenuActive={isMobleMenuActive} setIsMobleMenuActive={setIsMobleMenuActive} />
                            <div>
                                {/* <!-- search, toggle and contact btn start --> */}
                                <div className="flex items-center gap-6 ">
                                    <div className="ml-10 cursor-pointer" onClick={() => setIsSerchActive(true)}>
                                        <FaMagnifyingGlass className='text-xl' />
                                    </div>
                                    <p className="h-11 w-[1px] bg-muted xl:block hidden"></p>
                                    <div>
                                        {/* <!-- for desktop --> */}
                                        
                                        <div className="xl:flex hidden flex-col items-end cursor-pointer transition-all duration-500" onClick={() => setIsMobleMenuActive(true)}>
                                            <span className="block h-[3px] w-5 bg-muted"></span>
                                            <span className="block h-[3px] w-7.5 bg-muted mt-2"></span>
                                            <span className="block h-[3px] w-5 bg-muted mt-2"></span>
                                        </div>
                                        {/* <!-- for desktop --> */}

                                        {/* <!-- for tab and mobile --> */}
                                        <div className="flex xl:hidden flex-col items-end cursor-pointer transition-all duration-500" onClick={() => setIsMobleMenuActive(true)}>
                                            <span className="block h-[3px] w-5 bg-muted"></span>
                                            <span className="block h-[3px] w-7.5 bg-muted mt-2"></span>
                                            <span className="block h-[3px] w-5 bg-muted mt-2"></span>
                                        </div>
                                        {/* <!-- for tab and mobile --> */}
                                    </div>
                                </div>

                                <SearchForm isSerchActive={isSerchActive} setIsSerchActive={setIsSerchActive} className={"lg:h-full md:h-full h-full"} />
                            </div>
                        </div>
                        <DesktopSidebar active={isMobleMenuActive} setActive={setIsMobleMenuActive} />
                    </div>
                </div>
            </header>
        </StickyHeader>
    )
}

export default HeaderTwo