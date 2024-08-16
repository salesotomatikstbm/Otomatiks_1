import React, { useState } from 'react';
import Input from '../../ui/input';
import { Button } from '../../ui/button';

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
        // Handle the form submission here
        alert("Form submitted!");
        setIsPopupOpen(false);
    };

    return (
        <div>
            <div className="flex justify-center ">
                <Button onClick={handlePopupOpen} variant="pill" className="bg-primary border-primary hover:text-primary-foreground">
                    Contact Us
                </Button>
            </div>

            {isPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"> {/* Higher z-index */}
                    <div className="bg-white rounded-lg p-8 max-w-lg w-full z-50"> {/* Ensure form container has a high z-index */}
                        <h3 className="text-2xl font-bold mb-4">Enter Details</h3>
                        <form onSubmit={handleFormSubmit}>
                            <div className="grid grid-cols-1 gap-5">
                                <Input 
                                    type="text" 
                                    placeholder="Name" 
                                    id="name" 
                                    className="text-[#686868] placeholder-[#686868] border-[#E0E0E0] rounded-[10px] lg:py-[15px] px-5" 
                                />
                                <Input 
                                    type="tel" 
                                    placeholder="Phone Number" 
                                    id="phone" 
                                    className="text-[#686868] placeholder-[#686868] border-[#E0E0E0] rounded-[10px] lg:py-[15px] px-5" 
                                />
                                <Input 
                                    type="email" 
                                    placeholder="Email ID" 
                                    id="email" 
                                    className="text-[#686868] placeholder-[#686868] border-[#E0E0E0] rounded-[10px] lg:py-[15px] px-5" 
                                />
                                <Input 
                                    type="text" 
                                    placeholder="Organization Name" 
                                    id="organization" 
                                    className="text-[#686868] placeholder-[#686868] border-[#E0E0E0] rounded-[10px] lg:py-[15px] px-5" 
                                />
                                <div className="relative border-[#E0E0E0] rounded-[10px]">
                                    <select 
                                        id="designation" 
                                        value={designation} 
                                        onChange={(e) => setDesignation(e.target.value)} 
                                        className="text-[#686868] border-[#E0E0E0] rounded-[10px] lg:py-[15px] px-5 w-full bg-white"
                                    >
                                        <option value="" disabled>Select Designation</option>
                                        <option value="Manager">Manager</option>
                                        <option value="Developer">Developer</option>
                                        <option value="Designer">Designer</option>
                                        <option value="Other">Other</option>
                                    </select>
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
}

export default CourseForm;
