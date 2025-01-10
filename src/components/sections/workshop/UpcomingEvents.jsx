import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';
import { ScrollRestoration } from 'react-router-dom';
import { client } from '../../../lib/contentfulClient';
import PopupWorkshop from './PopupWorkshop';

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error state

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await client.getEntries({ content_type: 'workshop' });
        setEvents(response.items);
        setLoading(false);
      } catch (error) {
        setError('Error fetching events.');
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleImageClick = (imageUrl) => {
    setModalImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <main className="py-16">
        <div className="text-center ">
          <SectionName>Our Upcoming Workshops</SectionName>
          <Title size="3.5xl">Exciting Learning Opportunities in Robotics Await You</Title>
        </div>

        <div className="container mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5">
            {events.length > 0 ? (
              events.map((event) => (
                <div key={event.sys.id} className="rounded-[10px] group shadow-lg bg-white overflow-hidden">
                  {event.fields.image?.fields?.file?.url && (
                    <img
                      src={`https:${event.fields.image.fields.file.url}`}
                      alt={event.fields.workshopTitle || 'Workshop Image'}
                      className="w-[500px] h-[300px] object-cover transition-transform duration-1000 transform group-hover:scale-105 cursor-pointer"
                      onClick={() => handleImageClick(`https:${event.fields.image.fields.file.url}`)}
                    />
                  )}
                  <div className="p-5">
                    <h3>
                      <Link
                        to={`/contact-us/`}
                        className="lg:text-[28px] sm:text-[26px] text-xl font-bold lg:leading-[148%] sm:leading-[140%] leading-[120%] group-hover:text-primary text-secondary transition-all duration-500"
                      >
                        {event.fields.workshopTitle}
                      </Link>
                    </h3>

                    {event.fields.wrokshopDate && (
                      <h2 className="mt-1 text-bold">
                        {new Date(event.fields.wrokshopDate).toLocaleDateString()}
                      </h2>
                    )}
                    {event.fields.workshopDescription && (
                      <p className="mt-2">{event.fields.workshopDescription}</p>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p>No upcoming workshops available.</p>
            )}
          </div>
        </div>
        <div className="lg:mt-10 mt-4">
  <PopupWorkshop />
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
      </main>

      <ScrollRestoration />
    </>
  );
};

export default UpcomingEvents;
