// components/RoboticsImportanceSection.js

import React from 'react';
import SectionName from '@/components/ui/sectionName';
import Title from '@/components/ui/title';
import { FaCogs, FaDollarSign, FaStar, FaTrophy } from 'react-icons/fa'; // Import icons

const benefits = [
    {
        id: 1,
        title: 'Increased Efficiency',
        description: 'Robotics automates repetitive tasks, allowing employees to focus on more strategic work, leading to higher productivity.',
        icon: <FaCogs className="text-4xl text-primary" />, // Using icons instead of images
    },
    {
        id: 2,
        title: 'Cost Savings',
        description: 'Robotic systems reduce labor costs and minimize errors, resulting in significant financial savings for MSMEs.',
        icon: <FaDollarSign className="text-4xl text-primary" />,
    },
    {
        id: 3,
        title: 'Quality Improvement',
        description: 'Robots ensure consistency and precision in manufacturing processes, enhancing the quality of products.',
        icon: <FaStar className="text-4xl text-primary" />,
    },
    {
        id: 4,
        title: 'Competitive Advantage',
        description: 'By adopting robotics, MSMEs can compete more effectively in the market, positioning themselves as innovators.',
        icon: <FaTrophy className="text-4xl text-primary" />,
    },
];

export default function RoboticsImportanceSection() {
    return (
        <section className="py-12 bg-[#066aab]">
            <div className="container mx-auto px-6">
                <SectionName className="text-center">Why Robotics Matters for MSMEs</SectionName>
                <Title size="3.5xl" className="mt-2.5 text-center">
                    Discover the Benefits and Opportunities of Robotics for MSMEs
                </Title>
                <div className="grid md:grid-cols-2 gap-8 mt-6">
                    {benefits.map((benefit) => (
                        <div key={benefit.id} className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 text-center">
                            <div className="mb-4">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                            <p className="text-gray-700">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
