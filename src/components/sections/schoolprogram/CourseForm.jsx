import React, { useState } from 'react';
import Input from '../../ui/input';
import { Button } from '../../ui/button';
import { FaUser, FaPhone, FaEnvelope, FaBuilding, FaChevronDown } from 'react-icons/fa';

const CourseForm = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [designation, setDesignation] = useState('');

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
                        <h3 className="text-[28px] font-bold leading-[148%] font-nunito mb-4">Enter Contact Details</h3>
                        <form onSubmit={handleFormSubmit}>
                            <div className="grid grid-cols-1 gap-5">
                                <div className="relative">
                                    <Input 
                                        type="text" 
                                        placeholder="Your Name" 
                                        id="name" 
                                        className="text-[#686868] placeholder-[#686868] border-[#F2F2F2] rounded-[10px] lg:py-[15px] px-5" 
                                    />
                                    <label htmlFor="name" className="absolute right-5 top-1/2 -translate-y-1/2"> 
                                        <FaUser />
                                    </label>
                                </div>
                                <div className="relative">
                                    <Input 
                                        type="tel" 
                                        placeholder="Phone Number" 
                                        id="phone" 
                                        className="text-[#686868] placeholder-[#686868] border-[#F2F2F2] rounded-[10px] lg:py-[15px] px-5" 
                                    />
                                    <label htmlFor="phone" className="absolute right-5 top-1/2 -translate-y-1/2"> 
                                        <FaPhone />
                                    </label>
                                </div>
                                <div className="relative">
                                    <Input 
                                        type="email" 
                                        placeholder="Email ID" 
                                        id="email" 
                                        className="text-[#686868] placeholder-[#686868] border-[#F2F2F2] rounded-[10px] lg:py-[15px] px-5" 
                                    />
                                    <label htmlFor="email" className="absolute right-5 top-1/2 -translate-y-1/2"> 
                                        <FaEnvelope />
                                    </label>
                                </div>
                                <div className="relative">
                                    <Input 
                                        type="text" 
                                        placeholder="Organization Name" 
                                        id="organization" 
                                        className="text-[#686868] placeholder-[#686868] border-[#F2F2F2] rounded-[10px] lg:py-[15px] px-5" 
                                    />
                                    <label htmlFor="organization" className="absolute right-5 top-1/2 -translate-y-1/2"> 
                                        <FaBuilding />
                                    </label>
                                </div>
                                <div className="relative">
                                    <select 
                                        id="designation" 
                                        value={designation} 
                                        onChange={(e) => setDesignation(e.target.value)} 
                                        className="text-[#686868] border-[#F2F2F2] rounded-[10px] lg:py-[15px] px-5 w-full bg-white appearance-none"
                                    >
                                        <option value="" disabled>Select Designation</option>
                                        <option value="Manager">Manager</option>
                                        <option value="Developer">Developer</option>
                                        <option value="Designer">Designer</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <FaChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none" />
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

export default CourseForm;
