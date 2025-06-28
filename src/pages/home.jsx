import Head from 'next/head';
import dynamic from 'next/dynamic';

// Dynamic imports with loading states
const HeroThree = dynamic(() => import('@/components/sections/heros/HeroThree'), {
  loading: () => <div className="min-h-[60vh] bg-gray-100" />,
  ssr: false
});
const AboutOne = dynamic(() => import('@/components/sections/abouts/aboutOne'), {
  loading: () => <div className="py-12 bg-white" />,
  ssr: false
});
const RoboticCourseSlide = dynamic(() => import('@/components/sections/Home/RoboticCourseSlide'), {
  loading: () => <div className="py-12 bg-gray-50" />,
  ssr: false
});
const SoftwareCourseslider = dynamic(() => import('@/components/sections/Home/SoftwareCourseslider'), {
  loading: () => <div className="py-12 bg-white" />,
  ssr: false
});
const Our_Patrons_Home = dynamic(() => import('@/components/sections/Home/Our_Patrons_Home'), {
  loading: () => <div className="py-12 bg-gray-50" />,
  ssr: false
});
const Brands = dynamic(() => import('@/components/sections/abouts/Brands'), {
  loading: () => <div className="py-12 bg-white" />,
  ssr: false
});
const Gallery = dynamic(() => import('@/components/sections/gallery/gallery'), {
  loading: () => <div className="py-12 bg-gray-50" />,
  ssr: false
});
const HomeTestimonial = dynamic(() => import('@/components/sections/Home/HomeTestimonial'), {
  loading: () => <div className="py-12 bg-white" />,
  ssr: false
});
const TopUp = dynamic(() => import('@/components/sections/footers/TopUp'), {
  loading: () => <div className="bg-gray-800 h-20" />,
  ssr: false
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Otomatiks | Robotics & Coding Courses for Kids | STEM Education</title>
        <meta
          name="description"
          content="Join Otomatiks for the best robotics and coding courses for kids. Hands-on STEM education to build creativity, problem-solving and technical skills in children aged 6-16."
        />
        <meta
          name="keywords"
          content="robotics for kids, coding courses, children programming, STEM education, young engineers, robotics workshops, coding classes, tech education"
        />
        <meta name="author" content="Otomatiks Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.otomatiks.com/" />
        <meta property="og:title" content="Otomatiks | Robotics & Coding Courses for Kids" />
        <meta property="og:description" content="Hands-on STEM education for kids to build creativity and technical skills through robotics and coding courses." />
        <meta property="og:image" content="https://www.otomatiks.com/images/og-image.jpg" />
        <meta property="og:site_name" content="Otomatiks" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.otomatiks.com/" />
        <meta name="twitter:title" content="Otomatiks | Robotics & Coding Courses for Kids" />
        <meta name="twitter:description" content="Hands-on STEM education for kids to build creativity and technical skills through robotics and coding courses." />
        <meta name="twitter:image" content="https://www.otomatiks.com/images/og-image.jpg" />
        <meta name="twitter:creator" content="@otomatiks" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.otomatiks.com/" />
        
        {/* Preload */}
        <link rel="preload" href="/fonts/your-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Otomatiks",
            "description": "Leading provider of robotics and coding education for children aged 6-16",
            "url": "https://www.otomatiks.com",
            "logo": "https://www.otomatiks.com/logo.png",
            "telephone": "+1234567890",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Education St",
              "addressLocality": "City",
              "addressRegion": "State",
              "postalCode": "12345",
              "addressCountry": "Country"
            },
            "sameAs": [
              "https://facebook.com/otomatiks",
              "https://instagram.com/otomatiks",
              "https://linkedin.com/company/otomatiks"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Courses",
              "itemListElement": [
                {
                  "@type": "OfferCatalog",
                  "name": "Robotics Courses",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Course",
                        "name": "Beginner Robotics",
                        "description": "Introduction to robotics for children aged 6-9"
                      }
                    }
                  ]
                }
              ]
            }
          })}
        </script>

        {/* Additional Schema for Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Otomatiks",
            "image": "https://www.otomatiks.com/logo.png",
            "@id": "",
            "url": "https://www.otomatiks.com",
            "telephone": "+1234567890",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Education St",
              "addressLocality": "City",
              "addressRegion": "State",
              "postalCode": "12345",
              "addressCountry": "Country"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 40.7128,
              "longitude": -74.0060
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            }
          })}
        </script>
      </Head>

      <main>
        <HeroThree />
        <AboutOne isAboutpage={false} />
        <RoboticCourseSlide />
        <SoftwareCourseslider />
        <Our_Patrons_Home />
        <Brands />
        <Gallery />
        <HomeTestimonial />
        <TopUp />
      </main>
    </>
  );
}