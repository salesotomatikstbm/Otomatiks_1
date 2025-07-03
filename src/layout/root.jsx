import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderOne from '@/components/sections/headers/headerOne';
import FooterTwo from '@/components/sections/footers/footerTwo';

const RootLayout = () => {
  return (
    <>
 
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute top-0 left-0 bg-primary text-white p-3 z-50"
      >
        Skip to main content
      </a>


      <HeaderOne />

    
      <main id="main-content" role="main">
        <Outlet />
      </main>

    
      <FooterTwo />
    </>
  );
};

export default RootLayout;
