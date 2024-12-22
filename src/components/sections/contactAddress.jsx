import React from 'react';
import { FaEnvelope, FaPhone, FaLocationDot } from 'react-icons/fa6';

import SectionName from '@/components/ui/sectionName';
import Title from '@/components/ui/title';

const ContactAddress = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto px-6 lg:px-12 text-center">
                {/* Section Name and Title */}
                <SectionName>Reach Out to Our Team</SectionName>
                <Title size="3.5xl" className="mb-8">
                    Connect with us for more information or assistance
                </Title>

                {/* Contact Steps Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
                    {/* Step 1 - Email */}
                    <div className="flex flex-col items-center group transform transition-all duration-300 hover:scale-105 hover:rotate-3d border-2 border-dotted border-gray-300 p-6 rounded-lg">
                        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-200 mb-4 shadow-xl group-hover:shadow-2xl">
                            <FaEnvelope className="text-3xl text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Email Us</h3>
                        <a
                            href="mailto:support@otomatiks.in"
                            className="hover:underline"
                        >
                            support@otomatiks.in
                        </a>
                    </div>

                    {/* Step 2 - Phone */}
                    <div className="flex flex-col items-center group transform transition-all duration-300 hover:scale-105 hover:rotate-3d border-2 border-dotted border-gray-300 p-6 rounded-lg">
                        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-200 mb-4 shadow-xl group-hover:shadow-2xl">
                            <FaPhone className="text-3xl text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Call Us</h3>
                        <a
                            href="tel:+919043209448"
                            className="hover:underline"
                        >
                            +91 90432 09448
                        </a>
                    </div>

                    {/* Step 3 - Location */}
                    <div className="flex flex-col items-center group transform transition-all duration-300 hover:scale-105 hover:rotate-3d border-2 border-dotted border-gray-300 p-6 rounded-lg">
                        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-200 mb-4 shadow-xl group-hover:shadow-2xl">
                            <FaLocationDot className="text-3xl text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Visit Us</h3>
                        <p className="text-center max-w-sm mx-auto">
                            No..A2, 36, 12th Cross Road, Suthanthira Ponvizha Nagar, Gandhi Nagar, Vellore, Tamil Nadu 632006
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactAddress;
