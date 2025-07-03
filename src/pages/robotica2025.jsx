import dynamic from 'next/dynamic';
import Head from 'next/head';

// Dynamically import components with loading states
const PageTitle = dynamic(() => import('@/components/sections/pageTitle'), {
  loading: () => <div className="h-24 bg-gray-100" />
});

const EventPromoSection = dynamic(() => import('@/components/sections/robotica2025/EventPromoSection'), {
  loading: () => <div className="py-12 bg-white" />
});

const GlimplsVideo = dynamic(() => import('@/components/sections/robotica2024/GlimpsVideo'), {
  loading: () => <div className="py-12 bg-gray-50" />
});

const PreviousEventGallery2024 = dynamic(() => import('@/components/sections/robotica2024/PreviousEventGallery2024'), {
  loading: () => <div className="py-12 bg-white" />
});

const TopUp = dynamic(() => import('@/components/sections/footers/TopUp'), {
  loading: () => <div className="bg-gray-800 h-20" />
});

const Robotica2025 = () => {
  return (
    <>
      <Head>
        <title>Robotica 2025 | Premier Robotics Competition & Exhibition</title>
        <meta
          name="description"
          content="Join Asia's largest student robotics competition. 500+ teams, cutting-edge tech demonstrations, and hands-on workshops for ages 8-18."
        />
        <meta
          name="keywords"
          content="Robotica 2025, robotics competition, STEM event, AI showcase, robotics tournament, student robotics"
        />

      

        {/* Open Graph */}
        <meta property="og:title" content="Robotica 2025 | Asia's Largest Student Robotics Competition" />
        <meta property="og:description" content="500+ teams. Cutting-edge tech. Register now for March 15-17, 2025 at Bangalore International Exhibition Centre." />
        <meta property="og:image" content="https://www.otomatiks.com/images/robotica2025-social.jpg" />
        <meta property="og:url" content="https://www.otomatiks.com/robotica2025" />
        <meta property="og:type" content="event" />
        <meta property="event:start_time" content="2025-03-15T09:00:00+05:30" />
        <meta property="event:end_time" content="2025-03-17T18:00:00+05:30" />
        <meta property="event:location" content="Bangalore International Exhibition Centre" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Robotica 2025: Register Your Team Today!" />
        <meta name="twitter:description" content="Student robotics competition with ₹50,000 in prizes. Open to ages 8-18. March 15-17, 2025 in Bangalore." />
        <meta name="twitter:image" content="https://www.otomatiks.com/images/robotica2025-twitter.jpg" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.otomatiks.com/robotica2025" />
      </Head>

      <main>
        <PageTitle 
          pageName="Robotica" 
          breadcrumbCurrent="Robotica" 
        />
        <EventPromoSection />
        <GlimplsVideo />
        <PreviousEventGallery2024 />
        <TopUp />
      </main>
    </>
  );
};

export default Robotica2025;