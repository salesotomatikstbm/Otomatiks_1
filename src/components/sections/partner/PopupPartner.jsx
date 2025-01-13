import React, { useState } from 'react';
import { FaUser, FaCalendarAlt, FaGraduationCap, FaBriefcase, FaMapMarkerAlt, FaPhone, FaEnvelope, FaIndustry } from 'react-icons/fa';

const PopupPartner = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [formData, setFormData] = useState({
        Name: '',
      
        FranchiseLocation: '',
        PhoneNo: '',
        EmailId: '',
        CurrentBusiness: '',
        InvestmentPlan: '',
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

        if (!formData.Name.trim()) {
            newErrors.Name = 'Name is required';
        }
       
        if (!formData.PhoneNo.trim() || !/^\d{10}$/.test(formData.PhoneNo)) {
            newErrors.PhoneNo = 'Valid 10-digit phone number is required';
        }
        if (!formData.EmailId.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.EmailId)) {
            newErrors.EmailId = 'Valid email is required';
        }
        if (!formData.CurrentBusiness.trim()) {
            newErrors.CurrentBusiness = 'Current business details are required';
        }
        if (!formData.InvestmentPlan.trim()) {
            newErrors.InvestmentPlan = 'Investment Plan is required';
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
                "https://script.google.com/macros/s/AKfycbw8XAjT7RjqtzIlr3Puu51LSg7xieROM5ly8-m0Id8u0zeQJp0tqLxdbiazl-H6/exec",
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
            Name: '',
            Qualification: '',
            Profession: '',
            FranchiseLocation: '',
            PhoneNo: '',
            EmailId: '',
            CurrentBusiness: '',
            InvestmentPlan: '',
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
                    Join Our Hub
                </button>
            </div>

            {/* Popup form */}
            {isPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white w-full max-w-lg p-8 rounded-lg shadow-lg relative mx-4 sm:mx-0 max-h-[90vh] overflow-y-auto">
                        <button
                            className="absolute top-2 right-2 text-black text-xl"
                            onClick={() => setIsPopupOpen(false)}
                        >
                            &times;
                        </button>
                        <h3 className="text-2xl font-bold mb-6 text-center">Apply Now</h3>
                        <form onSubmit={handleSubmit}>
                            {/* Name Field */}
                            <div className="mb-4">
                                <label className="block text-gray-700">Name</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="Name"
                                        placeholder="Your Name"
                                        value={formData.Name}
                                        onChange={handleChange}
                                        className={`w-full border ${errors.Name ? 'border-red-500' : 'border-gray-300'} p-3 rounded-md`}
                                    />
                                    <FaUser className="absolute right-3 top-3 text-gray-400" />
                                </div>
                                {errors.Name && <p className="text-red-500 text-sm">{errors.Name}</p>}
                            </div>

                            {/* Franchise Location Field */}
                            <div className="mb-4">
                                <label className="block text-gray-700">Franchise Location</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="FranchiseLocation"
                                        placeholder="Franchise Location"
                                        value={formData.FranchiseLocation}
                                        onChange={handleChange}
                                        className={`w-full border ${errors.FranchiseLocation ? 'border-red-500' : 'border-gray-300'} p-3 rounded-md`}
                                    />
                                    <FaMapMarkerAlt className="absolute right-3 top-3 text-gray-400" />
                                </div>
                                {errors.FranchiseLocation && <p className="text-red-500 text-sm">{errors.FranchiseLocation}</p>}
                            </div>

                            {/* Phone Number Field */}
                            <div className="mb-4">
                                <label className="block text-gray-700">Phone Number</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="PhoneNo"
                                        placeholder="Phone Number"
                                        value={formData.PhoneNo}
                                        onChange={handleChange}
                                        className={`w-full border ${errors.PhoneNo ? 'border-red-500' : 'border-gray-300'} p-3 rounded-md`}
                                    />
                                    <FaPhone className="absolute right-3 top-3 text-gray-400" />
                                </div>
                                {errors.PhoneNo && <p className="text-red-500 text-sm">{errors.PhoneNo}</p>}
                            </div>

                            {/* Email Field */}
                            <div className="mb-4">
                                <label className="block text-gray-700">Email Id</label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="EmailId"
                                        placeholder="Email Id"
                                        value={formData.EmailId}
                                        onChange={handleChange}
                                        className={`w-full border ${errors.EmailId ? 'border-red-500' : 'border-gray-300'} p-3 rounded-md`}
                                    />
                                    <FaEnvelope className="absolute right-3 top-3 text-gray-400" />
                                </div>
                                {errors.EmailId && <p className="text-red-500 text-sm">{errors.EmailId}</p>}
                            </div>

                            {/* Current Business Field */}
                            <div className="mb-4">
                                <label className="block text-gray-700">Current Business</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="CurrentBusiness"
                                        placeholder="Current Business"
                                        value={formData.CurrentBusiness}
                                        onChange={handleChange}
                                        className={`w-full border ${errors.CurrentBusiness ? 'border-red-500' : 'border-gray-300'} p-3 rounded-md`}
                                    />
                                    <FaIndustry className="absolute right-3 top-3 text-gray-400" />
                                </div>
                                {errors.CurrentBusiness && <p className="text-red-500 text-sm">{errors.CurrentBusiness}</p>}
                            </div>

                            {/* Investment Plan Field */}
                         {/* Investment Plan Dropdown */}
<div className="mb-4">
    <label className="block text-gray-700">Investment Plan</label>
    <div className="relative">
        <select
            name="InvestmentPlan"
            value={formData.InvestmentPlan}
            onChange={handleChange}
            className={`w-full border ${errors.InvestmentPlan ? 'border-red-500' : formData.InvestmentPlan.trim() ? 'border-green-500' : 'border-gray-300'} p-3 rounded-md`}
        >
            <option value="">Select Investment Plan</option>
            <option value="Upto 3 Lakhs">Upto 3 Lakhs</option>
            <option value="Upto 5 Lakhs">Upto 5 Lakhs</option>
            <option value="Above 10 Lakh">Above 10 Lakhs</option>
        </select>
    </div>
    {errors.InvestmentPlan && <p className="text-red-500 text-sm">{errors.InvestmentPlan}</p>}
</div>


                            {/* Submit Button */}
                            <div className="mb-4 text-center">
                                <button
                                    type="submit"
                                    className={`bg-primary text-white py-3 px-6 rounded-[10px] ${isSubmitting ? 'opacity-50' : ''}`}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        </form>

                        {message && (
                            <p className={`text-center ${message.includes('error') ? 'text-red-500' : 'text-green-500'}`}>{message}</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PopupPartner;
