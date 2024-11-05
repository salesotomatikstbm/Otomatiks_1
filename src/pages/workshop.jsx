import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import PageTitle from '@/components/sections/pageTitle'
import AboutTwo from '@/components/sections/abouts/aboutTwo'



const Workshop = () => {
  return (
    <>
      <Helmet>
        <title>Workshop</title>
        <meta name="description" content="Ascent - Chindcare & Kids School React.js and Tailwind CSS Template" />
      </Helmet>
      <main>
        <PageTitle pageName={"Workshop"} breadcrumbCurrent={"Workshop"} />

<AboutTwo />
 
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default Workshop