import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import PageTitle from '@/components/sections/pageTitle'
import ServicesTwo from '@/components/sections/services/servicesTwo'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import ServiceArtical from '@/components/sections/services/serviceArtical'
import Video from '@/components/sections/abouts/Video'
import Brands from '@/components/sections/abouts/Brands-1'
import FaqComp from '@/components/sections/faqComp'
import Feature from '@/components/sections/services/Feature'
import Platform from '@/components/sections/services/Platform'
import Students_Talk from '@/components/sections/services/Students_Talk'




const Services = () => {
  return (
    <>
      <Helmet>
        <title>Otomatiks  || Services</title>
        <meta name="description" content="Ascent - Chindcare & Kids School React.js and Tailwind CSS Template" />
      </Helmet>
      <main>
        <PageTitle pageName={"Our Courses"} breadcrumbCurrent={"Our Courses"} />
        <ServiceArtical />
      <Feature />
        <ServicesTwo />
        {/* <NewsletterTwo /> */}
     <Brands />
     <Platform />
     <Students_Talk />

     <FaqComp />
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default Services