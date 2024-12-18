import React from 'react'
import PageTitle from '@/components/sections/pageTitle'
import { Helmet } from 'react-helmet'
import RoboticaIframe from '@/components/sections/robotica2025/RoboticaIframe'
import PreviousEventGallery2024 from '@/components/sections/robotica2024/PreviousEventGallery2024'
import GlimplsVideo from '@/components/sections/robotica2024/GlimpsVideo'
const Robotica2024 = () => {
  return (
    <div>
       <Helmet>
        <title>Robotica 2024</title>
        <meta name="description" content="Ascent - Chindcare & Kids School React.js and Tailwind CSS Template" />
      </Helmet>
         <PageTitle pageName={"Robotics 2024"} breadcrumbCurrent={"Robotics 2024"} />
<PreviousEventGallery2024 />
<GlimplsVideo />

    </div>
  )
}

export default Robotica2024