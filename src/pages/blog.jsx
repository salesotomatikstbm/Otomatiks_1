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
          content="Explore the latest updates, tutorials, and insights on robotics, AI education, and STEM learning for kids. Stay ahead in technology trends for innovative learning."
        />
        <meta
          name="keywords"
          content="robotics blog, AI education blog, STEM learning insights, kids robotics tutorials, STEM education trends, educational technology articles, robotics for children"
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
