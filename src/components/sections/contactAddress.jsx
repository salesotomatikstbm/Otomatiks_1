import React from 'react';
import { FaEnvelope, FaPhone, FaLocationDot } from 'react-icons/fa6';

import SectionName from '@/components/ui/sectionName';
import Title from '@/components/ui/title';
import GoogleMap from './googleMap';

const ContactAddress = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto px-6 lg:px-12 text-center">
                {/* Section Name and Title */}
                <SectionName>Contact Our Team</SectionName>
                <Title size="3.5xl" className="mb-8">
                Reach out for support or inquiries about our operations in India
                </Title>

                {/* Contact Steps Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
                    {/* Step 1 - Email */}
                    <div className="flex flex-col items-center group transform transition-all duration-300 hover:scale-105 hover:rotate-3d bg-background shadow-3xl border-2 border-transparent hover:border-green transition-all duration-500 flex flex-col justify-center p-7 rounded-tl-[50px] rounded-br-[50px] rounded-tr-[10px] rounded-bl-[10px] max-w-[510px] mx-auto group/branch">
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
                    <div className="flex flex-col items-center group transform transition-all duration-300 hover:scale-105 hover:rotate-3d bg-background shadow-3xl border-2 border-transparent hover:border-green transition-all duration-500 flex flex-col justify-center p-7 rounded-tl-[50px] rounded-br-[50px] rounded-tr-[10px] rounded-bl-[10px] max-w-[410px] mx-auto group/branch">
                        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-200 mb-4 shadow-xl group-hover:shadow-2xl">
                            <FaLocationDot className="text-3xl text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Visit Us</h3>
                        <p className="text-center max-w-sm mx-auto">
                            No..A2, 36, 12th Cross Road, Suthanthira Ponvizha Nagar, Gandhi Nagar, Vellore, Tamil Nadu 632006
                        </p>
                    </div>
                    {/* Step 2 - Phone */}
                    <div className="flex flex-col items-center group transform transition-all duration-300 hover:scale-105 hover:rotate-3d bg-background shadow-3xl border-2 border-transparent hover:border-green transition-all duration-500 flex flex-col justify-center p-7 rounded-tl-[50px] rounded-br-[50px] rounded-tr-[10px] rounded-bl-[10px] max-w-[510px] mx-auto group/branch">
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
                   
                </div>
            </div>
            <GoogleMap />
            <div className="container mx-auto px-6 text-center">
                {/* Section Name and Title */}
                {/* <SectionName>Contact Our India Team</SectionName> */}
                <Title size="3.5xl" className="mb-8 mt-12">
                Reach out for support or inquiries about our global operations in Dubai
                </Title>

                {/* Contact Steps Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
                    {/* Step 1 - Email */}
                    <div className="flex flex-col items-center group transform transition-all duration-300 hover:scale-105 hover:rotate-3d bg-background shadow-3xl border-2 border-transparent hover:border-green transition-all duration-500 flex flex-col justify-center p-7 rounded-tl-[50px] rounded-br-[50px] rounded-tr-[10px] rounded-bl-[10px] max-w-[510px] mx-auto group/branch">
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
                    <div className="flex flex-col items-center group transform transition-all duration-300 hover:scale-105 hover:rotate-3d bg-background shadow-3xl border-2 border-transparent hover:border-green transition-all duration-500 flex flex-col justify-center p-7 rounded-tl-[50px] rounded-br-[50px] rounded-tr-[10px] rounded-bl-[10px] max-w-[410px] mx-auto group/branch">
                        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-200 mb-4 shadow-xl group-hover:shadow-2xl">
                            <FaLocationDot className="text-3xl text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Visit Us</h3>
                        <p className="text-center max-w-sm mx-auto">
                        Otomatiks Training Centre, #608, Fortune Executive Tower, Cluster N, Jumeirah Lake Towers (JLT), Dubai.              </p>
                    </div>
                    {/* Step 2 - Phone */}
                    <div className="flex flex-col items-center group transform transition-all duration-300 hover:scale-105 hover:rotate-3d bg-background shadow-3xl border-2 border-transparent hover:border-green transition-all duration-500 flex flex-col justify-center p-7 rounded-tl-[50px] rounded-br-[50px] rounded-tr-[10px] rounded-bl-[10px] max-w-[510px] mx-auto group/branch">
                        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-200 mb-4 shadow-xl group-hover:shadow-2xl">
                            <FaPhone className="text-3xl text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Call Us</h3>
                        <a
                            href="tel:+971 562118618"
                            className="hover:underline"
                        >
                            +971 562118618
                        </a>
                    </div>

                    {/* Step 3 - Location */}
                   
                </div>
            </div>
        </section>
    );
};

export default ContactAddress;
