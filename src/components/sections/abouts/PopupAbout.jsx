import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';

const PopupAbout = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [formData, setFormData] = useState({
        TeamName: '',
        TeamPhone: '',
        TeamEmail: '',
        TeamExperience: '',
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

        if (!formData.TeamName.trim()) {
            newErrors.TeamName = 'Team Name is required';
        }
        if (!formData.TeamEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.TeamEmail)) {
            newErrors.TeamEmail = 'Valid email is required';
        }
        if (!formData.TeamPhone.trim() || !/^\d{10}$/.test(formData.TeamPhone)) {
            newErrors.TeamPhone = 'Valid 10-digit phone number is required';
        }
        if (!formData.TeamExperience.trim()) {
            newErrors.TeamExperience = 'Experience is required';
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
                "https://script.google.com/macros/s/AKfycbxfm6j2ZtGkAZTKIyJ1T2iTadHDJtosJg-LKFfVMH2u2UTk2RSqhVNg_dJZ8ORKyxsX/exec",
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
        <div>
            <div className="text-center">
                <button
                    type="button"
                    onClick={() => setIsPopupOpen(true)}
                    className="bg-primary text-white py-4 px-8 rounded-[10px]"
                >
                    Join Our Team
                </button>
            </div>

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
                                <label className="block text-gray-700">Name</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="TeamName"
                                        placeholder="Name"
                                        value={formData.TeamName}
                                        onChange={handleChange}
                                        className={`w-full border ${
                                            errors.TeamName
                                                ? 'border-red-500'
                                                : formData.TeamName.trim()
                                                ? 'border-green-500'
                                                : 'border-gray-300'
                                        } p-3 rounded-md`}
                                    />
                                    <FaUser className="absolute right-3 top-3 text-gray-400" />
                                </div>
                                {errors.TeamName && <p className="text-red-500 text-sm">{errors.TeamName}</p>}
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700">Email</label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="TeamEmail"
                                        placeholder="Email"
                                        value={formData.TeamEmail}
                                        onChange={handleChange}
                                        className={`w-full border ${
                                            errors.TeamEmail
                                                ? 'border-red-500'
                                                : formData.TeamEmail.trim()
                                                ? 'border-green-500'
                                                : 'border-gray-300'
                                        } p-3 rounded-md`}
                                    />
                                    <FaEnvelope className="absolute right-3 top-3 text-gray-400" />
                                </div>
                                {errors.TeamEmail && <p className="text-red-500 text-sm">{errors.TeamEmail}</p>}
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700">Phone</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="TeamPhone"
                                        placeholder="Phone Number"
                                        value={formData.TeamPhone}
                                        onChange={handleChange}
                                        className={`w-full border ${
                                            errors.TeamPhone
                                                ? 'border-red-500'
                                                : formData.TeamPhone.trim()
                                                ? 'border-green-500'
                                                : 'border-gray-300'
                                        } p-3 rounded-md`}
                                    />
                                    <FaPhone className="absolute right-3 top-3 text-gray-400" />
                                </div>
                                {errors.TeamPhone && (
                                    <p className="text-red-500 text-sm">{errors.TeamPhone}</p>
                                )}
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700">Experience</label>
                                <div className="relative">
                                    <select
                                        name="TeamExperience"
                                        value={formData.TeamExperience}
                                        onChange={handleChange}
                                        className={`w-full border ${
                                            errors.TeamExperience ? 'border-red-500' : 'border-gray-300'
                                        } p-3 rounded-md`}
                                    >
                                        <option value="">Select Experience</option>
                                        <option value="Fresher">Fresher</option>
                                        <option value="1 - 2 years">1 - 2 years</option>
                                        <option value="3 - 5 years">3 - 5 years</option>
                                        <option value="5 years above">5 years above</option>
                                    </select>
                                </div>
                                {errors.TeamExperience && (
                                    <p className="text-red-500 text-sm">{errors.TeamExperience}</p>
                                )}
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
