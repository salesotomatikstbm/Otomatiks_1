import React from 'react';
import { Helmet } from 'react-helmet';
import { ScrollRestoration } from 'react-router-dom';
import AboutOne from '@/components/sections/abouts/aboutOne';
import PageTitle from '@/components/sections/pageTitle';
import Testimonial from '@/components/sections/testimonial';
import Teams from '@/components/sections/teams/teams';
import OurJourney from '@/components/sections/abouts/OurJourney';
import Brands1 from '@/components/sections/abouts/Brands';
import Our_Patrons from '@/components/sections/schoolprogram/Our_Patrons';
import TopUp from '@/components/sections/footers/TopUp';
import Contact_About from '@/components/sections/abouts/Contact_About';


const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us</title>
        <meta
          name="description"
          content="Learn about Otomatiks' mission to bridge the gap between academics and real-world applications, empowering students with essential robotics skills."
        />
        <meta
          name="keywords"
          content="About Robotics and AI Academy, Our Mission in STEM Education, Pioneers in Robotics for Kids, Trusted AI Learning Center, STEM Learning Experts, robotics for kids, coding for kids, STEM education for children, kids robotics classes, AI for kids, Otomatiks, fun learning robotics, children's coding workshops, robotics programs for children, kids STEM programs, children's robotics clubs, robot building for kids, coding workshops for kids, AI classes for children, hands-on robotics learning, innovative STEM programs, technology education for kids, future tech for children, STEM curriculum for schools, robotics competitions for kids, child-friendly AI learning, robotics engineering for kids, STEM for young minds, programming for beginners, child-centric coding, creative robotics for kids, robot programming for children, educational robots for schools, beginner coding classes for kids, interactive AI learning, kids' coding apps, robotics tutorials for kids, coding games for children, junior robotics programs, AI and robotics integration, STEM-based activities for children, engaging STEM challenges, STEM labs for schools, advanced robotics for kids, problem-solving with robotics, team-building through STEM, educational robotics kits, future-focused kids' programs, introducing AI to children, STEM partnerships for schools, coding and AI bootcamps, early robotics education, inspiring young innovators, building creativity through robotics, STEM robotics camps for children"
        />

        <meta name="author" content="Otomatiks Team" />

        <meta property="og:title" content="About Us | Otomatiks - Inspiring Future Innovators" />
        <meta
          property="og:description"
          content="At Otomatiks, we provide kids with the best robotics and STEM education, offering hands-on, interactive experiences to foster creativity, problem-solving, and technical skills."
        />
        <meta property="og:image" content="https://www.otomatiks.com/images/social-preview.jpg" />
        <meta property="og:url" content="https://www.otomatiks.com/about-us" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Otomatiks" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Us | Otomatiks - Inspiring Kids Through Robotics and STEM"
        />
        <meta
          name="twitter:description"
          content="Join Otomatiks for engaging robotics, coding, and AI learning experiences. Discover how our innovative programs help children become the innovators of tomorrow."
        />
        <meta
          name="twitter:image"
          content="https://www.otomatiks.com/images/twitter-preview.jpg"
        />

      
        <link rel="canonical" href="https://www.otomatiks.com/about-us" />

      </Helmet>
      <main>
        <PageTitle pageName="About Us" breadcrumbCurrent="About Us" />
        <AboutOne isAboutpage={true} />
        <Testimonial />
        <OurJourney />
        <Teams />
        <Brands1 />
        <Our_Patrons />
        <Contact_About />
        <TopUp />
      </main>
      <ScrollRestoration />
    </>
  );
};

export default AboutUs;
