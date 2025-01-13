import React, { useState, useEffect } from 'react';
import DesktopMenu from './desktopMenu';
import MobileMenu from './mobileMenu';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import TopHeader from './topHeader';
import SearchForm from './searchForm';
import Logo from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import StickyHeader from '@/components/ui/stickyHeader';

const HeaderOne = () => {
    const [isSerchActive, setIsSerchActive] = useState(false);
    const [isMobleMenuActive, setIsMobleMenuActive] = useState(false);

    useEffect(() => {
        // Ensure overflow-x is hidden on the body for all views
        document.body.style.overflowX = 'hidden';

        // Manage overflow for mobile menu interactions
        if (isMobleMenuActive) {
            document.body.style.overflowY = 'hidden'; // Prevent vertical scrolling when menu is active
        } else {
            document.body.style.overflowY = ''; // Reset vertical scrolling
        }

        return () => {
            // Clean up styles on unmount
            document.body.style.overflowX = '';
            document.body.style.overflowY = '';
        };
    }, [isMobleMenuActive]);

    return (
        <StickyHeader>
            <header id="header" className="sticky top-0 transition-[top] duration-300 z-40">
                <div id="header-container">
                    <TopHeader />
                    <div className="[.header-pinned_&]:shadow-md bg-background transition-all duration-300">
                        <div className="px-5 py-5">
                            <div className="flex justify-between items-center">
                                <div className="flex-shrink-0 mr-5">
                                    <Logo />
                                </div>
                                <div className="flex items-center w-full justify-end">
                                    <DesktopMenu />
                                    <MobileMenu
                                        isMobleMenuActive={isMobleMenuActive}
                                        setIsMobleMenuActive={setIsMobleMenuActive}
                                    />

                                    <div className="flex items-center gap-6">
                                        <div className="cursor-pointer" onClick={() => setIsSerchActive(true)}>
                                            {/* Add a search icon here if needed */}
                                        </div>

                                        {/* Responsive Contact Us Button */}
                                        <Button asChild variant="ghost" className="sm:flex hidden px-4">
                                            <Link to="/contact-us">
                                                Contact Us <FaArrowRight />
                                            </Link>
                                        </Button>

                                        {/* Mobile menu toggle button */}
                                        <div
                                            className="flex xl:hidden flex-col items-end cursor-pointer transition-all duration-500"
                                            onClick={() => setIsMobleMenuActive(true)}
                                        >
                                            <span className="block h-[3px] w-5 bg-muted"></span>
                                            <span className="block h-[3px] w-7.5 bg-muted mt-2"></span>
                                            <span className="block h-[3px] w-5 bg-muted mt-2"></span>
                                        </div>
                                    </div>

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
    );
};

export default HeaderOne;
