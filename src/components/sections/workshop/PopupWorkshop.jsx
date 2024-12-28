import React, { useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaBirthdayCake, FaUsers, FaBuilding, FaClipboard } from 'react-icons/fa';

const PopupWorkshop = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [formData, setFormData] = useState({
        StudentName: '',
        ContactNo: '',
        Email: '',
        Age: '',
        Group: '',
        SchoolName: '',
        WorkshopTitle: '',
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

        if (!formData.StudentName.trim()) {
            newErrors.StudentName = 'Student Name is required';
        }
        if (!formData.ContactNo.trim() || !/^\d{10}$/.test(formData.ContactNo)) {
            newErrors.ContactNo = 'Valid 10-digit phone number is required';
        }
        if (!formData.Email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email)) {
            newErrors.Email = 'Valid email is required';
        }
        if (!formData.Age.trim() || isNaN(formData.Age)) {
            newErrors.Age = 'Valid Age is required';
        }
        if (!formData.Group.trim()) {
            newErrors.Group = 'Group is required';
        }
        if (!formData.SchoolName.trim()) {
            newErrors.SchoolName = 'School Name is required';
        }
        if (!formData.WorkshopTitle.trim()) {
            newErrors.WorkshopTitle = 'Workshop Title is required';
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
            StudentName: '',
            ContactNo: '',
            Email: '',
            Age: '',
            Group: '',
            SchoolName: '',
            WorkshopTitle: '',
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
                    Apply Now
                </button>
            </div>

            {/* Popup form */}
            {isPopupOpen && (
                <div className=" container fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white w-full max-w-lg p-8 rounded-lg shadow-lg relative mx-4 sm:mx-0">
                        <button
                            className="absolute top-2 right-2 text-black text-xl"
                            onClick={() => setIsPopupOpen(false)}
                        >
                            &times;
                        </button>
                        <h3 className="text-2xl font-bold mb-6 text-center">Apply Now</h3>
                        <form onSubmit={handleSubmit} className="max-h-[80vh] overflow-y-auto">
                            {/* Student Name */}
                            <div className="mb-4">
                                <label className="block text-gray-700">Student Name</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="StudentName"
                                        placeholder="Student Name"
                                        value={formData.StudentName}
                                        onChange={handleChange}
                                        className={`w-full border ${errors.StudentName ? 'border-red-500' : 'border-gray-300'} p-3 rounded-md`}
                                    />
                                    <FaUser className="absolute right-3 top-3 text-gray-400" />
                                </div>
                                {errors.StudentName && <p className="text-red-500 text-sm">{errors.StudentName}</p>}
                            </div>

                            {/* Contact No */}
                            <div className="mb-4">
                                <label className="block text-gray-700">Contact No</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="ContactNo"
                                        placeholder="Contact No"
                                        value={formData.ContactNo}
                                        onChange={handleChange}
                                        className={`w-full border ${errors.ContactNo ? 'border-red-500' : 'border-gray-300'} p-3 rounded-md`}
                                    />
                                    <FaPhone className="absolute right-3 top-3 text-gray-400" />
                                </div>
                                {errors.ContactNo && <p className="text-red-500 text-sm">{errors.ContactNo}</p>}
                            </div>

                            {/* Email */}
                            <div className="mb-4">
                                <label className="block text-gray-700">Email</label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="Email"
                                        placeholder="Email"
                                        value={formData.Email}
                                        onChange={handleChange}
                                        className={`w-full border ${errors.Email ? 'border-red-500' : 'border-gray-300'} p-3 rounded-md`}
                                    />
                                    <FaEnvelope className="absolute right-3 top-3 text-gray-400" />
                                </div>
                                {errors.Email && <p className="text-red-500 text-sm">{errors.Email}</p>}
                            </div>

                            {/* Age */}
                            <div className="mb-4">
                                <label className="block text-gray-700">Age</label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        name="Age"
                                        placeholder="Age"
                                        value={formData.Age}
                                        onChange={handleChange}
                                        className={`w-full border ${errors.Age ? 'border-red-500' : 'border-gray-300'} p-3 rounded-md`}
                                    />
                                    <FaBirthdayCake className="absolute right-3 top-3 text-gray-400" />
                                </div>
                                {errors.Age && <p className="text-red-500 text-sm">{errors.Age}</p>}
                            </div>

                            {/* Group */}
                            <div className="mb-4">
                                <label className="block text-gray-700">Group</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="Group"
                                        placeholder="Group"
                                        value={formData.Group}
                                        onChange={handleChange}
                                        className={`w-full border ${errors.Group ? 'border-red-500' : 'border-gray-300'} p-3 rounded-md`}
                                    />
                                    <FaUsers className="absolute right-3 top-3 text-gray-400" />
                                </div>
                                {errors.Group && <p className="text-red-500 text-sm">{errors.Group}</p>}
                            </div>

                            {/* School Name */}
                            <div className="mb-4">
                                <label className="block text-gray-700">School Name</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="SchoolName"
                                        placeholder="School Name"
                                        value={formData.SchoolName}
                                        onChange={handleChange}
                                        className={`w-full border ${errors.SchoolName ? 'border-red-500' : 'border-gray-300'} p-3 rounded-md`}
                                    />
                                    <FaBuilding className="absolute right-3 top-3 text-gray-400" />
                                </div>
                                {errors.SchoolName && <p className="text-red-500 text-sm">{errors.SchoolName}</p>}
                            </div>

                            {/* Workshop Title */}
                            <div className="mb-4">
                                <label className="block text-gray-700">Workshop Title</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="WorkshopTitle"
                                        placeholder="Workshop Title"
                                        value={formData.WorkshopTitle}
                                        onChange={handleChange}
                                        className={`w-full border ${errors.WorkshopTitle ? 'border-red-500' : 'border-gray-300'} p-3 rounded-md`}
                                    />
                                    <FaClipboard className="absolute right-3 top-3 text-gray-400" />
                                </div>
                                {errors.WorkshopTitle && <p className="text-red-500 text-sm">{errors.WorkshopTitle}</p>}
                            </div>

                            {/* Submit Button */}
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className={`bg-primary text-white py-3 px-6 rounded-md ${isSubmitting ? 'opacity-50' : ''}`}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        </form>
                        {message && <p className="mt-4 text-center text-gray-600">{message}</p>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PopupWorkshop;
