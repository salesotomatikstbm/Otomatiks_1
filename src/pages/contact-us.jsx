import React from 'react';
import { Helmet } from 'react-helmet';
import { ScrollRestoration } from 'react-router-dom';
import ContactAddress from '@/components/sections/contactAddress';
import ContactForm from '@/components/sections/contactForm';
import PageTitle from '@/components/sections/pageTitle';
import BranchesInfo from '@/components/sections/BranchesInfo';


const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Get in Touch with Our Team</title>
        <meta 
          name="description" 
          content="Contact us for inquiries about robotics, STEM education, or AI lab setups. Reach out to our team for support, branch details, and educational solutions." 
        />
        <meta 
          name="keywords" 
          content="contact robotics team, STEM education support, AI lab setup inquiries, robotics branch contact, educational solutions contact, tech education contact details" 
        />
        <meta name="author" content="Otomatiks Team" />
        <meta property="og:title" content="Contact Us" />
        <meta property="og:description" content="Reach out to us for robotics, STEM education, and AI lab setup inquiries. Get branch details and support for educational solutions." />
        <meta property="og:image" content="/path/to/og-contact-image.jpg" />
        <meta property="og:url" content="https://www.otomatiks.com/contact-us" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Get in Touch with Our Team" />
        <meta name="twitter:description" content="Contact us for inquiries on robotics, STEM education, and AI lab setups. Our team is here to assist with support and solutions." />
        <meta name="twitter:image" content="/path/to/twitter-contact-image.jpg" />
        <link rel="canonical" href="https://www.otomatiks.com/contact-us" />
      </Helmet>
      <main>
        <PageTitle pageName="Contact Us" breadcrumbCurrent="Contact Us" />
        <ContactAddress />
        <BranchesInfo />
        <ContactForm />
      
      </main>
      <ScrollRestoration />
    </>
  );
};

export default ContactUs;
