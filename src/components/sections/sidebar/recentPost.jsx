import React from 'react'
import { Link } from 'react-router-dom'

const postList = [
    {
        id: 1,
        title: "Expand your horizons with Most Of education",
        category: "Category",
        comment_count: "0"
    },
    {
        id: 2,
        title: "Invest in education invest in yourself Best",
        category: "Category",
        comment_count: "0"
    },
    {
        id: 3,
        title: "Empower yourself through an learning",
        category: "Category",
        comment_count: "0"
    },

]
const RecentPost = () => {
    return (
        <div className="bg-background shadow-3xl xl:p-10 p-5 rounded-md mt-10">
            <h4 className="lg:text-[28px] text-xl font-bold font-nunito lg:leading-[148%] leading-[120%]">Recent post<span className="text-green-foreground">_</span> </h4>
            <ul className="xl:pt-7.5 pt-4 flex flex-col gap-5">
                {
                    postList.map(({category, comment_count, id, title}) => {
                        return (
                            <li key={id} className="xl:pl-7.5 pl-5 xl:py-5 py-3 rounded-[10px] border-2 border-[#F2F2F2]">
                                <p className="flex items-center gap-2.5 pb-1.5"><small>{category}</small> <span className="w-1.5 h-1.5 bg-green inline-block rounded-full"></span> <small>Comments {comment_count}</small> </p>
                                <Link to={"/blog-details"} className="font-bold lg:text-xl text-lg xl:leading-[130%] leading-[120%] font-jost">{title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default RecentPost