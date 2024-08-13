import React from 'react'
import SectionName from '../../ui/sectionName'
import Title from '../../ui/title'
import { Button } from '../../ui/button'
import { Link } from 'react-router-dom'
import Kindergarden from '@/assets/icons/kindergarden'
import Book from '@/assets/icons/book'
import Blocks from '@/assets/icons/blocks'
import Chalkboard from '@/assets/icons/chalkboard'
import CardOne from './cardOne'
import SectionDescription from '@/components/ui/sectionDescription'

const SuccessProjectOne = () => {
    return (
        <section className="lg:pt-15 pt-10 lg:pb-15 pb-10">
            <div className="container">
                <div className="grid xl:grid-cols-2 lg:grid-cols-[40%_auto] grid-cols-1 gap-7.5">

                    <div className="lg:max-w-[600px]">
                        <SectionName className={"text-primary-foreground"}>Number Talks</SectionName>
                        <Title size={"3.5xl"} className={"lg:max-w-[410px] pb-5"}>See Our Achievement in Numbers</Title>
                        <SectionDescription> Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dictum facilisis sem. Imperdiet massa turpis sit proin metus volutpat loren ipsum Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dictum</SectionDescription>
                        {/* <Button asChild variant="outline" className="mt-10">
                            <Link to={"/contact-us"}>Get a quote</Link>
                        </Button> */}
                    </div>

                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5">
                        <CardOne icon={<Kindergarden />} color={"bg-primary"} number={"3,430 +"} title={"Classes"} />
                        <CardOne icon={<Book />} color={"bg-destructive"} number={"6,461 +"} title={"Hours in Work"} />
                        <CardOne icon={<Blocks />} color={"bg-green"} number={"2,464 +"} title={"Happy Student"} />
                        <CardOne icon={<Chalkboard />} color={"bg-secondary"} number={"4,928 +"} title={"Happy Parents"} />

                    </div>

                </div>
            </div>
        </section>
    )
}

export default SuccessProjectOne

