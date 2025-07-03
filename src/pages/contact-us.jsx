import dynamic from 'next/dynamic';
import Head from 'next/head';

// Dynamic imports with loading states
const PageTitle = dynamic(() => import('@/components/sections/pageTitle'), {
  loading: () => <div className="h-24 bg-gray-100" />
});

const ContactAddress = dynamic(() => import('@/components/sections/contactAddress'), {
  loading: () => <div className="py-12 bg-white" />
});

const GoogleMap = dynamic(() => import('@/components/sections/googleMap'), {
  loading: () => <div className="h-[400px] bg-gray-100" />,
  ssr: false // Disable SSR for Google Maps
});

const BranchesInfo = dynamic(() => import('@/components/sections/BranchesInfo'), {
  loading: () => <div className="py-12 bg-gray-50" />
});

const ContactForm = dynamic(() => import('@/components/sections/contactForm'), {
  loading: () => <div className="py-12 bg-white" />
});

const TopUp = dynamic(() => import('@/components/sections/footers/TopUp'), {
  loading: () => <div className="bg-gray-800 h-20" />
});

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Contact Otomatiks | Robotics, AI & STEM Education Experts</title>
        <meta
          name="description"
          content="Connect with Otomatiks for robotics courses, AI lab setup, STEM education partnerships, franchise opportunities, and general inquiries. We’re here to help!"
        />
        <meta
          name="keywords"
          content="Contact Otomatiks, robotics education support, STEM learning support, AI lab consultancy, school robotics lab contact, robotics courses, franchise, partnership inquiry, Otomatiks address, Otomatiks email, Otomatiks phone number"
        />

        {/* Structured Data for Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Otomatiks",
            "url": "https://www.otomatiks.com",
            "logo": "https://www.otomatiks.com/logo.png",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+91 90432 09448",
                "contactType": "Customer Service",
                "email": "support@otomatiks.in",
                "areaServed": "IN",
                "availableLanguage": ["English", "Tamil"]
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Ponvizha Nagar, Gandhi Nagar",
              "addressLocality": "Vellore",
              "addressRegion": "Tamilnadu",
              "postalCode": "632006",
              "addressCountry": "India"
            },
            "sameAs": [
              "https://facebook.com/otomatiks",
              "https://instagram.com/otomatiks",
              "https://linkedin.com/company/otomatiks"
            ]
          })}
        </script>

        {/* Open Graph */}
        <meta property="og:title" content="Contact Otomatiks | Robotics, AI & STEM Education Support" />
        <meta
          property="og:description"
          content="Have questions about our robotics courses, AI lab setups, or school STEM programs? Contact the Otomatiks team for prompt support and guidance."
        />
        <meta property="og:image" content="https://www.otomatiks.com/images/contact-og.jpg" />
        <meta property="og:url" content="https://www.otomatiks.com/contact-us" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Otomatiks | Reach Our STEM Education Experts" />
        <meta
          name="twitter:description"
          content="Contact our team for robotics course details, AI lab solutions, STEM partnerships, and more. We respond within 24 hours!"
        />
        <meta name="twitter:image" content="https://www.otomatiks.com/images/contact-twitter.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.otomatiks.com/contact-us" />
      </Head>

      <main className="overflow-hidden">
        <PageTitle 
          pageName="Contact Us" 
          breadcrumbCurrent="Contact Us" 
        />
        <ContactAddress />
        <GoogleMap />
        <BranchesInfo />
        <ContactForm />
        <TopUp />
      </main>
    </>
  );
};

export default ContactUs;
