import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '@/components/sections/pageTitle';
import { client } from '@/lib/contentfulClient';
import SectionName from '@/components/ui/sectionName';
import Title from '@/components/ui/title';
import TopUp from '@/components/sections/footers/TopUp';

const Blog1 = () => {
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

  // Function to truncate the description text
  const truncateText = (text, maxLength = 150) => {
    if (text && text.length > maxLength) {
      return `${text.substring(0, maxLength)}...`;
    }
    return text;
  };

  return (
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
                      to={`/blog-details/${post.sys.id}`}  // Pass the post ID here
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
                    <p className="mt-2 text-justify">
                      {truncateText(post.fields.description)}{' '}
                      {post.fields.description.length > 200 && (
                        <Link to={`/blog-details/${post.sys.id}`} className="text-primary hover:underline">
                          Read More
                        </Link>
                      )}
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
      <div className="lg:mt-10 mt-4 mb-10"></div>
    </main>
  );
};

export default Blog1;
