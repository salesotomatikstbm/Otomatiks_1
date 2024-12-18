import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import HeroOne from '@/components/sections/heros/heroOne'
import AboutOne from '@/components/sections/abouts/aboutOne'
import Gallery from '@/components/sections/gallery/gallery'
import FaqComp from '@/components/sections/faqComp'
import Teams from '@/components/sections/teams/teams'
import Robotics_Course from "@/components/sections/course/Robotics_Course";
import ContactForm from '@/components/sections/contactForm'
import Client_Testimonial from '@/components/sections/schoolprogram/Client_Testimonial'
import Software_Course from '@/components/sections/course/Software_Course'
import TestiHome from '@/components/sections/TestiHome'
import BranchesMap from '@/components/sections/partner/BranchesMap'

const HomeOne = () => {
  return (
    <>
      <Helmet>
        <title>Otomatiks</title>
        <meta name="description" content="Ascent - Chindcare & Kids School React.js and Tailwind CSS Template" />
      </Helmet>
      <main>
        <HeroOne />
        <AboutOne isAboutpage={false} />
        <Robotics_Course />
        <Software_Course />
        {/* <Gallery /> */}
        <BranchesMap />
        <Teams />
       <TestiHome />
        <FaqComp />
        <ContactForm />
      </main>
      <ScrollRestoration />
    </>
  )
}

export default HomeOne