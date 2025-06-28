import dynamic from 'next/dynamic';
import Head from 'next/head';

// Dynamically import components with loading states
const PageTitle = dynamic(() => import('@/components/sections/pageTitle'), {
  loading: () => <div className="h-24 bg-gray-100" />
});

const CallToActionSection = dynamic(() => import('@/components/sections/partner/CallToActionSection'), {
  loading: () => <div className="py-12 bg-white" />
});

const UniqueSellingPoints = dynamic(() => import('@/components/sections/partner/UniqueSellingPoints'), {
  loading: () => <div className="py-12 bg-gray-50" />
});

const FranchiseApplicants = dynamic(() => import('@/components/sections/partner/FranchiseApplicants'), {
  loading: () => <div className="py-12 bg-white" />
});

const BranchesMap = dynamic(() => import('@/components/sections/partner/BranchesMap'), {
  loading: () => <div className="py-12 bg-gray-50 h-[400px]" /> // Set approximate height
});

const FAQs = dynamic(() => import('@/components/sections/partner/FAQs'), {
  loading: () => <div className="py-12 bg-white" />
});

const PartTesti = dynamic(() => import('@/components/sections/partner/PartTesti'), {
  loading: () => <div className="py-12 bg-gray-50" />
});

const Contact_Form_Partners = dynamic(() => import('@/components/sections/partner/Contact_Form_Partners'), {
  loading: () => <div className="py-12 bg-white" />
});

const TopUp = dynamic(() => import('@/components/sections/footers/TopUp'), {
  loading: () => <div className="bg-gray-800 h-20" />
});

const Partners = () => {
  return (
    <>
      <Head>
        <title>Robotics Franchise Opportunity | Partner with Otomatiks</title>
        <meta
          name="description"
          content="Start a profitable STEM education franchise with Otomatiks. Low investment, proven business model, and full support to launch your robotics academy."
        />
        <meta
          name="keywords"
          content="robotics franchise, STEM education business, kids coding franchise, edu-tech franchise, partner program"
        />

        {/* Structured Data for Local Business Opportunity */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BusinessOpportunity",
            "name": "Otomatiks Franchise Program",
            "description": "Start your own robotics education center with our turnkey franchise model",
            "url": "https://www.otomatiks.com/franchise",
            "feesAndCommissionsSpecification": "https://www.otomatiks.com/franchise-terms",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Franchise Packages",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Standard Franchise",
                    "description": "Complete setup for one robotics education center"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph */}
        <meta property="og:title" content="Robotics Franchise Opportunity | Otomatiks Partner Program" />
        <meta property="og:description" content="Own a profitable STEM education business with our robotics franchise. Comprehensive training and marketing support included." />
        <meta property="og:image" content="https://www.otomatiks.com/images/franchise-og.jpg" />
        <meta property="og:url" content="https://www.otomatiks.com/franchise" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Start a Robotics Education Franchise with Otomatiks" />
        <meta name="twitter:description" content="Proven business model with 60%+ margins. Perfect for educators and entrepreneurs passionate about STEM." />
        <meta name="twitter:image" content="https://www.otomatiks.com/images/franchise-twitter.jpg" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.otomatiks.com/franchise" />
      </Head>

      <main>
        <PageTitle pageName="Franchise" breadcrumbCurrent="Franchise" />
        <CallToActionSection />
        <UniqueSellingPoints />
        <FranchiseApplicants />
        <BranchesMap />
        <FAQs />
        <PartTesti />
        <Contact_Form_Partners />
        <TopUp />
      </main>
    </>
  );
};

export default Partners;