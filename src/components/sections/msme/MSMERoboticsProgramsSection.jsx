
import React from 'react';
import SectionName from '@/components/ui/sectionName';
import Title from '@/components/ui/title';

export default function MSMERoboticsProgramsSection() {
    return (
        <section className="py-12">
            <div className="container mx-auto px-6">
                <SectionName className="text-center text-primary">Explore MSME Robotics Programs</SectionName>
                <Title size="3.5xl" className="text-center mt-2">
                    Unlock Your Potential in Robotics
                </Title>
                <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex-1 p-6">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Tailored Resources</h3>
                        <p className="text-gray-600">
                            Start your robotics journey with resources designed to help you succeed at every step.
                        </p>
                    </div>
                    <div className="flex-1 p-6">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Specialized Workshops</h3>
                        <p className="text-gray-600">
                            From basic training to workshops, we provide the tools and knowledge needed for MSMEs to thrive.
                        </p>
                    </div>
                    <div className="flex-1 p-6">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Mentorship Opportunities</h3>
                        <p className="text-gray-600">
                            Join our mentorship programs and access online resources to enhance your robotics integration.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <button className="px-8 py-3 bg-primary text-white rounded-full shadow-lg hover:bg-secondary transition duration-300">
                        Discover More
                    </button>
                </div>
            </div>
        </section>
    );
}
