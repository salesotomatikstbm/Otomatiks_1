import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { ScrollRestoration, Link } from 'react-router-dom';
import PageTitle from '@/components/sections/pageTitle';
import { client } from '../lib/contentfulClient';
import SectionName from '../../src/components/ui/sectionName';
import Title from '../../src/components/ui/title';
import TopUp from '@/components/sections/footers/TopUp';
import Contact_Workshop from '@/components/sections/workshop/Contact_Workshop';
import PopupWorkshop from '@/components/sections/workshop/PopupWorkshop';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await client.getEntries({ content_type: 'blogPost' });
        setPosts(response.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPosts();
  }, []);

  const handleImageClick = (imageUrl) => {
    setModalImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

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
        <PageTitle pageName="Blog" breadcrumbCurrent="Blog" />
        <div className="text-center mb-10">
          <SectionName>Latest Insights</SectionName>
          <Title size="3.5xl">Exploring the World of Innovation and Education</Title>
        </div>
        <div className="container mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5">
            {posts.length > 0 ? (
              posts.map(post => (
                <div key={post.sys.id} className="rounded-[10px] group shadow-lg bg-white overflow-hidden">
                  {post.fields.image?.fields?.file?.url && (
                    <img
                      src={`https:${post.fields.image.fields.file.url}`}
                      alt={post.fields.title || 'Blog Image'}
                      className="w-[500px] h-[300px] object-cover transition-transform duration-1000 transform group-hover:scale-105 cursor-pointer"
                      onClick={() => handleImageClick(`https:${post.fields.image.fields.file.url}`)}
                    />
                  )}
                  <div className="p-5">
                    <h3>
                      <Link
                        to={`/blog-details/${post.sys.id}`}
                        className="lg:text-[20px] sm:text-[18px] text-xl font-bold lg:leading-[148%] sm:leading-[140%] leading-[120%] group-hover:text-primary text-secondary transition-all duration-500"
                      >
                        {post.fields.title}
                      </Link>
                    </h3>

                    {post.fields.date && (
                      <h3 className="mt-1 text-bold">
                        {new Date(post.fields.date).toLocaleDateString()}
                      </h3>
                    )}
                    {post.fields.description && (
                      <p className="mt-2">
                        {post.fields.description}
                      </p>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p>Loading .......</p>
            )}
          </div>
        </div>

        {/* Modal for Image Pop-Up */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2 text-lg"
              >
                ✖
              </button>
              <img src={modalImage} alt="Full Size" className="max-w-[90vw] max-h-[90vh] object-contain" />
            </div>
          </div>
        )}
            <div className="lg:mt-10 mt-4 mb-10">
{/* <PopupWorkshop /> */}
</div>
      </main>


     {/* <Contact_Workshop /> */}
      <TopUp />
      <ScrollRestoration />
    </>
  );
};

export default Blog;
