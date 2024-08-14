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
        // Handle the form submission here
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
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"> {/* Higher z-index */}
                    <div className="bg-white rounded-lg p-8 max-w-lg w-full z-50"> {/* Ensure form container has a high z-index */}
                        <h3 className="text-2xl font-bold mb-4">Enter Child's Details</h3>
                        <form onSubmit={handleFormSubmit}>
                            <div className="grid grid-cols-1 gap-5">
                                <Input type={"text"} placeholder={"Child's Name"} id="child_name" className={"text-[#686868] placeholder:[#686868] border-[#F2F2F2] lg:py-[15px] px-5"} />
                                <Input type={"number"} placeholder={"Child's Age"} id="child_age" className={"text-[#686868] placeholder:[#686868] border-[#F2F2F2] lg:py-[15px] px-5"} />
                                <Input type={"tel"} placeholder={"Mobile Number"} id="mobile" className={"text-[#686868] placeholder:[#686868] border-[#F2F2F2] lg:py-[15px] px-5"} />
                                <Input type={"text"} placeholder={"Parent's Name"} id="parent_name" className={"text-[#686868] placeholder:[#686868] border-[#F2F2F2] lg:py-[15px] px-5"} />
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

export default ContactForm1;
