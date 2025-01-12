import SocalIcons from '@/components/ui/socalIcons'
import React from 'react'
import { Link } from 'react-router-dom'

const TeamCard = ({src, name, position}) => {
    return (
        <div className="bg-background shadow-3xl ">
            <div>
                <div>
                    <img src={src} alt="team-1" className=""/>
                </div>
              
            </div>
        </div>
    )
}

export default TeamCard