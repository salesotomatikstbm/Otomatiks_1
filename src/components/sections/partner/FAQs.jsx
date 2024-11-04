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
        <section className=" py-12">
            <div className=" relative">
                <div className="container">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-7.5 items-start">
                        <div className="max-w-[400px] md:max-w-full mx-auto md:order-0 order-1">
                            <SlideDown delay={2}>
                                <img src={faqImage} alt="FAQ Section" className="w-full h-full" />
                            </SlideDown>
                        </div>
                        <div className="order-0 md:order-1 ">
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
            "What is the duration of the course?",
            "How do I enroll in the program?",
            "What materials do I need to get started?"
        ],
        technical: [
            "What technical skills are required?",
            "Will there be hands-on projects?",
            "How are technical issues resolved?",
            "Is there a platform for online learning?",
            "What tools or software will I need?"
        ],
        marketing: [
            "What marketing strategies are included?",
            "How can I attract more clients?",
            "What is the best way to promote my business?",
            "Do you provide marketing materials?",
            "How can I measure my marketing success?"
        ],
        financial: [
            "What are the financial benefits?",
            "Are there any hidden costs?",
            "How do I manage my budget effectively?",
            "What financing options are available?",
            "What is the expected ROI for a franchise?"
        ],
        franchise: [
            "What support do franchise partners receive?",
            "How can I ensure the success of my franchise?",
            "What are the initial investment requirements?",
            "Are there ongoing fees for franchise partners?",
            "What is the process for renewing the franchise agreement?"
        ]
    };

    const faqAnswers = {
        general: [
            "The program aims to provide comprehensive training and support to empower individuals to succeed in their careers.",
            "Anyone interested in learning and enhancing their skills can join, regardless of their background.",
            "The duration of the course typically ranges from 6 to 12 weeks, depending on the specific program.",
            "To enroll, visit our website and fill out the registration form. Our team will guide you through the process.",
            "You will need a computer or tablet, a stable internet connection, and any specific software we recommend."
        ],
        technical: [
            "Basic computer skills are required. Familiarity with coding and software development is a plus.",
            "Yes, hands-on projects are a core component of our curriculum, allowing you to apply what you've learned.",
            "Technical issues are addressed through a dedicated support team and a comprehensive FAQ section on our website.",
            "Yes, we have an online learning platform where you can access course materials and participate in discussions.",
            "You'll need to install the recommended software, which will be provided during the onboarding process."
        ],
        marketing: [
            "We cover a range of marketing strategies, including digital marketing, social media, and community engagement.",
            "You can attract more clients through targeted advertising, community events, and leveraging social media.",
            "Promoting your business effectively requires a mix of online and offline strategies tailored to your audience.",
            "Yes, we provide marketing materials such as brochures, flyers, and digital assets to help you promote your franchise.",
            "You can measure marketing success through analytics tools, customer feedback, and sales data."
        ],
        financial: [
            "The financial benefits include increased revenue potential, access to exclusive resources, and ongoing support.",
            "There are no hidden costs, but it's essential to understand all fees associated with running the franchise.",
            "Managing your budget effectively involves tracking expenses, forecasting revenues, and regularly reviewing financial reports.",
            "Financing options may include loans, grants, or payment plans depending on your circumstances.",
            "The expected ROI can vary, but many franchise partners see a positive return within the first few years."
        ],
        franchise: [
            "Franchise partners receive comprehensive support, including training, marketing resources, and ongoing assistance from our experienced team.",
            "To ensure success, focus on building relationships with your students, utilizing marketing strategies effectively, and engaging with the community.",
            "The initial investment requirements vary based on the location and size of the franchise. Generally, it includes franchise fees, setup costs, and operational expenses.",
            "Yes, there are ongoing fees, which typically include royalty fees and contributions to marketing funds.",
            "The renewal process typically involves meeting specific performance criteria and paying a renewal fee to maintain your franchise."
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

