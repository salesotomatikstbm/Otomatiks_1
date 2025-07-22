import PopupPartner from '@/components/sections/partner/PopupPartner';
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
        <title>Start a Robotics & STEM Education Franchise | Partner with Otomatiks</title>
        <meta
          name="description"
          content="Launch a profitable robotics and STEM learning franchise with Otomatiks. Low investment, high ROI, full training & marketing support to build your own robotics academy for kids."
        />
        <meta
          name="keywords"
          content="robotics franchise India, STEM education franchise, coding franchise for kids, robotics business partner, edu-tech franchise opportunities, Otomatiks franchise"
        />

        {/* Structured Data for Franchise Opportunity */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Otomatiks Franchise Program",
            "url": "https://www.otomatiks.com/franchise",
            "description": "Turnkey robotics & STEM education franchise model for entrepreneurs and educators. Proven curriculum, complete training, and marketing support.",
            "sameAs": [
              "https://www.facebook.com/otomatiks",
              "https://www.linkedin.com/company/otomatiks"
            ],
            "makesOffer": {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Robotics & STEM Franchise",
                "description": "Full setup, curriculum, teacher training & business support for your own robotics academy."
              }
            }
          })}
        </script>

        {/* Open Graph */}
        <meta property="og:title" content="Launch a Robotics Franchise | STEM Education Partner Program | Otomatiks" />
        <meta
          property="og:description"
          content="Start your own robotics academy with Otomatiks. Proven franchise system, complete support, and scalable STEM learning solutions for kids."
        />
        <meta property="og:image" content="https://www.otomatiks.com/images/franchise-og.jpg" />
        <meta property="og:url" content="https://www.otomatiks.com/franchise" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Start Your Own Robotics & STEM Education Franchise | Otomatiks" />
        <meta
          name="twitter:description"
          content="Low investment, high ROI robotics & coding franchise for kids. Partner with Otomatiks and run your own successful STEM academy."
        />
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
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
          <PopupPartner />
        </div>

      </main>
    </>
  );
};

export default Partners;
