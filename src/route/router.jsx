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
import Shop from "../pages/shop"
import Event from "../pages/event"
import Robotica2024 from "@/pages/robotica2024";
import Robotica2023 from "@/pages/robotica2023";
import Robotica2025 from "@/pages/robotica2025";
import Workshop from "@/pages/workshop";
import Msme from "@/pages/msme";
import Csr from "@/pages/csr";

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
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/shop",
                element: <Shop />
            },
            {
                path: "/event",
                // element: <Event />
                element: <Robotica2025 />
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
            {
                path: "/workshop",
                element: <Workshop />
            },
            {
                path: "/msme",
                element: <Msme />
            },
            {
                path: "/csr",
                element: <Csr />
            },
            {
                path: "/contact-us",
                element: <ContactUs />
            },
            {
                path: "/robotica-2024",
                element: <Robotica2024 />
            },
            {
                path: "/robotica-2023",
                element: <Robotica2023 />
            },
            {
                path: "/robotica-2025",
                element: <Robotica2025 />
            },
        ]
    },
])