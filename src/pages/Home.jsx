
// src/pages/Home.jsx
import React from 'react';
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
      path: '/design'
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

  return (
    <div className="relative">
      {/* Services Navigation */}
      <div className="max-w-6xl mx-auto px-4 relative z-10">
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

      {/* Content Section with Dark Background */}
      <div className="bg-slate-800 relative -mt-24 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
            {/* Content Column 1 */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Welcome to Our Services</h2>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            {/* Content Column 2 */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Choose Us</h3>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Professional Design Services</li>
                <li>✓ Custom Website Development</li>
                <li>✓ Creative Animation Solutions</li>
                <li>✓ Social Media Content Creation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;