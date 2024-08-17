import React from 'react'
import SectionName from '../../ui/sectionName'
import Title from '../../ui/title'
import shap_2 from "@/assets/images/shapes/knowledge-animal.png"
import { Button } from '../../ui/button'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import SectionDescription from '@/components/ui/sectionDescription'
import CourseForm from '../abouts/Enquiry_Form'

const AgeOne = () => {
    return (
        <section className="lg:pt-15 lg:pb-15 pb-10 pt-10">
            <div className="bg-warm lg:py-[120px] py-20 relative z-[1]">
                <div className="container">
                    <div className="grid lg:grid-cols-[37%_auto] grid-cols-1 items-center xl:gap-20 gap-10">

                        <div>
                            <div className="lg:max-w-[460px]">
                                <SectionName>Why People Trust Us</SectionName>
                                <Title size={"3.5xl"}>Building Trust Through Expertise, Innovation, and Community</Title>
                            </div>
                            <SectionDescription className={'pt-5 pb-7.5'}>We combine expertise with personalized support to deliver top-quality education, ensuring our students thrive in a community build on innovation and success. </SectionDescription>
                           <div className={'pt-5'}>
                           <CourseForm />
                           </div>
                               
                            
                        </div>

                        <div className="relative flex justify-center flex-wrap sm:flex-nowrap lg:justify-between md:gap-7.5 sm:gap-4 gap-3">
                            <div className="mt-[110px] flex flex-col items-end md:gap-7.5 sm:gap-4 gap-3">
                                {/* First Column */}
                                <BigCard content={"Expert-Led Education"} />
                                <SmallCard className={"bg-primary"} content={"Proven Success Stories"} />
                            </div>
                            <div className="flex flex-col md:gap-7.5 sm:gap-4 gap-3">
                                {/* Second Column with Increased Width for 'Comprehensive Curriculum' on Small Devices */}
                                <SmallCard className={"bg-secondary sm:w-[170px]"} content={"Comprehensive Curriculum"} />
                                <SmallCard className={"bg-destructive"} content={"Community-Focused Approach"} />
                                <SmallCard className={"bg-green"} content={"Holistic Skill Development"} />
                            </div>
                            <div className="self-center">
                                {/* Third Column */}
                                <SmallCard className={"bg-primary"} content={"Commitment to Future-Ready Skills"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute 2xl:top-[100px] lg:top-14 top-4 right-[67px] 2xl:w-auto lg:w-48 w-32 animate-left-right">
    <img src={shap_2} alt="animal" />
</div>

            </div>
        </section>
    )
}

export default AgeOne

const SmallCard = ({ content, className }) => {
    return (
        <div className={cn('bg-secondary rounded-[10px] xl:py-[35px] lg:py-5 py-4 xl:px-6 lg:px-5 md:px-4 px-3 max-h-[150px]', className)}>
            <h5 className="font-nunito text-cream-foreground lg:text-lg md:text-base text-sm font-bold leading-[130%] text-center lg:max-w-[111px] md:max-w-25 max-w-20">
                <span>{content}</span>
            </h5>
        </div>
    )
}

const BigCard = ({ content, className }) => {
    return (
        <div className="bg-[#0A6375] rounded-[10px] xl:py-14 lg:py-7 py-5 xl:px-[60px] lg:px-6 md:px-4 px-3 lg:max-w-[250px] max-w-[150px] max-h-[250px]">
            <h5 className="font-nunito text-cream-foreground lg:text-lg md:text-base text-sm font-bold leading-[130%] text-center lg:max-w-[111px] md:max-w-25 max-w-20">
                <span>{content}</span>
            </h5>
        </div>
    )
}
