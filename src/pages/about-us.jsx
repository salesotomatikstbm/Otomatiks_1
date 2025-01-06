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
          content="Discover Otomatiks, the leading platform that empowers children with robotics, coding, and AI education through interactive and fun learning experiences. Join us to inspire young innovators!"
        />
        <meta
          name="keywords"
          content="robotics for kids, coding for kids, STEM education for children, kids robotics classes, AI for kids, Otomatiks, fun learning robotics, children's coding workshops, robotics programs for children, kids STEM programs, children's robotics clubs"
        />
        <meta name="author" content="Otomatiks Team" />

        {/* Open Graph Meta Tags for Social Media Sharing */}
        <meta property="og:title" content="About Us | Otomatiks - Inspiring Future Innovators" />
        <meta
          property="og:description"
          content="At Otomatiks, we provide kids with the best robotics and STEM education, offering hands-on, interactive experiences to foster creativity, problem-solving, and technical skills."
        />
        <meta property="og:image" content="https://www.otomatiks.com/images/social-preview.jpg" />
        <meta property="og:url" content="https://www.otomatiks.com/about-us" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Otomatiks" />

        {/* Twitter Card Meta Tags for Twitter Sharing */}
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

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.otomatiks.com/about-us" />

      </Helmet>
      <main>
        <PageTitle pageName="About Us" breadcrumbCurrent="About Us" />
        <AboutOne isAboutpage={true} />
        <Testimonial />
        <OurJourney />
        
        <Teams />
      
        {/* <AgeOne /> */}
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
