import { pricingData } from '@/lib/fackdata/pricingData'
import React from 'react'
import { FaAnglesRight, FaXmark } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import SectionName from '../ui/sectionName'
import Title from '../ui/title'
import SlideUp from '@/lib/animations/slideUp'

const Pricing = () => {
    return (
        <section className="lg:pt-15 pt-10 lg:pb-15 pb-10">
            <div className="container">
                <div className="flex flex-col justify-center items-center">
                    <SectionName className={"text-primary-foreground"}>Our Pricing</SectionName>
                    <Title size={"3.5xl"} className={"mt-2.5 text-center max-w-[516px]"}>Transforming lives through knowledge by education</Title>
                </div>
                <div className="lg:pt-15 pt-10">
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-7.5 gap-x-7.5 lg:gap-x-0">
                        {pricingData.map(({ features, id, paln_name, price, is_center }) => <Card key={id} id={id} features={features} plan_name={paln_name} price={price} is_center={is_center} />)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing


const Card = ({ price, plan_name, features, is_center, id }) => {
    return (
        <SlideUp delay={id}>
            <div className="rounded-[10px] shadow-[-20px_4.8px_24.4px_-6px_rgba(19,16,34,0.10)] bg-background ">
                <div className={`py-[15px] rounded-tr-[10px] rounded-tl-[10px] ${is_center ? "bg-primary" : "bg-warm"}`}>
                    <p className={`lg:text-[28px] text-2xl font-bold text-center ${is_center ? "text-cream-foreground" : "text-muted-foreground"}`}>{plan_name}</p>
                </div>
                <div className="lg:pt-7.5 pt-6 lg:pb-10 pb-7 lg:px-10 px-5">
                    <h2 className="lg:text-[70px] md:text-[50px] text-4xl lg:leading-[117%] md:leading-[110%] leading-[100%] font-bold text-green">${price}<span className="md:text-2xl text-lg font-semibold text-muted-foreground md:leading-[140%] leading-[130%]">/mo</span> </h2>
                    <ul className="lg:pt-7.5 pt-5 flex gap-3 flex-col">
                        {
                            features.map(({ id, have_feature, feature }) => {
                                return (
                                    <li key={id} className="flex items-center gap-5">
                                        {
                                            have_feature ?
                                                <FaAnglesRight className='text-secondary-foreground text-sm' />
                                                :
                                                <span className="w-4 h-4 rounded-full flex items-center justify-center bg-warm"> <FaXmark className='text-[10px]' /></span>
                                        }
                                        <span>{feature}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="mt-10 flex justify-center">
                        {
                            is_center ?
                                <Button asChild className="text-cream-foreground">
                                    <Link to={"/contact-us"}>Buy Now</Link>
                                </Button>
                                :
                                <Button asChild size="lg" variant="outline" className="border-primary">
                                    <Link to={"/contact-us"}>Buy Now</Link>
                                </Button>
                        }
                    </div>
                </div>
            </div>
        </SlideUp>
    )
}