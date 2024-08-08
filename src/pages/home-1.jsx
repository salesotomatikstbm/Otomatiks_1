import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'

import HeroOne from '@/components/sections/heros/heroOne'
import AboutOne from '@/components/sections/abouts/aboutOne'
import ServicesOne from '@/components/sections/services/servicesOne'
import Gallery from '@/components/sections/gallery/gallery'
import Programs from '@/components/sections/programs'
import FaqComp from '@/components/sections/faqComp'
import Teams from '@/components/sections/teams/teams'
import Testimonial from '@/components/sections/testimonial'
import BlogsOne from '@/components/sections/blogs/blogsOne'
import NewsletterOne from '@/components/sections/newsletters/newsletterOne'
import SuccessProjectOne from '@/components/sections/successProjects/successProjectOne'
import AgeOne from '@/components/sections/studentsAge/ageOne'
import ExtraCurricular from '@/components/sections/extraCurricular'
import AgeTwo from '@/components/sections/studentsAge/ageTwo'
import Partner from '@/components/sections/partner'


const HomeOne = () => {
  return (
    <>
      <Helmet>
        <title>Otomatiks</title>
        <meta name="description" content="Ascent - Chindcare & Kids School React.js and Tailwind CSS Template" />
      </Helmet>
      <main>
        <HeroOne />
        <SuccessProjectOne />
        <AboutOne isAboutpage={false} />
        <Programs />
       
        <ServicesOne />
       <AgeTwo />
        <ExtraCurricular />
       
        <Gallery />

        <Teams />
        <FaqComp />
        <Partner />
        {/* <AgeOne /> */}
        {/* <Testimonial /> */}
        {/* <BlogsOne /> */}
        {/* <NewsletterOne /> */}
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default HomeOne