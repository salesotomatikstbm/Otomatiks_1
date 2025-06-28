import dynamic from 'next/dynamic';
import Head from 'next/head';

// Dynamic imports with loading states
const PageTitle = dynamic(() => import('@/components/sections/pageTitle'), {
  loading: () => <div className="h-24 bg-gray-100" />
});

const ShopComingSoon = dynamic(() => import('@/components/sections/shop/ShopComingSoon'), {
  loading: () => (
    <div className="min-h-[300px] flex items-center justify-center">
      <div className="text-center">
        <div className="h-8 w-3/4 mx-auto bg-gray-200 rounded mb-4 animate-pulse"></div>
        <div className="h-4 w-1/2 mx-auto bg-gray-200 rounded mb-2 animate-pulse"></div>
        <div className="h-4 w-1/3 mx-auto bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  )
});

const TopUp = dynamic(() => import('@/components/sections/footers/TopUp'), {
  loading: () => <div className="bg-gray-800 h-20" />
});

const Shop = () => {
  return (
    <>
      <Head>
        <title>Otomatiks Shop | Educational Robotics Kits & STEM Toys</title>
        <meta
          name="description"
          content="Coming soon! Premium robotics kits, STEM toys, and coding tools for young innovators. Sign up for early access and exclusive offers."
        />
        <meta
          name="keywords"
          content="robotics kits, STEM toys, coding for kids, educational toys, coming soon"
        />

        {/* Structured Data for Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Store",
            "name": "Otomatiks Shop",
            "description": "Educational robotics kits and STEM learning tools for children",
            "url": "https://www.otomatiks.com/shop",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "opens": "Coming Soon",
              "closes": "Stay Tuned"
            },
            "image": "https://www.otomatiks.com/images/shop-preview.jpg"
          })}
        </script>

        {/* Open Graph */}
        <meta property="og:title" content="Otomatiks Shop | STEM Toys Coming Soon" />
        <meta property="og:description" content="Premium educational robotics kits and coding tools for young innovators - launching soon!" />
        <meta property="og:image" content="https://www.otomatiks.com/images/shop-og-image.jpg" />
        <meta property="og:url" content="https://www.otomatiks.com/shop" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Otomatiks STEM Shop Launching Soon" />
        <meta name="twitter:description" content="Be the first to know when our educational robotics kits and coding tools become available!" />
        <meta name="twitter:image" content="https://www.otomatiks.com/images/shop-twitter-preview.jpg" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.otomatiks.com/shop" />

        {/* Preload */}
        <link rel="preload" href="/fonts/your-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </Head>

      <main>
        <PageTitle 
          pageName="Our Shop" 
          breadcrumbCurrent="Coming Soon" 
        />
        <ShopComingSoon />
        <TopUp />
      </main>
    </>
  );
};

export default Shop;