import React from 'react';
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import PageTitle from '@/components/sections/pageTitle'
import ShopComingSoon from '@/components/sections/shop/ShopComingSoon';
import TopUp from '@/components/sections/footers/TopUp';

const Shop = () => {
  return (
    <>
      <Helmet>
        <title>Otomatiks Shop</title>
        <meta
          name="description"
          content="Shop at Otomatiks! Explore our exclusive collection of educational tools, learning toys, and kids' products. Coming soon with exciting offers."
        />
        <meta
          name="keywords"
          content="Otomatiks shop, kids products, educational toys, learning tools, kids learning shop, coming soon, shop for children, children's educational toys, learning resources, educational products, kids learning store, online toy store, toys for kids, kids development tools, learning materials, educational games, creative toys, interactive learning tools, STEM toys, educational fun, children's learning aids, toy store, toys for toddlers, toys for preschoolers, early learning toys, educational activities for kids, innovative toys, educational kits, activity sets for kids, children's books, educational apps, hands-on learning toys, toys for skills development, imaginative play, kids learning games, children's puzzles, kids art supplies, toys for cognitive development, social-emotional learning toys, motor skills toys, educational subscription boxes, creative play kits, learning through play, kids learning gadgets, children's learning toys online, kids educational products, developmental toys, educational toys for school, educational products for parents, kids educational kits, sustainable kids toys, eco-friendly educational toys, child development products, educational gifts for kids, learning toys for all ages, kids study tools, educational shopping experience"
        />

        <meta name="author" content="Otomatiks Education" />

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

        <link rel="canonical" href="https://www.otomatiks.com/shop" />
      </Helmet>

      <main>
        <PageTitle pageName={"Shop"} breadcrumbCurrent={"Shop"} />
        <ShopComingSoon />
        <TopUp />
      </main>
      <ScrollRestoration />
    </>
  );
};

export default Shop;
