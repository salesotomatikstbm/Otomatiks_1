import React from 'react';
import Input from '../../ui/input';
import { FaEnvelope, FaPhone, FaPaperPlane, FaUser, FaBriefcase } from 'react-icons/fa6';
import { Button } from '../../ui/button';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';

const Contact_School_Management = () => {
    const [message, setMessage] = React.useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formEle = e.target;
        const formData = new FormData(formEle);

        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbxRHUnHCqzlDNpBqEcrwUl5sOexpj1FYoTpmqYrXu3_YMOOHGj5SOW7l7L1HsbxkLj0/exec",
                {
                    method: "POST",
                    body: formData,
                }
            );

            if (!response.ok) throw new Error('Network response was not ok');

            const data = await response.text();
            console.log(data);
            setMessage('Your message has been sent successfully!');
        } catch (error) {
            console.error('Error:', error);
            setMessage('There was an error sending your message.');
        }

        formEle.reset();
    };

    return (
        <section className="lg:pt-15 lg:pb-15 pb-10 pt-10">
            <div className="container">
                <div className="max-w-[500px] mx-auto text-center">
                    <SectionName>Contact School Management</SectionName>
                    <Title size={"3.5xl"}>Professional Inquiries and School Management Communication</Title>
                </div>
                <div className="mt-15">
                    <div className="grid lg:grid-cols-1 grid-cols-1 items-center gap-7.5">
                        <div>
                            <div className="bg-background shadow-[0px_5px_60px_0px_rgba(0,0,0,0.05)] rounded-[10px] lg:p-10 p-5">
                                <h3 className="text-[28px] font-bold leading-[148%] text-center font-nunito">Send a Message</h3>
                                <form className="form mt-7" onSubmit={handleSubmit}>
                                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5">
                                        <div className="relative">
                                            <Input placeholder="Your Full Name"> 
                                                <input type="text" name="FullName" placeholder="Your Full Name" id="full-name" className="text-[#686868] placeholder-[#686868] rounded-[10px] border-2 border-[#F2F2F2] lg:py-[15px] py-5" /> 
                                            </Input> 
                                            <label htmlFor="full-name" className="absolute right-5 top-1/2 -translate-y-1/2"><FaUser /></label>
                                        </div>
                                        <div className="relative">
                                            <Input placeholder="Position"> 
                                                <input type="text" name="Position" placeholder="Position/Title" id="position" className="text-[#686868] placeholder-[#686868] rounded-[10px] border-2 border-[#F2F2F2] lg:py-[15px] py-5" /> 
                                            </Input>
                                            <label htmlFor="position" className="absolute right-5 top-1/2 -translate-y-1/2"><FaBriefcase /></label>
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5 mt-5">
                                        <div className="relative">
                                            <Input placeholder="Phone Number"> 
                                                <input type="text" name="Phone" placeholder="Phone Number" id="phone" className="text-[#686868] placeholder-[#686868] rounded-[10px] border-2 border-[#F2F2F2] lg:py-[15px] py-5" /> 
                                            </Input> 
                                            <label htmlFor="phone" className="absolute right-5 top-1/2 -translate-y-1/2"><FaPhone /></label>
                                        </div>
                                        <div className="relative">
                                            <Input placeholder="Your Email"> 
                                                <input type="email" name="Email" placeholder="Your Email" id="email" className="text-[#686868] placeholder-[#686868] rounded-[10px] border-2 border-[#F2F2F2] lg:py-[15px] py-5" /> 
                                            </Input>
                                            <label htmlFor="email" className="absolute right-5 top-1/2 -translate-y-1/2"><FaEnvelope /></label>
                                        </div>
                                    </div>

                                    <div className="relative mt-5">
                                        <textarea name="Message" id="message" placeholder="Your Message" className="w-full min-h-36 rounded-[10px] border-2 text-[#686868] placeholder-[#686868] border-[#F2F2F2] px-5 py-[15px]"></textarea>
                                        <label htmlFor="message" className="absolute right-5 top-[15px]"><FaEnvelope /></label>
                                    </div>
                                    <div className="flex justify-center">
                                        <Button variant="pill" type="submit" className="w-1/2 bg-primary text-center border-primary hover:text-primary-foreground lg:mt-10 mt-5">Send Now</Button>
                                    </div>
                                </form>
                                {message && <p className="mt-4 text-center text-lg text-gray-600">{message}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact_School_Management;
