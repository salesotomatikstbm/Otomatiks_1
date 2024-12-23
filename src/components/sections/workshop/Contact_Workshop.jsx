import React from 'react';
import { FaEnvelope, FaPhone, FaUser, FaBirthdayCake, FaTag } from 'react-icons/fa';
import { Button } from '../../ui/button';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';
import { FaFileWord, FaGraduationCap, FaSchool, FaUpwork } from 'react-icons/fa6';

const Contact_Workshop = () => {
    const [formData, setFormData] = React.useState({
        StudentName: '',
        Email: '',
        ContactNumber: '',
        Age: '',
        Group: '',
        WorkshopTitle: '',
        SchoolName: '',
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

        if (!formData.Age.trim()) {
            newErrors.Age = 'Age is required';
        } else if (isNaN(formData.Age)) {
            newErrors.Age = 'Age must be a number';
        }

        if (!formData.Group.trim()) {
            newErrors.Group = 'Group is required';
        }

        if (!formData.WorkshopTitle.trim()) {
            newErrors.WorkshopTitle = 'Workshop Title is required';
        }

        if (!formData.SchoolName.trim()) {
            newErrors.SchoolName = 'School Name is required';
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
            StudentName: '',
            Email: '',
            ContactNumber: '',
            Age: '',
            Group: '',
            WorkshopTitle: '',
            SchoolName : '',
        });
    };

    return (
        <section className="lg:pt-15 lg:pb-15 pb-10 pt-10">
            <div className="container">
                <div className="mx-auto text-center">
                    <SectionName>Join Our Workshop</SectionName>
                    <Title size={"3.5xl"}>Sign Up Today to Unlock the World of Robotics and Innovation</Title>
                </div>
                <div className="mt-15">
                    <div className="bg-background shadow-[0px_5px_60px_0px_rgba(0,0,0,0.05)] rounded-[10px] lg:p-10 p-5">
                        <h3 className="text-[28px] font-bold leading-[148%] font-nunito text-center">Send a message</h3>
                        <form className="form mt-7" onSubmit={handleSubmit}>
                            <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5">
                                {/* Student Name Field */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="StudentName"
                                        placeholder="Student Name"
                                        value={formData.StudentName}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.StudentName ? 'border-red-500' : formData.StudentName.trim() ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    />
                                    <label
                                        htmlFor="name"
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaUser />
                                    </label>
                                    {errors.StudentName && <p className="text-red-500 text-sm mt-1">{errors.StudentName}</p>}
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
                                            ${errors.ContactNumber ? 'border-red-500' : formData.ContactNumber.trim() && /^[0-9]{10}$/.test(formData.ContactNumber) ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    />
                                    <label
                                        htmlFor="phone"
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaPhone />
                                    </label>
                                    {errors.ContactNumber && <p className="text-red-500 text-sm mt-1">{errors.ContactNumber}</p>}
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

                                {/* Age Field */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="Age"
                                        placeholder="Your Age"
                                        value={formData.Age}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.Age ? 'border-red-500' : formData.Age.trim() ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    />
                                    <label
                                        htmlFor="age"
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaBirthdayCake />
                                    </label>
                                    {errors.Age && <p className="text-red-500 text-sm mt-1">{errors.Age}</p>}
                                </div>

                                {/* Group Field */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="Group"
                                        placeholder="Group"
                                        value={formData.Group}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.Group ? 'border-red-500' : formData.Group.trim() ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    />
                                    <label
                                        htmlFor="age"
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaGraduationCap />
                                    </label>
                                    {errors.Group && <p className="text-red-500 text-sm mt-1">{errors.Group}</p>}
                                </div>


                                <div className="relative">
                                    <input
                                        type="text"
                                        name="SchoolName"
                                        placeholder="School Name"
                                        value={formData.SchoolName}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.SchoolName ? 'border-red-500' : formData.SchoolName.trim() ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    />
                                    <label
                                        htmlFor="age"
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaSchool />
                                    </label>
                                    {errors.WorkshopTitle && <p className="text-red-500 text-sm mt-1">{errors.WorkshopTitle}</p>}
                                </div>

                                {/* Workshop Title Field */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="WorkshopTitle"
                                        placeholder="Workshop Title"
                                        value={formData.WorkshopTitle}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.WorkshopTitle ? 'border-red-500' : formData.WorkshopTitle.trim() ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    />
                                    <label
                                        htmlFor="age"
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaFileWord />
                                    </label>
                                    {errors.WorkshopTitle && <p className="text-red-500 text-sm mt-1">{errors.WorkshopTitle}</p>}
                                </div>
                            </div>

                            <div className="mt-6 flex justify-center">
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`bg-primary text-white py-4 px-8 rounded-[10px] mt-4
                                                                                                   ${isSubmitting ? 'cursor-not-allowed opacity-50' : 'hover:bg-hovercolor'}`}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                            </div>

                            {message && (
                                <div className="mt-4 text-center text-sm text-[#2C2C2C]">
                                    {message}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact_Workshop;
