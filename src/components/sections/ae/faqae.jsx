import React from 'react'
import faq_banner from "@/assets/images/faq/banner-1.png"
import SectionName from '../../ui/sectionName'
import Title from '../../ui/title'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqData } from '@/lib/fackdata/faqae'

const FaqComp = () => {
  return (
    <section className="py-16 bg-warm">
      <div className="container">
        <div className="grid items-center gap-7.5">
          {/* Image Section */}
          {/* <div className="max-w-[528px] lg:max-w-full mx-auto hidden lg:block">
            <img src={faq_banner} alt="child with laptop" />
          </div> */}

          {/* Content Section */}
          <div>
            <div className="pb-10 text-center">
              <SectionName>Frequently Asked Questions</SectionName>
              <Title size={"3.5xl"}>Your Questions Answered for a Seamless Experience</Title>
            </div>

            <Accordion type="single" defaultValue="one" collapsible>
              {faqData.map(({ ans, id, question }) => {
                return (
                  <AccordionItem
                    key={id}
                    value={id}
                    className="rounded-md border-2 border-[#1F9D55] lg:pl-7.5 pl-5 pr-5 py-[15px] mb-7.5 last:mb-0 transition-colors duration-300 hover:border-[#15833d]"
                  >
                    <AccordionTrigger className="font-bold lg:text-xl text-[17px] text-justify lg:leading-[100%] leading-[100%] hover:no-underline">
                      {question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-foreground">
                      {ans}
                    </AccordionContent>
                  </AccordionItem>
                )
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqComp
