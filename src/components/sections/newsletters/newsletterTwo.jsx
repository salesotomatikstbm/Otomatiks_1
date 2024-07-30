import React from 'react'
import stay_thumb from "@/assets/images/newsletter/stay-thumb.png"
import stay_shape from "@/assets/images/newsletter/stay-shape.png"
import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import SectionDescription from '@/components/ui/sectionDescription'

const NewsletterTwo = () => {
    return (
        <section className="lg:pt-15 pt-10 ">
            <div className="bg-warm py-12.5 relative z-[1]">
                <div className="container">
                    <div className="flex md:flex-row flex-col justify-between items-center gap-10">
                        <div className="lg:max-w-[573px] max-w-[400px]">
                            <SectionName className={"text-muted-foreground"}>Stay With Us</SectionName>
                            <Title size={"3.5xl"} className={"mt-2.5 max-w-[410px]"}>The path to success starts with education</Title>
                            <SectionDescription className={"mt-5"}>Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dictum facilisis sem. Imperdiet massa turpis sit proin metus volutpat.</SectionDescription>
                            <div className="mt-9">
                                <Button variant="pill" className="bg-primary border-primary hover:text-primary-foreground" asChild>
                                    <Link to={"/about-us"} className="btn-rounded-full">Read More</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="relative">
                            <img src={stay_thumb} alt="tree-img" />
                        </div>
                    </div>
                </div>
                <div className="absolute left-0 bottom-0 z-[-1]">
                    <img src={stay_shape} alt="stay-shape" />
                </div>
            </div>
        </section>
    )
}

export default NewsletterTwo