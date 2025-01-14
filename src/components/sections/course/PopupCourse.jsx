import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaBirthdayCake } from 'react-icons/fa';

const PopupCourse = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [formData, setFormData] = useState({
        ContactPersonName: '',
        ChildName: '',
        ChildAge: '',
        ContactNumber: '',
        Email: '',
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

        if (!formData.ContactPersonName.trim()) {
            newErrors.ContactPersonName = 'Contact Person Name is required';
        }
        if (!formData.ChildName.trim()) {
            newErrors.ChildName = 'Child Name is required';
        }
        if (!formData.ChildAge.trim() || isNaN(formData.ChildAge)) {
            newErrors.ChildAge = 'Valid Child Age is required';
        }
        if (!formData.ContactNumber.trim() || !/^\d{10}$/.test(formData.ContactNumber)) {
            newErrors.ContactNumber = 'Valid 10-digit contact number is required';
        }
        if (!formData.Email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email)) {
            newErrors.Email = 'Valid email is required';
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
            ContactPersonName: '',
            ChildName: '',
            ChildAge: '',
            ContactNumber: '',
            Email: '',
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
                    Join Our Course
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
                        <h3 className="text-2xl font-bold mb-6 text-center">Join Our Course</h3>
                        <form onSubmit={handleSubmit} className="max-h-[80vh] overflow-y-auto">
                            <div className="mb-4">
                                {/* <label className="block text-gray-700">Contact Person Name</label> */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="ContactPersonName"
                                        placeholder="Contact Person Name"
                                        value={formData.ContactPersonName}
                                        onChange={handleChange}
                                        className={`w-full border ${
                                            errors.ContactPersonName ? 'border-red-500' : 'border-gray-300'
                                        } p-3 rounded-md`}
                                    />
                                    <FaUser className="absolute right-3 top-3 text-gray-400" />
                                </div>
                                {errors.ContactPersonName && <p className="text-red-500 text-sm">{errors.ContactPersonName}</p>}
                            </div>

                            <div className="mb-4">
                                {/* <label className="block text-gray-700">Child Name</label> */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="ChildName"
                                        placeholder="Child Name"
                                        value={formData.ChildName}
                                        onChange={handleChange}
                                        className={`w-full border ${
                                            errors.ChildName ? 'border-red-500' : 'border-gray-300'
                                        } p-3 rounded-md`}
                                    />
                                    <FaUser className="absolute right-3 top-3 text-gray-400" />
                                </div>
                                {errors.ChildName && <p className="text-red-500 text-sm">{errors.ChildName}</p>}
                            </div>

                            <div className="mb-4">
                                {/* <label className="block text-gray-700">Child Age</label> */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="ChildAge"
                                        placeholder="Child Age"
                                        value={formData.ChildAge}
                                        onChange={handleChange}
                                        className={`w-full border ${
                                            errors.ChildAge ? 'border-red-500' : 'border-gray-300'
                                        } p-3 rounded-md`}
                                    />
                                    <FaBirthdayCake className="absolute right-3 top-3 text-gray-400" />
                                </div>
                                {errors.ChildAge && <p className="text-red-500 text-sm">{errors.ChildAge}</p>}
                            </div>

                            <div className="mb-4">
                                {/* <label className="block text-gray-700">Contact Number</label> */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="ContactNumber"
                                        placeholder="Contact Number"
                                        value={formData.ContactNumber}
                                        onChange={handleChange}
                                        className={`w-full border ${
                                            errors.ContactNumber ? 'border-red-500' : 'border-gray-300'
                                        } p-3 rounded-md`}
                                    />
                                    <FaPhone className="absolute right-3 top-3 text-gray-400" />
                                </div>
                                {errors.ContactNumber && <p className="text-red-500 text-sm">{errors.ContactNumber}</p>}
                            </div>

                            <div className="mb-4">
                                {/* <label className="block text-gray-700">Email</label> */}
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="Email"
                                        placeholder="Email"
                                        value={formData.Email}
                                        onChange={handleChange}
                                        className={`w-full border ${
                                            errors.Email ? 'border-red-500' : 'border-gray-300'
                                        } p-3 rounded-md`}
                                    />
                                    <FaEnvelope className="absolute right-3 top-3 text-gray-400" />
                                </div>
                                {errors.Email && <p className="text-red-500 text-sm">{errors.Email}</p>}
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`bg-primary text-white py-3 px-6 rounded-md  ${
                                        isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        </form>
                        {message && <p className="text-green-500 mt-4 text-center">{message}</p>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PopupCourse;
