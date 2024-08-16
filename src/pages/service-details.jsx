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
        <title>Otomatiks || Service Details</title>
        <meta name="description" content="Ascent - Chindcare & Kids School React.js and Tailwind CSS Template" />
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

export default ServiceDetails