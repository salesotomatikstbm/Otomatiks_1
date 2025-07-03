import dynamic from 'next/dynamic';
import Head from 'next/head';

// Dynamic imports with loading states
const PageTitle = dynamic(() => import('@/components/sections/pageTitle'), {
  loading: () => <div className="h-24 bg-gray-100" />
});

const CSRQuotesSection = dynamic(() => import('@/components/sections/csr/CSRQuotesSection'), {
  loading: () => <div className="py-12 bg-white" />
});

const Our_Uniqueness = dynamic(() => import('@/components/sections/schoolprogram/Our_Uniqueness'), {
  loading: () => <div className="py-12 bg-gray-50" />
});

const WhatWeOffer = dynamic(() => import('@/components/sections/csr/WhatWeOffer'), {
  loading: () => <div className="py-12 bg-white" />
});

const PartnershipSection = dynamic(() => import('@/components/sections/csr/PartnershipSection'), {
  loading: () => <div className="py-12 bg-gray-50" />
});

const Contact_Form_Csr = dynamic(() => import('@/components/sections/csr/Contact_Form_Csr'), {
  loading: () => <div className="py-12 bg-white" />
});

const TopUp = dynamic(() => import('@/components/sections/footers/TopUp'), {
  loading: () => <div className="bg-gray-800 h-20" />
});

const Csr = () => {
  return (
    <>
      <Head>
        <title>CSR in STEM Education | Robotics & Coding for Underserved Students | Otomatiks</title>
        <meta
          name="description"
          content="Partner with Otomatiks to drive social impact through STEM CSR initiatives. Bring robotics labs & coding education to 10,000+ underserved students across India every year."
        />
        <meta
          name="keywords"
          content="STEM CSR programs, robotics CSR initiatives, corporate social responsibility education, underserved students STEM, CSR for schools, Otomatiks CSR partnerships, robotics labs CSR"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NGO",
            "name": "Otomatiks CSR Initiatives",
            "description": "Empowering underserved communities with robotics & STEM education through corporate partnerships.",
            "url": "https://www.otomatiks.com/csr",
            "founder": {
              "@type": "Organization",
              "name": "Otomatiks"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "email": "support@otomatiks.in"
            },
            "sameAs": [
              "https://facebook.com/otomatiks",
              "https://linkedin.com/company/otomatiks"
            ]
          })}
        </script>

        {/* Open Graph */}
        <meta property="og:title" content="CSR in STEM Education | Robotics & Coding for Schools | Otomatiks" />
        <meta
          property="og:description"
          content="Join Otomatiks in transforming rural & underserved schools with robotics labs & STEM learning. Partner with us for impactful CSR projects."
        />
        <meta property="og:image" content="https://www.otomatiks.com/images/csr-impact-og.jpg" />
        <meta property="og:url" content="https://www.otomatiks.com/csr" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CSR STEM Programs | Robotics & Coding for Underserved Students | Otomatiks" />
        <meta
          name="twitter:description"
          content="Bring robotics & coding education to 10,000+ underserved students annually through Otomatiks CSR partnerships."
        />
        <meta name="twitter:image" content="https://www.otomatiks.com/images/csr-twitter-card.jpg" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.otomatiks.com/csr" />
      </Head>

      <main>
        <PageTitle pageName="CSR Initiatives" breadcrumbCurrent="CSR" />
        <CSRQuotesSection />
        <Our_Uniqueness />
        <WhatWeOffer />
        <PartnershipSection />
        <Contact_Form_Csr />
        <TopUp />
      </main>
    </>
  );
};

export default Csr;
