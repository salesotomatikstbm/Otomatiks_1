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
    }
];

const FAQs = () => {
    const [activeTab, setActiveTab] = useState("general");

    return (
        <section className="lg:pt-15 lg:pb-15 pt-10 pb-10 faq">
            <div className="bg-warm lg:py-[120px] py-20 relative">
                <div className="container">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-7.5 items-start">
                        <div className="max-w-[400px] md:max-w-full mx-auto md:order-0 order-1">
                            <SlideDown delay={2}>
                                <img src={faqImage} alt="FAQ Section" className="w-full h-full" />
                            </SlideDown>
                        </div>
                        <div className="order-0 md:order-1">
                            <SectionName>FAQ Categories</SectionName>
                            <Title size={"3.5xl"} className={"mt-2.5 max-w-[494px]"}>
                                Frequently Asked Questions
                            </Title>
                            <ul className="py-7.5 flex items-center flex-wrap gap-5">
                                {
                                    faqCategories.map(({ data_target, id, label }) => {
                                        return (
                                            <li
                                                key={id}
                                                onClick={() => setActiveTab(data_target)}
                                                className={`rounded-full py-2.5 px-5 border border-destructive active-tab cursor-pointer ${activeTab === data_target ? "bg-destructive text-cream-foreground" : ""}`}
                                            >
                                                {label}
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                            <div className="overflow-hidden relative">
                                <div className={`transition-all duration-500 ${activeTab === 'general' ? "translate-y-0 visible opacity-100 relative" : "translate-y-10 invisible opacity-0 absolute"}`}>
                                    <FAQCard category="general" />
                                </div>
                                <div className={`transition-all duration-500 ${activeTab === 'technical' ? "translate-y-0 visible opacity-100 relative" : "translate-y-10 invisible opacity-0 absolute"}`}>
                                    <FAQCard category="technical" />
                                </div>
                                <div className={`transition-all duration-500 ${activeTab === 'marketing' ? "translate-y-0 visible opacity-100 relative" : "translate-y-10 invisible opacity-0 absolute"}`}>
                                    <FAQCard category="marketing" />
                                </div>
                                <div className={`transition-all duration-500 ${activeTab === 'financial' ? "translate-y-0 visible opacity-100 relative" : "translate-y-10 invisible opacity-0 absolute"}`}>
                                    <FAQCard category="financial" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="absolute lg:right-15 left-5 lg:left-auto lg:bottom-14 bottom-5 w-20 xl:w-auto animate-up-down">
                    <img src={faqImage} alt="FAQ Section Decoration" />
                </div> */}
            </div>
        </section>
    );
};

export default FAQs;

const FAQCard = ({ category }) => {
    const faqContent = {
        general: [
            "What is the purpose of this program?",
            "Who is eligible to join?",
            "What is the duration of the course?"
        ],
        technical: [
            "What technical skills are required?",
            "Will there be hands-on projects?",
            "How are technical issues resolved?"
        ],
        marketing: [
            "What marketing strategies are included?",
            "How can I attract more clients?",
            "What is the best way to promote my business?"
        ],
        financial: [
            "What are the financial benefits?",
            "Are there any hidden costs?",
            "How do I manage my budget effectively?"
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
                    <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat sapien vel metus consequat, et tincidunt turpis varius.</p>
                </div>
            ))}
        </div>
    );
};
