import dynamic from 'next/dynamic';
import Head from 'next/head';

// Dynamic imports with loading states
const PageTitle = dynamic(() => import('@/components/sections/pageTitle'), {
  loading: () => <div className="h-24 bg-gray-100" />
});

const Why_otomatiks = dynamic(() => import('@/components/sections/schoolprogram/Why_otomatiks'), {
  loading: () => <div className="py-12 bg-white" />
});

const Our_Uniqueness = dynamic(() => import('@/components/sections/schoolprogram/Our_Uniqueness'), {
  loading: () => <div className="py-12 bg-gray-50" />
});

const HomeTestimonial = dynamic(() => import('@/components/sections/Home/HomeTestimonial'), {
  loading: () => <div className="py-12 bg-white" />
});

const Our_Patrons = dynamic(() => import('@/components/sections/schoolprogram/Our_Patrons'), {
  loading: () => <div className="py-12 bg-gray-50" />
});

const Contact_School_Management = dynamic(() => import('@/components/sections/schoolprogram/Contact_School_Management'), {
  loading: () => <div className="py-12 bg-white" />
});

const TopUp = dynamic(() => import('@/components/sections/footers/TopUp'), {
  loading: () => <div className="bg-gray-800 h-20" />
});

const SchoolProgram = () => {
  return (
    <>
      <Head>
        <title>STEM School Program | Robotics & AI Curriculum for Schools</title>
        <meta
          name="description"
          content="Transform your school's STEM education with our comprehensive robotics & AI curriculum. Designed for K-12 students with hands-on learning modules."
        />
        <meta
          name="keywords"
          content="school STEM program, robotics curriculum, AI education for schools, coding for students, STEM integration"
        />

        {/* Structured Data for Educational Program */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOccupationalProgram",
            "name": "Otomatiks STEM School Program",
            "description": "Comprehensive robotics and AI curriculum for K-12 schools",
            "programType": "EducationalOccupationalProgram",
            "provider": {
              "@type": "Organization",
              "name": "Otomatiks",
              "sameAs": "https://www.otomatiks.com"
            },
            "timeToComplete": "P1Y",
            "educationalProgramMode": "InPerson",
            "occupationalCategory": "STEM Education",
            "offers": {
              "@type": "Offer",
              "url": "https://www.otomatiks.com/school-program"
            }
          })}
        </script>

        {/* Open Graph */}
        <meta property="og:title" content="STEM School Program | Robotics & AI Curriculum" />
        <meta property="og:description" content="Comprehensive K-12 STEM curriculum with robotics, coding, and AI modules for schools. Aligned with national education standards." />
        <meta property="og:image" content="https://www.otomatiks.com/images/stem-school-program-og.jpg" />
        <meta property="og:url" content="https://www.otomatiks.com/school-program" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="STEM School Program by Otomatiks" />
        <meta name="twitter:description" content="Ready-to-implement robotics and AI curriculum for schools. Teacher training and student materials included." />
        <meta name="twitter:image" content="https://www.otomatiks.com/images/stem-school-twitter.jpg" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.otomatiks.com/school-program" />
      </Head>

      <main>
        <PageTitle 
          pageName="School Curriculum" 
          breadcrumbCurrent="School Curriculum" 
        />
        <Why_otomatiks />
        <Our_Uniqueness />
        <HomeTestimonial />
        <Our_Patrons />
        <Contact_School_Management />
        <TopUp />
      </main>
    </>
  );
};

export default SchoolProgram;