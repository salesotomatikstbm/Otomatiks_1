import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'
import { partnerData } from '@/lib/fackdata/partnerabout'
import React from 'react'
import TeamCard from './teamCard3'

const Our_partners = () => {
  return (
    <section className="lg:pb-15 py-16 pb-10">
      <div className="container">
        <div className="text-center flex flex-col items-center ">
          <SectionName>Our Patrons</SectionName>
          <Title size={"3.5xl"} className={"lg:max-w-[520px]"}>Our Esteemed Partners
          </Title>
        </div>
        <div className="lg:pt-15 pt-10">
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-7.5">
            {partnerData.map(({id, name, position, src}) => <TeamCard key={id} name={name} position={position} src={src} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Our_partners