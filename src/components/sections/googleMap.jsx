import React from 'react';
import { Button } from '../ui/button';
import SectionName from '../ui/sectionName';
import Title from '../ui/title';

const GoogleMap = () => {
    const handleGetDirections = () => {
        window.open("https://maps.app.goo.gl/gxYWSjE8ZBK2s1PX8", "_blank");
    };

    return (
        <div className="lg:pt-22 lg:pb-5 pt-25  overflow-x-hidden">
            {/* <div className="text-center mb-8">
                <SectionName>Our Location</SectionName>
                <Title size="3xl" className="lg:max-w-[600px] mx-auto">
                    Find Us on the Map
                </Title>
            </div> */}
            <div className="relative w-full h-80 mb-8 flex justify-center items-center">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d497704.2943343382!2d79.140626!3d12.951697!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad476fc12aeecb%3A0x7d065169d6a536ca!2sOtomatiks!5e0!3m2!1sen!2sus!4v1730186047404!5m2!1sen!2sus"
                    width="80%"
                    height="150%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="text-center">
                <Button
                    onClick={handleGetDirections}
                    className="text-white bg-primary hover:bg-secondary transition-colors duration-300"
                >
                    Get Directions
                </Button>
            </div>
        </div>
    );
};

export default GoogleMap;
