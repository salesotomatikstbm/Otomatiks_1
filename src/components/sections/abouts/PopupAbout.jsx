import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaList, FaMapMarkerAlt } from 'react-icons/fa';

const PopupAbout = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [formData, setFormData] = useState({
        FullName: '',
        Email: '',
        PhoneNumber: '',
        Experience: '',
        ExpectedSalary: '',
        Message: '',
    });
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.FullName.trim()) {
            newErrors.FullName = 'Full Name is required';
        }
        if (!formData.Email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email)) {
            newErrors.Email = 'Valid email is required';
        }
        if (!formData.PhoneNumber.trim() || !/^\d{10}$/.test(formData.PhoneNumber)) {
            newErrors.PhoneNumber = 'Valid 10-digit phone number is required';
        }
        if (!formData.Experience.trim()) {
            newErrors.Experience = 'Experience is required';
        }
        if (!formData.ExpectedSalary.trim()) {
            newErrors.ExpectedSalary = 'Expected salary is required';
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
                "https://script.google.com/macros/s/AKfycby5Jjiu1SLdk4qmB9R7n-3Jet33hpDZuOANjka__qkEswYmttU_EKRMjXNIwg7aoIws/exec",
                {
                    method: "POST",
                    body: new URLSearchParams(formData), // Send form data as URL-encoded
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
            FullName: '',
            Email: '',
            PhoneNumber: '',
            Experience: '',
            ExpectedSalary: '',
            Message: '',
        });
    };

    return (
        <div>
            {/* Button to open the popup */}
            <div className="text-center">
                <button
                    type="button"
                    onClick={() => setIsPopupOpen(true)}
                    className="bg-primary text-white py-4 px-8 rounded-[10px]"
                >
                    Join Our Team
                </button>
            </div>

            {/* Popup form */}
            {isPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white w-full max-w-lg p-8 rounded-lg shadow-lg relative mx-4 sm:mx-0">
                        <button
                            className="absolute top-2 right-2 text-black text-xl"
                            onClick={() => setIsPopupOpen(false)}
                        >
                            &times;
                        </button>
                        <h3 className="text-2xl font-bold mb-6 text-center">Join Our Team</h3>
                        <form onSubmit={handleSubmit} className="max-h-[80vh] overflow-y-auto">
                            <div className="mb-4">
                                <label className="block text-gray-700">Full Name</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="FullName"
                                        placeholder="Full Name"
                                        value={formData.FullName}
                                        onChange={handleChange}
                                        className={`w-full border ${
                                            errors.FullName
                                                ? 'border-red-500'
                                                : formData.FullName.trim()
                                                ? 'border-green-500'
                                                : 'border-gray-300'
                                        } p-3 rounded-md`}
                                    />
                                    <FaUser className="absolute right-3 top-3 text-gray-400" />
                                </div>
                                {errors.FullName && <p className="text-red-500 text-sm">{errors.FullName}</p>}
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700">Email</label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="Email"
                                        placeholder="Email"
                                        value={formData.Email}
                                        onChange={handleChange}
                                        className={`w-full border ${
                                            errors.Email
                                                ? 'border-red-500'
                                                : formData.Email.trim()
                                                ? 'border-green-500'
                                                : 'border-gray-300'
                                        } p-3 rounded-md`}
                                    />
                                    <FaEnvelope className="absolute right-3 top-3 text-gray-400" />
                                </div>
                                {errors.Email && <p className="text-red-500 text-sm">{errors.Email}</p>}
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700">Phone Number</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="PhoneNumber"
                                        placeholder="Phone Number"
                                        value={formData.PhoneNumber}
                                        onChange={handleChange}
                                        className={`w-full border ${
                                            errors.PhoneNumber
                                                ? 'border-red-500'
                                                : formData.PhoneNumber.trim()
                                                ? 'border-green-500'
                                                : 'border-gray-300'
                                        } p-3 rounded-md`}
                                    />
                                    <FaPhone className="absolute right-3 top-3 text-gray-400" />
                                </div>
                                {errors.PhoneNumber && (
                                    <p className="text-red-500 text-sm">{errors.PhoneNumber}</p>
                                )}
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700">Experience</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="Experience"
                                        placeholder="Experience"
                                        value={formData.Experience}
                                        onChange={handleChange}
                                        className={`w-full border ${
                                            errors.Experience
                                                ? 'border-red-500'
                                                : formData.Experience.trim()
                                                ? 'border-green-500'
                                                : 'border-gray-300'
                                        } p-3 rounded-md`}
                                    />
                                    <FaList className="absolute right-3 top-3 text-gray-400" />
                                </div>
                                {errors.Experience && (
                                    <p className="text-red-500 text-sm">{errors.Experience}</p>
                                )}
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700">Expected Salary</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="ExpectedSalary"
                                        placeholder="Expected Salary"
                                        value={formData.ExpectedSalary}
                                        onChange={handleChange}
                                        className={`w-full border ${
                                            errors.ExpectedSalary
                                                ? 'border-red-500'
                                                : formData.ExpectedSalary.trim()
                                                ? 'border-green-500'
                                                : 'border-gray-300'
                                        } p-3 rounded-md`}
                                    />
                                    <FaMapMarkerAlt className="absolute right-3 top-3 text-gray-400" />
                                </div>
                                {errors.ExpectedSalary && (
                                    <p className="text-red-500 text-sm">{errors.ExpectedSalary}</p>
                                )}
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700">Message</label>
                                <div className="relative">
                                    <textarea
                                        name="Message"
                                        placeholder="Your Message"
                                        value={formData.Message}
                                        onChange={handleChange}
                                        className={`w-full border ${
                                            errors.Message
                                                ? 'border-red-500'
                                                : formData.Message.trim()
                                                ? 'border-green-500'
                                                : 'border-gray-300'
                                        } p-3 rounded-md`}
                                    />
                                </div>
                                {errors.Message && <p className="text-red-500 text-sm">{errors.Message}</p>}
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-primary text-white py-4 px-8 rounded-[10px] w-full"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </button>
                                {message && <p className="text-center mt-4">{message}</p>}
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PopupAbout;
