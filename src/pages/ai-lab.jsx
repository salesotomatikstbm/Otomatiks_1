import React from 'react';
import { Helmet } from 'react-helmet';
import { ScrollRestoration } from 'react-router-dom';
import PageTitle from '@/components/sections/pageTitle';
import Products from '@/components/sections/products';
import ValueSection from '@/components/sections/lab/ValueSection';
import RoboticsAiLabSetup from '@/components/sections/lab/RoboticsAiLabSetup '
import TopUp from '@/components/sections/footers/TopUp';
import FaqLab from '@/components/sections/lab/FaqLab';
import Contact_School_Management from '@/components/sections/schoolprogram/Contact_School_Management';

const Ai = () => {
  return (
    <>
      <Helmet>
        <title>Robotics & AI Lab</title>
        <meta
          name="description"
          content="Set up a state-of-the-art Robotics & AI Lab for schools. Empower students with hands-on learning in robotics, artificial intelligence, and STEM education with modern infrastructure."
        />
        <meta
          name="keywords"
          content="robotics lab setup, AI lab for schools, robotics for kids, artificial intelligence lab setup, STEM education, robotics infrastructure, school AI lab, robotics and AI kits, STEM learning, advanced technology labs, school robotics lab design, AI integration in schools, hands-on STEM activities, coding and robotics for students, AI projects for kids, educational AI tools, robotics curriculum for schools, advanced STEM labs, modern AI labs, school technology programs, robotics lab equipment, AI-powered learning, smart classrooms, future-ready schools, AI and robotics innovation, STEM teaching tools, interactive STEM learning, robotics competitions, school AI lab funding, AI training for students, AI lab requirements, AI and robotics in education, innovative school labs, tech-enabled classrooms, coding and AI workshops, robotics hardware for schools, intelligent lab solutions, robotics training programs, school AI lab consultancy, AI coding programs, building robotics skills, next-gen school labs, robotics programming for beginners, educational robotics kits, future tech for students, STEM engagement programs, robotics innovation labs, AI-powered education, technology-driven schools, classroom robotics, STEM labs with AI focus, collaborative STEM projects"
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
        <RoboticsAiLabSetup />
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
