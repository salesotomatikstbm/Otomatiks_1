import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import PageTitle from '@/components/sections/pageTitle'

const Msme = () => {
  return (
    <>
      <Helmet>
        <title>MSME</title>
        <meta name="description" content="Ascent - Chindcare & Kids School React.js and Tailwind CSS Template" />
      </Helmet>
      <main>
        <PageTitle pageName={"MSME"} breadcrumbCurrent={"MSME"} />

      </main>
      <ScrollRestoration/>
    </>
  )
}

export default Msme