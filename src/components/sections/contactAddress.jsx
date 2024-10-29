import SlideUp from '@/lib/animations/slideUp'
import React from 'react'
import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6'
import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'

const ContactAddress = () => {
    return (
        <div className="container lg:py-16 py-12">
            <div className="px-6">
                <div className="text-center mb-12">
                    <SectionName>Reach Out to Our Team</SectionName>
                    <Title size="3xl" className="pb-4">Get in Touch</Title>
                    <Title size="3.5xl">Connect with us for more information or assistance</Title>
                </div>

                {/* First row with Mail and Contact in two columns */}
                <div className="grid lg:grid-cols-2 gap-8">
                    <SlideUp delay={2}>
                        <div className="flex flex-col bg-white shadow-lg rounded-lg p-8 items-center text-center">
                            <div className="w-20 h-20 rounded-full flex justify-center items-center bg-primary text-white text-3xl mb-4">
                                <FaEnvelope />
                            </div>
                            <h5 className="font-semibold text-2xl text-gray-800">Mail</h5>
                            <p className="mt-2 text-gray-600 text-lg">
                                <a href="mailto:support@otomatiks.in" className="hover:text-secondary transition-colors">
                                    support@otomatiks.in
                                </a>
                            </p>
                        </div>
                    </SlideUp>

                    <SlideUp delay={3}>
                        <div className="flex flex-col bg-white shadow-lg rounded-lg p-8 items-center text-center">
                            <div className="w-20 h-20 rounded-full flex justify-center items-center bg-primary text-white text-3xl mb-4">
                                <FaPhone />
                            </div>
                            <h5 className="font-semibold text-2xl text-gray-800">Contact</h5>
                            <p className="mt-2 text-gray-600 text-lg">
                                <a href="tel:+919043209448" className="hover:text-secondary transition-colors">
                                    +91 90432 09448
                                </a>
                            </p>
                        </div>
                    </SlideUp>
                </div>

                {/* Second row with Address in one column */}
                <div className="mt-8">
                    <SlideUp delay={4}>
                        <div className="flex flex-col bg-white shadow-lg rounded-lg p-8 items-center text-center">
                            <div className="w-20 h-20 rounded-full flex justify-center items-center bg-secondary text-white text-3xl mb-4">
                                <FaLocationDot />
                            </div>
                            <h5 className="font-semibold text-2xl text-gray-800">Location</h5>
                            <p className="mt-2 text-gray-600 text-lg hover:text-primary transition-colors">
                                Otomatiks Activity Centre, No. A2/36, 12th East Cross Road, Opp B&B Golden Gate Apartment, Gandhi Nagar, Vellore-632006.
                            </p>
                        </div>
                    </SlideUp>
                </div>
            </div>
        </div>
    )
}

export default ContactAddress;
