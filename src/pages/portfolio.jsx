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
        <title>Ascent - Chindcare & Kids School React.js Template || Portfolio</title>
        <meta name="description" content="Ascent - Chindcare & Kids School React.js and Tailwind CSS Template" />
      </Helmet>
      <main>
        <PageTitle pageName={"Portfolio"} breadcrumbCurrent={"Portfolio"} />
        <Gallery />
        <div className='lg:pb-15 pt-10'></div>
        <NewsletterOne />
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default Portfolio