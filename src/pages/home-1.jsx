import React from 'react';
import { Helmet } from 'react-helmet';
import { ScrollRestoration } from 'react-router-dom';
import HeroOne from '@/components/sections/heros/heroOne';
import AboutOne from '@/components/sections/abouts/aboutOne';
import Gallery from '@/components/sections/gallery/gallery';
import TopUp from '@/components/sections/footers/TopUp';
import Our_Patrons_Home from '@/components/sections/Home/Our_Patrons_Home';
import HomeTestimonial from '@/components/sections/Home/HomeTestimonial';
import RoboticCourseSlide from '@/components/sections/Home/RoboticCourseSlide';
import SoftwareCourseslider from '@/components/sections/Home/SoftwareCourseslider';
import Brands from '@/components/sections/abouts/Brands';

import Sec01 from '@/components/sections/heros/Sec01';


const HomeOne = () => {
  return (
    <>
      <Helmet>
        <title>Otomatiks</title>
        <meta
          name="description"
          content="Otomatiks provides innovative robotics, coding, and STEM education courses for kids. Explore our interactive programs designed to foster creativity and technical skills in children."
        />
        <meta
          name="keywords"
          content="Otomatiks, robotics courses, coding courses, STEM education, kids robotics, STEM for children, Otomatiks programs, robotics training for kids, interactive learning, hands-on STEM activities, STEM workshops for kids, robotics for beginners, coding for children, creative STEM learning, tech courses for kids, Otomatiks STEM programs, educational robotics, STEM challenges for students, STEM education for schools, innovative learning programs, coding bootcamps for kids, robotics competitions, early STEM learning, beginner robotics projects, interactive coding lessons, STEM skills development, Otomatiks robotics kits, programming for kids, advanced STEM education, Otomatiks for schools, AI for kids, robotics basics, robotics and AI education, Otomatiks coding courses, beginner coding tutorials, STEM outreach programs, technology learning for children, innovative coding lessons, coding for schools, STEM summer camps, fun coding projects, robotics and AI for kids, STEM for young learners, Otomatiks innovation, future-ready education, engaging STEM curriculum, robotics clubs for kids, coding clubs for kids, tech education for children, robotics and coding challenges, foundational STEM learning, hands-on robotics activities, beginner coding for students, creative robotics projects, Otomatiks training programs, STEM for rural kids, Otomatiks STEM education for underprivileged children, Otomatiks for teachers, beginner-friendly STEM courses, school robotics kits, robotics starter courses, coding for young learners, robotics basics for students, Otomatiks interactive programs, technology-based learning, creative STEM courses, engaging robotics programs, tech camps for children, robotics and coding events, Otomatiks workshops, STEM events for children, fun robotics challenges, early tech education, robotics and programming for students, STEM tools for education, Otomatiks community learning, robotics fun for children, school STEM curriculum, foundational coding lessons, robotics building for kids, coding platforms for students, STEM maker programs, Otomatiks STEM innovation, robotics resources for kids, advanced robotics learning, beginner STEM tools, school tech programs, Otomatiks in STEM education, fun STEM projects for schools, STEM for the future, robotics problem-solving, coding competitions for kids, Otomatiks learning tools"
        />

        <meta name="author" content="Otomatiks Team" />
        <meta property="og:title" content="Otomatiks | Robotics & Coding Courses for Kids | STEM Education" />
        <meta
          property="og:description"
          content="Join Otomatiks and explore a world of innovative robotics, coding, and STEM education courses designed for kids. Build creativity, technical skills, and a love for learning!"
        />
        <meta property="og:image" content="/path/to/og-home-image.jpg" />
        <meta property="og:url" content="https://www.otomatiks.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Otomatiks | Robotics & Coding Courses for Kids | STEM Education" />
        <meta
          name="twitter:description"
          content="Discover Otomatiks' robotics and coding courses tailored for children. Innovative STEM programs that encourage creativity and hands-on learning."
        />
        <meta name="twitter:image" content="/path/to/twitter-home-image.jpg" />
        <link rel="canonical" href="https://www.otomatiks.com/" />
      </Helmet>
      <main>
        {/* <HeroOne /> */}
        <Sec01 />
        
        <AboutOne isAboutpage={false} />
        <RoboticCourseSlide />
        <SoftwareCourseslider />
        <Our_Patrons_Home />
        <Brands />
        <Gallery />
        <HomeTestimonial />
        <TopUp />
      </main>
      <ScrollRestoration />
    </>
  );
};

export default HomeOne;
