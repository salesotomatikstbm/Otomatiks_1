import dynamic from 'next/dynamic';
import Head from 'next/head';

// Dynamically import sections with fallback skeletons
const PageTitle = dynamic(() => import('@/components/sections/pageTitle'), {
  loading: () => <div className="h-24 bg-gray-100" />
});

const AboutOne = dynamic(() => import('@/components/sections/abouts/aboutOne'), {
  loading: () => <div className="py-12 bg-white" />
});

const Testimonial = dynamic(() => import('@/components/sections/testimonial'), {
  loading: () => <div className="py-12 bg-gray-50" />
});

const OurJourney = dynamic(() => import('@/components/sections/abouts/OurJourney'), {
  loading: () => <div className="py-12 bg-white" />
});

const Teams = dynamic(() => import('@/components/sections/teams/teams'), {
  loading: () => <div className="py-12 bg-gray-50" />
});

const Brands1 = dynamic(() => import('@/components/sections/abouts/Brands'), {
  loading: () => <div className="py-12 bg-white" />
});

const OurPatrons = dynamic(() => import('@/components/sections/schoolprogram/Our_Patrons'), {
  loading: () => <div className="py-12 bg-gray-50" />
});

const ContactAbout = dynamic(() => import('@/components/sections/abouts/Contact_About'), {
  loading: () => <div className="py-12 bg-white" />
});

const TopUp = dynamic(() => import('@/components/sections/footers/TopUp'), {
  loading: () => <div className="bg-gray-800 h-20" />
});

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Otomatiks | Robotics & STEM Education for Kids</title>
        <meta
          name="description"
          content="Learn about Otomatiks — India’s trusted robotics and STEM education company for kids aged 6–16. We empower young minds through hands-on, future-ready programs."
        />
        <meta
          name="keywords"
          content="Otomatiks, robotics for kids, STEM education India, coding classes for kids, AI learning, hands-on STEM, kids robotics programs"
        />

        <meta property="og:title" content="About Otomatiks | Inspiring Young Minds with Robotics & STEM" />
        <meta property="og:description" content="Discover our mission to make STEM education fun, practical, and accessible for children. See how we prepare them for tomorrow’s skills." />
        <meta property="og:image" content="https://www.otomatiks.com/images/og-about.jpg" />
        <meta property="og:url" content="https://www.otomatiks.com/about-us" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Otomatiks | Robotics & STEM Education for Kids" />
        <meta name="twitter:description" content="Empowering the next generation through hands-on robotics and STEM learning. Learn about Otomatiks and our mission." />
        <meta name="twitter:image" content="https://www.otomatiks.com/images/twitter-about.jpg" />

        <link rel="canonical" href="https://www.otomatiks.com/about-us" />

        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Otomatiks",
              "url": "https://www.otomatiks.com",
              "logo": "https://www.otomatiks.com/logo.png",
              "description": "Leading provider of robotics and STEM education for children aged 6–16.",
              "founder": {
                "@type": "Person",
                "name": "Otomatiks Team"
              },
              "foundingDate": "2018",
              "sameAs": [
                "https://www.facebook.com/otomatiks",
                "https://www.instagram.com/otomatiks",
                "https://www.linkedin.com/company/otomatiks"
              ]
            })
          }}
        />

      </Head>

      <main>
        <PageTitle pageName="About Us" breadcrumbCurrent="About Us" />
        <AboutOne isAboutpage />
        <Testimonial />
        <OurJourney />
        <Teams />
        <Brands1 />
        <OurPatrons />
        <ContactAbout />
        <TopUp />
      </main>
    </>
  );
};

export default AboutUs;
