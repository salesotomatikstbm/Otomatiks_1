import React from 'react'
import faq_banner from "@/assets/images/faq/banner-1.png"
import SectionName from '../ui/sectionName'
import Title from '../ui/title'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqData } from '@/lib/fackdata/faqData'


const FaqComp = () => {
  return (
    <section className="py-16 bg-[#066aab]">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-7.5">
          <div className="max-w-[528px] lg:max-w-full mx-auto">
            <img src={faq_banner} alt="child with laptop"  />
          </div>
          <div>
            <div className="lg:max-w-[520px] pb-10">
              <SectionName>Faq</SectionName>
              <Title size={"3.5xl"}>Get Insights Into Our Robotics Learning Programs</Title>
            </div>
            <Accordion type="single" defaultValue="one" collapsible>
              {
                faqData.map(({ans, id, question}) => {
                  return (
                    <AccordionItem key={id} value={id} className="rounded-md border-2 border-[#F2F2F2] lg:pl-7.5 pl-5 pr-5 py-[15px] mb-7.5 last:mb-0">
                      <AccordionTrigger className="font-bold lg:text-xl text-[17px] lg:leading-[130%] leading-[120%] hover:no-underline text-white">{question}</AccordionTrigger>
                      <AccordionContent className="text-base text-foreground text-white">
                        {ans}
                      </AccordionContent>
                    </AccordionItem>
                  )
                })
              }
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqComp