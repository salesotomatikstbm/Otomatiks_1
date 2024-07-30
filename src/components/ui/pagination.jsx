import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Pagination = () => {
    return (
        <ul className="flex items-center justify-center gap-[15px]">
            <li className="w-15 h-15 rounded-[10px] bg-secondary flex justify-center items-center text-cream-foreground border border-[#CCCCCC]">
                <Link to={"#"} className="text-2xl font-semibold leading-[140%]">01</Link>
            </li>
            <li className="w-15 h-15 rounded-[10px] transition-all duration-500 hover:bg-secondary flex justify-center items-center text-muted-foreground hover:text-cream-foreground border border-[#CCCCCC]">
                <Link to={"#"} className="text-2xl font-semibold leading-[140%]">02</Link>
            </li>
            <li className="w-15 h-15 rounded-[10px] transition-all duration-500 hover:bg-secondary flex justify-center items-center text-muted-foreground hover:text-cream-foreground border border-[#CCCCCC]">
                <Link to={"#"} className="text-2xl font-semibold leading-[140%]">03</Link>
            </li>
            <li className="w-15 h-15 rounded-[10px] transition-all duration-500 hover:bg-secondary flex justify-center items-center text-muted-foreground hover:text-cream-foreground border border-[#CCCCCC]">
                <Link to={"#"} className="text-2xl font-semibold leading-[140%]"> <FaAngleRight /></Link>
            </li>
        </ul>
    )
}

export default Pagination