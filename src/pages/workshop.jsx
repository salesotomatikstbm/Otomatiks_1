import dynamic from 'next/dynamic';
import Head from 'next/head';

// Dynamic imports with loading states
const PageTitle = dynamic(() => import('@/components/sections/pageTitle'), {
  loading: () => <div className="h-24 bg-gray-100" />
});

const AboutTwo = dynamic(() => import('@/components/sections/abouts/aboutTwo'), {
  loading: () => <div className="py-12 bg-white" />
});

const OurWorkshop = dynamic(() => import('@/components/sections/workshop/WhatWeOffer'), {
  loading: () => <div className="py-12 bg-gray-50" />
});

const PreviousYearWorkshop = dynamic(() => import('@/components/sections/workshop/PreviousYearWorkshop'), {
  loading: () => <div className="py-12 bg-white" />
});

const FaqWorkshop = dynamic(() => import('@/components/sections/workshop/FaqWorkshop'), {
  loading: () => <div className="py-12 bg-gray-50" />
});

const Contact_School_Management = dynamic(() => import('@/components/sections/schoolprogram/Contact_School_Management'), {
  loading: () => <div className="py-12 bg-white" />
});

const TopUp = dynamic(() => import('@/components/sections/footers/TopUp'), {
  loading: () => <div className="bg-gray-800 h-20" />
});

const Workshop = () => {
  return (
    <>
      <Head>
        <title>STEM Workshops for Kids | Robotics & Coding Camps | Otomatiks</title>
        <meta
          name="description"
          content="Interactive STEM workshops for ages 6-16. Hands-on robotics, coding & AI projects. School holidays & weekend programs available."
        />
        <meta
          name="keywords"
          content="kids STEM workshops, robotics camps, coding workshops, AI for children, holiday programs"
        />

        {/* Structured Data for Workshop */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EventSeries",
            "name": "Otomatiks STEM Workshops",
            "description": "Interactive robotics and coding workshops for children",
            "url": "https://www.otomatiks.com/workshop",
            "startDate": "2023-11-01",
            "endDate": "2024-12-31",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "eventStatus": "https://schema.org/EventScheduled",
            "organizer": {
              "@type": "Organization",
              "name": "Otomatiks",
              "url": "https://www.otomatiks.com"
            },
            "offers": {
              "@type": "Offer",
              "url": "https://www.otomatiks.com/workshop#register",
              "price": "1499",
              "priceCurrency": "INR"
            }
          })}
        </script>

        {/* Open Graph */}
        <meta property="og:title" content="Kids STEM Workshops | Robotics & Coding Camps" />
        <meta property="og:description" content="Book our holiday workshops - robotics, coding & AI projects for ages 6-16. Limited seats available!" />
        <meta property="og:image" content="https://www.otomatiks.com/images/workshop-og.jpg" />
        <meta property="og:url" content="https://www.otomatiks.com/workshop" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Book Kids STEM Workshops | Otomatiks" />
        <meta name="twitter:description" content="Hands-on robotics & coding camps this holiday. Ages 6-16. Early bird discounts available!" />
        <meta name="twitter:image" content="https://www.otomatiks.com/images/workshop-twitter.jpg" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.otomatiks.com/workshop" />
      </Head>

      <main>
        <PageTitle 
          pageName="Workshops" 
          breadcrumbCurrent="Workshops" 
        />
        <AboutTwo />
        <OurWorkshop />
        <PreviousYearWorkshop />
        <FaqWorkshop />
        <Contact_School_Management />
        <TopUp />
      </main>
    </>
  );
};

export default Workshop;