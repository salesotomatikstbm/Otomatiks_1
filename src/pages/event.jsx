import React from 'react'
import PageTitle from '@/components/sections/pageTitle'
import { Helmet } from 'react-helmet'
const event = () => {
  return (
    <div>
       <Helmet>
        <title>Event</title>
        <meta name="description" content="Ascent - Chindcare & Kids School React.js and Tailwind CSS Template" />
      </Helmet>

         <PageTitle pageName={"Event"} breadcrumbCurrent={"Event"} />
    </div>
  )
}

export default event