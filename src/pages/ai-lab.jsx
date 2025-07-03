import React from 'react';
import { Helmet } from 'react-helmet';
import { ScrollRestoration } from 'react-router-dom';

import PageTitle from '@/components/sections/pageTitle';
import Products from '@/components/sections/products';
import ValueSection from '@/components/sections/lab/ValueSection';

import FaqLab from '@/components/sections/lab/FaqLab';
import ContactSchoolManagement from '@/components/sections/schoolprogram/Contact_School_Management';
import TopUp from '@/components/sections/footers/TopUp';
import RoboticsAiLabSetup from '@/components/sections/lab/RoboticsAiLabSetup ';

const Ai = () => {
  return (
    <>
      <Helmet>
        <title>Otomatiks</title>
        <meta
          name="description"
          content="Launch your Robotics & AI Lab with Otomatiks. We provide state-of-the-art robotics and AI lab setup for schools, empowering students with future-ready STEM skills."
        />
        <meta
          name="keywords"
          content="Robotics Lab Setup, AI Lab for Schools, STEM Education, Robotics for Kids, Build Robotics Lab, School AI Lab, Robotics Kits, AI Training, Hands-on STEM Learning"
        />
        <meta name="author" content="Otomatiks Team" />

        <meta property="og:title" content="Robotics & AI Lab | Future-Ready STEM Labs" />
        <meta
          property="og:description"
          content="Transform your institution into a hub of innovation with Otomatiks Robotics & AI Labs. Hands-on STEM tools, robotics training, and AI curriculum for students."
        />
        <meta property="og:image" content="https://www.otomatiks.com/images/og-robotics-ai-lab.jpg" />
        <meta property="og:url" content="https://www.otomatiks.com/robotics-ai-lab" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Robotics & AI Lab Setup | Otomatiks STEM Solutions" />
        <meta
          name="twitter:description"
          content="Set up a Robotics & AI Lab for your school with Otomatiks. Inspire young minds with hands-on robotics, coding, and AI learning."
        />
        <meta name="twitter:image" content="https://www.otomatiks.com/images/twitter-robotics-ai-lab.jpg" />

        <link rel="canonical" href="https://www.otomatiks.com/robotics-ai-lab" />
      </Helmet>

      <main>
        <PageTitle pageName="Robotics & AI Lab" breadcrumbCurrent="Robotics & AI Lab" />
        <Products />
  <RoboticsAiLabSetup />
        <ValueSection />
        <FaqLab />
        <ContactSchoolManagement />
        <TopUp />
      </main>

      <ScrollRestoration />
    </>
  );
};

export default Ai;
