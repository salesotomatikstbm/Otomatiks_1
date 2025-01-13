import React from 'react';
import { FaEnvelope, FaPhone, FaUser, FaCalendarAlt, FaBriefcase, FaMapMarkerAlt, FaBusinessTime, FaProcedures } from 'react-icons/fa';
import { Button } from '../../ui/button';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';
import { FaEdge, FaLocationArrow, FaMedal } from 'react-icons/fa6';

const Contact_Form_Partners = () => {
    const [formData, setFormData] = React.useState({
        Name: '',
        FranchiseLocation: '',
        PhoneNo: '',
        EmailId: '',
        CurrentBusiness: '',
        InvestmentPlan: '',
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

        if (!formData.Name.trim()) {
            newErrors.Name = 'Name is required';
        }

       

        if (!formData.FranchiseLocation.trim()) {
            newErrors.FranchiseLocation = 'Franchise Location is required';
        }

        if (!formData.PhoneNo.trim()) {
            newErrors.PhoneNo = 'Phone number is required';
        } else if (!/^[0-9]{10}$/.test(formData.PhoneNo)) {
            newErrors.PhoneNo = 'Enter a valid 10-digit phone number';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.EmailId.trim()) {
            newErrors.EmailId = 'Email is required';
        } else if (!emailRegex.test(formData.EmailId)) {
            newErrors.EmailId = 'Enter a valid email';
        }

        if (!formData.CurrentBusiness.trim()) {
            newErrors.CurrentBusiness = 'Current Business is required';
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
                    body: new URLSearchParams(formData),
                }
            );

            if (!response.ok) {
                const errorDetails = await response.text(); // Get the error details from the response
                throw new Error(`Network response was not ok: ${errorDetails}`);
            }
    
            setMessage('Your message has been sent successfully!');
        } catch (error) {
            console.error('Error:', error);
            setMessage(`There was an error sending your message: ${error.message}`);
        } finally {
            setIsSubmitting(false);
        }

        setFormData({
            Name: '',
          
            FranchiseLocation: '',
            PhoneNo: '',
            EmailId: '',
            CurrentBusiness: '',
            InvestmentPlan: '',
        });
    };

    return (
        <section className="lg:pt-15 lg:pb-15 pb-10 pt-10">
            <div className="container">
                <div className="max-w-[846px] mx-auto text-center">
                    <SectionName>Partner With Us</SectionName>
                    <Title size={"3.5xl"}>Fill the form to get Started</Title>
                </div>
                <div className="mt-15">
                    <div className="bg-background shadow-[0px_5px_60px_0px_rgba(0,0,0,0.05)] rounded-[10px] lg:p-10 p-5">
                        {/* <h3 className="text-[28px] font-bold leading-[148%] font-nunito text-center">Send a message</h3> */}
                        <form className="form mt-7" onSubmit={handleSubmit}>
                            <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5">
                                {/* Name Field */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="Name"
                                        placeholder="Name"
                                        value={formData.Name}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.Name ? 'border-red-500' : formData.Name.trim() ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    />
                                    <label
                                        htmlFor="name"
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaUser />
                                    </label>
                                    {errors.Name && <p className="text-red-500 text-sm mt-1">{errors.Name}</p>}
                                </div>

                               

                                {/* Franchise Location Field */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="FranchiseLocation"
                                        placeholder="Franchise Location You Are Looking For"
                                        value={formData.FranchiseLocation}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.FranchiseLocation ? 'border-red-500' : formData.FranchiseLocation.trim() ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    />
                                    <label
                                        htmlFor="dob"
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaLocationArrow />
                                    </label>
                                    {errors.FranchiseLocation && <p className="text-red-500 text-sm mt-1">{errors.FranchiseLocation}</p>}
                                </div>

                                {/* Phone Number Field */}
                                <div className="relative">
                                    <input
                                        type="tel"
                                        name="PhoneNo"
                                        placeholder="Phone No"
                                        value={formData.PhoneNo}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.PhoneNo ? 'border-red-500' : formData.PhoneNo.trim() ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    />
                                    <label
                                        htmlFor="phone"
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaPhone />
                                    </label>
                                    {errors.PhoneNo && <p className="text-red-500 text-sm mt-1">{errors.PhoneNo}</p>}
                                </div>

                                {/* Email Field */}
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="EmailId"
                                        placeholder="Email Id"
                                        value={formData.EmailId}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.EmailId ? 'border-red-500' : formData.EmailId.trim() ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaEnvelope />
                                    </label>
                                    {errors.EmailId && <p className="text-red-500 text-sm mt-1">{errors.EmailId}</p>}
                                </div>

                                {/* Current Business Field */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="CurrentBusiness"
                                        placeholder="Current Business"
                                        value={formData.CurrentBusiness}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.CurrentBusiness ? 'border-red-500' : formData.CurrentBusiness.trim() ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    />
                                    <label
                                        htmlFor="dob"
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-lg">
                                        <FaBusinessTime />
                                    </label>
                                    {errors.CurrentBusiness && <p className="text-red-500 text-sm mt-1">{errors.CurrentBusiness}</p>}
                                </div>

                                {/* Investment Plan Dropdown */}
                                <div className="relative">
                                    <select
                                        name="InvestmentPlan"
                                        value={formData.InvestmentPlan}
                                        onChange={handleChange}
                                        className={`text-[#686868] placeholder-[#686868] rounded-[10px] border-2 py-4 px-5 lg:py-6 lg:px-8 w-full 
                                            ${errors.InvestmentPlan ? 'border-red-500' : formData.InvestmentPlan.trim() ? 'border-green-500' : 'border-[#F2F2F2]'}`}
                                        required
                                    >
                                        <option value="">Select Investment Plan</option>
                                        <option value="Upto 3 Lakhs">Upto 3 Lakhs</option>
                                        <option value="Upto 5 Lakhs">Upto 5 Lakhs</option>
                                        <option value="Above 10 Lakh">Above 10 Lakhs</option>
                                    </select>
                                    {errors.InvestmentPlan && <p className="text-red-500 text-sm mt-1">{errors.InvestmentPlan}</p>}
                                </div>
                            </div>

                            <div className="mt-6 flex justify-center">
                               <Button
                                                                   type="submit"
                                                                   disabled={isSubmitting}
                                                                   className={`bg-primary text-white py-4 px-8 rounded-[10px] mt-4
                                                                                                                                  ${isSubmitting ? 'cursor-not-allowed opacity-50' : 'hover:bg-hovercolor'}`}
                                                               >
                                                                   {isSubmitting ? 'Sending...' : 'Submit'}
                                                               </Button>
                            </div>

                            {message && (
                                <div className="mt-4 text-center text-sm text-[#2C2C2C]">
                                    {message}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact_Form_Partners;
