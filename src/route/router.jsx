import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/root";
import LayoutTwo from "@/layout/layoutTwo";
import LayoutThree from "@/layout/layoutThree";

// Pages
import Home from "@/pages/home";
import HomeOne from "@/pages/home1";
import HomeTwo from "@/pages/home-2";
import AboutUs from "@/pages/about-us";
import Blog from "@/pages/blog";
import BlogDetails from "@/pages/blog-details";
import Shop from "@/pages/shop";
import SchoolProgram from "@/pages/school-program";
import Courses from "@/pages/courses";
import ServiceDetails from "@/pages/service-details";
import Partners from "@/pages/partners";
import Ai from "@/pages/ai-lab";
import Workshop from "@/pages/workshop";
import Csr from "@/pages/csr";
import ContactUs from "@/pages/contact-us";
import Robotica2025 from "@/pages/robotica2025";
import Privacy from "@/pages/privacy-policy";
import NotFound from "@/pages/404Page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> }, 
      { path: "home", element: <HomeOne /> },
      { path: "in", element: <HomeOne /> },
    ],
  },
  {
    path: "/",
    element: <LayoutTwo />,
    children: [
      { path: "ae", element: <HomeTwo /> },
    ],
  },
  {
    path: "/",
    element: <LayoutThree />,
    children: [
      { path: "about-us", element: <AboutUs /> },
      { path: "blog", element: <Blog /> },
      { path: "blog-details/:id", element: <BlogDetails /> },
      { path: "shop", element: <Shop /> },
      { path: "robotics-coding-school-curriculum", element: <SchoolProgram /> },
      { path: "robotics-coding-courses", element: <Courses /> },
      { path: "service-details", element: <ServiceDetails /> },
      { path: "franchise", element: <Partners /> },
      { path: "robotics-ai-lab", element: <Ai /> },
      { path: "workshop", element: <Workshop /> },
      { path: "csr", element: <Csr /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "robotica", element: <Robotica2025 /> },
       { path: "privacy-policy", element: <Privacy />},
       {path: "*" , element: <NotFound />}
       
    ],
  },
]);
