import SocalIcons from '@/components/ui/socalIcons'
import React from 'react'
import { Link } from 'react-router-dom'

const TeamCard = ({ src, name, position }) => {
    return (
        <div className="bg-background shadow-3xl border-2 border-transparent hover:border-green transition-all duration-500 flex justify-center lg:p-10 p-7 rounded-tl-[50px] rounded-br-[50px] rounded-tr-[10px] rounded-bl-[10px] max-w-[410px] mx-auto group/team">
            <div>
                <div>
                    <img src={src} alt="team-1" className="rounded-tl-[50px] rounded-br-[50px] rounded-tr-[10px] rounded-bl-[10px] group-hover/team:rounded-tr-[50px] group-hover/team:rounded-bl-[50px] group-hover/team:rounded-tl-[10px] group-hover/team:rounded-br-[10px] transition-all duration-500" />
                </div>
                <div className="pt-7.5">
                    <span className="whitespace-nowrap">
                        <h4 className="leading-[141%]">
                            <Link to="#" className="text-2xl font-medium">{name}</Link>
                        </h4>
                    </span>
                    <p className="pt-1">{position}</p>
                    {/* <SocalIcons prentClass={"gap-5 pt-7.5"} className={"w-9 h-9 bg-warm text-muted-foreground hover:text-cream-foreground"}/> */}
                </div>
            </div>
        </div>
    )
}

export default TeamCard
