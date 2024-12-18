import React from 'react';
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import PageTitle from '@/components/sections/pageTitle'
import ShopComingSoon from '@/components/sections/shop/ShopComingSoon';

const Shop = () => {
  return (
    <>
      <Helmet>
        <title>Otomatiks Shop | Coming Soon - Exclusive Kids Products</title>
        <meta
          name="description"
          content="Shop at Otomatiks! Explore our exclusive collection of educational tools, learning toys, and kids' products. Coming soon with exciting offers."
        />
        <meta
          name="keywords"
          content="Otomatiks shop, kids products, educational toys, learning tools, kids learning shop, coming soon, shop for children"
        />
        <meta name="author" content="Otomatiks Education" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Otomatiks Shop | Coming Soon" />
        <meta
          property="og:description"
          content="Stay tuned for Otomatiks Shop! Our upcoming store will feature educational toys, kids' learning tools, and exclusive products for children."
        />
        <meta
          property="og:image"
          content="https://www.otomatiks.com/images/coming-soon-shop.jpg"
        />
        <meta property="og:url" content="https://www.otomatiks.com/shop" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Otomatiks Shop | Coming Soon"
        />
        <meta
          name="twitter:description"
          content="Exciting products for kids are coming soon to Otomatiks Shop. Stay tuned for exclusive offers on educational toys and learning resources."
        />
        <meta
          name="twitter:image"
          content="https://www.otomatiks.com/images/coming-soon-shop.jpg"
        />

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.otomatiks.com/shop" />
      </Helmet>

      <main>
        <PageTitle pageName={"Shop"} breadcrumbCurrent={"Shop"} />
        <ShopComingSoon />
      </main>
      <ScrollRestoration />
    </>
  );
};

export default Shop;
