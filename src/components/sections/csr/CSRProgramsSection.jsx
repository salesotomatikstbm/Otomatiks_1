import React from 'react';
import SectionName from '@/components/ui/sectionName';
import Title from '@/components/ui/title';
export default function CSRProgramsSection() {
    return (
        <section className="py-2">
            <div className="container mx-auto px-6">
            <SectionName className="text-center text-primary">
            Empowering Communities through CSR Education</SectionName>
                <Title size="3.5xl" className="text-center mt-2 mb-2">
                Our mission is to inspire and educate the next generation in STEM fields.
                </Title>
               

                <div className="grid md:grid-cols-2 gap-10">
                    <div className="flex flex-col justify-center bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:scale-105">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Workshops & Training</h3>
                        <p className="text-gray-600 mb-4">
                            Engaging workshops designed to provide hands-on experience with the latest technologies.
                        </p>
                        <a href="#" className="inline-block mt-auto text-yellow-600 font-semibold hover:underline">Learn More</a>
                    </div>

                    <div className="flex flex-col justify-center bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:scale-105">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Partnerships</h3>
                        <p className="text-gray-600 mb-4">
                            Collaborations with leading organizations to enhance educational outcomes.
                        </p>
                        <a href="#" className="inline-block mt-auto text-yellow-600 font-semibold hover:underline">Learn More</a>
                    </div>

                    <div className="flex flex-col justify-center bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:scale-105">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Skill Development</h3>
                        <p className="text-gray-600 mb-4">
                            Programs focused on building essential skills for the future workforce.
                        </p>
                        <a href="#" className="inline-block mt-auto text-yellow-600 font-semibold hover:underline">Learn More</a>
                    </div>

                    <div className="flex flex-col justify-center bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:scale-105">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Mentorship</h3>
                        <p className="text-gray-600 mb-4">
                            Connecting students with industry leaders for guidance and support.
                        </p>
                        <a href="#" className="inline-block mt-auto text-yellow-600 font-semibold hover:underline">Learn More</a>
                    </div>
                </div>

                <div className="mt-10 text-center">
                    <button className="px-10 py-4 bg-primary text-white rounded-full shadow-lg hover:bg-secondary transition duration-300">
                        Join Us in Making a Difference
                    </button>
                </div>
            </div>
        </section>
    );
}
