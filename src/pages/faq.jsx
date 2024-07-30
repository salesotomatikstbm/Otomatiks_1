import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import FaqComp from '@/components/sections/faqComp'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import PageTitle from '@/components/sections/pageTitle'

const Faq = () => {
  return (
    <>
      <Helmet>
        <title>Ascent - Chindcare & Kids School React.js Template || Faq</title>
        <meta name="description" content="Ascent - Chindcare & Kids School React.js and Tailwind CSS Template" />
      </Helmet>
      <main>
        <PageTitle pageName={"Faq's"} breadcrumbCurrent={"Faq's"} />
        <FaqComp />
        <NewsletterTwo />
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default Faq