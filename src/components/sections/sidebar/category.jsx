import React from 'react'
import { Link } from 'react-router-dom'

const categoryList = [
    {
        id: 1,
        category: "EduTech Solutions",
        post_num: "01"
    },
    {
        id: 2,
        category: "SmartAcademy",
        post_num: "07"
    },
    {
        id: 3,
        category: "KnowledgeHub",
        post_num: "02"
    },
    {
        id: 4,
        category: "Specialist",
        post_num: "04"
    },
    {
        id: 5,
        category: "Education is the door",
        post_num: "03"
    },

]
const Category = () => {
    return (
        <div className="bg-background shadow-3xl xl:p-10 p-5 rounded-md mt-10">
            <h4 className="lg:text-[28px] text-xl font-bold font-nunito lg:leading-[148%] leading-[120%]">Category<span className="text-green-foreground">_</span> </h4>
            <ul className="xl:pt-7.5 pt-4 flex flex-col gap-5">
                {
                    categoryList.map(({ category, id, post_num }) => {
                        return (
                            <li key={id}>
                                <Link to="/blog-details" className="w-full rounded-[10px] border-2 text-[#686868] border-[#F2F2F2] px-5 py-2.5 flex justify-between items-center"><span>{category}</span> <span>{post_num}</span> </Link>
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}

export default Category