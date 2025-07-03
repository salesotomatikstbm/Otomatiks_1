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
          content="Discover fun, hands-on robotics & coding courses for kids aged 6–16. Learn STEM skills, build real projects, and become future-ready with Otomatiks."
        />
        <meta
          name="keywords"
          content="robotics courses for kids, coding classes for children, STEM education programs, kids programming, learn robotics, AI for kids, beginner coding, advanced robotics projects, Otomatiks STEM courses"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Robotics & Coding Courses for Kids",
            "description": "Fun, hands-on STEM courses for kids aged 6–16. Learn robotics, coding, and AI skills.",
            "provider": {
              "@type": "Organization",
              "name": "Otomatiks STEM Academy",
              "url": "https://www.otomatiks.com"
            },
            "educationalCredentialAwarded": "STEM Certificate",
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": "Online & Offline",
              "instructor": {
                "@type": "Person",
                "name": "Certified Otomatiks Instructor"
              }
            }
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What age groups are your courses for?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our STEM courses are designed for children aged 6–16, from beginners to advanced learners."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer online courses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we offer both online and offline classes to suit your child's learning needs."
                }
              }
            ]
          })}
        </script>

        {/* Open Graph */}
        <meta property="og:title" content="Robotics & Coding Courses for Kids | Otomatiks STEM Academy" />
        <meta
          property="og:description"
          content="Enroll your child in our hands-on robotics and coding courses. Build projects, learn STEM skills, and prepare for the future with Otomatiks."
        />
        <meta property="og:image" content="https://www.otomatiks.com/images/courses-og.jpg" />
        <meta property="og:url" content="https://www.otomatiks.com/courses" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Robotics & Coding Courses for Kids | Otomatiks" />
        <meta
          name="twitter:description"
          content="Hands-on robotics and coding courses for kids aged 6–16. Beginner to advanced STEM programs to build skills for tomorrow."
        />
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
