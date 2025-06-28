import dynamic from 'next/dynamic';
import Head from 'next/head';

// Dynamically import components with loading states
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

const Our_Patrons = dynamic(() => import('@/components/sections/schoolprogram/Our_Patrons'), {
  loading: () => <div className="py-12 bg-gray-50" />
});

const Contact_About = dynamic(() => import('@/components/sections/abouts/Contact_About'), {
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
          content="Otomatiks bridges academics & real-world applications with hands-on robotics programs. We empower students aged 6-16 with future-ready STEM skills through innovative teaching."
        />
        <meta 
          name="keywords" 
          content="robotics for kids, STEM education, coding classes, AI for children, hands-on learning, future skills, Otomatiks programs"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Otomatiks",
            "url": "https://www.otomatiks.com",
            "logo": "https://www.otomatiks.com/logo.png",
            "description": "Leading provider of robotics and STEM education for children",
            "founder": "Otomatiks Team",
            "foundingDate": "2018",
            "sameAs": [
              "https://facebook.com/otomatiks",
              "https://instagram.com/otomatiks",
              "https://linkedin.com/company/otomatiks"
            ]
          })}
        </script>


        <meta property="og:title" content="About Otomatiks | Inspiring Young Minds Through Robotics" />
        <meta property="og:description" content="Discover our mission to make STEM education accessible and engaging for children through hands-on robotics programs." />
        <meta property="og:image" content="https://www.otomatiks.com/images/og-about.jpg" />
        <meta property="og:url" content="https://www.otomatiks.com/about-us" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Otomatiks | Robotics Education Leaders" />
        <meta name="twitter:description" content="Empowering the next generation with practical STEM skills through innovative robotics programs." />
        <meta name="twitter:image" content="https://www.otomatiks.com/images/twitter-about.jpg" />

   
        <link rel="canonical" href="https://www.otomatiks.com/about-us" />
      </Head>

      <main>
        <PageTitle 
          pageName="About Us" 
          breadcrumbCurrent="About Us" 
        />
        <AboutOne isAboutpage={true} />
        <Testimonial />
        <OurJourney />
        <Teams />
        <Brands1 />
        <Our_Patrons />
        <Contact_About />
        <TopUp />
      </main>
    </>
  );
};

export default AboutUs;