import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'
import { teamData } from '@/lib/fackdata/teamData'
import React from 'react'
import TeamCard from './teamCard'

const Teams = () => {
  return (
    <section className="lg:pt-15 lg:pb-15 pt-10 pb-10">
      <div className="container">
        <div className="text-center flex flex-col items-center ">
          <SectionName>Explore Our Student Creations</SectionName>
          <Title size={"3.5xl"} className={"lg:max-w-[820px]"}>Highlighting real-world projects developed by our students</Title>
        </div>
        <div className="lg:pt-15 pt-10">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7.5">
            {teamData.map(({id, name, position, src}) => <TeamCard key={id} name={name} position={position} src={src} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Teams