import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'
import { bolgData } from '@/lib/fackdata/blogData'
import React from 'react'
import CardOne from './cardOne'
import CardVertical from './cardVertical'

const BlogsOne = () => {
    return (
        <section className="lg:pt-15 pt-10">
            <div className="lg:py-[120px] py-20 bg-[linear-gradient(180deg,_#FFF0E5_0%,_rgba(255,_240,_229,_0.00)_100%)]">
                <div className="container">
                    <div>
                        <div className="flex justify-between items-center lg:pb-15 pb-10">
                            <div className="lg:max-w-[630px]">
                                <SectionName>Latest Blog And News</SectionName>
                                <Title size={"3.5xl"}>Wonderworks Child Development Center Discovery Kids Preschool</Title>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-7.5">
                            <div className="flex flex-col gap-7.5">
                                {
                                    bolgData.slice(0, 2).map(({ author, blog_desc, date, id, title, thumb }) => <CardOne key={id} author={author} date={date} title={title} thumb={thumb} />)
                                }
                            </div>
                            <div>
                                {
                                    bolgData.slice(2, 3).map(({ author, blog_desc, date, id, title, thumb }) => <CardVertical key={id} author={author} date={date} title={title} thumb={thumb} />)
                                }
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogsOne