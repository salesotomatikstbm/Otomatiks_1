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
import  Video  from '../components/sections/abouts/Video'
import OurJourney from '@/components/sections/OurJourney'


const AboutUs = () => {

  return (
    <>
      <Helmet>
        <title>About-Us</title>
        <meta name="description" content="Ascent - Chindcare & Kids School React.js and Tailwind CSS Template" />
      </Helmet>
      <main>
        <PageTitle pageName={"About Us"} breadcrumbCurrent={"About Us"} />
        <AboutOne gridClass={"lg:grid-cols-2"} isAboutpage={true} />

        <OurJourney />
<AboutTwo />

{/* 
        <Partner /> */}
        <Testimonial />
        {/* <Teams /> */}
        {/* <Pricing /> */}
        {/* <Testimonial /> */}
        {/* <NewsletterTwo /> */}
        <Video />
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default AboutUs