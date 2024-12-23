import React from 'react';
import { FaEnvelope, FaPhone, FaUser, FaBuilding, FaSchool, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import { Button } from '../../ui/button';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';
import { FaAddressBook, FaStubber } from 'react-icons/fa6';

const Contact_School_Management = () => {
    const [formData, setFormData] = React.useState({
        SchoolName: '',
        ContactPersonName: '',
        OrganizationType: '',
        Email: '',
        PhoneNumber: '',
        SchoolAddress: '',
        NumberOfStudents: '',
        RequiredService: '',
        AdditionalNotes: '',
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

        if (!formData.SchoolName.trim()) {
            newErrors.SchoolName = 'School Name is required';
        }

        if (!formData.ContactPersonName.trim()) {
            newErrors.ContactPersonName = 'Contact Person Name is required';
        } else if (/[^a-zA-Z\s]/.test(formData.ContactPersonName)) {
            newErrors.ContactPersonName = 'Contact Person Name should only contain letters and spaces';
        }

        if (!formData.PhoneNumber.trim()) {
            newErrors.PhoneNumber = 'Phone number is required';
        } else if (!/^[0-9]{10}$/.test(formData.PhoneNumber)) {
            newErrors.PhoneNumber = 'Enter a valid 10-digit phone number';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.Email.trim()) {
            newErrors.Email = 'Email is required';
        } else if (!emailRegex.test(formData.Email)) {
            newErrors.Email = 'Enter a valid email';
        }

        if (!formData.SchoolAddress.trim()) {
            newErrors.SchoolAddress = 'School Address is required';
        }

        if (!formData.NumberOfStudents.trim() || isNaN(formData.NumberOfStudents)) {
            newErrors.NumberOfStudents = 'Number of students is required and should be a valid number';
        }

        if (!formData.RequiredService.trim()) {
            newErrors.RequiredService = 'Please select a required service';
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
            SchoolName: '',
            ContactPersonName: '',
            OrganizationType: '',
            Email: '',
            PhoneNumber: '',
            SchoolAddress: '',
            NumberOfStudents: '',
            RequiredService: '',
            AdditionalNotes: '',
        });
    };

    return (
        <section className="lg:pt-15 lg:pb-15 pb-10 pt-10">
            <div className="container">
                <div className="max-w-[846px] mx-auto text-center">
                    <SectionName>Join Our Patrons</SectionName>
                    <Title size={"3.5xl"}>We’re here to answer your questions and help you start your journey</Title>
                </div>
                <div className="mt-15">
                    <div className="bg-background shadow-[0px_5px_60px_0px_rgba(0,0,0,0.05)] rounded-[10px] lg:p-10 p-5">
                        <h3 className="text-[28px] font-bold leading-[148%] font-nunito text-center">Send a message</h3>
                        <form className="form mt-7" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7.5">
                                {/* School Name Field */}
                                <div className="relative ">
                                    <input
                                        type="text"
                                        name="SchoolName"
                                        placeholder="School Name"
                                        value={formData.SchoolName}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.SchoolName ? 'border-red-500' : formData.SchoolName.trim() ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    />
                                    <label
                                        htmlFor="name"
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaSchool />
                                    </label>
                                    {errors.SchoolName && <p className="text-red-500 text-sm mt-1">{errors.SchoolName}</p>}
                                </div>

                                {/* Contact Person Name Field */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="ContactPersonName"
                                        placeholder="Contact Person Name"
                                        value={formData.ContactPersonName}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full
                                            ${errors.ContactPersonName ? 'border-red-500' : formData.ContactPersonName.trim() ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                        
                                    />
                                     <label
                                        htmlFor="name"
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaUser />
                                    </label>
                                    {errors.ContactPersonName && <p className="text-red-500 text-sm mt-1">{errors.ContactPersonName}</p>}
                                </div>

                                {/* Organization Type Field */}
                                <div className="relative">
                                    <select
                                        name="OrganizationType"
                                        value={formData.OrganizationType}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full
                                            ${errors.OrganizationType ? 'border-red-500' : formData.OrganizationType.trim() ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    >
                                        
                                        <option value="">Select Organization Type</option>
                                        <option value="CBSE">CBSE</option>
                                        <option value="International">International</option>
                                        <option value="State Board">State Board</option>
                                    </select>
                                    {errors.OrganizationType && <p className="text-red-500 text-sm mt-1">{errors.OrganizationType}</p>}
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
                                        htmlFor="name"
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaEnvelope />
                                    </label>
                                    {errors.Email && <p className="text-red-500 text-sm mt-1">{errors.Email}</p>}
                                </div>

                                {/* Phone Number Field */}
                                <div className="relative">
                                    <input
                                        type="tel"
                                        name="PhoneNumber"
                                        placeholder="Phone Number"
                                        value={formData.PhoneNumber}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full
                                            ${errors.PhoneNumber ? 'border-red-500' : formData.PhoneNumber.trim() && /^[0-9]{10}$/.test(formData.PhoneNumber) ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    />
                                     <label
                                        htmlFor="name"
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaPhone />
                                    </label>
                                    {errors.PhoneNumber && <p className="text-red-500 text-sm mt-1">{errors.PhoneNumber}</p>}
                                </div>

                                {/* School Address Field */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="SchoolAddress"
                                        placeholder="School Address"
                                        value={formData.SchoolAddress}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full
                                            ${errors.SchoolAddress ? 'border-red-500' : formData.SchoolAddress.trim() ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    />
                                     <label
                                        htmlFor="name"
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaAddressBook />
                                    </label>
                                    {errors.SchoolAddress && <p className="text-red-500 text-sm mt-1">{errors.SchoolAddress}</p>}
                                </div>

                                {/* Number of Students Field */}
                                <div className="relative">
                                    <input
                                        type="number"
                                        name="NumberOfStudents"
                                        placeholder="Number of Students"
                                        value={formData.NumberOfStudents}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full
                                            ${errors.NumberOfStudents ? 'border-red-500' : formData.NumberOfStudents.trim() && !isNaN(formData.NumberOfStudents) ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    />
                                     <label
                                        htmlFor="name"
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaStubber />
                                    </label>
                                    {errors.NumberOfStudents && <p className="text-red-500 text-sm mt-1">{errors.NumberOfStudents}</p>}
                                </div>

                                {/* Required Service Field */}
                                <div className="relative">
                                    <select
                                        name="RequiredService"
                                        value={formData.RequiredService}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full
                                            ${errors.RequiredService ? 'border-red-500' : formData.RequiredService.trim() ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    >

                                        <option value="">Select Required Service</option>
                                        <option value="Robotics Training">Robotics Training</option>
                                        <option value="Software Training">Software Training</option>
                                        <option value="Robotics & AI Lab">Robotics & AI Lab</option>
                                        <option value="Workshop">Workshop</option>
                                    </select>
                                    {errors.RequiredService && <p className="text-red-500 text-sm mt-1">{errors.RequiredService}</p>}
                                </div>

                               
                            </div>

                             <div className="mt-6 flex justify-center">
                                                             <Button
                                                                 type="submit"
                                                                 disabled={isSubmitting}
                                                                 className={`bg-primary text-white py-4 px-8 rounded-[10px] mt-4
                                                                                                                                ${isSubmitting ? 'cursor-not-allowed opacity-50' : 'hover:bg-hovercolor'}`}
                                                             >
                                                                 {isSubmitting ? 'Sending...' : 'Send Message'}
                                                             </Button>
                                                         </div>

                            {message && <p className="mt-3 text-center text-[#2C2C2C]">{message}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact_School_Management;
