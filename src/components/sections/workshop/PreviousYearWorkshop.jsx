import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'
import { teamData } from '@/lib/fackdata/robotica2023'
import React from 'react'
import TeamCard from '../robotica2024/teamCard1'

const PreviousYearWorkshop = () => {
  return (
    <section className="lg:pb-15 py-16 pb-10">
      <div className="container">
        <div className="text-center flex flex-col items-center ">
          <SectionName>Previous Year Workshop</SectionName>
          <Title size={"3.5xl"} className={""}>Explore Our Past Workshops and Achievements
          </Title>
        </div>
        <div className="lg:pt-15 pt-10">
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-7.5">
            {teamData.map(({id, name, position, src}) => <TeamCard key={id} name={name} position={position} src={src} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PreviousYearWorkshop