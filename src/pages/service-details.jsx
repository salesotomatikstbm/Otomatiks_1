import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import PageTitle from '@/components/sections/pageTitle'
import ServiceArtical from '@/components/sections/course/serviceArtical'

const ServiceDetails = () => {
  return (
    <>
      <Helmet>
        <title>Service Details</title>
        <meta
          name="description"
          content="Learn about the services provided by Otomatiks. Explore detailed descriptions of our offerings, including educational programs and specialized courses designed for students."
        />
        <meta
          name="keywords"
          content="Otomatiks service details, educational services, kids learning services, school curriculum services, Otomatiks courses, student services, learning programs"
        />
        <meta name="author" content="Otomatiks Education" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Otomatiks || Service Details" />
        <meta
          property="og:description"
          content="Discover the comprehensive service details of Otomatiks. Learn about our educational programs and services tailored for students and educational institutions."
        />
        <meta
          property="og:image"
          content="https://www.otomatiks.com/images/otomatiks-service-details.jpg"
        />
        <meta property="og:url" content="https://www.otomatiks.com/service-details" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Otomatiks || Service Details"
        />
        <meta
          name="twitter:description"
          content="Explore the service offerings at Otomatiks, providing innovative educational services and courses for kids and students."
        />
        <meta
          name="twitter:image"
          content="https://www.otomatiks.com/images/otomatiks-service-details.jpg"
        />

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.otomatiks.com/service-details" />
      </Helmet>

      <main>
        <PageTitle pageName={"Service Details"} breadcrumbCurrent={"Service Details"} />
        <ServiceArtical />
        <NewsletterTwo />
      </main>
      <ScrollRestoration />
    </>
  )
}

export default ServiceDetails;
