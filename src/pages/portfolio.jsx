import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import Gallery from '@/components/sections/gallery/gallery'
import NewsletterOne from '@/components/sections/newsletters/newsletterOne'
import PageTitle from '@/components/sections/pageTitle'

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title> Otomatiks  || Partner</title>
        <meta name="description" content="Ascent - Chindcare & Kids School React.js and Tailwind CSS Template" />
      </Helmet>
      <main>
        <PageTitle pageName={"Partner"} breadcrumbCurrent={"Partner"} />
       
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default Portfolio