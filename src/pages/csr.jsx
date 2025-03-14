import React from "react";
import { Helmet } from "react-helmet";
import { ScrollRestoration } from "react-router-dom";
import PageTitle from "@/components/sections/pageTitle";
import TopUp from "@/components/sections/footers/TopUp";
import CSRQuotesSection from "@/components/sections/csr/CSRQuotesSection";
import Our_Uniqueness from "@/components/sections/schoolprogram/Our_Uniqueness";
import PartnershipSection from "@/components/sections/csr/PartnershipSection";
import WhatWeOffer from "@/components/sections/csr/WhatWeOffer";
import Contact_Form_Csr from "@/components/sections/csr/Contact_Form_Csr";

const Csr = () => {
  return (
    <>
      <Helmet>
        <title>CSR Initiatives</title>
        <meta
          name="description"
          content="Discover how Otomatiks contributes to the community by promoting STEM education and providing opportunities for underprivileged students."
        />
        <meta
          name="keywords"
          content="CSR Projects in STEM Education, Partner with Us for CSR in AI, Empower Students with Robotics, CSR Initiatives for Schools, Technology for a Better Future, CSR initiatives, Otomatiks community programs, corporate social responsibility, educational outreach, community development, technology for good, social impact programs, STEM education for kids, robotics for rural areas, sustainable development, educational equity, tech-driven social impact, STEM outreach projects, robotics workshops for schools, empowering rural students, corporate responsibility, digital literacy programs, technology education initiatives, rural education support, tech education for underprivileged, Otomatiks educational CSR, AI learning for students, school outreach programs, community partnerships, STEM skill development, AI workshops for kids, community technology empowerment, inclusive education programs, hands-on STEM training, robotics innovation for schools, rural development initiatives, school innovation programs, sustainable technology programs, CSR in education, Otomatiks rural outreach, coding for rural students, innovative learning solutions, educational technology support, robotics for social good, STEM in underserved areas, empowering education through technology, technology-driven outreach, social innovation education, CSR engagement projects, corporate-community partnerships, impactful STEM education, rural school programs, empowering students with technology, CSR robotics initiatives, Otomatiks educational outreach, AI and robotics for schools"
        />

        <meta name="author" content="Otomatiks Team" />
        <meta
          property="og:title"
          content="CSR Initiatives | Otomatiks - Community Engagement"
        />
        <meta
          property="og:description"
          content="Explore Otomatiks' impactful CSR programs aimed at education, technology empowerment, and community development. Join us in building a brighter future."
        />
        <meta
          property="og:image"
          content="/path/to/og-csr-image.jpg"
        />
        <meta property="og:url" content="https://www.otomatiks.com/csr" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="CSR Initiatives | Otomatiks - Community Engagement"
        />
        <meta
          name="twitter:description"
          content="Learn about Otomatiks' CSR initiatives, from educational outreach to community engagement. Making a difference through technology and innovation."
        />
        <meta
          name="twitter:image"
          content="/path/to/twitter-csr-image.jpg"
        />
        <link rel="canonical" href="https://www.otomatiks.com/csr" />
      </Helmet>
      <main>
        <PageTitle pageName={"CSR"} breadcrumbCurrent={"CSR"} />
        <CSRQuotesSection />
        <Our_Uniqueness />
        <WhatWeOffer />
        <PartnershipSection />
        <Contact_Form_Csr />
        <TopUp />
      </main>
      <ScrollRestoration />
    </>
  );
};

export default Csr;
