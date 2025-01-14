import React from 'react';
import { Helmet } from 'react-helmet';
import { ScrollRestoration } from 'react-router-dom';
import PageTitle from '@/components/sections/pageTitle';
import MSMESection from '@/components/sections/msme/MSMESection';
import RoboticsImportanceSection from '@/components/sections/msme/RoboticsImportanceSection';
import MSMERoboticsProgramsSection from '@/components/sections/msme/MSMERoboticsProgramsSection';
import TopUp from '@/components/sections/footers/TopUp';

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
          content="MSME, Robotics, Small and Medium Enterprises, Robotics for MSME, MSME programs, Innovation in MSME, Robotics solutions for businesses, Robotics education for MSME, advanced robotics for SMEs, automation for MSMEs, MSME growth through technology, robotics and innovation for MSMEs, MSME robotics training, robotics for small industries, robotics adoption in MSMEs, MSME automation programs, technological solutions for MSMEs, robotics-driven productivity, robotics consultancy for MSMEs, customized robotics solutions, MSME development, MSME robotics grants, innovation for small businesses, robotics technology for SMEs, industry 4.0 for MSMEs, digital transformation for MSMEs, robotics funding for small businesses, MSME technology upgrades, robotics workshops for MSMEs, robotics awareness for small industries, robotics integration for MSMEs, robotics research for MSMEs, robotics startups for SMEs, MSME robotics innovation labs, robotics partnerships for small businesses, small enterprise automation, AI and robotics for MSMEs, robotics mentorship for MSMEs, empowering SMEs with robotics, affordable robotics solutions, robotics skill development for MSMEs, robotics learning programs for small businesses, robotics in manufacturing MSMEs, robotics ecosystem for MSMEs, MSME digital revolution, robotics technology adoption, MSME tech empowerment, MSME productivity enhancement, robotics advancements for SMEs, robotics future for MSMEs"
        />

        <meta name="author" content="MSME Team" />

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

        <link rel="canonical" href="https://www.otomatiks.com/msme" />
      </Helmet>

      <main>
        <PageTitle pageName={"MSME"} breadcrumbCurrent={"MSME"} />
        <MSMESection />
        <RoboticsImportanceSection />
        <MSMERoboticsProgramsSection />
        <TopUp />
      </main>

      <ScrollRestoration />
    </>
  );
};

export default Msme;
