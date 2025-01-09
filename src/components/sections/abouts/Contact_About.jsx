import React from 'react';
import { FaEnvelope, FaPhone, FaUser } from 'react-icons/fa';  // Fixed the missing FaDollarSign import
import { Button } from '../../ui/button';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';

const Contact_About = () => {
    const [formData, setFormData] = React.useState({
        TeamName: '',
        TeamPhone: '',
        TeamEmail: '',
        TeamExperience: '',  // Fixed the mismatch here
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

        if (!formData.TeamName.trim()) {
            newErrors.TeamName = 'Name is required';
        } else if (/[^a-zA-Z\s]/.test(formData.TeamName)) {
            newErrors.TeamName = 'Name should only contain letters and spaces';
        }

        if (!formData.TeamPhone.trim()) {
            newErrors.TeamPhone = 'Phone number is required';
        } else if (!/^[0-9]{10}$/.test(formData.TeamPhone)) {
            newErrors.TeamPhone = 'Enter a valid 10-digit phone number';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.TeamEmail.trim()) {
            newErrors.TeamEmail = 'Email is required';
        } else if (!emailRegex.test(formData.TeamEmail)) {
            newErrors.TeamEmail = 'Enter a valid email';
        }

        if (!formData.TeamExperience.trim()) {
            newErrors.TeamExperience = 'Experience is required';
        } else if (!["Fresher", "1 - 2 years", "3 - 5 years", "5 years above"].includes(formData.TeamExperience)) {
            newErrors.TeamExperience = 'Please select a valid experience option';
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
            TeamName: '',
            TeamPhone: '',
            TeamEmail: '',
            TeamExperience: '',
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
                        <input type="hidden" name="FormType" value="Join_Our_Team" />

                            <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5">
                                {/* TeamName Field */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="TeamName"
                                        placeholder="Your Name"
                                        value={formData.TeamName}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.TeamName ? 'border-red-500' : formData.TeamName.trim() ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    />
                                    <label htmlFor="TeamName" className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaUser />
                                    </label>
                                    {errors.TeamName && <p className="text-red-500 text-sm mt-1">{errors.TeamName}</p>}
                                </div>

                                {/* TeamPhone Field */}
                                <div className="relative">
                                    <input
                                        type="tel"
                                        name="TeamPhone"
                                        placeholder="Your Phone Number"
                                        value={formData.TeamPhone}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.TeamPhone ? 'border-red-500' : formData.TeamPhone.trim() && /^[0-9]{10}$/.test(formData.TeamPhone) ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    />
                                    <label htmlFor="TeamPhone" className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaPhone />
                                    </label>
                                    {errors.TeamPhone && <p className="text-red-500 text-sm mt-1">{errors.TeamPhone}</p>}
                                </div>

                                {/* TeamEmail Field */}
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="TeamEmail"
                                        placeholder="Your Email"
                                        value={formData.TeamEmail}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.TeamEmail ? 'border-red-500' : formData.TeamEmail.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.TeamEmail) ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    />
                                    <label htmlFor="TeamEmail" className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaEnvelope />
                                    </label>
                                    {errors.TeamEmail && <p className="text-red-500 text-sm mt-1">{errors.TeamEmail}</p>}
                                </div>

                                {/* Experience Field */}
                                <div className="relative">
                                    <select
                                        name="TeamExperience"
                                        value={formData.TeamExperience}  // Fixed mismatch here
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.TeamExperience ? 'border-red-500' : formData.TeamExperience ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    >
                                        <option value="">Select Experience</option>
                                        <option value="Fresher">Fresher</option>
                                        <option value="1 - 2 years">1 - 2 years</option>
                                        <option value="3 - 5 years">3 - 5 years</option>
                                        <option value="5 years above">5 years above</option>
                                    </select>
                                    {errors.TeamExperience && <p className="text-red-500 text-sm mt-1">{errors.TeamExperience}</p>}
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
