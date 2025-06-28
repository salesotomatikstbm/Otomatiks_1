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
        <title>Contact Otomatiks | Robotics & STEM Education Support</title>
        <meta
          name="description"
          content="Get in touch with our STEM education experts. Contact us for robotics courses, school partnerships, and AI lab setup inquiries. Quick responses guaranteed."
        />
        <meta
          name="keywords"
          content="contact robotics education, STEM program inquiry, AI lab setup help, school partnership contact"
        />

        {/* Structured Data for Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Otomatiks",
            "url": "https://www.otomatiks.com",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-XXXXXXXXXX",
              "contactType": "customer service",
              "email": "contact@otomatiks.com",
              "availableLanguage": "English,Hindi"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Education Street",
              "addressLocality": "Bangalore",
              "addressRegion": "Karnataka",
              "postalCode": "560001",
              "addressCountry": "India"
            }
          })}
        </script>

        {/* Open Graph */}
        <meta property="og:title" content="Contact Otomatiks | Robotics & STEM Education Support" />
        <meta property="og:description" content="Reach our education experts for robotics courses, school programs, and AI lab inquiries. We respond within 24 hours." />
        <meta property="og:image" content="https://www.otomatiks.com/images/contact-og.jpg" />
        <meta property="og:url" content="https://www.otomatiks.com/contact-us" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Our STEM Education Team" />
        <meta name="twitter:description" content="Quick responses for robotics course inquiries, school partnerships, and AI lab setups." />
        <meta name="twitter:image" content="https://www.otomatiks.com/images/contact-twitter.jpg" />

        {/* Canonical */}
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