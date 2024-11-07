// src/pages/Home.jsx
// src/pages/Home.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import designIcon from '../assets/icons/art.png';
import websiteIcon from '../assets/icons/coding.png';
import animationIcon from '../assets/icons/animate.png';
import feedsIcon from '../assets/icons/story.png';

const Home = () => {
  const services = [
    {
      icon: designIcon,
      label: 'DESIGN GRAFIS',
      path: '/design',
    },
    {
      icon: websiteIcon,
      label: 'WEBSITE & UNDANGAN',
      path: '/website'
    },
    {
      icon: animationIcon,
      label: 'ANIMASI',
      path: '/animation'
    },
    {
      icon: feedsIcon,
      label: 'FEEDS AND STORIES',
      path: '/feeds'
    },
  ];

  const [activeId, setActiveId] = useState(null);

  return (
      
    <div className="relative">
        <div className='flex flex-col justify-center items-center'>
          <p className='mt-36 text-white text-4xl font-light fadeIn'>Welcome to</p>
          <p className='text-white text-5xl font-bold fadeIn pt-4'>InStayCreative</p>
        </div>
      {/* Services Navigation */}
      <div className="max-w-6xl mx-auto px-4 relative z-10 mt-40">
        <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                to={service.path}
                key={index}
                className="flex flex-col items-center justify-center text-center space-y-3 p-6 hover:bg-gray-50 rounded-lg transition-colors duration-200 cursor-pointer"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <img 
                    src={service.icon} 
                    alt={service.label}
                    className="w-6 h-6"
                  />
                </div>
                <span className="font-medium text-gray-700">
                  {service.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;