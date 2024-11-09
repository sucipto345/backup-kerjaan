import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';

const animate = [
  {
    type: 'video',
    src: '/animasi/sonic-chicken-motion-logo.mp4', // Path sesuai struktur folder Anda
    hashtag: '#VideoProject',
    category: 'Video',
    worker: 'Worker V',
    client: 'Client M'
  },
  // Tambahkan video lain di sini dengan format yang sama
];

const Animation = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const videoRefs = useRef([]);

  const handleMouseEnter = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.volume = 0; // Set volume to 0 for autoplay
      video.play().catch(err => {
        console.log('Autoplay failed:', err);
        video.muted = true; // Fallback untuk autoplay
        video.play();
      });
    }
  };

  const handleMouseLeave = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0; // Reset video ke awal
    }
  };

  const openModal = (item) => {
    setSelectedItem(item);
    // Pause semua video saat modal dibuka
    videoRefs.current.forEach(video => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsZoomed(false);
  };

  const toggleZoom = () => setIsZoomed(!isZoomed);

  return (
    <div className="min-h-screen bg-gray-900 text-white pb-24">
      <div className="relative p-4">
        <Link to="/" className="text-lg hover:text-gray-300 transition-colors">
          ← Back to Home
        </Link>
      </div>

      <main className="p-4 mt-8">
        <h1 className="text-2xl font-bold pb-12">Animate Gallery</h1>

        <Masonry
          breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
          className="flex gap-4"
          columnClassName="masonry-column"
        >
          {animate.map((item, index) => (
            <div
              key={index}
              className="mb-4 cursor-pointer relative group"
              onClick={() => openModal(item)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <video
                ref={el => videoRefs.current[index] = el}
                src={item.src}
                className="w-full h-auto rounded-lg"
                muted
                playsInline
                loop
                preload="metadata"
              />
            </div>
          ))}
        </Masonry>
      </main>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
          {isZoomed ? (
            <div className="relative w-full h-full flex justify-center items-center">
              <button 
                className="absolute top-4 right-4 text-white text-xl hover:text-gray-300"
                onClick={closeModal}
              >
                ✕
              </button>
              <video
                src={selectedItem.src}
                className="max-h-screen w-auto"
                controls
                autoPlay
                muted
                playsInline
              />
            </div>
          ) : (
            <div className="bg-gray-800 rounded-lg max-w-5xl w-full mx-4 relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Video Section */}
                <div className ="relative p-4">
                  <video
                    src={selectedItem.src}
                    className="w-full h-auto rounded-lg"
                    controls
                    autoPlay
                    muted
                    playsInline
                  />
                  <button
                    onClick={toggleZoom}
                    className="absolute bottom-8 right-8 bg-white text-gray-800 px-4 py-2 rounded-lg 
                             hover:bg-gray-100 transition-colors"
                  >
                    Zoom
                  </button>
                </div>

                {/* Details Section */}
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-6">{selectedItem.hashtag}</h2>
                  <div className="space-y-4">
                    <p><strong>Category:</strong> {selectedItem.category}</p>
                    <p><strong>Worker:</strong> {selectedItem.worker}</p>
                    <p><strong>Client:</strong> {selectedItem.client}</p>
                  </div>
                </div>
              </div>
              
              <button 
                className="absolute top-4 right-4 text-white text-xl hover:text-gray-300"
                onClick={closeModal}
              >
                ✕
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Animation;