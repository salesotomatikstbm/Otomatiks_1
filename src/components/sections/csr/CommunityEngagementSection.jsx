import React, { useState } from 'react';
import SectionName from '@/components/ui/sectionName';
import Title from '@/components/ui/title';

const communityData = [
    {
        title: 'School Partnership',
        description: 'We collaborate with schools and universities to integrate robotics and STEM into their curricula, providing students with hands-on experiences that spark innovation.',
        image: 'https://via.placeholder.com/400',
        link: '#',
    },
    {
        title: 'Nonprofit Collaborations',
        description: 'Our partnerships with nonprofit organizations focus on making STEM education accessible to underserved communities, empowering youth with the skills for a brighter future.',
        image: 'https://via.placeholder.com/400',
        link: '#',
    },
    {
        title: 'Corporate Partnerships',
        description: 'We partner with tech companies to provide cutting-edge resources, mentorship, and job opportunities, preparing individuals for careers in the ever-evolving digital landscape.',
        image: 'https://via.placeholder.com/400',
        link: '#',
    },
    {
        title: 'Community Collaborations',
        description: 'Working closely with local communities, we foster innovation through joint initiatives, helping individuals to build essential skills in robotics, coding, and problem-solving.',
        image: 'https://via.placeholder.com/400',
        link: '#',
    }
];

// Function to truncate the description
const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    }
    return text;
};

export default function CommunityEngagementSection() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    // Toggle description visibility
    const handleToggle = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section className="py-12">
            <div className="container mx-auto px-6">
                <SectionName className="text-center">
                    Partnering for a Better Tomorrow
                </SectionName>
                <Title size="3.5xl" className="text-center mt-2 mb-4">
                    Building Strong Partnerships for a Brighter Future
                </Title>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {communityData.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-between bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {expandedIndex === index 
                                        ? item.description 
                                        : truncateText(item.description, 100)} 
                                    {/* Show full description or truncated text */}
                                </p>
                                <button
                                    onClick={() => handleToggle(index)}
                                    className="text-teal-600 font-semibold hover:underline"
                                >
                                    {expandedIndex === index ? 'Show Less' : 'Learn More'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="px-10 py-4 bg-primary text-white rounded-full shadow-lg hover:bg-secondary transition duration-300">
                        Join Us in Building a Brighter Future
                    </button>
                </div>
            </div>
        </section>
    );
}
