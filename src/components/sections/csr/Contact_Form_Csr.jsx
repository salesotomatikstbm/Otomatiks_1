import React from 'react';
import { FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClipboard, FaUsers } from 'react-icons/fa';
import { Button } from '../../ui/button';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';

const Contact_Form_Csr = () => {
    const [formData, setFormData] = React.useState({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        address: '',
        initiativeTitle: '',
        initiativeDescription: '',
        targetAudience: '',
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

        if (!formData.companyName.trim()) {
            newErrors.companyName = 'Company name is required';
        }

        if (!formData.contactPerson.trim()) {
            newErrors.contactPerson = 'Contact person is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Enter a valid email';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^[0-9]{10}$/.test(formData.phone)) {
            newErrors.phone = 'Enter a valid 10-digit phone number';
        }

        if (!formData.address.trim()) {
            newErrors.address = 'Address is required';
        }

        if (!formData.initiativeTitle.trim()) {
            newErrors.initiativeTitle = 'Initiative title is required';
        }

        if (!formData.initiativeDescription.trim()) {
            newErrors.initiativeDescription = 'Initiative description is required';
        }

        if (!formData.targetAudience.trim()) {
            newErrors.targetAudience = 'Target audience is required';
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
            companyName: '',
            contactPerson: '',
            email: '',
            phone: '',
            address: '',
            initiativeTitle: '',
            initiativeDescription: '',
            targetAudience: '',
        });
    };

    return (
        <section className="lg:pt-15 lg:pb-15 pb-10 pt-10">
            <div className="container">
                <div className="max-w-[846px] mx-auto text-center">
                <SectionName>Make a Difference with Us</SectionName>
                <Title size={"3.5xl"}>Join Hands for a Better Future</Title>
                </div>
                <div className="mt-15">
                    <div className="bg-background shadow-[0px_5px_60px_0px_rgba(0,0,0,0.05)] rounded-[10px] lg:p-10 p-5">
                        <h3 className="text-[28px] font-bold leading-[148%] font-nunito text-center">Send a message</h3>
                        <form className="form mt-7" onSubmit={handleSubmit}>
                            <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5">
                                {/* Company Name Field */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="companyName"
                                        placeholder="Company Name"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.companyName ? 'border-red-500' : formData.companyName.trim() ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    />
                                    <label
                                        htmlFor="companyName"
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaClipboard />
                                    </label>
                                    {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
                                </div>

                                {/* Contact Person Field */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="contactPerson"
                                        placeholder="Contact Person"
                                        value={formData.contactPerson}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.contactPerson ? 'border-red-500' : formData.contactPerson.trim() ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    />
                                    <label
                                        htmlFor="contactPerson"
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaUser />
                                    </label>
                                    {errors.contactPerson && <p className="text-red-500 text-sm mt-1">{errors.contactPerson}</p>}
                                </div>

                                {/* Email Field */}
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.email ? 'border-red-500' : formData.email.trim() ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaEnvelope />
                                    </label>
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>

                                {/* Phone Field */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.phone ? 'border-red-500' : formData.phone.trim() ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    />
                                    <label
                                        htmlFor="phone"
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaPhone />
                                    </label>
                                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                </div>

                                {/* Address Field */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="address"
                                        placeholder="Address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.address ? 'border-red-500' : formData.address.trim() ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    />
                                    <label
                                        htmlFor="address"
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaMapMarkerAlt />
                                    </label>
                                    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                                </div>

                                {/* Initiative Title Field */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="initiativeTitle"
                                        placeholder="Initiative Title"
                                        value={formData.initiativeTitle}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.initiativeTitle ? 'border-red-500' : formData.initiativeTitle.trim() ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    />
                                    <label
                                        htmlFor="initiativeTitle"
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaClipboard />
                                    </label>
                                    {errors.initiativeTitle && <p className="text-red-500 text-sm mt-1">{errors.initiativeTitle}</p>}
                                </div>

                                {/* Initiative Description Field */}
                                <div className="relative">
                                    <textarea
                                        name="initiativeDescription"
                                        placeholder="Initiative Description"
                                        value={formData.initiativeDescription}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.initiativeDescription ? 'border-red-500' : formData.initiativeDescription.trim() ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    />
                                    <label
                                        htmlFor="initiativeDescription"
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaClipboard />
                                    </label>
                                    {errors.initiativeDescription && <p className="text-red-500 text-sm mt-1">{errors.initiativeDescription}</p>}
                                </div>

                                {/* Target Audience Field */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="targetAudience"
                                        placeholder="Target Audience"
                                        value={formData.targetAudience}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.targetAudience ? 'border-red-500' : formData.targetAudience.trim() ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    />
                                    <label
                                        htmlFor="targetAudience"
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaUsers />
                                    </label>
                                    {errors.targetAudience && <p className="text-red-500 text-sm mt-1">{errors.targetAudience}</p>}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="text-center mt-8">
                                <Button type="submit" className="bg-primary text-white w-full lg:w-72 rounded-[8px]" disabled={isSubmitting}>
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </Button>
                                {message && <p className="text-center text-green-500 mt-4">{message}</p>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact_Form_Csr;
