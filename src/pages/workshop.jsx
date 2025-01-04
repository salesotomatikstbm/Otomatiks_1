import React from "react";
import { Helmet } from "react-helmet";
import { ScrollRestoration } from "react-router-dom";
import PageTitle from "@/components/sections/pageTitle";
import AboutTwo from "@/components/sections/abouts/aboutTwo";
import UpcomingEvents from "@/components/sections/workshop/UpcomingEvents";
import TopUp from "@/components/sections/footers/TopUp";
import Contact_Workshop from "@/components/sections/workshop/Contact_Workshop";
import FaqWorkshop from "@/components/sections/workshop/FaqWorkshop";
import WorkshopBenefits from "@/components/sections/workshop/WorkshopBenefits";
import Pricing from "@/components/sections/pricing";
import PreviousYearWorkshop from "@/components/sections/workshop/PreviousYearWorkshop";



const Workshop = () => {
  return (
    <>
      <Helmet>
        <title>Workshop</title>
        <meta
          name="description"
          content="Join our interactive workshops for children at Otomatiks. Explore exciting educational activities and upcoming events focused on creative learning."
        />
        <meta
          name="keywords"
          content="Otomatiks workshop, kids learning workshop, educational events, children workshop, interactive learning, creative workshops, upcoming workshops for kids"
        />
        <meta name="author" content="Otomatiks Education" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Otomatiks Workshop | Educational & Fun Learning Events for Kids" />
        <meta
          property="og:description"
          content="Explore Otomatiks Workshops for children! Our workshops feature fun, educational activities designed to spark creativity and learning in young minds."
        />
        <meta
          property="og:image"
          content="https://www.otomatiks.com/images/workshop.jpg"
        />
        <meta property="og:url" content="https://www.otomatiks.com/workshop" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Otomatiks Workshop | Educational & Fun Learning Events for Kids"
        />
        <meta
          name="twitter:description"
          content="Join Otomatiks Workshops! Exciting educational events for kids focused on creativity and learning. Don't miss out on our upcoming workshops."
        />
        <meta
          name="twitter:image"
          content="https://www.otomatiks.com/images/workshop.jpg"
        />

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.otomatiks.com/workshop" />
      </Helmet>

      <main>
        <PageTitle pageName={"Workshop"} breadcrumbCurrent={"Workshop"} />
        <AboutTwo />
    <Pricing />
        
      <UpcomingEvents />
      <WorkshopBenefits />
      <PreviousYearWorkshop />
      <FaqWorkshop />
      <Contact_Workshop />
      <TopUp />
      </main>
      <ScrollRestoration />
    </>
  );
};

export default Workshop;
