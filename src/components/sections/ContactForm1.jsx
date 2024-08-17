import React, { useState } from 'react';
import Input from '../ui/input';
import { Button } from '../ui/button';

const ContactForm1 = () => {
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
                <Button onClick={handlePopupOpen} variant="pill" className="bg-primary border-primary text-white hover:text-primary-foreground lg:py-3 px-8">
                    Contact Us
                </Button>
            </div>

            {isPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full relative z-50">
                        <h3 className="text-3xl font-bold text-center mb-6 font-nunito">Enter Child's Details</h3>
                        <form onSubmit={handleFormSubmit}>
                            <div className="grid grid-cols-1 gap-6">
                                <div className="relative">
                                    <Input
                                        type="text"
                                        placeholder="Child's Name"
                                        id="child_name"
                                        className="text-[#686868] placeholder-[#686868] border-[#F2F2F2] lg:py-[15px] px-5 rounded-[10px]"
                                    />
                                </div>
                                <div className="relative">
                                    <Input
                                        type="number"
                                        placeholder="Child's Age"
                                        id="child_age"
                                        className="text-[#686868] placeholder-[#686868] border-[#F2F2F2] lg:py-[15px] px-5 rounded-[10px]"
                                    />
                                </div>
                                <div className="relative">
                                    <Input
                                        type="tel"
                                        placeholder="Mobile Number"
                                        id="mobile"
                                        className="text-[#686868] placeholder-[#686868] border-[#F2F2F2] lg:py-[15px] px-5 rounded-[10px]"
                                    />
                                </div>
                                <div className="relative">
                                    <Input
                                        type="text"
                                        placeholder="Parent's Name"
                                        id="parent_name"
                                        className="text-[#686868] placeholder-[#686868] border-[#F2F2F2] lg:py-[15px] px-5 rounded-[10px]"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end mt-8">
                                <Button variant="pill" className="bg-primary border-primary text-white hover:bg-primary-hover hover:border-primary-hover lg:py-[12px] px-8" type="submit">
                                    Submit
                                </Button>
                                <Button variant="pill" className="ml-4 bg-gray-500 border-gray-500 text-white hover:bg-gray-400 hover:border-gray-400 lg:py-[12px] px-8" onClick={handlePopupClose}>
                                    Cancel
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactForm1;
