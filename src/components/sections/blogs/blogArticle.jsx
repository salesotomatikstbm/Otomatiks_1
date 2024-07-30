import React from 'react'
import { Link } from 'react-router-dom'
import { FaAngleLeft, FaAngleRight, FaCalendarDays, FaCheck, FaComments, FaPaperPlane, FaPhone, FaUser } from 'react-icons/fa6'
import blog_details_1 from "@/assets/images/blog/blog-details-1.png"
import blog_details_2 from "@/assets/images/blog/blog-details-2.png"
import blog_details_3 from "@/assets/images/blog/blog-details-3.png"
import qute from "@/assets/images/blog/blog-qute.png"
import Input from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import SocalIcons from '@/components/ui/socalIcons'
import SlideUp from '@/lib/animations/slideUp'

const BlogArticle = () => {
    return (
        <div>
            <SlideUp delay={2}>
                <img src={blog_details_1} alt="blog-details-1" />
                <div className="pt-7.5">
                    <ul className="flex gap-7.5 pb-5 flex-wrap">
                        <li className='flex items-center'> <FaCalendarDays className='text-foreground' /> <span className="text-[#686868] ml-2.5">January 19, 2024</span> </li>
                        <li className='flex items-center'> <FaUser className='text-foreground' /> <span className="text-[#686868] ml-2.5">By admin</span> </li>
                        <li className='flex items-center'> <FaComments className='text-foreground' /> <span className="text-[#686868] ml-2.5">Comments (05)</span> </li>
                    </ul>
                    <h4 className="lg:text-[32px] md:text-[28px] text-xl lg:leading-[130%] md:leading-[120%] leading-[110%] font-bold pb-5">Unlock your potential with education ower yourself the na through learning.</h4>
                    <p>IT Technology is a rapidly evolving field that encompasses a wide range of computer-rela Technology is a rapidly ya evolving field that encompasses a wide range of computer-related technologies and the services. From software thr development to network administrationtechnologies most of a man</p>
                </div>
            </SlideUp>
            <blockquote className="shadow-3xl xl:px-15 px-8 xl:py-[38px] py-5 my-10 rounded-[10px]">
                <img src={qute} alt="blog-qute" />
                <p className="mt-5">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled loren ipsum</p>
                <h4 className="text-xl font-bold leading-[130%] mt-[28px]">Fahad Hossain<span className="text-green-foreground">_</span> </h4>
            </blockquote>
            <div>
                <div className="flex justify-between gap-7.5">
                    <div>
                        <img src={blog_details_2} alt="blog-details-2" />
                    </div>
                    <div>
                        <img src={blog_details_3} alt="blog-details-3" />
                    </div>
                </div>
                <div className="mt-7.5">
                    <p>Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam erosjust posuer lobortis viverra laoreet augue mattis fermentum ullamcAliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam erosjust posuer lobortis viverra laoreet augue mattis fermentum ullamcorper viverra laoreetAliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam erosjust posuer lobortis viverra laoreet augue mattis fermentum ullamcorper viverra laoreetorper viverra laoreet</p>
                    <ul className="mt-5 grid sm:grid-cols-2 grid-cols-1 gap-5">
                        <li className="flex items-center gap-4 text-[#686868]"> <span className="w-4 h-4 rounded-full flex items-center justify-center bg-destructive text-cream-foreground"><FaCheck className='text-[10px]' /> </span> Knowledge is the key education is the door</li>
                        <li className="flex items-center gap-4 text-[#686868]"> <span className="w-4 h-4 rounded-full flex items-center justify-center bg-destructive text-cream-foreground"><FaCheck className='text-[10px]' /> </span> Discover the power of education.</li>
                    </ul>
                    <ul className="mt-5 grid sm:grid-cols-2 grid-cols-1 gap-5">
                        <li className="flex items-center gap-4 text-[#686868]"> <span className="w-4 h-4 rounded-full flex items-center justify-center bg-destructive text-cream-foreground"><FaCheck className='text-[10px]' /> </span> Education opens doors to opportunities, fosters </li>
                        <li className="flex items-center gap-4 text-[#686868]"> <span className="w-4 h-4 rounded-full flex items-center justify-center bg-destructive text-cream-foreground"><FaCheck className='text-[10px]' /> </span> Expand your horizons with education.</li>
                    </ul>
                </div>
            </div>
            <div className="mt-12">
                {/* <!-- tag start --> */}
                <div>
                    <h3 className="text-2xl font-semibold leading-[140%]">Tags:</h3>
                    <ul className="pt-7 flex gap-5 flex-wrap">
                        <li>
                            <Link to={"#"} className="px-2.5 py-[5px] rounded-md bg-warm text-[#686868] inline-block">All Project</Link>
                        </li>
                        <li>
                            <Link to={"#"} className="px-2.5 py-[5px] rounded-md bg-warm text-[#686868] inline-block">Edu Connect</Link>
                        </li>
                        <li>
                            <Link to={"#"} className="px-2.5 py-[5px] rounded-md bg-warm text-[#686868] inline-block">Smart Academy</Link>
                        </li>
                    </ul>
                </div>
                {/* <!-- tag end --> */}
                {/* <!-- next and prev post start --> */}
                <div className="mt-10">
                    <span className="w-full h-0.5 bg-[#F2F2F2] block"></span>
                    <div className="flex sm:flex-row flex-col gap-5 justify-between items-center pt-6 pb-7">
                        <Link to={"#"} className="text-xl font-bold leading-[130%] flex gap-2.5 items-center font-jost group"> <span className="group-hover:text-destructive-foreground transition-all duration-500"> <FaAngleLeft /></span> Previous post</Link>
                        <SocalIcons prentClass={"gap-2.5"} className={"w-10 h-10 rounded-full border-destructive hover:text-cream-foreground hover:bg-destructive text-muted-foreground"} />
                        <Link to={"#"} className="text-xl font-bold leading-[130%] flex gap-2.5 items-center font-jost group">Next post <span className="group-hover:text-destructive-foreground transition-all duration-500"> <FaAngleRight /></span></Link>
                    </div>
                    <span className="w-full h-0.5 bg-[#F2F2F2] block"></span>
                </div>
                {/* <!-- next and prev post end --> */}
                {/* <!-- comment start --> */}
                <div className="pt-10">
                    <h3 className="text-[28px] font-bold leading-[148%] font-nunito">Write your comment</h3>
                    <form action="#" className="mt-7">
                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5">
                            <div className="relative">
                                <Input type={"text"} placeholder="Your Name" id="name" className={"placeholder:[#686868] border-[#F2F2F2] lg:py-[15px]"} />
                                <label htmlFor="name" className="absolute right-5 top-1/2 -translate-y-1/2 text-primary-foreground"> <FaPhone /></label>
                            </div>
                            <div className="relative">
                                <Input type={"email"} placeholder="Your Email" id="email" className={"placeholder:[#686868] border-[#F2F2F2] lg:py-[15px]"} />
                                <label htmlFor="email" className="absolute right-5 top-1/2 -translate-y-1/2 text-primary-foreground"> <FaPaperPlane /></label>
                            </div>
                        </div>
                        <div className="pt-7.5">
                            <textarea name="message" id="message" placeholder="Write your Message here" className="w-full min-h-36 rounded-[10px] border-2 text-[#686868] placeholder:[#686868] border-[#F2F2F2] px-5 py-[15px] outline-none"></textarea>
                        </div>
                        <Button variant="pill" className="bg-primary border-primary hover:text-primary-foreground lg:mt-10 mt-5 lg:max-w-[186px] max-w-[140px] w-full">Send Now</Button>
                    </form>
                </div>
                {/* <!-- comment end --> */}
            </div>
        </div>
    )
}

export default BlogArticle