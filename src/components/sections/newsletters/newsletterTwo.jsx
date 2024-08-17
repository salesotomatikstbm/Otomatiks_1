import React from 'react'
import stay_thumb from "@/assets/images/newsletter/stay-thumb.png"
import stay_shape from "@/assets/images/newsletter/stay-shape.png"
import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'
import Input from '@/components/ui/input'
import { FaArrowRight } from 'react-icons/fa'

const NewsletterTwo = () => {
    return (
        <section className="lg:pt-15 pt-10">
            <div className="py-12.5 relative z-[1]">
                <div className="container">
                    <div className="flex md:flex-row flex-col justify-between items-center gap-10">
                        <div className="lg:max-w-[573px] max-w-[400px]">
                            <SectionName className={"text-muted-foreground"}>Stay With Us</SectionName>
                            <Title size={"3.5xl"} className={"mt-2.5"}>Subscribe to our newsletter for the latest updates</Title>
                            <div className="mt-9">
                                <form action="#" className="relative overflow-hidden">
                                    <Input 
                                        type={"email"} 
                                        placeholder={"Enter Your Email"} 
                                        className={"rounded-md bg-transparent text-primary placeholder:text-muted-foreground max-h-15 border border-primary"}
                                    />
                                    <button 
                                        type="submit" 
                                        className="absolute z-20 h-full right-0 top-1/2 -translate-y-1/2 py-5 px-7.5 bg-primary text-primary-foreground rounded-tr-md rounded-br-md"
                                    >
                                        <FaArrowRight />
                                    </button>
                                </form>
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
