import React from "react";
import { Helmet } from "react-helmet";
import { ScrollRestoration } from "react-router-dom";
import PageTitle from "@/components/sections/pageTitle";
import FaqComp from "@/components/sections/faqComp";
import Platform from "@/components/sections/course/Platform";
import Students_Talk from "@/components/sections/course/Students_Talk";
import Brands1 from "@/components/sections/abouts/Brands";
import Robotics_Course from "@/components/sections/course/Robotics_Course";
import Contact_Form_Course from "@/components/sections/course/Contact_Form_Course";
import Software_Course from "@/components/sections/course/Software_Course";
import TopUp from "@/components/sections/footers/TopUp";
import FaqCompCourse from "@/components/sections/faqCompCourse";


const Courses = () => {
  return (
    <>
      <Helmet>
        <title>Robotics and Coding Courses</title>
        <meta 
          name="description" 
          content="Explore Otomatiks' cutting-edge robotics and coding courses for students. Join our hands-on programs for skill development in AI, robotics, and software coding." 
        />
        <meta 
          name="keywords" 
          content="robotics courses, coding for kids, Otomatiks robotics programs, AI and robotics education, hands-on STEM learning, educational coding platform, robotics for students, software coding courses" 
        />
        <meta name="author" content="Otomatiks Team" />
        <meta 
          property="og:title" 
          content="Robotics and Coding Courses | Otomatiks" 
        />
        <meta 
          property="og:description" 
          content="Join Otomatiks' robotics and coding courses to empower students with practical STEM skills. Discover our unique programs in robotics, AI, and software coding." 
        />
        <meta 
          property="og:image" 
          content="/path/to/og-courses-image.jpg" 
        />
        <meta property="og:url" content="https://www.otomatiks.com/courses" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta 
          name="twitter:title" 
          content="Robotics and Coding Courses | Otomatiks" 
        />
        <meta 
          name="twitter:description" 
          content="Explore robotics, coding, and software courses at Otomatiks. Engage in hands-on learning and skill-building for the future." 
        />
        <meta 
          name="twitter:image" 
          content="/path/to/twitter-courses-image.jpg" 
        />
        <link rel="canonical" href="https://www.otomatiks.com/courses" />
      </Helmet>
      <main>
        <PageTitle pageName={"Our Courses"} breadcrumbCurrent={"Our Courses"} />
        <Robotics_Course />
       
        <Software_Course />
        <Platform />
        <Students_Talk />
        <Brands1 />
     <FaqCompCourse />
        <Contact_Form_Course />
        <TopUp />
      </main>
      <ScrollRestoration />
    </>
  );
};

export default Courses;
