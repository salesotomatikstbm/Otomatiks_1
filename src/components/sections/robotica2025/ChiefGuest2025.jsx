import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'
import { teamData } from '@/lib/fackdata/Guest2025'
import React from 'react'
import TeamCard from './GuestCart2025'

const ChiefGuest2025 = () => {
  return (
    <section className="lg:pb-15  pb-10">
      <div className="container">
        <div className="text-center flex flex-col items-center ">
          <SectionName>Chief Guests 2025</SectionName>
          <Title size={"3.5xl"} className={"lg:max-w-[520px]"}>Meet Our Distinguished Guests
          </Title>
        </div>
        <div className="lg:pt-15 pt-10">
          <div className="grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-7.5">
            {teamData.map(({id, name, position, src}) => <TeamCard key={id} name={name} position={position} src={src} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChiefGuest2025