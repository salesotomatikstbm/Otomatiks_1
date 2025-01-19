import React from "react";
import { Helmet } from "react-helmet";
import { ScrollRestoration } from "react-router-dom";
import PageTitle from "@/components/sections/pageTitle";
import AboutTwo from "@/components/sections/abouts/aboutTwo";
import TopUp from "@/components/sections/footers/TopUp";
import FaqWorkshop from "@/components/sections/workshop/FaqWorkshop";
import PreviousYearWorkshop from "@/components/sections/workshop/PreviousYearWorkshop";
import Contact_School_Management from "@/components/sections/schoolprogram/Contact_School_Management";
import OurWorkshop from "@/components/sections/workshop/WhatWeOffer";

const Workshop = () => {
  return (
    <>
      <Helmet>
        <title>Workshop</title>
        <meta
          name="description"
          content="Participate in our interactive workshops designed to kickstart students' robotics journey through hands-on learning and real-world applications."
        />
        <meta
          name="keywords"
          content="Robotics and AI Workshop for Kids, Weekend AI Coding Workshops, Interactive Robotics Camps, STEM Learning Sessions, Hands-On Robotics Training, Otomatiks workshop, kids learning workshop, educational events, children workshop, interactive learning, creative workshops, upcoming workshops for kids, kids creativity workshop, hands-on learning workshops, educational activities for children, learning through play, STEM workshops for kids, robotics workshops, coding workshops for kids, arts and crafts workshops for kids, educational games for kids, science experiments for kids, kids workshops near me, fun learning activities, workshops for creativity, children's educational events, online workshops for kids, summer workshops for kids, winter workshops for kids, interactive kids workshops, fun and educational workshops, learning activities for kids, school workshops, creative learning for kids, problem-solving workshops, kids development workshops, team-building workshops for kids, teamwork workshops for children, tech workshops for kids, future skills workshops, kids learning camps, kids programming workshops, kids tech activities, coding classes for kids, kids design workshops, workshops for child development, creative arts workshops for kids, robotics for kids, future-ready workshops, math workshops for kids, kids music workshops, theatre workshops for kids, kids storytelling workshops, learning fun for kids, educational workshops for all ages, extracurricular learning for kids, kids engagement workshops, kids self-expression workshops, brain development workshops, mind-challenging workshops, educational events for students, problem-solving for children, kids science clubs, kids engineering workshops"
        />

        <meta name="author" content="Otomatiks Education" />

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

        <link rel="canonical" href="https://www.otomatiks.com/workshop" />
      </Helmet>

      <main>
        <PageTitle pageName={"Workshop"} breadcrumbCurrent={"Workshop"} />
        <AboutTwo />
        <OurWorkshop />
        <PreviousYearWorkshop />
        <FaqWorkshop />
        <Contact_School_Management />
        <TopUp />
      </main>
      <ScrollRestoration />
    </>
  );
};

export default Workshop;
