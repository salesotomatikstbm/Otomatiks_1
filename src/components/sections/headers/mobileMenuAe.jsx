import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPlus, FaXmark } from "react-icons/fa6";
import logo from "@/assets/images/logo.png";
import { menuList } from '@/lib/fackdata/menuListAe';
import ExtraInfo from './extraInfoae';

const MobileMenu = ({ isMobleMenuActive, setIsMobleMenuActive }) => {
    const [dropdownActive, setDropdownActive] = useState(null);
    const { pathname } = useLocation();

    useEffect(() => {
        setDropdownActive(null);
        setIsMobleMenuActive(false);
    }, [pathname, setIsMobleMenuActive]);

    const handleDropdownClick = (id) => {
        setDropdownActive(dropdownActive === id ? null : id); // Toggle dropdown
    };

    return (
        <div className="block xl:hidden">
            {/* Overlay */}
            <div className={`fixed left-0 top-0 w-full h-full bg-black/30 transition-all ${isMobleMenuActive ? "visible" : "invisible"}`} onClick={() => setIsMobleMenuActive(false)}></div>

            {/* Sidebar */}
            <nav className={`bg-[#066aab] border-l-2 border-l-primary w-full max-w-md min-h-screen h-full overflow-y-auto p-7 shadow-md fixed top-0 z-50 transition-all duration-500 ${isMobleMenuActive ? "right-0" : "-right-full"}`}>
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-1">
                        <img src={logo} alt="logo" />
                    </Link>
                    <div className="bg-[#066aab] w-10 h-10 text-cream-foreground flex items-center justify-center rounded-[4px]" onClick={() => setIsMobleMenuActive(false)}>
                        <FaXmark className="text-white text-xl" />
                    </div>
                </div>

                {/* Menu Items */}
                <ul className="mt-6">
                    {menuList.map(({ dropDownMenu, id, label, path }) => (
                        <li key={id} className="leading-[164%] relative w-full dropdown">
                            <Link
                                to={dropDownMenu && dropDownMenu.length > 0 ? "#" : path}
                                className="font-jost py-2.5 border-b border-b-slate-300 text-[#385469] flex justify-between items-center"
                                onClick={(e) => {
                                    if (dropDownMenu && dropDownMenu.length > 0) {
                                        e.preventDefault();
                                        handleDropdownClick(id);
                                    } else {
                                        setIsMobleMenuActive(false);
                                    }
                                }}
                            >
                                <span className='text-white'>{label}</span>
                                {dropDownMenu && dropDownMenu.length > 0 && (
                                    <FaPlus className={`text-white transition-transform duration-300 ${dropdownActive === id ? "rotate-45" : ""}`} />
                                )}
                            </Link>

                            {/* Dropdown Items */}
                            {dropDownMenu && dropDownMenu.length > 0 && (
                                <ul className={`min-w-56 w-full transition-all duration-500 ${dropdownActive === id ? "max-h-[600px] overflow-auto pt-3 no-scrollbar" : "max-h-0 overflow-hidden"}`}>
                                    {dropDownMenu.map(({ id: subId, label: subLabel, path: subPath }) => (
                                        <li key={subId}>
                                            <Link
                                                to={subPath}
                                                className="text-white font-jost hover:text-secondary-foreground transition-all duration-500 py-2.5 px-6 block border-b border-b-slate-300"
                                                onClick={() => setIsMobleMenuActive(false)}
                                            >
                                                {subLabel}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>

                <ExtraInfo />
            </nav>
        </div>
    );
};

export default MobileMenu;
