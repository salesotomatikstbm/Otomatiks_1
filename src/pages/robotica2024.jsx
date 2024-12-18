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
        <meta
          name="description"
          content="Robotica 2024 is an exciting robotics competition and event showcasing cutting-edge technology and innovation in robotics. Watch highlights, videos, and gallery."
        />
        <meta
          name="keywords"
          content="Robotica 2024, robotics competition, robotics event, Otomatiks robotics, robotics innovation, technology event, event gallery, robotics showcase"
        />
        <meta name="author" content="Otomatiks Robotics" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Robotica 2024 - The Premier Robotics Event by Otomatiks" />
        <meta
          property="og:description"
          content="Discover the exciting moments from Robotica 2024, a major robotics event hosted by Otomatiks. Watch videos and explore the event gallery for a glimpse into the future of robotics."
        />
        <meta property="og:image" content="https://www.otomatiks.com/path/to/robotica2024-image.jpg" />
        <meta property="og:url" content="https://www.otomatiks.com/robotica2024" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Robotica 2024 - The Premier Robotics Event by Otomatiks"
        />
        <meta
          name="twitter:description"
          content="Experience Robotica 2024, a premier robotics event hosted by Otomatiks. View event highlights, videos, and gallery showcasing the latest in robotics innovation."
        />
        <meta name="twitter:image" content="https://www.otomatiks.com/path/to/robotica2024-twitter-image.jpg" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.otomatiks.com/robotica2024" />

      </Helmet>

      <PageTitle pageName={"Robotica 2024"} breadcrumbCurrent={"Robotica 2024"} />
      <PreviousEventGallery2024 />
      <GlimplsVideo />
    </div>
  )
}

export default Robotica2024;
