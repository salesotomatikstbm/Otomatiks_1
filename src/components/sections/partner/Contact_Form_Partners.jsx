import React from 'react';
import Input from '../../ui/input';
import { FaEnvelope, FaPhone, FaPaperPlane, FaUser } from 'react-icons/fa6';
import { Button } from '../../ui/button';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';

const Contact_Form_Partners = () => {
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
        <section className="lg:pt-15 lg:pb-15 pb-10 pt-10 bg-[#066aab]">
            <div className="container">
                <div className="text-center">
                    <SectionName>Contact Us</SectionName>
                    <Title size={"3.5xl"}>Your Path to Success Begins with a Conversation</Title>
                </div>
                <div className="mt-15">
                    <div className="grid lg:grid-cols-1 grid-cols-1 items-center gap-7.5">
                        <div>
                            <div className="bg-background shadow-[0px_5px_60px_0px_rgba(0,0,0,0.05)] rounded-[10px] lg:p-10 p-5">
                                <h3 className="text-[28px] font-bold leading-[148%]  text-center font-nunito">Send a message</h3>
                                <form className="form mt-7" onSubmit={handleSubmit}>
                                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5">
                                        <div className="relative">
                                            <Input placeholder="Your Name"> 
                                                <input type="text" name="Name" placeholder="Your Name" id="name" className="text-[#686868] placeholder:[#686868] rounded-[10px] border-2 border-[#F2F2F2] lg:py-[15px] py-5" /> 
                                            </Input> 
                                            <label htmlFor="name" className="absolute right-5 top-1/2 -translate-y-1/2"><FaUser /></label>
                                        </div>
                                        <div className="relative">
                                            <Input placeholder="Date of Birth (mm/dd/yyyy)">
                                                <input type="text" name="DOB" placeholder="mm/dd/yyyy" id="dob" className="text-[#686868] placeholder:[#686868] rounded-[10px] border-2 border-[#F2F2F2] lg:py-[15px] py-5" />
                                            </Input>
                                            <label htmlFor="dob" className="absolute right-5 top-1/2 -translate-y-1/2"><FaUser /></label>
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5 mt-5">
                                        <div className="relative">
                                            <Input placeholder="Qualification"> 
                                                <input type="text" name="Qualification" placeholder="Qualification" id="qualification" className="text-[#686868] placeholder:[#686868] rounded-[10px] border-2 border-[#F2F2F2] lg:py-[15px] lg:px-10 py-5" /> 
                                            </Input> 
                                            <label htmlFor="qualification" className="absolute right-5 top-1/2 -translate-y-1/2"><FaPaperPlane /></label>
                                        </div>
                                        <div className="relative">
                                            <Input placeholder="Profession"> 
                                                <input type="text" name="Profession" placeholder="Profession" id="profession" className="text-[#686868] placeholder:[#686868] rounded-[10px] border-2 border-[#F2F2F2] lg:py-[15px] lg:px-10 py-5" /> 
                                            </Input> 
                                            <label htmlFor="profession" className="absolute right-5 top-1/2 -translate-y-1/2"><FaPaperPlane /></label>
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5 mt-5">
                                        <div className="relative">
                                            <Input placeholder="Franchise Location You Looking For"> 
                                                <input type="text" name="FranchiseLocation" placeholder="Franchise Location" id="franchiseLocation" className="text-[#686868] placeholder:[#686868] rounded-[10px] border-2 border-[#F2F2F2] lg:py-[15px] lg:px-10 py-5" /> 
                                            </Input> 
                                            <label htmlFor="franchiseLocation" className="absolute right-5 top-1/2 -translate-y-1/2"><FaPaperPlane /></label>
                                        </div>
                                        <div className="relative">
                                            <Input placeholder="Phone Number"> 
                                                <input type="text" name="Phone" placeholder="Your Phone Number" id="phone" className="text-[#686868] placeholder:[#686868] rounded-[10px] border-2 border-[#F2F2F2] lg:py-[15px] lg:px-10 py-5" /> 
                                            </Input> 
                                            <label htmlFor="phone" className="absolute right-5 top-1/2 -translate-y-1/2"><FaPhone /></label>
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5 mt-5">
                                        <div className="relative">
                                            <Input placeholder="Address"> 
                                                <input type="text" name="Address" placeholder="Address" id="address" className="text-[#686868] placeholder:[#686868] rounded-[10px] border-2 border-[#F2F2F2] lg:py-[15px] lg:px-10 py-5" /> 
                                            </Input> 
                                            <label htmlFor="address" className="absolute right-5 top-1/2 -translate-y-1/2"><FaPaperPlane /></label>
                                        </div>
                                        <div className="relative">
                                            <Input placeholder="Email Id"> 
                                                <input type="email" name="Email" placeholder="Your Email" id="email" className="text-[#686868] placeholder:[#686868] rounded-[10px] border-2 border-[#F2F2F2] lg:py-[15px] lg:px-10 py-5" /> 
                                            </Input>
                                            <label htmlFor="email" className="absolute right-5 top-1/2 -translate-y-1/2"><FaEnvelope /></label>
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5 mt-5">
                                        <div className="relative">
                                            <Input placeholder="Current Business"> 
                                                <input type="text" name="CurrentBusiness" placeholder="Current Business" id="currentBusiness" className="text-[#686868] placeholder:[#686868] rounded-[10px] border-2 border-[#F2F2F2] lg:py-[15px] lg:px-10 py-5" /> 
                                            </Input> 
                                            <label htmlFor="currentBusiness" className="absolute right-5 top-1/2 -translate-y-1/2"><FaPaperPlane /></label>
                                        </div>
                                        <div className="relative">
                                            <Input placeholder="Investment Plan"> 
                                                <input type="text" name="InvestmentPlan" placeholder="Upto 3 Lakhs" id="investmentPlan" className="text-[#686868] placeholder:[#686868] rounded-[10px] border-2 border-[#F2F2F2] lg:py-[15px] lg:px-10 py-5" /> 
                                            </Input> 
                                            <label htmlFor="investmentPlan" className="absolute right-5 top-1/2 -translate-y-1/2"><FaPaperPlane /></label>
                                        </div>
                                    </div>

                                    <div className="flex justify-center">
                                    <Button variant="pill" type="submit" className="w-1/2  bg-primary text-center border-primary hover:text-primary-foreground lg:mt-10 mt-5">Send Now</Button>
                                    </div>
                                </form>
                                {message && <div className="mt-4 text-center text-green-500">{message}</div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact_Form_Partners;
