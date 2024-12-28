import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPlus, FaXmark } from "react-icons/fa6";
import logo from "@/assets/images/logo.png";
import { menuList } from '@/lib/fackdata/menuList';
import ExtraInfo from './extraInfo';

const MobileMenu = ({ isMobleMenuActive, setIsMobleMenuActive }) => {
    const [dropdownActive, setDropdownActive] = useState(null);
    const { pathname } = useLocation();

    useEffect(() => {
        setDropdownActive(null);
        setIsMobleMenuActive(false);
    }, [pathname]);

    // Function to handle dropdown toggle
    const handleDropdownClick = (id) => {
        setDropdownActive(dropdownActive === id ? null : id); // Toggle dropdown
    };

    return (
        <div className="block xl:hidden ">
            <div className={`fixed left-0 top-0 w-full h-full bg-black/30 transition-all ${isMobleMenuActive ? "visible" : "invisible"}`}></div>
            <nav className={`bg-[#066aab] border-l-2 border-l-primary w-full max-w-md min-h-screen h-full overflow-y-auto p-7 shadow-md fixed ${isMobleMenuActive ? "right-0" : "-right-full"} top-0 z-50 transition-all duration-500`}>
                <div className="flex justify-between items-center">
                    <a href="" className="flex items-center gap-1">
                        <img src={logo} alt="logo" />
                    </a>
                    <div className="bg-[#066aab] w-10 h-10 text-cream-foreground flex items-center justify-center rounded-[4px] left-4" onClick={() => setIsMobleMenuActive(false)}>
                        <FaXmark className="text-white text-xl" /> {/* Icon color changed to white */}
                    </div>
                </div>
                <ul className="mt-6">
                    {
                        menuList.map(({ dropDownMenu, id, label, path }) => {
                            return (
                                <li key={id} className="leading-[164%] relative w-full dropdown">
                                    <Link 
                                        to={dropDownMenu.length ? "#" : path} 
                                        className="font-jost py-2.5 border-b border-b-slate-300 text-[#385469] flex justify-between items-center"
                                        onClick={(e) => dropDownMenu.length && handleDropdownClick(id)} // Only handle click if dropdown exists
                                    >
                                        <span className='text-white'>{label}</span>
                                        {dropDownMenu.length && <FaPlus className="text-white" />} {/* Icon color changed to white */}
                                    </Link>
                                    {dropDownMenu.length &&
                                        <ul className={`min-w-56 w-full transition-all duration-500 ${dropdownActive === id ? "max-h-[600px] overflow-auto pt-3 no-scrollbar" : "max-h-0 overflow-hidden"}`}>
                                            {dropDownMenu.map(({ id, label, path }) => {
                                                return (
                                                    <li key={id}>
                                                        <Link to={path} className="text-white font-jost hover:text-secondary-foreground transition-all duration-500 py-2.5 px-6 block border-b border-b-slate-300">{label}</Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
                <ExtraInfo />
            </nav>
        </div>
    );
};

export default MobileMenu;
