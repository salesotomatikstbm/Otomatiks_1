import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import PageTitle from '@/components/sections/pageTitle'
import CallToActionSection from '@/components/sections/partner/CallToActionSection'
import FranchiseApplicants from '@/components/sections/partner/FranchiseApplicants'
import UniqueSellingPoints from '@/components/sections/partner/UniqueSellingPoints'
import Testimonials from '@/components/sections/partner/Testimonials'
import FAQs from '@/components/sections/partner/FAQs'
import Contact_Form_Partners from '@/components/sections/partner/Contact_Form_Partners'
import Counter from '@/components/sections/partner/Counter'
import BranchesMap from '@/components/sections/partner/BranchesMap'
import TopUp from '@/components/sections/footers/TopUp'
import Testi from '@/components/sections/partner/Testi'
import Brands from '@/components/sections/abouts/Brands'


const Partners = () => {
  return (
    <>
      <Helmet>
        <title>Partner</title>
        <meta
          name="description"
          content="Discover how partnering with us can help you grow your business. Learn about our unique selling points, franchise opportunities, and partner benefits."
        />
        <meta
          name="keywords"
          content="business partnership, franchise opportunities, unique selling points, partner with us, grow your business, become a partner, franchise applicants, partner testimonials"
        />
        <meta name="author" content="Otomatiks Partner Program" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Become a Partner with Us | Grow Your Business Together"
        />
        <meta
          property="og:description"
          content="Join our growing network of partners and explore lucrative opportunities to expand your business. Learn about franchise applicants and benefits."
        />
        <meta property="og:image" content="/path/to/og-image-partners.jpg" />
        <meta property="og:url" content="https://www.otomatiks.com/partners" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Become a Partner with Us | Grow Your Business Together"
        />
        <meta
          name="twitter:description"
          content="Discover the benefits of becoming a partner. Explore franchise opportunities, unique selling points, and testimonials from our successful partners."
        />
        <meta name="twitter:image" content="/path/to/twitter-image-partners.jpg" />
        
        {/* Canonical Link */}
        <link rel="canonical" href="https://www.otomatiks.com/partners" />
      </Helmet>

      <main>
        <PageTitle pageName={"Franchise"} breadcrumbCurrent={"Franchise"} />
        <CallToActionSection />
        <FranchiseApplicants />
        
        <UniqueSellingPoints />
        <Counter />
        <Brands />
        <BranchesMap />
        {/* <Testimonials /> */}
        <FAQs />
        <Testi />
       
        <Contact_Form_Partners />
        <TopUp />
      </main>

      <ScrollRestoration />
    </>
  );
};

export default Partners;
