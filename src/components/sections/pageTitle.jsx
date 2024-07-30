import React from 'react'
import bread_cat from "@/assets/images/shapes/bread-cat.png"
import bread_thumb from "@/assets/images/shapes/bread-thumb.png"
import bread_child from "@/assets/images/shapes/bread-child.png"
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa6'

const PageTitle = ({ pageName, breadcrumbLink, breadcrumbCurrent, className }) => {
    return (
        <div className="lg:pb-15 pb-10">
            <div className="bg-warm lg:py-15 py-10">
                <div className="container">
                    <div className="flex  md:flex-row flex-col justify-between items-center gap-10">
                        <div className="">
                            <h2 className="xl:text-[70px] lg:text-6xl md:text-5xl text-4xl font-bold leading-[117%]">{pageName}</h2>
                            <ul className="lg:pt-5 pt-3 flex items-center lg:gap-5 gap-2">
                                <li><Link to="/" className="lg:text-[28px] text-xl font-bold">Home</Link></li>
                                <li><FaAngleRight /> </li>
                                <li><p className="lg:text-[28px] text-xl font-bold text-muted-foreground">{breadcrumbCurrent}</p></li>
                            </ul>
                        </div>
                        <div className="relative">
                            <img src={bread_cat} alt="cat-img" className="absolute bottom-5 -left-[30px] animate-up-down" />
                            <img src={bread_thumb} alt="thumb-img" className="sm:max-h-full max-h-60" />
                            <img src={bread_child} alt="child-img" className="absolute bottom-0 right-0 animate-left-right" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageTitle