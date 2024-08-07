import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import AboutOne from '@/components/sections/abouts/aboutOne'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import PageTitle from '@/components/sections/pageTitle'
import Pricing from '@/components/sections/pricing'
import Testimonial from '@/components/sections/testimonial'
import Partner from '@/components/sections/partner'
import Teams from '@/components/sections/teams/teams'
import AboutTwo from '@/components/sections/abouts/aboutTwo'


const AboutUs = () => {

  return (
    <>
      <Helmet>
        <title>Otomatiks || About-Us</title>
        <meta name="description" content="Ascent - Chindcare & Kids School React.js and Tailwind CSS Template" />
      </Helmet>
      <main>
        <PageTitle pageName={"About Us"} breadcrumbCurrent={"About Us"} />
        <AboutOne gridClass={"lg:grid-cols-2"} isAboutpage={true} />
<AboutTwo />


        <Partner />
        <Teams />
        {/* <Pricing /> */}
        {/* <Testimonial /> */}
        {/* <NewsletterTwo /> */}
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default AboutUs