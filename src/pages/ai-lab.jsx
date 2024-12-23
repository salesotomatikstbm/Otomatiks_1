import React from 'react';
import { Helmet } from 'react-helmet';
import { ScrollRestoration } from 'react-router-dom';
import PageTitle from '@/components/sections/pageTitle';
import Products from '@/components/sections/products';
import InfrastructureRequirements from '@/components/sections/lab/InfrastructureRequirements';
import ValueSection from '@/components/sections/lab/ValueSection';
import RoboticsAiLabSetup from '@/components/sections/lab/RoboticsAiLabSetup '
import TopUp from '@/components/sections/footers/TopUp';
import FaqLab from '@/components/sections/lab/FaqLab';
import AiIntegration from '@/components/sections/lab/AIIntegration';
import Contact_School_Management from '@/components/sections/schoolprogram/Contact_School_Management';

const Ai = () => {
  return (
    <>
      <Helmet>
        <title>Robotics & AI Lab Setup | Advanced STEM Education for Schools</title>
        <meta 
          name="description" 
          content="Set up a state-of-the-art Robotics & AI Lab for schools. Empower students with hands-on learning in robotics, artificial intelligence, and STEM education with modern infrastructure." 
        />
        <meta 
          name="keywords" 
          content="robotics lab setup, AI lab for schools, robotics for kids, artificial intelligence lab setup, STEM education, robotics infrastructure, school AI lab, robotics and AI kits, STEM learning, advanced technology labs" 
        />
        <meta name="author" content="Otomatiks Team" />
        <meta property="og:title" content="Robotics & AI Lab Setup" />
        <meta property="og:description" content="Transform your school into a hub of innovation with our Robotics & AI Lab solutions. Hands-on robotics, artificial intelligence training, and modern STEM tools for students." />
        <meta property="og:image" content="/path/to/your-social-image.jpg" />
        <meta property="og:url" content="https://www.otomatiks.com/robotics-ai-lab" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Robotics & AI Lab Setup | Advanced STEM Education for Schools" />
        <meta name="twitter:description" content="Launch a Robotics & AI Lab for schools with cutting-edge tools and infrastructure. Inspire young minds with interactive learning experiences." />
        <meta name="twitter:image" content="/path/to/your-twitter-image.jpg" />
        <link rel="canonical" href="https://www.otomatiks.com/robotics-ai-lab" />
      </Helmet>
      <main>
        <PageTitle pageName="Robotics & AI Lab" breadcrumbCurrent="Robotics & AI Lab" />
        <Products />
        <InfrastructureRequirements />
        <RoboticsAiLabSetup />
        <AiIntegration />
        <ValueSection />
        <FaqLab />
       <Contact_School_Management />
        <TopUp />
      </main>
      <ScrollRestoration />
    </>
  );
};

export default Ai;
