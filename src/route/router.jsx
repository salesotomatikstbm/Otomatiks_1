import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/root";
import Partners from "../pages/partners";
import Blog from "../pages/blog";
import SchoolProgram  from "../pages/school-program";
import ContactUs from "@/pages/contact-us";
import AboutUs from "@/pages/about-us";
import Courses from "@/pages/courses";
import ServiceDetails from "@/pages/service-details";
import Ai from "@/pages/ai-lab";
import LayoutTwo from "@/layout/layoutTwo";
import HomeTwo from "@/pages/home-2";
import HomeOne from "@/pages/home-1";
import LayoutThree from "@/layout/layoutThree";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <HomeOne />
            },
        ]
    },
    {
        path: "/",
        element: <LayoutTwo />,
        children: [
            {
                path: "/home-2",
                element: <HomeTwo />
            }
        ]
    },
    {
        path: "/",
        element: <LayoutThree />,
        children: [
            {
                path: "/about-us",
                element: <AboutUs />
            },
            {
                path: "/contact-us",
                element: <ContactUs />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/robotics-coding-school-curriculum",
                element: <SchoolProgram  />
            },
            {
                path: "/robotics-coding-courses",
                element: <Courses />
            },
            {
                path: "/service-details",
                element: <ServiceDetails />
            },
            {
                path: "/partners",
                element: <Partners />
            },

            {
                path: "/robotics-ai-lab",
                element: <Ai />
            },
        ]
    },
])