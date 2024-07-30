import Input from '@/components/ui/input'
import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'

const Search = () => {
    return (
        <div className="bg-background shadow-3xl xl:p-10 p-5 rounded-md mt-10">
            <h4 className="lg:text-[28px] text-xl font-bold font-nunito lg:leading-[148%] leading-[120%]">Search<span className="text-green-foreground">_</span> </h4>
            <form action="#" className="xl:mt-7.5 mt-4">
                <div className="relative">
                    <Input type={"text"} placeholder={"Search.."} className={"text-[#686868] placeholder:[#686868] border-[#F2F2F2] lg:py-[15px]"}/>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2"> <FaMagnifyingGlass className='text-secondary-foreground'/></div>
                </div>
            </form>
        </div>
    )
}

export default Search