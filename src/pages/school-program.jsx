import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import PageTitle from '@/components/sections/pageTitle'
import Why_otomatiks from '@/components/sections/schoolprogram/Why_otomatiks'
import Our_Uniqueness from '@/components/sections/schoolprogram/Our_Uniqueness'
import Our_Patrons from '@/components/sections/schoolprogram/Our_Patrons'
import Client_Testimonial from '@/components/sections/schoolprogram/Client_Testimonial'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import Contact_School_Management from '@/components/sections/schoolprogram/Contact_School_Management'




const SchoolProgram = () => {
  return (
    <>
      <Helmet>
        <title>School Curriculum</title>
        <meta name="description" content="Ascent - Chindcare & Kids School React.js and Tailwind CSS Template" />
      </Helmet>
      <main>
        <PageTitle pageName={"School Curriculum"} breadcrumbCurrent={"School Curriculum"} />
        <Why_otomatiks />
        <Our_Uniqueness />
        <Our_Patrons />
        <Client_Testimonial />  
      <Contact_School_Management />
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default SchoolProgram 