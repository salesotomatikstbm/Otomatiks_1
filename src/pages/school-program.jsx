import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import PageTitle from '@/components/sections/pageTitle'
import Why_otomatiks from '@/components/sections/schoolprogram/Why_otomatiks'
import Our_Uniqueness from '@/components/sections/schoolprogram/Our_Uniqueness'
import Our_Patrons from '@/components/sections/schoolprogram/Our_Patrons'
import Client_Testimonial from '@/components/sections/schoolprogram/Client_Testimonial'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import Contact_School_Management from '@/components/sections/schoolprogram/Contact_School_Management'
import TopUp from '@/components/sections/footers/TopUp'
import HomeTestimonial from '@/components/sections/Home/HomeTestimonial'
import FaqSchool from '@/components/sections/schoolprogram/FaqSchool'
import Curriculum from '@/components/sections/schoolprogram/Curriculum'

const SchoolProgram = () => {
  

  return (
    <>
      <Helmet>
        <title>School Curriculum</title>
        <meta
          name="description"
          content="Explore Otomatiks' school curriculum designed to empower students with innovative learning experiences. Learn why Otomatiks is a unique choice for modern education."
        />
        <meta
          name="keywords"
          content="school curriculum, Otomatiks school program, educational program, innovative learning, school education, kids learning, modern education, Otomatiks school, student development"
        />
        <meta name="author" content="Otomatiks Education" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="School Curriculum - Otomatiks Educational Program" />
        <meta
          property="og:description"
          content="Discover the unique school curriculum at Otomatiks that combines traditional learning with modern educational techniques. Learn more about our teaching approach and success stories."
        />
        <meta
          property="og:image"
          content="https://www.otomatiks.com/images/otomatiks-school-curriculum.jpg"
        />
        <meta property="og:url" content="https://www.otomatiks.com/school-program" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="School Curriculum - Otomatiks Educational Program"
        />
        <meta
          name="twitter:description"
          content="Explore the school curriculum at Otomatiks, where innovative teaching methods foster student growth and development in modern education."
        />
        <meta
          name="twitter:image"
          content="https://www.otomatiks.com/images/otomatiks-school-curriculum.jpg"
        />

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.otomatiks.com/school-program" />

      </Helmet>

      <main>
        <PageTitle pageName={"School Curriculum"} breadcrumbCurrent={"School Curriculum"} />
        <Why_otomatiks />
        <Our_Uniqueness />
        <Curriculum />
        <Our_Patrons />
        <HomeTestimonial />
       
        <FaqSchool />
        <Contact_School_Management />
        <TopUp />
      </main>
      <ScrollRestoration />
    </>
  )
}

export default SchoolProgram;
