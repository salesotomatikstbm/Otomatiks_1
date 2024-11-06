import React from 'react';
import { FaEnvelope, FaPhone, FaLocationDot } from 'react-icons/fa6';
import GoogleMap from './googleMap';
import SectionName from '@/components/ui/sectionName';
import Title from '@/components/ui/title';

const ContactAddress = () => {
    return (
        <section className="text py-6">
            <div className="container mx-auto px-6 lg:px-12 text-center">
                <SectionName>Reach Out to Our Team</SectionName>
                <Title size={"3.5xl"}>Connect with us for more information or assistance</Title>
                
                <div className="grid gap-8 lg:grid-cols-3 lg:gap-12 mt-8">
                    {/* Email Contact */}
                    <div className="flex flex-col items-center justify-center p-6 border border-gray-600 rounded-lg transition-colors duration-300">
                        <FaEnvelope className="text-3xl mb-4 text-primary" />
                        <h3 className="text-xl font-semibold mb-2 text-primary">Email Us</h3>
                        <a href="mailto:support@otomatiks.in" className="text-secondary hover:text-secondary transition-colors">
                            support@otomatiks.in
                        </a>
                    </div>

                    {/* Phone Contact */}
                    <div className="flex flex-col items-center justify-center p-6 border border-secondary rounded-lg transition-colors duration-300">
                        <FaPhone className="text-3xl mb-4 text-primary" />
                        <h3 className="text-xl font-semibold mb-2 text-primary">Call Us</h3>
                        <a href="tel:+919043209448" className="text-secondary hover:text-secondary transition-colors">
                            +91 90432 09448
                        </a>
                    </div>

                    {/* Location */}
                    <div className="flex flex-col items-center justify-center p-6 border border-secondary rounded-lg transition-colors duration-300">
                        <FaLocationDot className="text-3xl mb-4 text-primary" />
                        <h3 className="text-xl font-semibold mb-2 text-primary">Visit Us</h3>
                        <p className="text-secondary text-center">
                            No..A2, 36, 12th Cross Road, Suthanthira Ponvizha Nagar, Gandhi Nagar, Vellore, Tamil Nadu 632006
                        </p>
                    </div>
                </div>

                <div className="mt-12">
                    <GoogleMap />
                </div>
            </div>
        </section>
    );
}

export default ContactAddress;
