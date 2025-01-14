import React from 'react';
import contact_2 from "@/assets/images/contact/contact-2.png";
import contact_1 from "@/assets/images/contact/contact-1.png";
import winner from "@/assets/images/contact/service.jpg";
import { FaEnvelope, FaPhone, FaPaperPlane, FaUser, FaClipboard } from 'react-icons/fa6';
import { Button } from '../ui/button';
import SectionName from '../ui/sectionName';
import Title from '../ui/title';

const ContactForm = () => {
    const [formData, setFormData] = React.useState({
        Name: '',
        Email: '',
        Phone: '',
        Subject: '',
        Message: '',
    });

    const [errors, setErrors] = React.useState({});
    const [message, setMessage] = React.useState('');
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.Name.trim()) {
            newErrors.Name = 'Name is required';
        } else if (!/^[A-Za-z]+$/.test(formData.Name.trim())) {
            newErrors.Name = 'Name must contain only letters';
        }
        

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.Email.trim()) {
            newErrors.Email = 'Email is required';
        } else if (!emailRegex.test(formData.Email)) {
            newErrors.Email = 'Enter a valid email';
        }

        if (!formData.Phone.trim()) {
            newErrors.Phone = 'Phone number is required';
        } else if (!/^[0-9]{10}$/.test(formData.Phone)) {
            newErrors.Phone = 'Enter a valid 10-digit phone number';
        }

        if (!formData.Subject.trim()) {
            newErrors.Subject = 'Subject is required';
        }

        if (!formData.Message.trim()) {
            newErrors.Message = 'Message is required';
        } else if (formData.Message.length < 10) {
            newErrors.Message = 'Message must be at least 10 characters long';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true); // Show sending message
        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycby5Jjiu1SLdk4qmB9R7n-3Jet33hpDZuOANjka__qkEswYmttU_EKRMjXNIwg7aoIws/exec",
                {
                    method: "POST",
                    body: new URLSearchParams(formData), // Send form data
                }
            );

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            setMessage('Your message has been sent successfully!');
        } catch (error) {
            console.error('Error:', error);
            setMessage('There was an error sending your message.');
        } finally {
            setIsSubmitting(false); // Hide sending message
        }

        setFormData({
            Name: '',
            Email: '',
            Phone: '',
            Subject: '',
            Message: '',
        });
    };

    return (
        <section className="lg:pt-15 lg:pb-15 pb-10 pt-10 ">
            <div className="container">
                <div className="max-w-[896px] mx-auto text-center">
                    <SectionName>Get in Touch with Us</SectionName>
                    <Title size={"3.5xl"}>We’re Here to Help - Reach Out for Any Queries or Support</Title>
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
                                        <img src={winner} alt="img" className="h-15" />
                                    </div>
                                    <div>
                                        <h4 className="text-[28px] font-bold text-cream-foreground leading-[148%] font-nunito">24/7</h4>
                                        <h6 className="text-xl font-bold text-cream-foreground mt-[5px] leading-[130%]">Support</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="flex lg:justify-end justify-center">
                                <img src={contact_1} alt="img" />
                            </div>
                        </div>
                        <div>
                            <div className="bg-background shadow-[0px_5px_60px_0px_rgba(0,0,0,0.05)] rounded-[10px] lg:p-10 p-5">
                                {/* <h3 className="text-[28px] font-bold leading-[148%] font-nunito">Send a message</h3> */}
                                <form className="form mt-7" onSubmit={handleSubmit}>
                                <input type="hidden" name="FormType" value="Contact" />
                                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="Name"
                                                placeholder="Name"
                                                value={formData.Name}
                                                onChange={handleChange}
                                                className="text-[#686868] placeholder-[#686868] rounded-[10px] border-2 border-[#F2F2F2] py-4 px-5 lg:py-6 lg:px-8 w-full md:max-w-[400px]"
                                                required
                                            />
                                            <label
                                                htmlFor="name"
                                                className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                                <FaUser />
                                            </label>
                                            {errors.Name && <p className="text-red-500 text-sm mt-1">{errors.Name}</p>}
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                name="Email"
                                                placeholder="Email ID"
                                                value={formData.Email}
                                                onChange={handleChange}
                                                className="text-[#686868] placeholder-[#686868] rounded-[10px] border-2 border-[#F2F2F2] py-4 px-5 lg:py-6 lg:px-8 w-full md:max-w-[400px]"
                                                required
                                            />
                                            <label
                                                htmlFor="email"
                                                className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                                <FaEnvelope />
                                            </label>
                                            {errors.Email && <p className="text-red-500 text-sm mt-1">{errors.Email}</p>}
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="tel"
                                                name="Phone"
                                                placeholder="Phone Number"
                                                value={formData.Phone}
                                                onChange={handleChange}
                                                className="text-[#686868] placeholder-[#686868] rounded-[10px] border-2 border-[#F2F2F2] py-4 px-5 lg:py-6 lg:px-8 w-full md:max-w-[400px]"
                                                required
                                            />
                                            <label
                                                htmlFor="phone"
                                                className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                                <FaPhone />
                                            </label>
                                            {errors.Phone && <p className="text-red-500 text-sm mt-1">{errors.Phone}</p>}
                                        </div>
                                       

                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="Subject"
                                                placeholder="Place"
                                                value={formData.Subject}
                                                onChange={handleChange}
                                                className="text-[#686868] placeholder-[#686868] rounded-[10px] border-2 border-[#F2F2F2] py-4 px-5 lg:py-6 lg:px-8 w-full md:max-w-[400px]"
                                                required
                                            />
                                            <label
                                                htmlFor="subject"
                                                className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                                <FaClipboard />
                                            </label>
                                            {errors.Subject && <p className="text-red-500 text-sm mt-1">{errors.Subject}</p>}
                    
                                        </div>
                                    </div>
                                    <div className="relative mt-5">
                                        <textarea
                                            name="Message"
                                            placeholder="Write your Message here"
                                            value={formData.Message}
                                            onChange={handleChange}
                                            className="w-full min-h-36 rounded-[10px] border-2 text-[#686868] placeholder-[#686868] border-[#F2F2F2] px-5 py-[15px] outline-none"
                                            required
                                        ></textarea>
                                        {errors.Message && <p className="text-red-500 text-sm mt-1">{errors.Message}</p>}
                           
                                        <label htmlFor="message" className="absolute right-5 top-[15px]">
                                            <FaPaperPlane />
                                        </label>
                                    </div>
                                    <Button
                                        variant="pill"
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-primary border-primary hover:text-primary-foreground lg:mt-10 mt-5"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Submit'}
                                    </Button>
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

export default ContactForm;
