import React from 'react'
import PageTitle from '@/components/sections/pageTitle'
import { Helmet } from 'react-helmet'
import EventPromoSection from '@/components/sections/robotica2025/EventPromoSection'
import TopUp from '@/components/sections/footers/TopUp'
import PreviousEventGallery2024 from '@/components/sections/robotica2024/PreviousEventGallery2024'
import GlimplsVideo from '@/components/sections/robotica2024/GlimpsVideo'

const Robotica2025 = () => {
  return (
    <div>
      <Helmet>
        <title>Robotica</title>
        <meta
          name="description"
          content="Join our upcoming events to engage with experts, participate in hands-on activities, and expand your knowledge in robotics and AI."
        />
        <meta
          name="keywords"
          content="Robotics Events Near You, STEM Competitions for Kids, AI and Coding Showcases, Interactive STEM Workshops, Future-Focused Robotics Events, Robotica 2025, robotics event, robotics competition, technology innovation, robotics showcase, robotics promo, robotics 2025, Otomatiks robotics, future robotics, robotics exhibition, robotics technology, robotics trends, robotics innovations, robotics demos, robotics industry, future technology, AI in robotics, robotics engineering, robotics challenges, robotics for students, robotics conference, robotics workshops, robotics tech event, robotics education, automation technology, robot showcase, STEM robotics, robot competition, robotics tournament, robotics solutions, robotics development, robotics teams, robotic automation, robotics research, robotics breakthrough, robot design, cutting-edge robotics, robotics future, robotics community, robotics workshops 2025, robot inventions, robotics inventions, robotic designs, smart robotics, intelligent robotics, robotics applications, robotics students, robotics events 2025, robot building, robot projects, AI robotics, robotics demos 2025, robotics exhibition 2025"
        />

        <meta name="author" content="Otomatiks Robotics" />
        <meta property="og:title" content="Robotica 2025 - The Future of Robotics Innovation" />
        <meta
          property="og:description"
          content="Robotica 2025 is an exciting robotics event showcasing futuristic innovations. Watch the latest promo videos and stay updated about the upcoming event!"
        />
        <meta property="og:image" content="https://www.otomatiks.com/path/to/robotica2025-promo-image.jpg" />
        <meta property="og:url" content="https://www.otomatiks.com/robotica2025" />
        <meta property="og:type" content="website" />

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

        <link rel="canonical" href="https://www.otomatiks.com/robotica2025" />

      </Helmet>
      <PageTitle pageName={"Robotica"} breadcrumbCurrent={"Robotica"} />
      <EventPromoSection />
      <GlimplsVideo />
      <PreviousEventGallery2024 />
      <TopUp />
    </div>
  )
}

export default Robotica2025;
