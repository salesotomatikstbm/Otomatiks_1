import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'

import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import PageTitle from '@/components/sections/pageTitle'
import Products from '@/components/sections/products'

import InfrastructureRequirements from '@/components/sections/lab/InfrastructureRequirements'
import ValueSection from '@/components/sections/lab/ValueSection'
import RoboticsAiLabSetup from '@/components/sections/lab/RoboticsAiLabSetup '
import Contact_Form_Course from '@/components/sections/course/Contact_Form_Course'



const Ai = () => {
  return (
    <>
      <Helmet>
        <title>robotics-ai-lab</title>
        <meta name="description" content="Ascent - Chindcare & Kids School React.js and Tailwind CSS Template" />
      </Helmet>
      <main>
        <PageTitle pageName={"Robotics & AI Lab"} breadcrumbCurrent={"Robotics & AI Lab"} />


  <Products />
  <InfrastructureRequirements />
<RoboticsAiLabSetup />
<ValueSection />
{/* 
        <NewsletterTwo /> */}
        <Contact_Form_Course />
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default Ai