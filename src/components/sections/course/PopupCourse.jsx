import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaList, FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa';

const PopupCourse = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [formData, setFormData] = useState({
        StudentName: '',
        Email: '',
        ContactNumber: '',
        InterestedCourse: '',
        CourseMode: '',
        Place: '',
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
        if (!formData.Email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email)) {
            newErrors.Email = 'Valid email is required';
        }
        if (!formData.ContactNumber.trim() || !/^\d{10}$/.test(formData.ContactNumber)) {
            newErrors.ContactNumber = 'Valid 10-digit contact number is required';
        }
        if (!formData.InterestedCourse.trim()) {
            newErrors.InterestedCourse = 'Course selection is required';
        }
        if (!formData.Place.trim()) {
            newErrors.Place = 'Place is required';
        }
        if (!formData.CourseMode.trim()) {
            newErrors.CourseMode = 'Please select a course mode';
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
            Email: '',
            ContactNumber: '',
            InterestedCourse: '',
            CourseMode: '',
            Place: '',
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
                                <label className="block text-gray-700">Student Name</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="StudentName"
                                        placeholder="Student Name"
                                        value={formData.StudentName}
                                        onChange={handleChange}
                                        className={`w-full border ${
                                            errors.StudentName ? 'border-red-500' : 'border-gray-300'
                                        } p-3 rounded-md`}
                                    />
                                    <FaUser className="absolute right-3 top-3 text-gray-400" />
                                </div>
                                {errors.StudentName && <p className="text-red-500 text-sm">{errors.StudentName}</p>}
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
                                            errors.Email ? 'border-red-500' : 'border-gray-300'
                                        } p-3 rounded-md`}
                                    />
                                    <FaEnvelope className="absolute right-3 top-3 text-gray-400" />
                                </div>
                                {errors.Email && <p className="text-red-500 text-sm">{errors.Email}</p>}
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700">Contact Number</label>
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
                                {errors.ContactNumber && (
                                    <p className="text-red-500 text-sm">{errors.ContactNumber}</p>
                                )}
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700">Interested Course</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="InterestedCourse"
                                        placeholder="Interested Course"
                                        value={formData.InterestedCourse}
                                        onChange={handleChange}
                                        className={`w-full border ${
                                            errors.InterestedCourse ? 'border-red-500' : 'border-gray-300'
                                        } p-3 rounded-md`}
                                    />
                                    <FaList className="absolute right-3 top-3 text-gray-400" />
                                </div>
                                {errors.InterestedCourse && (
                                    <p className="text-red-500 text-sm">{errors.InterestedCourse}</p>
                                )}
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700">Place</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="Place"
                                        placeholder="Place"
                                        value={formData.Place}
                                        onChange={handleChange}
                                        className={`w-full border ${
                                            errors.Place ? 'border-red-500' : 'border-gray-300'
                                        } p-3 rounded-md`}
                                    />
                                    <FaMapMarkerAlt className="absolute right-3 top-3 text-gray-400" />
                                </div>
                                {errors.Place && <p className="text-red-500 text-sm">{errors.Place}</p>}
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700">Course Mode</label>
                                <div className="relative">
                                    <select
                                        name="CourseMode"
                                        value={formData.CourseMode}
                                        onChange={handleChange}
                                        className={`w-full border ${
                                            errors.CourseMode ? 'border-red-500' : 'border-gray-300'
                                        } p-3 rounded-md`}
                                    >
                                        <option value="">Select Mode</option>
                                        <option value="Online">Online</option>
                                        <option value="Offline">Offline</option>
                                    </select>
                                      </div>
                                {errors.CourseMode && (
                                    <p className="text-red-500 text-sm">{errors.CourseMode}</p>
                                )}
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`bg-primary text-white py-3 px-6 rounded-md w-full ${
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
