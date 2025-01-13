import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '@/lib/contentfulClient';
import PageTitle from '@/components/sections/pageTitle';
import SectionName from '@/components/ui/sectionName';
import Title from '@/components/ui/title';
import { Link } from 'react-router-dom';

const BlogDetails1 = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'blogPost',
          'sys.id': id,
        });
        if (response.items.length > 0) {
          setPost(response.items[0]);
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleImageClick = (imageUrl) => {
    setModalImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <main>
      <div className="text-center py-16">
        <SectionName>Blog Post</SectionName>
        <Title size="3.5xl">{post.fields.title}</Title>
      </div>
      <div className="container mx-auto mb-12">
        <div className="rounded-[10px] bg-white shadow-lg p-5">
          {post.fields.image?.fields?.file?.url && (
            <img
              src={`https:${post.fields.image.fields.file.url}`}
              alt={post.fields.title || 'Blog Image'}
              className="w-full h-auto sm:h-[500px] object-cover cursor-pointer"
              onClick={() => handleImageClick(`https:${post.fields.image.fields.file.url}`)}
            />
          )}
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-primary">
              {new Date(post.fields.date).toLocaleDateString()}
            </h3>
            <div className="mt-4">
              <p className="text-lg leading-relaxed text-justify">{post.fields.description}</p>
              <div
                className="mt-6"
                dangerouslySetInnerHTML={{ __html: post.fields.content }}
              />
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link to="/blog" className="text-primary hover:underline">Back to Blog</Link>
        </div>
      </div>

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
    </main>
  );
};

export default BlogDetails1;
