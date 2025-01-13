import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaBirthdayCake, FaMapMarkerAlt } from 'react-icons/fa';

const PopCourse = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [formData, setFormData] = useState({
        StudentName: '',
        ChildName: '',
        ChildAge: '',
        ContactNumber: '',
        Email: '',
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
        setMessage(''); // Clear previous messages
    
        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbyU_Lfm1TFPNo8N38ctuu6_qQC_aVfqdP89MmhUpZyHQ5v3_1VEWXX_kKWm-APpiuSzRA/exec",
                
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: new URLSearchParams(formData).toString(),
                }
            );
    
            const result = await response.json(); // Parse the response
            if (result.success) {
                setMessage('Your message has been sent successfully!');
            } else {
                setMessage('There was an error saving your data.');
            }
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
        <div>
            <div className="text-center">
                <button
                    type="button"
                    onClick={() => setIsPopupOpen(true)}
                    className="bg-primary text-white px-4 py-2 rounded px-8 rounded-[10px]"
                >
                    Join Our Course
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
                                <label className="block text-gray-700">Child Name</label>
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
                                <label className="block text-gray-700">Child Age</label>
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
                                {errors.ContactNumber && <p className="text-red-500 text-sm">{errors.ContactNumber}</p>}
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

export default PopCourse;
