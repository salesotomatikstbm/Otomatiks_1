import React from 'react'
import PageTitle from '@/components/sections/pageTitle'
import { Helmet } from 'react-helmet'
import EventPromoSection from '@/components/sections/robotica2025/EventPromoSection'
import TopUp from '@/components/sections/footers/TopUp'
import PreviousEventGallery2024 from '@/components/sections/robotica2024/PreviousEventGallery2024'
import GlimplsVideo from '@/components/sections/robotica2024/GlimpsVideo'
import PreviousEventGallery2023 from '@/components/sections/robotica2023/PreviousEventGallery2023'
import GlimplsVideo2023 from '@/components/sections/robotica2023/GlimpsVideo2023'
import ChiefGuest2024 from '@/components/sections/robotica2024/ChiefGuest2024'
import ChiefGuest2023 from '@/components/sections/robotica2023/ChiefGuest2023'

const Robotica2025 = () => {
  return (
    <div>
      <Helmet>
        <title>Robotica</title>
        <meta
          name="description"
          content="Join us at Robotica 2025, the premier robotics event where innovation meets technology. Watch exciting event promos, and get a glimpse of the future of robotics!"
        />
        <meta
          name="keywords"
          content="Robotica 2025, robotics event, robotics competition, technology innovation, robotics showcase, robotics promo, robotics 2025, Otomatiks robotics, future robotics"
        />
        <meta name="author" content="Otomatiks Robotics" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Robotica 2025 - The Future of Robotics Innovation" />
        <meta
          property="og:description"
          content="Robotica 2025 is an exciting robotics event showcasing futuristic innovations. Watch the latest promo videos and stay updated about the upcoming event!"
        />
        <meta property="og:image" content="https://www.otomatiks.com/path/to/robotica2025-promo-image.jpg" />
        <meta property="og:url" content="https://www.otomatiks.com/robotica2025" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Robotica 2025 - The Future of Robotics Innovation"
        />
        <meta
          name="twitter:description"
          content="Join Robotica 2025, the top robotics event, to witness cutting-edge technology and innovations. Watch event promos and get ready for an amazing experience."
        />
        <meta name="twitter:image" content="https://www.otomatiks.com/path/to/robotica2025-twitter-image.jpg" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.otomatiks.com/robotica2025" />

      </Helmet>

      <PageTitle pageName={"Robotica 2025"} breadcrumbCurrent={"Robotica 2025"} />
      <EventPromoSection />
      {/* <ChiefGuest2025 /> */}

      <ChiefGuest2024 />
<PreviousEventGallery2024 />
      <GlimplsVideo />

      <ChiefGuest2023 />
      <PreviousEventGallery2023 />
      <GlimplsVideo2023 />

      <TopUp />
    </div>
  )
}

export default Robotica2025;
