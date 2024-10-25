import React from 'react';
import contact_2 from "@/assets/images/contact/contact-2.png";
import contact_1 from "@/assets/images/contact/contact-1.png";
import winner from "@/assets/images/contact/winner.svg";
import Input from '../ui/input';
import { FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa6';
import { Button } from '../ui/button';
import SectionName from '../ui/sectionName';
import Title from '../ui/title';

const ContactForm = () => {
    const [message, setMessage] = React.useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        const formEle = e.target; // Access the form element directly
        const formData = new FormData(formEle);

        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbxRHUnHCqzlDNpBqEcrwUl5sOexpj1FYoTpmqYrXu3_YMOOHGj5SOW7l7L1HsbxkLj0/exec", // Your actual deployment URL
                {
                    method: "POST",
                    body: formData,
                }
            );

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.text(); // Change to .text() since the response is plain text
            console.log(data); // Log the plain text response
            setMessage('Your message has been sent successfully!'); // Success message
        } catch (error) {
            console.error('Error:', error);
            setMessage('There was an error sending your message.'); // Error message
        }

        formEle.reset(); // Reset the form after submission
    };

    return (
        <section className="lg:pt-15 lg:pb-15 pb-10 pt-10">
            <div className="container">
                <div className="max-w-[546px] mx-auto text-center">
                    <SectionName>Contact</SectionName>
                    <Title size={"3.5xl"}>Unlock your potential with education</Title>
                </div>
                <div className="mt-15">
                    <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-7.5">
                        <div className="relative">
                            <div className="absolute top-1/2 -translate-y-1/2 h-full flex flex-col justify-between">
                                <div className="mt-[68px] sm:w-full w-40 animate-up-down">
                                    <img src={contact_2} alt="two-girls-img" />
                                </div>
                                <div className="bg-primary px-5 py-[18px] rounded-[10px] flex items-center gap-5 mb-7.5 animate-left-right">
                                    <div>
                                        <img src={winner} alt="img" />
                                    </div>
                                    <div>
                                        <h4 className="text-[28px] font-bold text-cream-foreground leading-[148%] font-nunito">2k+</h4>
                                        <h6 className="text-xl font-bold text-cream-foreground mt-[5px] leading-[130%]">Project Completed</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="flex lg:justify-end justify-center">
                                <img src={contact_1} alt="img" />
                            </div>
                        </div>
                        <div>
                            <div className="bg-background shadow-[0px_5px_60px_0px_rgba(0,0,0,0.05)] rounded-[10px] lg:p-10 p-5">
                                <h3 className="text-[28px] font-bold leading-[148%] font-nunito">Send a message</h3>
                                <form className="form mt-7" onSubmit={handleSubmit}>
                                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5">
                                        <div className="relative">
                                            <input type="text" name="Name" placeholder="Your Name" id="name" className="text-[#686868] placeholder:[#686868] rounded-[10px] border-2  border-[#F2F2F2] lg:py-[15px] lg:px-10 py-5" />
                                            <label htmlFor="name" className="absolute right-5 top-1/2 -translate-y-1/2"><FaPaperPlane /></label>
                                        </div>
                                        <div className="relative">
                                            <input type="email" name="Email" placeholder="Your Email" id="email" className="text-[#686868] rounded-[10px] border-2  placeholder:[#686868] border-[#F2F2F2] lg:py-[15px] lg:px-10 py-5" />
                                            <label htmlFor="email" className="absolute right-5 top-1/2 -translate-y-1/2"><FaPhone /></label>
                                        </div>
                                    </div>

                                    <div className="relative mt-5">
                                        <textarea name="Message" id="message" placeholder="Write your Message here" className="w-full min-h-36 rounded-[10px] border-2 text-[#686868] placeholder:[#686868] border-[#F2F2F2] px-5 py-[15px] outline-none"></textarea>
                                        <label htmlFor="message" className="absolute right-5 top-[15px]"><FaEnvelope /></label>
                                    </div>
                                    <Button variant="pill" type="submit" className="w-full bg-primary border-primary hover:text-primary-foreground lg:mt-10 mt-5">Send Now</Button>
                                </form>
                                {message && <p className="mt-4 text-center text-lg text-gray-600">{message}</p>} {/* Success/Error message */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;
