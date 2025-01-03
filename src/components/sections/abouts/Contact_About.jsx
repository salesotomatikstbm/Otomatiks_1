import React from 'react';
import { FaEnvelope, FaPhone, FaUser, FaDollarSign } from 'react-icons/fa';
import { Button } from '../../ui/button';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';

const Contact_About = () => {
    const [formData, setFormData] = React.useState({
        Name: '',
        Phone: '',
        Email: '',
        Experience: '',
        ExpectedSalary: '',
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
        } else if (/[^a-zA-Z\s]/.test(formData.Name)) { // Check if the name contains non-alphabet characters (numbers or special characters)
            newErrors.Name = 'Name should only contain letters and spaces';
        }
        

        if (!formData.Phone.trim()) {
            newErrors.Phone = 'Phone number is required';
        } else if (!/^[0-9]{10}$/.test(formData.Phone)) {
            newErrors.Phone = 'Enter a valid 10-digit phone number';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.Email.trim()) {
            newErrors.Email = 'Email is required';
        } else if (!emailRegex.test(formData.Email)) {
            newErrors.Email = 'Enter a valid email';
        }

        if (!formData.Experience.trim()) {
            newErrors.Experience = 'Experience is required';
        } else if (!/^[1-5]$/.test(formData.Experience)) {
            newErrors.Experience = 'Enter a valid experience between 1 to 5 years';
        }

        if (!formData.ExpectedSalary.trim()) {
            newErrors.ExpectedSalary = 'Expected salary is required';
        } else if (isNaN(formData.ExpectedSalary)) {
            newErrors.ExpectedSalary = 'Enter a valid number';
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

        setIsSubmitting(true);
        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycby5Jjiu1SLdk4qmB9R7n-3Jet33hpDZuOANjka__qkEswYmttU_EKRMjXNIwg7aoIws/exec",
                {
                    method: "POST",
                    body: new URLSearchParams(formData), 
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
            setIsSubmitting(false);
        }

        setFormData({
            Name: '',
            Phone: '',
            Email: '',
            Experience: '',
            ExpectedSalary: '',
            Message: '',
        });
    };

    return (
        <section className="lg:pt-15 lg:pb-15 pb-10 pt-10">
            <div className="container">
                <div className="max-w-[846px] mx-auto text-center">
                    <SectionName>Join Our Team</SectionName>
                    <Title size={"3.5xl"}>Be Part of a Dynamic Team Shaping the Future</Title>
                </div>
                <div className="mt-15">
                    <div className="bg-background shadow-[0px_5px_60px_0px_rgba(0,0,0,0.05)] rounded-[10px] lg:p-10 p-5">
                        <h3 className="text-[28px] font-bold leading-[148%] font-nunito text-center">Send a message</h3>
                        <form className="form mt-7" onSubmit={handleSubmit}>
                            <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5">
                                {/* Name Field */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="Name"
                                        placeholder="Your Name"
                                        value={formData.Name}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.Name ? 'border-red-500' : formData.Name.trim() ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    />
                                    <label
                                        htmlFor="name"
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaUser />
                                    </label>
                                    {errors.Name && <p className="text-red-500 text-sm mt-1">{errors.Name}</p>}
                                </div>

                                {/* Phone Field */}
                                <div className="relative">
                                    <input
                                        type="tel"
                                        name="Phone"
                                        placeholder="Your Phone Number"
                                        value={formData.Phone}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.Phone ? 'border-red-500' : formData.Phone.trim() && /^[0-9]{10}$/.test(formData.Phone) ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    />
                                    <label
                                        htmlFor="phone"
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaPhone />
                                    </label>
                                    {errors.Phone && <p className="text-red-500 text-sm mt-1">{errors.Phone}</p>}
                                </div>

                                {/* Email Field */}
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="Email"
                                        placeholder="Your Email"
                                        value={formData.Email}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.Email ? 'border-red-500' : formData.Email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email) ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaEnvelope />
                                    </label>
                                    {errors.Email && <p className="text-red-500 text-sm mt-1">{errors.Email}</p>}
                                </div>

                                {/* Experience Field */}
                                <div className="relative">
                                    <select
                                        name="Experience"
                                        value={formData.Experience}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.Experience ? 'border-red-500' : formData.Experience && /^[1-5]$/.test(formData.Experience) ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    >
                                        <option value="">Select Experience</option>
                                        <option value="1">1 year</option>
                                        <option value="2">2 years</option>
                                        <option value="3">3 years</option>
                                        <option value="4">4 years</option>
                                        <option value="5">5 years</option>
                                    </select>
                                    {errors.Experience && <p className="text-red-500 text-sm mt-1">{errors.Experience}</p>}
                                </div>

                                {/* Expected Salary Field */}
                                <div className="relative">
                                    <input
                                        type="number"
                                        name="ExpectedSalary"
                                        placeholder="Your Expected Salary"
                                        value={formData.ExpectedSalary}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.ExpectedSalary ? 'border-red-500' : formData.ExpectedSalary ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    />
                                    <label
                                        htmlFor="salary"
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaDollarSign />
                                    </label>
                                    {errors.ExpectedSalary && <p className="text-red-500 text-sm mt-1">{errors.ExpectedSalary}</p>}
                                </div>

                                {/* Message Field */}
                                <div className="relative sm:col-span-2">
                                    <textarea
                                        name="Message"
                                        value={formData.Message}
                                        onChange={handleChange}
                                        placeholder="Your Message"
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.Message ? 'border-red-500' : formData.Message.trim() ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    />
                                    {errors.Message && <p className="text-red-500 text-sm mt-1">{errors.Message}</p>}
                                </div>
                            </div>

                            <div className="text-center mt-6">
                                <Button
                                    type="submit"
                                    className={`bg-primary text-white py-4 px-8 rounded-[10px] w-full max-w-[350px] 
                                        ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Apply'}
                                </Button>
                            </div>
                        </form>

                        {message && (
                            <div className={`mt-8 text-center ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                                {message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact_About;
