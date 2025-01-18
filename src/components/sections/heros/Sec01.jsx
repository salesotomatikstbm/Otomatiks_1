import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import hero from "@/assets/images/banner/hero.png";

const Sec01 = () => {
    return (
        <div
            className="sec-01-container bg-cover bg-no-repeat bg-center relative h-screen"
            style={{
                backgroundImage: `url(${hero})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-70 z-0"></div> {/* Dark overlay with opacity */}

            {/* Hero Section Content */}
            <div className="flex items-center justify-start h-full px-6 md:px-16 relative z-10">
                <div className="relative max-w-[700px] mx-auto md:mx-0">
                    {/* Text Content */}
                    <div className="relative text-center md:text-left text-primary p-6 rounded-lg shadow-lg">
                        {/* Heading */}
                        <h5 className="md:text-5xl text-3xl font-bold text-white">
                            Shape Your Child’s Future
                        </h5>

                        {/* Description */}
                        <p className="text-[20px] max-w-xl mt-4 mx-auto md:mx-0 text-gray-200">
                            Our robotics classes are designed to help you discover the
                            potential of this exciting field with the guidance of our
                            experienced instructors.
                        </p>

                        {/* Button */}
                        <div className="relative mt-6">
                            <Button asChild variant={"secondary"}>
                                <Link
                                    to="/robotics-coding-courses"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full"
                                >
                                    Our Courses
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Wave Shape */}
            <div className="absolute bottom-0 left-0 right-0 z-0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 250"
                    className="w-full"
                >
                    <path
                        fill="rgba(6, 106, 171, 0.8)" 
                        d="M0,160L48,176C96,192,192,224,288,202.7C384,181,480,107,576,90.7C672,75,768,117,864,160C960,203,1056,245,1152,224C1248,203,1344,117,1392,74.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
            </div>
        </div>
    );
};

export default Sec01;
