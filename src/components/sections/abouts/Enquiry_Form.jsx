import React, { useState } from 'react';
import Input from '../../ui/input';
import { Button } from '../../ui/button';
import { FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';

const Enquiry_Form = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handlePopupOpen = () => {
        setIsPopupOpen(true);
    };

    const handlePopupClose = () => {
        setIsPopupOpen(false);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted!");
        setIsPopupOpen(false);
    };

    return (
        <div>
            <div className="flex justify-center mt-10">
                <Button onClick={handlePopupOpen} variant="pill" className="bg-primary border-primary hover:text-primary-foreground">
                    Contact Us
                </Button>
            </div>

            {isPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-[10px] p-8 max-w-lg w-full shadow-lg z-50">
                        <h3 className="text-[28px] font-bold leading-[148%] font-nunito mb-4">Enquiry Form</h3>
                        <form onSubmit={handleFormSubmit}>
                            <div className="grid grid-cols-1 gap-5">
                                <div className="relative">
                                    <Input 
                                        type="text" 
                                        placeholder="Your Name" 
                                        id="name" 
                                        className="text-[#686868] placeholder-[#686868] border-[#F2F2F2] lg:py-[15px] px-5" 
                                    />
                                    <label htmlFor="name" className="absolute right-5 top-1/2 -translate-y-1/2"> 
                                        <FaPaperPlane />
                                    </label>
                                </div>
                                <div className="relative">
                                    <Input 
                                        type="tel" 
                                        placeholder="Phone Number" 
                                        id="phone" 
                                        className="text-[#686868] placeholder-[#686868] border-[#F2F2F2] lg:py-[15px] px-5" 
                                    />
                                    <label htmlFor="phone" className="absolute right-5 top-1/2 -translate-y-1/2"> 
                                        <FaPhone />
                                    </label>
                                </div>
                                <div className="relative">
                                    <textarea
                                        placeholder="Message"
                                        id="message"
                                        className="w-full min-h-36 rounded-[10px] border-2 text-[#686868] placeholder-[#686868] border-[#F2F2F2] px-5 py-[15px] outline-none"
                                    />
                                    <label htmlFor="message" className="absolute right-5 top-[15px]"> 
                                        <FaEnvelope />
                                    </label>
                                </div>
                            </div>
                            <div className="flex justify-end mt-5">
                                <Button variant="pill" className="bg-primary border-primary hover:text-primary-foreground" type="submit">Submit</Button>
                                <Button variant="pill" className="ml-3 bg-gray-500 border-gray-500 hover:text-primary-foreground" onClick={handlePopupClose}>Cancel</Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Enquiry_Form;
