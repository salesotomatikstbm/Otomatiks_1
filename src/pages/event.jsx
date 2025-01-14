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
          content="Otomatiks events, STEM workshops, robotics training, community engagement programs, educational events, upcoming workshops, Otomatiks initiatives, STEM education events, hands-on robotics workshops, coding bootcamps, AI training sessions, STEM outreach programs, robotics competitions, educational seminars, Otomatiks training programs, STEM for kids, STEM for schools, robotics innovation events, tech education conferences, technology seminars, digital literacy events, Otomatiks live events, interactive STEM learning, school robotics programs, Otomatiks workshops for students, educational tech events, AI learning workshops, creative STEM activities, robotics and AI training, STEM skill-building events, Otomatiks community programs, STEM for underprivileged students, coding for beginners workshops, technology innovation events, STEM career guidance, AI and robotics events, STEM festivals, STEM challenge programs, Otomatiks annual events, educational tech fairs, robotics showcase events, school outreach programs, corporate STEM initiatives, hands-on tech training, Otomatiks community initiatives, skill development workshops, youth robotics events, technology for education, STEM innovation days, Otomatiks social programs, inclusive STEM learning, creative robotics workshops"
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
