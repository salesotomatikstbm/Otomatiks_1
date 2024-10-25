import React from 'react'
import PageTitle from '@/components/sections/pageTitle'
import { Helmet } from 'react-helmet'
import RoboticaIframe from '@/components/sections/robotica2025/RoboticaIframe'
import EventPromoSection from '@/components/sections/robotica2025/EventPromoSection'
const Robotica2025 = () => {
  return (
    <div>
       <Helmet>
        <title>Robotica 2025</title>
        <meta name="description" content="Ascent - Chindcare & Kids School React.js and Tailwind CSS Template" />
      </Helmet>

         <PageTitle pageName={"Robotics 2025"} breadcrumbCurrent={"Robotics 2025"} />

         <EventPromoSection />
    </div>
  )
}

export default Robotica2025