import React, { useState } from 'react';
import SectionName from '@/components/ui/sectionName';
import Title from '@/components/ui/title';
import faqImage from "@/assets/images/faq/banner-1.png"; // Replace with an appropriate FAQ-related image
import { FaChevronDown } from 'react-icons/fa6';
import SlideDown from '@/lib/animations/slideDown';

const faqCategories = [
    {
        id: 1,
        label: "General",
        data_target: "general"
    },
    {
        id: 2,
        label: "Technical",
        data_target: "technical"
    },
    {
        id: 3,
        label: "Marketing",
        data_target: "marketing"
    },
    {
        id: 4,
        label: "Financial",
        data_target: "financial"
    },
    {
        id: 5,
        label: "Franchise",
        data_target: "franchise"
    }
];

const FAQs = () => {
    const [activeTab, setActiveTab] = useState("general");

    return (
        <section className="py-12">
            <div className="relative">
                <div className="container">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-7.5 items-start">
                        <div className="max-w-[400px] md:max-w-full mx-auto md:order-0 order-1">
                            <SlideDown delay={2}>
                                <img 
                                    src={faqImage} 
                                    alt="FAQ Section" 
                                    className="w-full h-full hidden md:block" 
                                />
                            </SlideDown>
                        </div>
                        <div className="order-0 md:order-1">
                            <SectionName>FAQ Categories</SectionName>
                            <Title size={"3.5xl"} className={"mt-2.5"}>
                            Discover our franchise opportunities and benefits
                            </Title>
                            <ul className="py-7.5 flex items-center flex-wrap gap-5">
                                {faqCategories.map(({ data_target, id, label }) => (
                                    <li
                                        key={id}
                                        onClick={() => setActiveTab(data_target)}
                                        className={`rounded-full py-2.5 px-5 border border-destructive active-tab cursor-pointer ${activeTab === data_target ? "bg-destructive text-cream-foreground" : ""}`}
                                    >
                                        {label}
                                    </li>
                                ))}
                            </ul>
                            <div className="overflow-hidden relative">
                                {faqCategories.map(({ data_target }) => (
                                    <div key={data_target} className={`transition-all duration-500 ${activeTab === data_target ? "translate-y-0 visible opacity-100 relative" : "translate-y-10 invisible opacity-0 absolute"}`}>
                                        <FAQCard category={data_target} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FAQCard = ({ category }) => {
    const faqContent = {
        general: [
            "What is a franchise, and how does it work?",
            "What are the eligibility criteria to apply for a franchise?",
            "How long does the franchise application process take?",
           
            "Will I receive training and ongoing support?"
        ],
        technical: [
            "What types of robotics education programs can the franchise offer?",
            "Will there be technical training provided?",
            "How is the robotics curriculum updated to stay relevant?"
           
        ],
        marketing: [
            "What marketing support will I receive as a franchisee?",
            "Will you help me attract customers in my area?",
            "Are marketing fees included in the franchise cost?",
            "Can I run my own marketing campaigns?",
            "What marketing strategies have been most successful?"
        ],
        financial: [
            "What are the financial requirements to open a franchise?",
            
            "What are the ongoing fees for the franchise?",
            "When can I expect to see a return on investment (ROI)?",
            "How do I manage operational expenses effectively?"
        ],
        franchise: [
            "What support will I receive to launch my franchise?",
            "What are the benefits of joining your franchise system?",
            "What is the process for renewing my franchise agreement?",
            "Are there opportunities for multi-unit franchising?",
            "How do I ensure my franchise meets the brand's standards?"
        ]
    };
    
    const faqAnswers = {
        general: [
            "A franchise is a business model where individuals (franchisees) operate under an established brand and receive support from the franchisor. Franchisees run their locations while adhering to brand standards.",
            "We look for individuals with a passion for business, a willingness to adhere to our brand guidelines, and the necessary financial resources.",
            "The application process typically takes 2–4 weeks, including review, interviews, and agreement signing.",
           
            "Yes, we provide comprehensive training and ongoing support, including marketing, technical assistance, and operational guidance."
        ],
        technical: [
           "The franchise offers programs on robotics fundamentals, AI integration, coding for robots, and hands-on workshops for schools, colleges, and corporate training.",
            "Yes, all franchisees receive detailed training on our systems, software, and operational procedures.",
           "Our dedicated R&D team ensures the curriculum is updated annually to include advancements in robotics, AI, and automation trends."
            
        ],
        marketing: [
            "We provide digital marketing materials, social media templates, and strategies to promote your location effectively.",
            "Yes, our team will assist with localized marketing campaigns to help you attract and retain customers.",
            "Marketing fees are typically separate and contribute to regional and national advertising efforts.",
            "Franchisees are encouraged to follow our approved guidelines for consistency, but localized campaigns can be tailored to your area.",
            "Digital advertising, community events, and customer referral programs have proven highly effective for our franchisees."
        ],
        financial: [
            "Financial requirements include the initial franchise fee, setup costs, and sufficient working capital.",
            
            "Ongoing fees include royalty fees and contributions to the marketing fund. Details will be provided during the application process.",
            "ROI timelines vary based on location and market conditions. On average, franchisees see returns within 12–18 months.",
            "Our team provides financial training and tools to help you track expenses, forecast revenues, and maintain profitability."
        ],
        franchise: [
            "We provide end-to-end support, including site selection, training, and marketing assistance, to ensure a successful launch.",
            "You’ll gain access to a proven business model, brand recognition, training programs, and ongoing support.",
            "Franchise agreements typically last for a specified term. Renewal involves meeting performance criteria and paying a renewal fee.",
            "Yes, we encourage franchisees to expand by opening multiple units. Additional terms and benefits apply.",
            "Regular audits and ongoing training ensure consistency and alignment with our brand guidelines."
        ]
    };
    
    return (
        <div>
            {faqContent[category].map((question, index) => (
                <div key={index} className="mb-4">
                    <h4 className="flex items-center justify-between text-lg font-semibold text-gray-800 cursor-pointer">
                        {question}
                        <FaChevronDown className="text-gray-600" />
                    </h4>
                    <p className="mt-2 text-gray-600">
                        {faqAnswers[category][index]}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default FAQs;
