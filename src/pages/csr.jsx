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
        <title>CSR Initiatives in STEM Education | Otomatiks Social Impact</title>
        <meta
          name="description"
          content="Otomatiks CSR programs bring robotics & STEM education to underserved communities. Partner with us to empower 10,000+ students annually through technology."
        />
        <meta
          name="keywords"
          content="STEM CSR programs, robotics education initiatives, corporate social responsibility in tech, underserved student empowerment, CSR partnerships"
        />

        {/* Structured Data for Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Otomatiks CSR Initiatives",
            "description": "Providing STEM education to underserved communities through corporate partnerships",
            "url": "https://www.otomatiks.com/csr",
            "funder": {
              "@type": "Organization",
              "name": "Otomatiks"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "India"
            },
            "sameAs": [
              "https://facebook.com/otomatiks",
              "https://linkedin.com/company/otomatiks"
            ]
          })}
        </script>

        {/* Open Graph */}
        <meta property="og:title" content="CSR in STEM Education | Empowering Underserved Students" />
        <meta property="og:description" content="Join Otomatiks in bringing robotics & coding education to 10,000+ underserved students annually through CSR partnerships" />
        <meta property="og:image" content="https://www.otomatiks.com/images/csr-impact-og.jpg" />
        <meta property="og:url" content="https://www.otomatiks.com/csr" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="STEM Education CSR Programs | Otomatiks" />
        <meta name="twitter:description" content="Corporate partnerships bringing robotics labs to rural schools - impacting 10,000+ students yearly" />
        <meta name="twitter:image" content="https://www.otomatiks.com/images/csr-twitter-card.jpg" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.otomatiks.com/csr" />
      </Head>

      <main>
        <PageTitle 
          pageName="CSR Initiatives" 
          breadcrumbCurrent="CSR" 
        />
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