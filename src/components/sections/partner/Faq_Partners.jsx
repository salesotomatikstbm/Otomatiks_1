import React from 'react'
import SectionName from '@/components/ui/sectionName';
import Title from '@/components/ui/title';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqDataPartner } from '@/lib/fackdata/faqDataPartner'

const Faq_Partners = () => {
  return (
    <section className="py-16 ">
      <div className="container">
        <div className="text-center mb-10">
          <SectionName>Faq</SectionName>
          <Title size={"3.5xl"}>Frequently Asked Questions</Title>
        </div>
        
        {/* Two-column FAQ grid */}
        <div className="grid lg:grid-cols-2 gap-7.5">
          {faqDataPartner.map(({ ans, id, question }) => (
            <Accordion key={id} type="single" collapsible className="rounded-md border-2 border-[#F2F2F2] p-5">
              <AccordionItem value={id}>
                <AccordionTrigger className="font-bold text-lg  hover:no-underline">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-base  mt-2">
                  {ans}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq_Partners;
