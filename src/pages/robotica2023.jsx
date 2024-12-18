import React from 'react'
import PageTitle from '@/components/sections/pageTitle'
import { Helmet } from 'react-helmet'
import PreviousEventGallery2023 from '@/components/sections/robotica2023/PreviousEventGallery2023'
import GlimplsVideo2023 from '@/components/sections/robotica2023/GlimpsVideo2023'

const Robotica2023 = () => {
  return (
    <div>
      <Helmet>
        <title>Robotica 2023</title>
        <meta
          name="description"
          content="Robotica 2023 was an exciting robotics event showcasing the best of technology and innovation. Check out event highlights, gallery, and videos from the event."
        />
        <meta
          name="keywords"
          content="Robotica 2023, robotics event, Otomatiks robotics, robotics competition, technology event, robotics gallery, event highlights, robot showcase"
        />
        <meta name="author" content="Otomatiks Robotics" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Robotica 2023 - A Robotics Event by Otomatiks" />
        <meta
          property="og:description"
          content="Check out the highlights from Robotica 2023, an exciting robotics event organized by Otomatiks. Explore the gallery and videos from this amazing event."
        />
        <meta property="og:image" content="https://www.otomatiks.com/path/to/robotica2023-image.jpg" />
        <meta property="og:url" content="https://www.otomatiks.com/robotica2023" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Robotica 2023 - A Robotics Event by Otomatiks"
        />
        <meta
          name="twitter:description"
          content="Explore the best moments from Robotica 2023, a top robotics event hosted by Otomatiks. Watch videos and browse the event gallery."
        />
        <meta name="twitter:image" content="https://www.otomatiks.com/path/to/robotica2023-twitter-image.jpg" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.otomatiks.com/robotica2023" />
       
      </Helmet>

      <PageTitle pageName={"Robotica 2023"} breadcrumbCurrent={"Robotica 2023"} />
      <PreviousEventGallery2023 />
      <GlimplsVideo2023 />
    </div>
  )
}

export default Robotica2023;
