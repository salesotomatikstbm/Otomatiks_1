import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'
import { partnerData } from '@/lib/fackdata/partnerabout'
import React from 'react'
import TeamCard from './teamCard3'

const Our_partners = () => {
  return (
    <section className="lg:pb-15 py-16 pb-10" aria-labelledby="our-partners-heading">
      <div className="container">
        <div className="text-center flex flex-col items-center">
          <SectionName id="our-partners-heading">Our Patrons</SectionName>
          <Title
            as="h2" 
            size="3.5xl"
            className="lg:max-w-[520px]"
          >
            Our Esteemed Partners
          </Title>
        </div>

        <div className="lg:pt-15 pt-10">
          <ul className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-7.5">
            {partnerData.map(({ id, name, position, src }) => (
              <li key={id} className="list-none">
                <TeamCard
                  name={name}
                  position={position}
                  src={src}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Our_partners
