import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import Gallery from '@/components/sections/gallery/gallery'
import NewsletterOne from '@/components/sections/newsletters/newsletterOne'
import PageTitle from '@/components/sections/pageTitle'
import CallToActionSection from '@/components/sections/partner/CallToActionSection'
import FranchiseApplicants from '@/components/sections/partner/FranchiseApplicants'
import UniqueSellingPoints from '@/components/sections/partner/UniqueSellingPoints'
import Testimonials from '@/components/sections/partner/Testimonials'
import FAQs from '@/components/sections/partner/FAQs'


const Partners = () => {
  return (
    <>
      <Helmet>
        <title> Partners</title>
        <meta name="description" content="Ascent - Chindcare & Kids School React.js and Tailwind CSS Template" />
      </Helmet>
      <main>
        <PageTitle pageName={"Partners"} breadcrumbCurrent={"Partners"} />
       <CallToActionSection />
       <FranchiseApplicants />
       <UniqueSellingPoints />
       <Testimonials />
       <FAQs />
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default Partners