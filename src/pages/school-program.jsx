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
        <title>School STEM Curriculum | Robotics & AI Program for K-12 | Otomatiks</title>
        <meta
          name="description"
          content="Empower your school with a world-class robotics and AI curriculum for K-12. Project-based modules, teacher training, and student kits included. Aligned to STEM standards."
        />
        <meta
          name="keywords"
          content="school STEM curriculum, robotics program for schools, AI modules for K-12, coding in schools, STEM education India, robotics classes for students"
        />

        {/* Structured Data for Educational Program */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOccupationalProgram",
            "name": "Otomatiks STEM School Program",
            "description": "Turnkey robotics and AI curriculum for K-12 schools with training and student kits.",
            "educationalProgramMode": "InPerson",
            "educationalCredentialAwarded": "STEM Skills Certification",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Otomatiks",
              "url": "https://www.otomatiks.com"
            },
            "hasCourse": [
              {
                "@type": "Course",
                "name": "Robotics Modules"
              },
              {
                "@type": "Course",
                "name": "AI Learning Units"
              },
              {
                "@type": "Course",
                "name": "Coding Fundamentals"
              }
            ],
            "timeToComplete": "P1Y",
            "occupationalCategory": "STEM Education",
            "offers": {
              "@type": "Offer",
              "url": "https://www.otomatiks.com//robotics-coding-school-curriculum"
            }
          })}
        </script>

        {/* Open Graph */}
        <meta property="og:title" content="Robotics & AI School Program | K-12 STEM Curriculum" />
        <meta property="og:description" content="Implement a complete robotics and AI curriculum in your school. Project-based learning, coding, and teacher training for K-12." />
        <meta property="og:image" content="https://www.otomatiks.com/images/stem-/robotics-coding-school-curriculum-og.jpg" />
        <meta property="og:url" content="https://www.otomatiks.com//robotics-coding-school-curriculum" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="STEM School Program | Robotics & AI for K-12" />
        <meta name="twitter:description" content="Otomatiks offers schools a turnkey robotics and AI curriculum for K-12 with training, materials & hands-on STEM projects." />
        <meta name="twitter:image" content="https://www.otomatiks.com/images/stem-school-twitter.jpg" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.otomatiks.com//robotics-coding-school-curriculum" />
      </Head>

      <main>
        <PageTitle 
          pageName="School Program" 
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
