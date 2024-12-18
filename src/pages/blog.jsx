// src/pages/Blog.jsx
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { ScrollRestoration, Link } from 'react-router-dom';
import PageTitle from '@/components/sections/pageTitle';
import { client } from '../lib/contentfulClient';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await client.getEntries({ content_type: 'blogPost' });
        setPosts(response.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Helmet>
        <title>Blog | Robotics & STEM Education Insights</title>
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
        <PageTitle pageName="Blog" breadcrumbCurrent="Blog" />
        <div className="container mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5">
            {posts.length > 0 ? (
              posts.map(post => (
                <div key={post.sys.id} className="rounded-[10px] group shadow-lg bg-white overflow-hidden">
                  {post.fields.image && (
                    <img 
                      src={`https:${post.fields.image.fields.file.url}`} 
                      alt={post.fields.title} 
                      className="w-full h-auto" 
                    />
                  )}
                  <div className="p-5">
                    <h2>
                      <Link 
                        to={`/blog-details/${post.sys.id}`} 
                        className="lg:text-[28px] sm:text-[26px] text-xl font-bold lg:leading-[148%] sm:leading-[140%] leading-[120%] group-hover:text-secondary-foreground transition-all duration-500"
                      >
                        {post.fields.title}
                      </Link>
                    </h2>
                    {post.fields.description && (
                      <p className="mt-2 text-gray-700">
                        {post.fields.description}
                      </p>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p>No blog posts available.</p>
            )}
          </div>
        </div>
      </main>
      <ScrollRestoration />
    </>
  );
};

export default Blog;
