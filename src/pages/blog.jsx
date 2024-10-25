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
        <title>Blog</title>
        <meta name="description" content="Ascent - Childcare & Kids School React.js and Tailwind CSS Template" />
      </Helmet>
      <main>
        <PageTitle pageName={"Blog"} breadcrumbCurrent={"Blog"} />
        <div className="container mx-auto">
          {/* Use a grid to create a two-row layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7.5">
            {posts.length > 0 ? (
              posts.map(post => (
                <div key={post.sys.id} className=" rounded-[10px] group">
                  {/* Display the image */}
                  {post.fields.image && (
                    <img 
                      src={`https:${post.fields.image.fields.file.url}`} // Ensure the URL is correct
                      alt={post.fields.title} 
                      className="w-full h-auto rounded-t-[10px]" // Adjust styling as needed
                    />
                  )}
                  <div className="pt-7.5 pb-10 lg:px-10 px-5">
                    <h4>
                      <Link to={`/blog-details/${post.sys.id}`} className="lg:text-[28px] sm:text-[26px] text-xl font-bold lg:leading-[148%] sm:leading-[140%] leading-[120%] group-hover:text-secondary-foreground transition-all duration-500">
                        {post.fields.title}
                      </Link>
                    </h4>
                    {/* Display the description */}
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
