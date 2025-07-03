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
        <title>Kids STEM Workshops | Robotics & Coding Holiday Camps | Otomatiks</title>
        <meta
          name="description"
          content="Join fun and interactive STEM workshops for kids aged 6-16. Robotics, coding & AI holiday camps and weekend programs. Hands-on projects, expert trainers."
        />
        <meta
          name="keywords"
          content="kids STEM workshops, robotics camps for kids, coding classes, AI workshops, holiday camps for students, kids technology workshops"
        />

        {/* Structured Data: Educational Events */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "Otomatiks STEM Holiday Workshop",
            "description": "Interactive robotics and coding workshops for kids ages 6-16 during school holidays and weekends.",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "eventStatus": "https://schema.org/EventScheduled",
            "location": {
              "@type": "Place",
              "name": "Otomatiks STEM Centers",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "India",
                "addressCountry": "IN"
              }
            },
            "organizer": {
              "@type": "Organization",
              "name": "Otomatiks",
              "url": "https://www.otomatiks.com"
            },
            "startDate": "2025-12-01",
            "endDate": "2025-12-30"
          })}
        </script>

        {/* Open Graph */}
        <meta property="og:title" content="Book Kids STEM Workshops | Robotics & Coding Camps" />
        <meta property="og:description" content="Join our STEM holiday workshops: robotics, coding & AI projects for kids aged 6-16. Limited seats — enroll early!" />
        <meta property="og:image" content="https://www.otomatiks.com/images/workshop-og.jpg" />
        <meta property="og:url" content="https://www.otomatiks.com/workshop" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Robotics & Coding Holiday Camps | Otomatiks Workshops" />
        <meta name="twitter:description" content="Hands-on robotics & coding holiday workshops for kids 6-16. Book now for early bird discounts!" />
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
