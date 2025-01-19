import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { ScrollRestoration, Link } from 'react-router-dom';
import TopUp from '@/components/sections/footers/TopUp';
import Blog1 from '@/components/sections/blogs/Blog1';

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog</title>
        <meta
          name="description"
          content="Stay informed with the latest trends, news, and insights in the field of robotics and STEM education through our regularly updated blog."
        />
        <meta
          name="keywords"
          content="STEM Education Trends, Latest in Robotics and AI, Coding for Kids Insights, Success Stories in STEM, AI and Robotics Tutorials, robotics blog, AI education blog, STEM learning insights, kids robotics tutorials, STEM education trends, educational technology articles, robotics for children, AI in education, coding for kids blog, STEM curriculum updates, hands-on robotics projects, STEM blogs for educators, robotics education resources, AI-powered teaching methods, future of STEM education, robotics tutorials for beginners, coding and robotics for schools, innovative STEM learning tools, robotics competitions blog, AI technology for students, kids coding tips, STEM project ideas, school robotics programs, AI learning platforms, classroom robotics integration, STEM challenges for kids, AI-driven education trends, educational robotics updates, robotics kits for kids, engaging STEM activities, tech blogs for educators, AI blogs for schools, robotics programming guides, STEM inspiration blogs, teaching with AI tools, AI blogs for beginners, robotics trends for kids, coding resources for children, STEM education technology news, robotics innovation in schools, STEM teacher blogs, AI robotics for children, educational robotics competitions, AI tutorials for kids, robotics project ideas, latest STEM education innovations, future-ready robotics blogs, coding and AI workshops, STEM career insights for kids, fun robotics activities for kids"
        />

        <meta name="author" content="Otomatiks Team" />
        <meta property="og:title" content="Blog" />
        <meta property="og:description" content="Discover expert articles on robotics and STEM education for kids. Learn how to foster innovative thinking through advanced educational tools and methodologies." />
        <meta property="og:image" content="/path/to/your-og-image.jpg" />
        <meta property="og:url" content="https://www.otomatiks.com/blog" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | Robotics & STEM Education Insights" />
        <meta name="twitter:description" content="Stay informed about robotics and STEM education trends with expert blogs, tutorials, and hands-on project ideas for kids and educators." />
        <meta name="twitter:image" content="/path/to/your-twitter-image.jpg" />
        <link rel="canonical" href="https://www.otomatiks.com/blog" />
      </Helmet>
      <main>
        <Blog1 />
        <TopUp />
        <ScrollRestoration />
      </main>

    </>
  );
};

export default Blog;
