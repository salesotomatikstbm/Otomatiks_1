import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'
import { teamData } from '@/lib/fackdata/teamData'
import React from 'react'
import TeamCard from './teamCard'
import PopupAbout from '../abouts/PopupAbout'


const Teams = () => {
  return (
    <section className="lg:pt-15 lg:pb-15 pt-10 pb-10 bg-[#066aab]">
      <div className="container">
        <div className="text-center flex flex-col items-center ">
          <SectionName>Meet Our Experts</SectionName>
          <Title size={"3.5xl"} className={"lg:max-w-[820px]"}>A Dedicated Team Driving Innovation and Growth</Title>
        </div>
        <div className="lg:pt-15 pt-10">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7.5">
            {teamData.map(({id, name, position, src}) => <TeamCard key={id} name={name} position={position} src={src} />)}
          </div>
        </div>
      </div>
      <div className="lg:pt-15 pt-10 mt-4">
    <PopupAbout />
      </div>
    </section>
  )
}

export default Teams