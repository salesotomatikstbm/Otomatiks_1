import React from 'react';
import { Helmet } from 'react-helmet';
import { ScrollRestoration } from 'react-router-dom';
import HeroOne from '@/components/sections/heros/heroOne';
import AboutOne from '@/components/sections/abouts/aboutOne';
import Gallery from '@/components/sections/gallery/gallery';
import FaqComp from '@/components/sections/faqComp';
import Teams from '@/components/sections/teams/teams';
import Robotics_Course from '@/components/sections/course/Robotics_Course';
import ContactForm from '@/components/sections/contactForm';
import Client_Testimonial from '@/components/sections/schoolprogram/Client_Testimonial';
import Software_Course from '@/components/sections/course/Software_Course';
import TestiHome from '@/components/sections/TestiHome';
import BranchesMap from '@/components/sections/partner/BranchesMap';

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
          content="Otomatiks, robotics courses, coding courses, STEM education, kids robotics, STEM for children, Otomatiks programs, robotics training for kids, interactive learning"
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
        <HeroOne />
        <AboutOne isAboutpage={false} />
        <Robotics_Course />
        <Software_Course />
        {/* <Gallery /> */}
        <BranchesMap />
        <Teams />
        <TestiHome />
        <FaqComp />
        <ContactForm />
      </main>
      <ScrollRestoration />
    </>
  );
};

export default HomeOne;
