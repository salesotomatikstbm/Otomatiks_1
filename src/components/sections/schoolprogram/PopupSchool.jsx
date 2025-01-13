import React, { useState } from 'react';
import { FaBuilding, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaUsers, FaCaretDown } from 'react-icons/fa';

const PopupSchool = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [formData, setFormData] = useState({
        SchoolName: '',
        ContactPersonName: '',
        OrganizationType: '',
        Email: '',
        PhoneNumber: '',
        SchoolAddress: '',
     
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

        if (!formData.SchoolName.trim()) {
            newErrors.SchoolName = 'School Name is required';
        }
        if (!formData.ContactPersonName.trim()) {
            newErrors.ContactPersonName = 'Contact Person Name is required';
        }
        if (!formData.OrganizationType.trim()) {
            newErrors.OrganizationType = 'Organization Type is required';
        }
        if (!formData.Email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email)) {
            newErrors.Email = 'Valid email is required';
        }
        if (!formData.PhoneNumber.trim() || !/^\d{10}$/.test(formData.PhoneNumber)) {
            newErrors.PhoneNumber = 'Valid 10-digit phone number is required';
        }
        if (!formData.SchoolAddress.trim()) {
            newErrors.SchoolAddress = 'School Address is required';
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
                "https://script.google.com/macros/s/AKfycbwNTyP_eEEyMDawgDyO_DI1uhJqbJR6o4h_w7h7CI_jig5PgrGPXgwbjc22ut7l_aEL/exec",
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
            SchoolName: '',
            ContactPersonName: '',
            OrganizationType: '',
            Email: '',
            PhoneNumber: '',
            SchoolAddress: '',
           
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
                    Enquire Now
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
                        <h3 className="text-2xl font-bold mb-6 text-center">Enquire Now</h3>
                        <form onSubmit={handleSubmit} className="max-h-[80vh] overflow-y-auto">
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

                            {/* Contact Person Name */}
                            <div className="mb-4">
                                <label className="block text-gray-700">Contact Person Name</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="ContactPersonName"
                                        placeholder="Contact Person Name"
                                        value={formData.ContactPersonName}
                                        onChange={handleChange}
                                        className={`w-full border ${errors.ContactPersonName ? 'border-red-500' : 'border-gray-300'} p-3 rounded-md`}
                                    />
                                    <FaUser className="absolute right-3 top-3 text-gray-400" />
                                </div>
                                {errors.ContactPersonName && <p className="text-red-500 text-sm">{errors.ContactPersonName}</p>}
                            </div>

                            {/* Organization Type */}
                            <div className="mb-4">
                                <label className="block text-gray-700">Organization Type</label>
                                <div className="relative">
                                    <select
                                        name="OrganizationType"
                                        value={formData.OrganizationType}
                                        onChange={handleChange}
                                        className={`w-full border ${errors.OrganizationType ? 'border-red-500' : 'border-gray-300'} p-3 rounded-md`}
                                    >
                                        <option value="">Select Organization Type</option>
                                        <option value="CBSE">CBSE</option>
                                        <option value="International">International</option>
                                        <option value="Stateboard">Stateboard</option>
                                    </select>
                                          </div>
                                {errors.OrganizationType && <p className="text-red-500 text-sm">{errors.OrganizationType}</p>}
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

                            {/* Phone Number */}
                            <div className="mb-4">
                                <label className="block text-gray-700">Phone Number</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="PhoneNumber"
                                        placeholder="Phone Number"
                                        value={formData.PhoneNumber}
                                        onChange={handleChange}
                                        className={`w-full border ${errors.PhoneNumber ? 'border-red-500' : 'border-gray-300'} p-3 rounded-md`}
                                    />
                                    <FaPhone className="absolute right-3 top-3 text-gray-400" />
                                </div>
                                {errors.PhoneNumber && <p className="text-red-500 text-sm">{errors.PhoneNumber}</p>}
                            </div>

                            {/* School Address */}
                            <div className="mb-4">
                                <label className="block text-gray-700">School Address</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="SchoolAddress"
                                        placeholder="School Address"
                                        value={formData.SchoolAddress}
                                        onChange={handleChange}
                                        className={`w-full border ${errors.SchoolAddress ? 'border-red-500' : 'border-gray-300'} p-3 rounded-md`}
                                    />
                                    <FaMapMarkerAlt className="absolute right-3 top-3 text-gray-400" />
                                </div>
                                {errors.SchoolAddress && <p className="text-red-500 text-sm">{errors.SchoolAddress}</p>}
                            </div>

                            {/* Number of Students */}
                            {/* <div className="mb-4">
                                <label className="block text-gray-700">Number of Students</label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        name="NumberOfStudents"
                                        placeholder="Number of Students"
                                        value={formData.NumberOfStudents}
                                        onChange={handleChange}
                                        className={`w-full border ${errors.NumberOfStudents ? 'border-red-500' : 'border-gray-300'} p-3 rounded-md`}
                                    />
                                    <FaUsers className="absolute right-3 top-3 text-gray-400" />
                                </div>
                                {errors.NumberOfStudents && <p className="text-red-500 text-sm">{errors.NumberOfStudents}</p>}
                            </div> */}

                            {/* Request Services */}
                            {/* <div className="mb-4">
                                <label className="block text-gray-700">Request Services</label>
                                <div className="relative">
                                    <select
                                        name="RequestServices"
                                        value={formData.RequestServices}
                                        onChange={handleChange}
                                        className={`w-full border ${errors.RequestServices ? 'border-red-500' : 'border-gray-300'} p-3 rounded-md`}
                                    >
                                        <option value="">Select Request Services</option>
                                        <option value="Robotics Training">Robotics Training</option>
                                        <option value="Software Training">Software Training</option>
                                        <option value="Robotics & AI Lab">Robotics & AI Lab</option>
                                        <option value="Workshop">Workshop</option>
                                    </select>
                                            </div>
                                {errors.RequestServices && <p className="text-red-500 text-sm">{errors.RequestServices}</p>}
                            </div> */}

                            {/* Submit Button */}
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="bg-primary text-white py-3 px-8 rounded-lg w-full"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        </form>

                        {message && <p className="mt-4 text-center text-sm">{message}</p>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PopupSchool;
