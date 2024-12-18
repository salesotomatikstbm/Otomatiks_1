import React from 'react'
import PageTitle from '@/components/sections/pageTitle'
import { Helmet } from 'react-helmet'
import RoboticaIframe from '@/components/sections/robotica2025/RoboticaIframe'
import PreviousEventGallery2023 from '@/components/sections/robotica2023/PreviousEventGallery2023'
import GlimplsVideo2023 from '@/components/sections/robotica2023/GlimpsVideo2023'
const Robotica2023 = () => {
  return (
    <div>
       <Helmet>
        <title>Robotica 2023</title>
        <meta name="description" content="Ascent - Chindcare & Kids School React.js and Tailwind CSS Template" />
      </Helmet>

         <PageTitle pageName={"Robotics 2023"} breadcrumbCurrent={"Robotics 2023"} />
<PreviousEventGallery2023 />
<GlimplsVideo2023 />
    </div>
  )
}

export default Robotica2023