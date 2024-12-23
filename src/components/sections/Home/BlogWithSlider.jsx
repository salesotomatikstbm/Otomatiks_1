import React, { useEffect, useState } from 'react';
import { ScrollRestoration, Link } from 'react-router-dom';
import { client } from '../../../lib/contentfulClient';
import TopUp from '@/components/sections/footers/TopUp';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import SectionName from '../../../../src/components/ui/sectionName';
import Title from '../../../../src/components/ui/title';
import PopupWorkshop from '../workshop/PopupWorkshop';

const BlogWithSlider = () => {
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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <main>
      <div className="text-center py-16">
          <SectionName>Latest Insights</SectionName>
          <Title size="3.5xl">Exploring the World of Innovation and Education</Title>
        </div>
        {/* Slider Section */}
        <div className="container mx-auto mb-12">
  <Slider {...sliderSettings} className="blog-slider">
    {posts.length > 0 ? (
      posts.map((post) => (
        <div
          key={post.sys.id}
          className="px-4" // Add horizontal padding to create space between cards
        >
          <div className="rounded-[20px] group shadow-lg bg-white overflow-hidden flex flex-col justify-between">
            {post.fields.image?.fields?.file?.url && (
              <img
                src={`https:${post.fields.image.fields.file.url}`}
                alt={post.fields.title || 'Blog Image'}
                className="w-full h-[300px] object-cover transition-transform duration-1000 transform group-hover:scale-105 cursor-pointer"
                onClick={() => handleImageClick(`https:${post.fields.image.fields.file.url}`)}
              />
            )}
            <div className="p-5 flex-grow flex flex-col justify-between h-[300px]">
              {/* Fixed height */}
              <h3>
                <Link
                  to={`/blog-details/${post.sys.id}`}
                  className="lg:text-[20px] sm:text-[18px] text-xl font-bold lg:leading-[148%] sm:leading-[140%] leading-[120%] group-hover:text-primary text-secondary transition-all duration-500"
                >
                  {post.fields.title}
                </Link>
              </h3>
              {post.fields.date && (
                <h2 className="mt-1 text-bold">
                  {new Date(post.fields.date).toLocaleDateString()}
                </h2>
              )}
              {post.fields.description && (
                <p className="mt-2">{post.fields.description}</p>
              )}
            </div>
          </div>
        </div>
      ))
    ) : (
      <p>Loading .......</p>
    )}
  </Slider>
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
 <PopupWorkshop />
</div>
      </main>
      <TopUp />
      <ScrollRestoration />
    </>
  );
};

export default BlogWithSlider;
