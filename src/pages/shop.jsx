import React from 'react';
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import PageTitle from '@/components/sections/pageTitle'
import ShopComingSoon from '@/components/sections/shop/ShopComingSoon';


const Shop = () => {
  return (
    <>
    <Helmet>
      <title>Shop</title>
      <meta name="description" content="Ascent - Chindcare & Kids School React.js and Tailwind CSS Template" />
    </Helmet>
    <main>
      <PageTitle pageName={"Shop"} breadcrumbCurrent={"Shop"} />
    <ShopComingSoon />
 
    </main>
    <ScrollRestoration/>
  </>
  );
};

export default Shop;
