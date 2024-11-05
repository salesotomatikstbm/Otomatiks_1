import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import PageTitle from '@/components/sections/pageTitle'



const Csr = () => {
  return (
    <>
      <Helmet>
        <title>CSR</title>
        <meta name="description" content="Ascent - Chindcare & Kids School React.js and Tailwind CSS Template" />
      </Helmet>
      <main>
        <PageTitle pageName={"CSR"} breadcrumbCurrent={"CSR"} />


 
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default Csr