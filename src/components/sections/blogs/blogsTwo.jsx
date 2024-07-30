import React from 'react'
import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'
import CardTwo from './cardTwo'
import { blogDataTwo } from '@/lib/fackdata/bolgDataTwo'

const BlogsTwo = () => {
    return (
        <section className="lg:pt-15 lg:pb-15 pt-10 pb-10 ">
            <div className="container">
                <div className="flex flex-col justify-center items-center">
                    <SectionName>Our Blogs</SectionName>
                    <Title size={"3.5xl"} className={"mt-2.5 text-center lg:max-w-[470px]"}>Discover Your Passion Pursue Your Dreams</Title>
                </div>
                <div className="lg:pt-15 pt-10">
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7.5">
                        {blogDataTwo.map(({ blog_desc, src, id, title, date }) => <CardTwo key={id} id={id} src={src} title={title} blog_desc={blog_desc} date={date} />)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogsTwo