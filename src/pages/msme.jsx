import React from 'react';
import { Helmet } from 'react-helmet';
import { ScrollRestoration } from 'react-router-dom';
import PageTitle from '@/components/sections/pageTitle';
import MSMESection from '@/components/sections/msme/MSMESection';
import RoboticsImportanceSection from '@/components/sections/msme/RoboticsImportanceSection';
import MSMERoboticsProgramsSection from '@/components/sections/msme/MSMERoboticsProgramsSection';

const Msme = () => {
  return (
    <>
      <Helmet>
        <title>MSME</title>
        <meta
          name="description"
          content="Explore MSME opportunities in robotics and innovation. Learn how small and medium enterprises (SMEs) can benefit from advanced robotics programs and technological solutions."
        />
        <meta
          name="keywords"
          content="MSME, Robotics, Small and Medium Enterprises, Robotics for MSME, MSME programs, Innovation in MSME, Robotics solutions for businesses, Robotics education for MSME"
        />
        <meta name="author" content="MSME Team" />
        
        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="MSME | Empowering Small & Medium Enterprises with Robotics and Innovation"
        />
        <meta
          property="og:description"
          content="Unlock the potential of robotics and innovation for MSMEs. Discover tailored robotics programs designed to accelerate growth and technological adoption."
        />
        <meta property="og:image" content="/path/to/og-image-msme.jpg" />
        <meta property="og:url" content="https://www.otomatiks.com/msme" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="MSME | Empowering Small & Medium Enterprises with Robotics and Innovation"
        />
        <meta
          name="twitter:description"
          content="Explore how MSMEs can leverage robotics and technology for better productivity and growth. Learn about specialized robotics programs for MSMEs."
        />
        <meta name="twitter:image" content="/path/to/twitter-image-msme.jpg" />
        
        {/* Canonical Link */}
        <link rel="canonical" href="https://www.otomatiks.com/msme" />
      </Helmet>

      <main>
        <PageTitle pageName={"MSME"} breadcrumbCurrent={"MSME"} />
        <MSMESection />
        <RoboticsImportanceSection />
        <MSMERoboticsProgramsSection />
      </main>
      
      <ScrollRestoration />
    </>
  );
};

export default Msme;
