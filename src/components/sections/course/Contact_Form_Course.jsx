import React from 'react';
import { FaEnvelope, FaPhone, FaUser, FaChild } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';
import { Button } from '../../ui/button';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';

const Contact_Form_Course = () => {
    const [formData, setFormData] = React.useState({
        StudentName: '',
        ChildName: '',
        ChildAge: '',
        ContactNumber: '',
        Email: '',
        Place: '',
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

        if (!formData.StudentName.trim()) {
            newErrors.StudentName = 'Student Name is required';
        } else if (/[^a-zA-Z\s]/.test(formData.StudentName)) {
            newErrors.StudentName = 'Student Name should only contain letters and spaces';
        }

        if (!formData.ChildName.trim()) {
            newErrors.ChildName = 'Child Name is required';
        } else if (/[^a-zA-Z\s]/.test(formData.ChildName)) {
            newErrors.ChildName = 'Child Name should only contain letters and spaces';
        }

        if (!formData.ChildAge.trim()) {
            newErrors.ChildAge = 'Child Age is required';
        } else if (!/^[1-9][0-9]?$/.test(formData.ChildAge)) {
            newErrors.ChildAge = 'Enter a valid age (1-99)';
        }

        if (!formData.ContactNumber.trim()) {
            newErrors.ContactNumber = 'Contact number is required';
        } else if (!/^[0-9]{10}$/.test(formData.ContactNumber)) {
            newErrors.ContactNumber = 'Enter a valid 10-digit contact number';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.Email.trim()) {
            newErrors.Email = 'Email is required';
        } else if (!emailRegex.test(formData.Email)) {
            newErrors.Email = 'Enter a valid email';
        }

        if (!formData.Place.trim()) {
            newErrors.Place = 'Place is required';
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
                "https://script.google.com/macros/s/AKfycbyU_Lfm1TFPNo8N38ctuu6_qQC_aVfqdP89MmhUpZyHQ5v3_1VEWXX_kKWm-APpiuSzRA/exec",
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
            StudentName: '',
            ChildName: '',
            ChildAge: '',
            ContactNumber: '',
            Email: '',
            Place: '',
        });
    };

    return (
        <section className="lg:pt-15 lg:pb-15 pb-10 pt-10">
            <div className="container">
                <div className="max-w-[846px] mx-auto text-center">
                    <SectionName>Join Our Course</SectionName>
                    <Title size={"3.5xl"}>Take the First Step Toward an Exciting Learning Journey</Title>
                </div>
                <div className="mt-15">
                    <div className="bg-background shadow-[0px_5px_60px_0px_rgba(0,0,0,0.05)] rounded-[10px] lg:p-10 p-5">
                        {/* <h3 className="text-[28px] font-bold leading-[148%] font-nunito text-center">Send a message</h3> */}
                        <form className="form mt-7" onSubmit={handleSubmit}>
                            <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5">
                                {/* Student Name Field */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="StudentName"
                                        placeholder="Contact Person Name"
                                        value={formData.StudentName}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.StudentName ? 'border-red-500' : 'border-[#F2F2F2]'}`}
                                    />
                                    <label className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaUser />
                                    </label>
                                    {errors.StudentName && <p className="text-red-500 text-sm mt-1">{errors.StudentName}</p>}
                                </div>

                                {/* Child Name Field */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="ChildName"
                                        placeholder="Child Name"
                                        value={formData.ChildName}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.ChildName ? 'border-red-500' : 'border-[#F2F2F2]'}`}
                                    />
                                    <label className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaChild />
                                    </label>
                                    {errors.ChildName && <p className="text-red-500 text-sm mt-1">{errors.ChildName}</p>}
                                </div>

                                {/* Child Age Field */}
                                <div className="relative">
                                    <input
                                        type="number"
                                        name="ChildAge"
                                        placeholder="Child Age"
                                        value={formData.ChildAge}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.ChildAge ? 'border-red-500' : 'border-[#F2F2F2]'}`}
                                    />
                                    <label className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaChild />
                                    </label>
                                    {errors.ChildAge && <p className="text-red-500 text-sm mt-1">{errors.ChildAge}</p>}
                                </div>

                                {/* Contact Number Field */}
                                <div className="relative">
                                    <input
                                        type="tel"
                                        name="ContactNumber"
                                        placeholder="Contact Number"
                                        value={formData.ContactNumber}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.ContactNumber ? 'border-red-500' : 'border-[#F2F2F2]'}`}
                                    />
                                    <label className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaPhone />
                                    </label>
                                    {errors.ContactNumber && <p className="text-red-500 text-sm mt-1">{errors.ContactNumber}</p>}
                                </div>

                              {/* Email Field */}
                              <div className="relative">
                                    <input
                                        type="email"
                                        name="Email"
                                        placeholder="Email Address"
                                        value={formData.Email}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.Email ? 'border-red-500' : 'border-[#F2F2F2]'}`}
                                    />
                                    <label className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaEnvelope />
                                    </label>
                                    {errors.Email && <p className="text-red-500 text-sm mt-1">{errors.Email}</p>}
                                </div>

                                {/* Place Field */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="Place"
                                        placeholder="Place"
                                        value={formData.Place}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.Place ? 'border-red-500' : 'border-[#F2F2F2]'}`}
                                    />
                                    <label className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaLocationPin />
                                    </label>
                                    {errors.Place && <p className="text-red-500 text-sm mt-1">{errors.Place}</p>}
                                </div>
                            </div>
                              {/* Submit Button */}
                              <div className="mt-5 text-center">
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`bg-primary text-white py-4 px-8 rounded-[10px] 
                                        ${isSubmitting ? 'cursor-not-allowed opacity-50' : 'hover:bg-hovercolor'}`}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                            </div>
                        </form>

                        {/* Success or Error Message */}
                        {message && <p className={`mt-5 text-center text-[#2C2C2C] ${message.includes('error') ? 'text-red-500' : 'text-green-500'}`}>{message}</p>}
                   
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact_Form_Course;