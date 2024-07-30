import React from 'react'
import CardTwo from './cardTwo'
import Crayon from '@/assets/icons/crayon'
import Scissors from '@/assets/icons/scissors'
import BabyCutlery from '@/assets/icons/baby-cutlery'
import BabyBody from '@/assets/icons/baby-body'

const SuccessProjectTwo = () => {
    return (
        <div className="lg:pt-15 lg:pb-15 pt-10 pb-10">
            <div className="container">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-7.5">
                    <CardTwo icon={<Crayon/>} number={"1230"} title={"Team member"}/>
                    <CardTwo icon={<Scissors/>} color={"text-secondary-foreground"} number={"210"} title={"Client review"}/>
                    <CardTwo icon={<BabyCutlery/>} color={"text-primary-foreground"} number={"1200"} title={"Winning award"}/>
                    <CardTwo icon={<BabyBody width='120' height='120'/>} color={"text-green-foreground"} number={"230"} title={"Complete project"}/>
                </div>
            </div>
        </div>
    )
}

export default SuccessProjectTwo