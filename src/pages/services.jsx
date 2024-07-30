import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import PageTitle from '@/components/sections/pageTitle'
import ServicesTwo from '@/components/sections/services/servicesTwo'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Ascent - Chindcare & Kids School React.js Template || Services</title>
        <meta name="description" content="Ascent - Chindcare & Kids School React.js and Tailwind CSS Template" />
      </Helmet>
      <main>
        <PageTitle pageName={"Services"} breadcrumbCurrent={"Services"} />
        <ServicesTwo />
        <NewsletterTwo />
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default Services