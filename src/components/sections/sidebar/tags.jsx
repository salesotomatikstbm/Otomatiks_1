import React from 'react'
import { Link } from 'react-router-dom'

const tagsList = [
    {
        id: 1,
        tag: "LearnWell",
        link: "#"
    },
    {
        id: 2,
        tag: "Edu Pro",
        link: "#"
    },
    {
        id: 3,
        tag: "Study Boost",
        link: "#"
    },
    {
        id: 4,
        tag: "Academy",
        link: "#"
    },
    {
        id: 5,
        tag: "LearnEase",
        link: "#"
    },
    {
        id: 6,
        tag: "BrainWave",
        link: "#"
    },

]
const Tags = () => {
    return (
        <div className="bg-background shadow-3xl xl:p-10 p-5 rounded-md mt-10">
            <h4 className="lg:text-[28px] text-xl font-bold font-nunito lg:leading-[148%] leading-[120%]">Tags<span className="text-green-foreground">_</span> </h4>
            <ul className="xl:pt-7.5 pt-4 flex gap-5 flex-wrap">
                {
                    tagsList.map(({ id, link, tag }) => {
                        return (
                            <li key={id}>
                                <Link to={link} className="px-2.5 py-[5px] rounded-md bg-warm text-[#686868] inline-block">{tag}</Link>
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}

export default Tags