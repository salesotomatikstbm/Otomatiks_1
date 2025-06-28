import dynamic from 'next/dynamic';
import Head from 'next/head';

// Dynamic imports with loading states
const PageTitle = dynamic(() => import('@/components/sections/pageTitle'), {
  loading: () => <div className="h-24 bg-gray-100" />
});

const Robotics_Course = dynamic(() => import('@/components/sections/course/Robotics_Course'), {
  loading: () => <div className="py-12 bg-white" />
});

const Software_Course = dynamic(() => import('@/components/sections/course/Software_Course'), {
  loading: () => <div className="py-12 bg-gray-50" />
});

const Platform = dynamic(() => import('@/components/sections/course/Platform'), {
  loading: () => <div className="py-12 bg-white" />
});

const Students_Talk = dynamic(() => import('@/components/sections/course/Students_Talk'), {
  loading: () => <div className="py-12 bg-gray-50" />
});

const Brands1 = dynamic(() => import('@/components/sections/abouts/Brands'), {
  loading: () => <div className="py-12 bg-white" />
});

const FaqCompCourse = dynamic(() => import('@/components/sections/faqCompCourse'), {
  loading: () => <div className="py-12 bg-gray-50" />
});

const Contact_Form_Course = dynamic(() => import('@/components/sections/course/Contact_Form_Course'), {
  loading: () => <div className="py-12 bg-white" />
});

const TopUp = dynamic(() => import('@/components/sections/footers/TopUp'), {
  loading: () => <div className="bg-gray-800 h-20" />
});

const Courses = () => {
  return (
    <>
      <Head>
        <title>Robotics & Coding Courses for Kids | Otomatiks STEM Academy</title>
        <meta
          name="description"
          content="Hands-on robotics & coding courses for kids aged 6-16. Build real projects with expert instructors at Otomatiks. Beginner to advanced STEM programs available."
        />
        <meta
          name="keywords"
          content="robotics courses, coding for kids, STEM education, AI for children, programming classes, young engineers, tech education"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Robotics & Coding Programs",
            "description": "Hands-on STEM courses for children aged 6-16",
            "provider": {
              "@type": "Organization",
              "name": "Otomatiks",
              "sameAs": "https://www.otomatiks.com"
            },
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "99",
              "priceCurrency": "USD",
              "offerCount": "5"
            }
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "What age groups are your courses for?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our courses are designed for children aged 6-16, with programs tailored for different skill levels."
              }
            }]
          })}
        </script>

        {/* Open Graph */}
        <meta property="og:title" content="Kids Robotics & Coding Courses | Otomatiks STEM Academy" />
        <meta property="og:description" content="Hands-on STEM courses where kids build real robotics projects and learn coding from expert instructors." />
        <meta property="og:image" content="https://www.otomatiks.com/images/courses-og.jpg" />
        <meta property="og:url" content="https://www.otomatiks.com/courses" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kids Robotics & Coding Courses | Otomatiks" />
        <meta name="twitter:description" content="Transform your child's future with our hands-on STEM programs. Beginner to advanced courses available." />
        <meta name="twitter:image" content="https://www.otomatiks.com/images/courses-twitter.jpg" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.otomatiks.com/courses" />
      </Head>

      <main>
        <PageTitle pageName="Our Courses" breadcrumbCurrent="Our Courses" />
        <Robotics_Course />
        <Software_Course />
        <Platform />
        <Students_Talk />
        <Brands1 />
        <FaqCompCourse />
        <Contact_Form_Course />
        <TopUp />
      </main>
    </>
  );
};

export default Courses;