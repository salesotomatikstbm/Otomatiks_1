import React from 'react';
import { FaEnvelope, FaPhone, FaUser, FaMapMarkerAlt } from 'react-icons/fa';
import { Button } from '../../ui/button';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';

const Contact_Form_Course = () => {
    const [formData, setFormData] = React.useState({
        StudentName: '',
        Email: '',
        ContactNumber: '',
        InterestedCourse: '',
        CourseMode: '',
        Place: '',
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

        if (!formData.StudentName.trim()) {
            newErrors.StudentName = 'Student Name is required';
        } else if (/[^a-zA-Z\s]/.test(formData.StudentName)) { // Check if the name contains non-alphabet characters (numbers or special characters)
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

        if (!formData.InterestedCourse.trim()) {
            newErrors.InterestedCourse = 'Interested Course is required';
        }

        if (!formData.CourseMode.trim()) {
            newErrors.CourseMode = 'Interested Course is required';
        }
        
        if (!formData.Place.trim()) {
            newErrors.Place = 'Place is required';
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
            StudentName: '',
            Email: '',
            ContactNumber: '',
            InterestedCourse: '',
            CourseMode: '',
            Place: '',
            Message: '',
        });
    };

    return (
        <section className="lg:pt-15 lg:pb-15 pb-10 pt-10">
            <div className="container">
                <div className="max-w-[846px] mx-auto text-center">
                    <SectionName>Join Our Course</SectionName>
                    <Title size={"3.5xl"}>We’re here to answer your questions and help you start your journey</Title>
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

                                {/* Interested Course Field */}
                                <div className="relative">
                                    <select
                                        name="InterestedCourse"
                                        value={formData.InterestedCourse}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.InterestedCourse ? 'border-red-500' : formData.InterestedCourse ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    >
                                        <option value="">Select Interested Course</option>
                                        <option value="Level 1">Level 1</option>
                                        <option value="Level 2">Level 2</option>
                                        <option value="Level 3">Level 3</option>
                                        <option value="Level 4">Level 4</option>
                                        <option value="Level 5">Level 5</option>
                                        <option value="Level 6">Level 6</option>
                                    </select>
                                    {errors.InterestedCourse && <p className="text-red-500 text-sm mt-1">{errors.InterestedCourse}</p>}
                                </div>


                                <div className="relative">
                                    <select
                                        name="CourseMode"
                                        value={formData.CourseMode}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.CourseMode ? 'border-red-500' : formData.CourseMode ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    >
                                        <option value="">Select Course Mode</option>
                                        <option value="Online">Online</option>
                                        <option value="Offline">Offline</option>
                                       
                                    </select>
                                    {errors.CourseMode && <p className="text-red-500 text-sm mt-1">{errors.CourseMode}</p>}
                                </div>

                                {/* Place Field */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="Place"
                                        placeholder="Your Place"
                                        value={formData.Place}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.Place ? 'border-red-500' : formData.Place.trim() ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    />
                                    <label
                                        htmlFor="place"
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaMapMarkerAlt />
                                    </label>
                                    {errors.Place && <p className="text-red-500 text-sm mt-1">{errors.Place}</p>}
                                </div>
                            </div>

                            {/* Message Field */}
                            {/* <div className="relative mt-7">
                                <textarea
                                    name="Message"
                                    placeholder="Your Message"
                                    value={formData.Message}
                                    onChange={handleChange}
                                    className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                        ${errors.Message ? 'border-red-500' : formData.Message.trim() ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                    rows="6"
                                    required
                                />
                                {errors.Message && <p className="text-red-500 text-sm mt-1">{errors.Message}</p>}
                            </div> */}

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
                        {message && <p className={`mt-5 text-center ${message.includes('error') ? 'text-red-500' : 'text-green-500'}`}>{message}</p>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact_Form_Course;
