import SlideUp from '@/lib/animations/slideUp'
import React from 'react'
import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6'
import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'
import SectionDescription from '@/components/ui/sectionDescription'

const ContactAddress = () => {
    return (
        <div className="lg:py-16 py-12">
            <div className="container">
                <div className="text-center mb-12">
                    <SectionName>Our Main Branch</SectionName>
                    <Title size="3xl" className="pb-4">Get in Touch</Title>
                    <SectionDescription>
                       Lorem Reach out to us at any of our Main branch or via email and phone. We're here to assist you with all your needs.
                    </SectionDescription>
                </div>
                
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                    <SlideUp delay={2}>
                        <div className="bg-white rounded-lg shadow-lg p-8 text-center flex flex-col items-center h-full">
                            <div className="w-16 h-16 rounded-full flex justify-center items-center bg-green-500">
                                <FaLocationDot className="text-white text-2xl" />
                            </div>
                            <h5 className="font-semibold text-xl mt-5 text-gray-800">Location</h5>
                            <p className="mt-2 text-gray-600">
                                Otomatiks Activity Centre, No. A2/36, 12th East Cross Road Opp B&B Golden Gate Apartment, Gandhi Nagar, Vellore-632006, Tamil Nadu 632006
                            </p>
                        </div>
                    </SlideUp>

                    <SlideUp delay={3}>
                        <div className="bg-white rounded-lg shadow-lg p-8 text-center flex flex-col items-center h-full">
                            <div className="w-16 h-16 rounded-full flex justify-center items-center bg-blue-500">
                                <FaEnvelope className="text-white text-2xl" />
                            </div>
                            <h5 className="font-semibold text-xl mt-5 text-gray-800">Mail</h5>
                            <p className="mt-2 text-gray-600">
                                <a href="mailto:email1@otomatiks.in" className="hover:text-blue-600 transition-colors">email1@otomatiks.in</a> <br />
                                <a href="mailto:email2@otomatiks.in" className="hover:text-blue-600 transition-colors">email2@otomatiks.in</a>
                            </p>
                        </div>
                    </SlideUp>

                    <SlideUp delay={4}>
                        <div className="bg-white rounded-lg shadow-lg p-8 text-center flex flex-col items-center h-full">
                            <div className="w-16 h-16 rounded-full flex justify-center items-center bg-red-500">
                                <FaPhone className="text-white text-2xl" />
                            </div>
                            <h5 className="font-semibold text-xl mt-5 text-gray-800">Contact</h5>
                            <p className="mt-2 text-gray-600">
                                <a href="tel:+91Contact1" className="hover:text-red-600 transition-colors">+91 Contact 1</a><br />
                                <a href="tel:+91Contact2" className="hover:text-red-600 transition-colors">+91 Contact 2</a>
                            </p>
                        </div>
                    </SlideUp>
                </div>
            </div>
        </div>
    )
}

export default ContactAddress
