import React from 'react';
import SectionName from '@/components/ui/sectionName';
import Title from '@/components/ui/title';

export default function MSMERoboticsProgramsSection() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 text-center">
                <SectionName className="text-primary mb-4">Explore MSME Robotics Programs</SectionName>
                <Title size="4xl" className="font-bold text-gray-900">
                    Unlock Your Potential in Robotics
                </Title>
                <div className="mt-12 grid gap-12 md:grid-cols-2 lg:grid-cols-3 items-start">
                    <div className="flex flex-col items-center">
                        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Tailored Resources</h3>
                        <p className="text-gray-600 leading-relaxed max-w-xs">
                            Start your robotics journey with resources designed to help you succeed at every step.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Specialized Workshops</h3>
                        <p className="text-gray-600 leading-relaxed max-w-xs">
                            From basic training to workshops, we provide the tools and knowledge needed for MSMEs to thrive.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Mentorship Opportunities</h3>
                        <p className="text-gray-600 leading-relaxed max-w-xs">
                            Join our mentorship programs and access online resources to enhance your robotics integration.
                        </p>
                    </div>
                </div>
                <div className="mt-12">
                    <button className="px-8 py-3 bg-primary text-white font-semibold rounded-full shadow-md hover:bg-secondary transition-all duration-300 transform hover:scale-105">
                        Discover More
                    </button>
                </div>
            </div>
        </section>
    );
}
