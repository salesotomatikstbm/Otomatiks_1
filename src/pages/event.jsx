import React from "react";
import PageTitle from "@/components/sections/pageTitle";
import { Helmet } from "react-helmet";
import TopUp from "@/components/sections/footers/TopUp";

const Event = () => {
  return (
    <div>
      <Helmet>
        <title>Events</title>
        <meta
          name="description"
          content="Stay updated with Otomatiks' latest events, workshops, and community engagements. Discover our initiatives in STEM education, robotics, and social impact programs."
        />
        <meta
          name="keywords"
          content="Otomatiks events, STEM workshops, robotics training, community engagement programs, educational events, upcoming workshops, Otomatiks initiatives"
        />
        <meta name="author" content="Otomatiks Team" />
        <meta 
          property="og:title" 
          content="Upcoming Events | Otomatiks - Explore Our Latest Initiatives" 
        />
        <meta 
          property="og:description" 
          content="Join Otomatiks' upcoming events and explore initiatives in STEM, robotics, and community development. Be part of the movement to drive innovation and learning." 
        />
        <meta 
          property="og:image" 
          content="/path/to/og-event-image.jpg" 
        />
        <meta property="og:url" content="https://www.otomatiks.com/event" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta 
          name="twitter:title" 
          content="Upcoming Events | Otomatiks - Explore Our Latest Initiatives" 
        />
        <meta 
          name="twitter:description" 
          content="Discover Otomatiks' latest events and workshops, focusing on education, robotics, and community engagement. Don't miss out on our impactful initiatives." 
        />
        <meta 
          name="twitter:image" 
          content="/path/to/twitter-event-image.jpg" 
        />
        <link rel="canonical" href="https://www.otomatiks.com/event" />
      </Helmet>

      <PageTitle pageName={"Upcoming Events"} breadcrumbCurrent={"Event"} />
      <TopUp />
    </div>
  );
};

export default Event;
