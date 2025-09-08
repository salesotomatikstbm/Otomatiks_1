import React from 'react';
import { FaEnvelope, FaPhone, FaUser, FaChild } from 'react-icons/fa';
import { Button } from '../../ui/button';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';

const BookingForm = () => {
    const [formData, setFormData] = React.useState({
        FullName: '',
        Mobile: '',
        ChildName: '',
        Email: '',
        Who: '',
        Message: '',   // ✅ New Message field
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

        if (!formData.FullName.trim()) {
            newErrors.FullName = 'Full Name is required';
        } else if (/[^a-zA-Z\s]/.test(formData.FullName)) {
            newErrors.FullName = 'Name should only contain letters and spaces';
        }

        if (!formData.Mobile.trim()) {
            newErrors.Mobile = 'Mobile number is required';
        } else if (!/^[0-9]{10}$/.test(formData.Mobile)) {
            newErrors.Mobile = 'Enter a valid 10-digit mobile number';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.Email.trim()) {
            newErrors.Email = 'Email is required';
        } else if (!emailRegex.test(formData.Email)) {
            newErrors.Email = 'Enter a valid email';
        }

        if (!formData.ChildName.trim()) {
            newErrors.ChildName = 'Child’s Name is required';
        }

        if (!formData.Who.trim()) {
            newErrors.Who = 'Please select who you are';
        } else if (!["Parent", "Student", "Guardian"].includes(formData.Who)) {
            newErrors.Who = 'Invalid selection';
        }

        if (!formData.Message.trim()) {
            newErrors.Message = 'Message is required';
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
                "",
                {
                    method: "POST",
                    body: new URLSearchParams(formData),
                }
            );

            if (!response.ok) {
                const errorDetails = await response.text();
                throw new Error(`Network response was not ok: ${errorDetails}`);
            }

            setMessage('Booking confirmed successfully!');
        } catch (error) {
            console.error('Error:', error);
            setMessage(`There was an error sending your booking: ${error.message}`);
        } finally {
            setIsSubmitting(false);
        }

        setFormData({
            FullName: '',
            Mobile: '',
            ChildName: '',
            Email: '',
            Who: '',
            Message: '',
        });
    };

    return (
        <section className="lg:pt-15 lg:pb-15 pb-10 pt-10">
            <div className="container">
                <div className="max-w-[846px] mx-auto text-center">
                    <SectionName>Book Your Slot</SectionName>
                    <Title size={"3.5xl"}>Confirm Your Booking with Us</Title>
                </div>
                <div className="mt-15">
                    <div className="bg-background shadow-[0px_5px_60px_0px_rgba(0,0,0,0.05)] rounded-[10px] lg:p-10 p-5">
                        <form className="form mt-7" onSubmit={handleSubmit}>
                            <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5">
                                {/* Full Name */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="FullName"
                                        placeholder="Full Name"
                                        value={formData.FullName}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.FullName ? 'border-red-500' : formData.FullName.trim() ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    />
                                    <label className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaUser />
                                    </label>
                                    {errors.FullName && <p className="text-red-500 text-sm mt-1">{errors.FullName}</p>}
                                </div>

                                {/* Mobile */}
                                <div className="relative">
                                    <input
                                        type="tel"
                                        name="Mobile"
                                        placeholder="Mobile Number"
                                        value={formData.Mobile}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.Mobile ? 'border-red-500' : formData.Mobile.trim() && /^[0-9]{10}$/.test(formData.Mobile) ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    />
                                    <label className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaPhone />
                                    </label>
                                    {errors.Mobile && <p className="text-red-500 text-sm mt-1">{errors.Mobile}</p>}
                                </div>

                                {/* Child’s Name */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="ChildName"
                                        placeholder="Child’s Name"
                                        value={formData.ChildName}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.ChildName ? 'border-red-500' : formData.ChildName.trim() ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    />
                                    <label className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaChild />
                                    </label>
                                    {errors.ChildName && <p className="text-red-500 text-sm mt-1">{errors.ChildName}</p>}
                                </div>

                                {/* Email */}
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="Email"
                                        placeholder="Email ID"
                                        value={formData.Email}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.Email ? 'border-red-500' : formData.Email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email) ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    />
                                    <label className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaEnvelope />
                                    </label>
                                    {errors.Email && <p className="text-red-500 text-sm mt-1">{errors.Email}</p>}
                                </div>

                                {/* Who are you */}
                                <div className="relative">
                                    <select
                                        name="Who"
                                        value={formData.Who}
                                        onChange={handleChange}
                                        className={`text-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.Who ? 'border-red-500' : formData.Who ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    >
                                        <option value="">Who are you?</option>
                                        <option value="Parent">Parent</option>
                                        <option value="Student">Student</option>
                                        <option value="Guardian">Guardian</option>
                                    </select>
                                    {errors.Who && <p className="text-red-500 text-sm mt-1">{errors.Who}</p>}
                                </div>
                            </div>

                            {/* ✅ Message Field */}
                            <div className="relative mt-7.5">
                                <textarea
                                    name="Message"
                                    placeholder="Enter your message"
                                    value={formData.Message}
                                    onChange={handleChange}
                                    rows="5"
                                    className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 w-full 
                                        ${errors.Message ? 'border-red-500' : formData.Message.trim() ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                    required
                                />
                                {errors.Message && <p className="text-red-500 text-sm mt-1">{errors.Message}</p>}
                            </div>

                            <div className="text-center mt-6">
                                <Button
                                    type="submit"
                                    className={`bg-primary text-white py-4 px-8 rounded-[10px] w-full max-w-[350px] 
                                        ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Confirm Booking'}
                                </Button>
                            </div>
                        </form>

                        {/* Success/Error Message */}
                        {message && (
                            <div className={`mt-8 text-center ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                                {message}
                            </div>
                        )}

                        {/* Note */}
                        <p className="mt-6 text-center text-sm text-gray-600">
                            <strong>Note:</strong> Class will be conducted by reputed teachers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingForm;
