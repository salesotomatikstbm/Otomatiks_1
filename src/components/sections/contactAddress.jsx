import SlideUp from '@/lib/animations/slideUp'
import React from 'react'
import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6'
import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'
import GoogleMap from './googleMap'

const ContactAddress = () => {
    return (
        <div className="lg:py-20 py-16 bg-[#066aab] text-white">
            <div className="container px-8">
                <div className="text-center mb-16">
                    <SectionName >Reach Out to Our Team</SectionName>
                    
                    <Title size={"3.5xl"}> Connect with us for more information or assistance</Title>
          
                </div>

                {/* First row with Mail and Contact in two columns */}
                <div className="grid lg:grid-cols-2 gap-12">
                    <SlideUp delay={2}>
                        <div className="flex flex-col items-center text-center p-8 border border-gray-400 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 rounded-full flex justify-center items-center bg-primary text-white text-2xl mb-6">
                                <FaEnvelope />
                            </div>
                            <h5 className="font-semibold text-xl mb-2">Mail</h5>
                            <a
                                href="mailto:support@otomatiks.in"
                                className="text-base text-blue-200 hover:text-secondary transition-colors"
                            >
                                support@otomatiks.in
                            </a>
                        </div>
                    </SlideUp>

                    <SlideUp delay={3}>
                        <div className="flex flex-col items-center text-center p-8 border border-gray-400 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 rounded-full flex justify-center items-center bg-primary text-white text-2xl mb-6">
                                <FaPhone />
                            </div>
                            <h5 className="font-semibold text-xl mb-2">Contact</h5>
                            <a
                                href="tel:+919043209448"
                                className="text-base text-blue-200 hover:text-secondary transition-colors"
                            >
                                +91 90432 09448
                            </a>
                        </div>
                    </SlideUp>
                </div>

                {/* Second row with Address in one column */}
                <div className="mt-12">
                    <SlideUp delay={4}>
                        <div className="flex flex-col items-center text-center p-8 border border-gray-400 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 rounded-full flex justify-center items-center bg-primary text-white text-2xl mb-6">
                                <FaLocationDot />
                            </div>
                            <h5 className="font-semibold text-xl mb-2">Location</h5>
                            <p className="text-base text-gray-200 hover:text-primary transition-colors max-w-xs mx-auto">
                                No..A2, 36, 12th cross road, Suthanthira Ponvizha Nagar, Gandhi Nagar, Vellore, Tamil Nadu 632006
                            </p>
                        </div>
                    </SlideUp>
                </div>
            </div>
           <GoogleMap />
        </div>
    )
}

export default ContactAddress;
