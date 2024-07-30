import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'

import AboutTwo from '@/components/sections/abouts/aboutTwo'
import BlogsTwo from '@/components/sections/blogs/blogsTwo'
import ExtraCurricular from '@/components/sections/extraCurricular'
import HeroTwo from '@/components/sections/heros/heroTwo'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import Partner from '@/components/sections/partner'
import Pricing from '@/components/sections/pricing'
import Products from '@/components/sections/products'
import AgeTwo from '@/components/sections/studentsAge/ageTwo'
import SuccessProjectTwo from '@/components/sections/successProjects/successProjectTwo'

const HomeTwo = () => {
  return (
    <>
      <Helmet>
        <title>Ascent - Chindcare & Kids School React.js Template  || Home Two</title>
        <meta name="description" content="Ascent - Chindcare & Kids School React.js and Tailwind CSS Template" />
      </Helmet>
      <main>
        <HeroTwo />
        <AboutTwo />
        <SuccessProjectTwo />
        <ExtraCurricular />
        <Partner />
        <Products />
        <Pricing />
        <AgeTwo />
        <BlogsTwo />
        <NewsletterTwo />
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default HomeTwo