import { cn } from '@/lib/utils';
import React from 'react'
import { FaXmark } from "react-icons/fa6";
const SearchForm = ({isSerchActive, setIsSerchActive, className}) => {
    return (
        <form action="#" className={cn(`${isSerchActive ? "opacity-100 visible" : "opacity-0 invisible"} transition-all duration-500 z-50 absolute left-0 bottom-0 w-full lg:h-[calc(100%-32%)] md:h-[calc(100%-50%)] h-[calc(100%-0%)]`, className)}>
            <input type="text" name="search" id="search" placeholder="Search here" className="w-full h-full border border-gray-400 px-10 rounded-md outline-none" />
            <label htmlFor="search" className="absolute right-10 top-1/2 -translate-y-1/2 cursor-pointer" onClick={() => setIsSerchActive(false)}>
                <FaXmark className='border-gray-400  text-xl' />
            </label>
        </form>
    )
}

export default SearchForm