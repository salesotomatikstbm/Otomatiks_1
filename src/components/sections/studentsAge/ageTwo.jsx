import React, { useState } from 'react'
import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'
import man from "@/assets/images/age/man.png"
import student from "@/assets/images/age/magnifying-glass-student.png"
import { FaCheck } from 'react-icons/fa6'
import SlideDown from '@/lib/animations/slideDown'

const categoryList = [
    {
        id: 1,
        label: "1-4 year",
        data_target: "1-4"
    },
    {
        id: 2,
        label: "5-7 year",
        data_target: "5-7"
    },
    {
        id: 3,
        label: "8-12 year",
        data_target: "8-12"
    },
    {
        id: 4,
        label: "13-15 year",
        data_target: "13-15"
    }

]
const AgeTwo = () => {
    const [activeTab, setActiveTab] = useState("1-4")

    return (
        <section className="lg:pt-15 lg:pb-15 pt-10 pb-10 education">
            <div className="bg-warm lg:py-[120px] py-20 relative">
                <div className="container">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-7.5 items-start">
                        <div className="max-w-[400px] md:max-w-full mx-auto md:order-0 order-1">
                            <SlideDown delay={2}>
                                <img src={student} alt="magnifying-glass-student" className="w-full h-full" />
                            </SlideDown>
                        </div>
                        <div className="order-0 md:order-1">
                            <SectionName>Robotics Courses Age Limit</SectionName>
                            <Title size={"3.5xl"} className={"mt-2.5 max-w-[494px]"}>Lorem ipsum dolor sit amet consectetur</Title>
                            <ul className="py-7.5 flex items-center flex-wrap gap-5 ">
                                {
                                    categoryList.map(({ data_target, id, label }) => {
                                        return (
                                            <li key={id} onClick={() => setActiveTab(data_target)} className={`rounded-full py-2.5 px-5 border border-destructive active-tab cursor-pointer ${activeTab === data_target ? "bg-destructive text-cream-foreground" : ""}`}>
                                                {label}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <div className="overflow-hidden relative">
                                <div className={`transition-all duration-500 ${activeTab === '1-4' ? "translate-y-0 visible opacity-100 relative" : "translate-y-10 invisible opacity-0 absolute"}`}><Card /></div>
                                <div className={`transition-all duration-500 ${activeTab === '5-7' ? "translate-y-0 visible opacity-100 relative" : "translate-y-10 invisible opacity-0 absolute"}`}><Card /></div>
                                <div className={`transition-all duration-500 ${activeTab === '8-12' ? "translate-y-0 visible opacity-100 relative" : "translate-y-10 invisible opacity-0 absolute"}`}><Card /></div>
                                <div className={`transition-all duration-500 ${activeTab === '13-15' ? "translate-y-0 visible opacity-100 relative" : "translate-y-10 invisible opacity-0 absolute"}`}><Card /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute lg:right-15 left-5 lg:left-auto lg:bottom-14 bottom-5 w-20 xl:w-auto animate-up-down">
                    <img src={man} alt="man" />
                </div>
            </div>
        </section>
    )
}

export default AgeTwo

const Card = () => {
    return (
        <>
            <p>Lorem ipsum dolor sit amet consectetur. Amet le ultricies dictum facilisis sem. Imperdiet massa turpis sit proin metus volut.Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dictum facilisis sem. Imperdiet massa</p>
            <ul className="pt-5 flex flex-col gap-[15px]">
                <li className="flex items-center gap-[15px]"><FaCheck className="text-destructive-foreground" /> <span className="text-[#686868]">Nurturing Young Minds</span> </li>
                <li className="flex items-center gap-[15px]"><FaCheck className="text-destructive-foreground" /> <span className="text-[#686868]">Unlocking Potential Through Education</span> </li>
                <li className="flex items-center gap-[15px]"><FaCheck className="text-destructive-foreground" /> <span className="text-[#686868]">Empowering Children Through Education</span> </li>
            </ul>
        </>
    )
}