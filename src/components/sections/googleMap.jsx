import React from 'react';
import { Button } from '../ui/button';
import SectionName from '../ui/sectionName';
import Title from '../ui/title';

const GoogleMap = () => {
    const handleGetDirections = () => {
        window.open("https://www.google.com/maps/dir/?api=1&destination=Tamil%20Nadu", "_blank");
    };

    return (
        <div className="lg:pt-15 lg:pb-15 pt-10 pb-10 overflow-x-hidden">
            <div className="text-center mb-8">
                <SectionName>Our Location</SectionName>
                <Title size="3xl" className="lg:max-w-[600px] mx-auto">
                    Find Us on the Map
                </Title>
            </div>
            <div className="relative w-full h-80 mb-8 flex justify-center items-center">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d394774.0580428975!2d78.021201!3d9.082681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab2c6f5cdd1d91%3A0x4a8bb12f7512cded!2sTamil%20Nadu!5e0!3m2!1sen!2sin!4v1691045642902!5m2!1sen!2sin"
                    width="80%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="text-center">
                <Button
                    onClick={handleGetDirections}
                    className="text-white bg-green-500 hover:bg-green-600 transition-colors duration-300"
                >
                    Get Directions
                </Button>
            </div>
        </div>
    );
};

export default GoogleMap;
