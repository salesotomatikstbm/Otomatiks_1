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
          content="Discover Otomatiks' CSR initiatives focused on education, technology, and community development. Learn how we contribute to creating a better future through impactful programs." 
        />
        <meta 
          name="keywords" 
          content="CSR initiatives, Otomatiks community programs, corporate social responsibility, educational outreach, community development, technology for good, social impact programs, STEM education for kids, robotics for rural areas" 
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
      <PartnershipSection />
      <WhatWeOffer />
      <Contact_Form_Csr />
        <TopUp />
      </main>
      <ScrollRestoration />
    </>
  );
};

export default Csr;
