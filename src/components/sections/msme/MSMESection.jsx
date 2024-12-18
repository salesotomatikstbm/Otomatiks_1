import React from 'react';
import SectionName from '@/components/ui/sectionName';
import Title from '@/components/ui/title';
import msme from "@/assets/images/projects/about2.png"

export default function MSMESection() {
    return (
        <section className="py-6">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2">
                    <SectionName className="text-center md:text-left">Empowering MSMEs in Robotics</SectionName>
                    <Title size="3.5xl" className="text-center md:text-left">
                        Boosting Innovation and Growth for Small and Medium Enterprises
                    </Title>
                    <ul className="mt-6 space-y-4 text-lg text-gray-700 list-disc list-inside">
                        <li>
                            Join us in transforming the landscape of MSMEs through robotics and technology. Discover opportunities for growth, innovation, and efficiency.
                        </li>
                        <li>
                            Our initiative focuses on providing MSMEs with access to the latest robotic technologies and training programs.
                        </li>
                        <li>
                            We offer comprehensive training sessions tailored to equip MSME employees with essential skills in robotics, automation, and AI technologies.
                        </li>
                        <li>
                            Additionally, we provide funding support and resources to help MSMEs innovate and scale their operations.
                        </li>
                        <li>
                            Join our community of forward-thinking enterprises and take the first step towards digital transformation in robotics.
                        </li>
                    </ul>
                    <div className="flex justify-center mt-6">
                        <button className="px-6 py-4 bg-primary text-white rounded-full hover:bg-secondary transition">
                            Learn More
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0">
                    <img src={msme} alt="Robotics in MSMEs" className="w-full h-auto object-cover rounded-lg" /> {/* Replace with your image URL */}
                </div>
            </div>
        </section>
    );
}
