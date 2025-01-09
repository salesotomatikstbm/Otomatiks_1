import React from 'react';
import { Link } from 'react-router-dom';
import SectionName from '../ui/sectionName';
import Title from '../ui/title';
import workshopData from '@/lib/fackdata/workshopData';
import { Button } from '../ui/button'
const Pricing = () => {
    return (
        <section className="py-10 bg-[#066aab]">
            <div className="container">
                <div className="text-center mb-10">
                    <SectionName className="text-primary-foreground">Our Workshops</SectionName>
                    <Title size="3.5xl" className="mt-2">Hands-on Learning Experiences for Future Innovators</Title>
                </div>
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 ">
                    {workshopData.map(({ id, plan_name, features }) => (
                        <Card key={id} plan_name={plan_name} features={features} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const Card = ({ plan_name, features }) => {
    return (
        <div className="bg-background shadow-3xl border-2 border-transparent hover:border-green transition-all duration-500 flex flex-col justify-center p-7 rounded-tl-[50px] rounded-br-[50px] rounded-tr-[10px] rounded-bl-[10px] max-w-[610px] mx-auto group/branch bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-semibold text-primary text-center mb-4">{plan_name}</h3>
            <p className="">{features}</p>
            <div className="mt-6 text-center">
            <Button asChild size="lg" variant="outline" className="border-primary">
                                    <Link to={"/contact-us"}>Know Now</Link>
                                </Button>
            </div>
        </div>
    );
};

export default Pricing;
