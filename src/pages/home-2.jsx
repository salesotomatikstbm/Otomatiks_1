import React from 'react';
import { Helmet } from 'react-helmet';
import { ScrollRestoration } from 'react-router-dom';

import AboutTwo from '@/components/sections/abouts/aboutTwo';
import BlogsTwo from '@/components/sections/blogs/blogsTwo';
import ExtraCurricular from '@/components/sections/extraCurricular';
import HeroTwo from '@/components/sections/heros/heroTwo';
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo';
import Partner from '@/components/sections/partner';
import Pricing from '@/components/sections/pricing';
import Products from '@/components/sections/products';
import AgeTwo from '@/components/sections/studentsAge/ageTwo';
import SuccessProjectTwo from '@/components/sections/successProjects/successProjectTwo';
import WhyOtomatiksAe from '@/components/sections/ae/whyotomatiksae';
import Programs from '@/components/sections/ae/program';
import OtomatiksTeamSlide from '@/components/sections/ae/teamsae';
import ClientTestimonials from '@/components/sections/ae/testiae';
import FaqComp from '@/components/sections/ae/faqae';
import BookingForm from '@/components/sections/ae/formae';


const HomeTwo = () => {
  return (
    <>
      <Helmet>
        <title>
          Home Two
        </title>
        <meta
          name="description"
          content="Discover Home Two, a premier destination for early childhood education, childcare services, and kids' extracurricular activities. Empowering children to learn, grow, and succeed."
        />
        <meta
          name="keywords"
          content="childcare, early education, kids activities, extracurricular programs, childcare services, early learning, kids education, family-focused childcare, after-school activities"
        />
        <meta name="author" content="Home Two Team" />
        <meta
          property="og:title"
          content="Home Two | Early Childhood Education, Childcare Services, and Kids Activities"
        />
        <meta
          property="og:description"
          content="Join Home Two for outstanding childcare services, early education, and kids' extracurricular programs. Building a brighter future for your child through learning and play."
        />
        <meta property="og:image" content="/path/to/og-image-home-two.jpg" />
        <meta property="og:url" content="https://www.otomatiks.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Home Two | Early Childhood Education, Childcare Services, and Kids Activities"
        />
        <meta
          name="twitter:description"
          content="Explore Home Two's programs for early education, childcare, and engaging kids' activities. A holistic approach to nurturing young minds."
        />
        <meta name="twitter:image" content="/path/to/twitter-image-home-two.jpg" />
        <link rel="canonical" href="https://www.otomatiks.com/" />
      </Helmet>
      <main>
  <section id="home">
    <HeroTwo />
  </section>
  <section id="why-otomatiks">
    <WhyOtomatiksAe />
  </section>
  <section id="programs">
    <Programs />
  </section>
  <section id="team">
    <OtomatiksTeamSlide />
  </section>
  <section id="testimonials">
    <ClientTestimonials />
  </section>
  <section id="booking">
    <BookingForm />
  </section>
  <section id="faq">
    <FaqComp />
  </section>
</main>

      <ScrollRestoration />
    </>
  );
};

export default HomeTwo;
