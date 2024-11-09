import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import SosMed1 from '../assets/project/Social-Media/(social-media)Ninomae_Inanis[Youtube].jpg';
import SosMed2 from '../assets/project/Social-Media/(social-media)Amman-Aria-Ramadhan[Youtube].jpg';
// import Design3 from '../assets/project/Design/Barber_Shop[spanduk].jpg';
// import Design4 from '../assets/project/Design/Barber_Shop1[spanduk].jpg';
// import Design5 from '../assets/project/Design/emote1[art].jpg';
// import Design6 from '../assets/project/Design/cute[art].jpg';
// import Design7 from '../assets/project/Design/haji-dakhli[poster].jpg';
// import Design8 from '../assets/project/Design/halal-couple[art].jpg';
// import Design9 from '../assets/project/Design/peran-farmais-dalam-ipe-ce[poster].jpg';
// import Design10 from '../assets/project/Design/putri-yasmin-nadia[wallpaper].jpg';
// import Design11 from '../assets/project/Design/recuitment-pasudam[poster].jpg';
// import Design12 from '../assets/project/Design/RizzChoco[kemasan].jpg';

const images = [
  { src: SosMed1, hashtag: '#Banner-Youtube', category: 'Feeds & Reels', worker: 'Worker A', client: 'Client X' },
  { src: SosMed2, hashtag: '#Banner-Youtube', category: 'Feeds & Reels', worker: 'Worker B', client: 'Client Y' },
  // { src: Design3, hashtag: '#Barber', category: 'Design', worker: 'Worker C', client: 'Client Z' },
  // { src: Design4, hashtag: '#Barber', category: 'Design', worker: 'Worker C', client: 'Client Z' },
  // { src: Design5, hashtag: '#Art', category: 'Design', worker: 'Worker D', client: 'Client W' },
  // { src: Design6, hashtag: '#Cute', category: 'Design', worker: 'Worker E', client: 'Client V' },
  // { src: Design7, hashtag: '#Poster', category: 'Design', worker: 'Worker F', client: 'Client U' },
  // { src: Design8, hashtag: '#Art', category: 'Design', worker: 'Worker G', client: 'Client U' },
  // { src: Design9, hashtag: '#Poster', category: 'Design', worker: 'Worker H', client: 'Client T' },
  // { src: Design10, hashtag: '#Wallpaper', category: 'Design', worker: 'Worker I', client: 'Anonymous' },
  // { src: Design11, hashtag: '#Poster', category: 'Design', worker: 'Worker A', client: 'Anonymous' },
  // { src: Design12, hashtag: '#Kemasan', category: 'Design', worker: 'Worker A', client: 'Anonymous' }
];

const breakpointColumns = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const Feeds = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => {
    setSelectedImage(null);
    setIsZoomed(false); // Reset zoom state when closing modal
  };

  const toggleZoom = () => setIsZoomed(!isZoomed);

  return (
    <div className="min-h-screen bg-gray-900 text-white pb-24">
      <div className="relative">
        <Link
          to="/"
          className="relative top-4 left-4 text-lg cursor-pointer"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Content Halaman Design */}
      <div className="p-4 mt-16">
        <h1 className="text-2xl font-bold pb-12">Design Page</h1>

        {/* Masonry Grid for Images */}
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex gap-4"
          columnClassName="masonry-column"
        >
          {images.map((image, index) => (
            <div key={index} className="mb-4 cursor-pointer" onClick={() => openModal(image)}>
              <img
                src={image.src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </Masonry>
      </div>

      {/* Modal for Fullscreen View */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 backdrop-blur-sm">
          {isZoomed ? (
            <div className="relative flex justify-center items-center">
              <button className="absolute top-4 right-4 text-white text-xl" onClick={closeModal}>✕</button>
              <img 
                src={selectedImage.src} 
                alt="Fullscreen" 
                className={`rounded-lg object-contain ${selectedImage.src.includes('portrait') ? 'max-h-[75vh]' : 'w-3/4 h-3/4'} `}
              />
            </div>
          ) : (
            <div className="bg-gray-800 p-4 rounded-lg max-w-3xl w-full grid grid-cols-2 gap-4 mx-4 relative">
              {/* Close button */}
              <button className="absolute top-4 right-4 text-white text-xl" onClick={closeModal}>✕</button>
              
              {/* Image on the left */}
              <div className="relative flex justify-center items-center">
                <img 
                  src={selectedImage.src} 
                  alt="Fullscreen" 
                  className="w-full h-full object-cover rounded-lg max-h-[70vh]"
                />
                {/* Zoom Button */}
                <button 
                  onClick={toggleZoom} 
                  className="absolute bottom-4 right-4 bg-white bg-opacity-75 text-gray-800 p-2 rounded-full shadow-lg"
                >
                  Zoom
                </button>
              </div>
              
              {/* Details on the right */}
              <div className="text-gray-300 p-4 space-y-4">
                <h2 className="text-xl font-semibold text-white">Image Details</h2>
                <p><strong>Hashtag:</strong> {selectedImage.hashtag}</p>
                <p><strong>Category:</strong> {selectedImage.category}</p>
                <p><strong>Worker:</strong> {selectedImage.worker}</p>
                <p><strong>Client:</strong> {selectedImage.client}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Feeds;
