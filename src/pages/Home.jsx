import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import designIcon from '../assets/icons/art.png';
import websiteIcon from '../assets/icons/coding.png';
import animationIcon from '../assets/icons/animate.png';
import feedsIcon from '../assets/icons/story.png';

const Home = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const socialMedia = [
    {
      name: 'WhatsApp',
      url: 'https://wa.me/your-number',
      icon: '📞',
      color: 'bg-green-500',
    },
    {
      name: 'Telegram',
      url: 'https://t.me/your-username',
      icon: '✈️',
      color: 'bg-blue-500',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/your-username',
      icon: '📷',
      color: 'bg-pink-500',
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/your-username',
      icon: '📘',
      color: 'bg-blue-700',
    },
  ];
  const services = [
    {
      icon: designIcon,
      label: 'DESIGN GRAFIS',
      description: 'Creative Solutions',
      path: '/design',
    },
    {
      icon: websiteIcon,
      label: 'WEBSITE & UNDANGAN',
      description: 'Development',
      path: '/website',
    },
    {
      icon: animationIcon,
      label: 'ANIMASI',
      description: 'Motion Graphics',
      path: '/animation',
    },
    {
      icon: feedsIcon,
      label: 'FEEDS AND STORIES',
      description: 'Content Creation',
      path: '/feeds',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const prevCard = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + socialMedia.length) % socialMedia.length);
  };

  const nextCard = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % socialMedia.length);
  };

  const activeMedia = socialMedia[activeIndex];
  const prevMedia = socialMedia[(activeIndex - 1 + socialMedia.length) % socialMedia.length];
  const nextMedia = socialMedia[(activeIndex + 1) % socialMedia.length];

  return (
    <div className="relative">
      <div className="flex flex-col justify-center items-center">
        <p className="mt-20 sm:mt-28 md:mt-36 text-white text-3xl sm:text-4xl font-light fadeIn">Welcome to</p>
        <p className="text-white text-4xl sm:text-5xl font-bold fadeIn pt-4">InStayCreative</p>
      </div>

      {/* Services Navigation */}
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10 mt-20 sm:mt-28 md:mt-40">
        {/* Mobile View (2x2 grid) */}
        <div className="block sm:hidden max-w-lg mx-auto">
          <div className="grid grid-cols-2 gap-4">
            {services.map((service, index) => (
              <Link to={service.path} key={index} className="bg-white rounded-xl p-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                    <img src={service.icon} alt={service.label} className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-semibold text-gray-800 text-center">{service.label.split(' ')[0]}</span>
                  <span className="text-xs text-gray-500 mt-1">{service.description}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Tablet & Desktop View (horizontal layout) */}
        <div className="hidden sm:block max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <div className="grid sm:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Link to={service.path} key={index} className="flex flex-col items-center justify-center text-center space-y-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <img src={service.icon} alt={service.label} className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-medium text-gray-800">{service.label}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative -mt-24 pt-32 pb-20">
          <div className="max-w-6xl mx-auto px-4">
            <p className='text-6xl text-center text-black mb-10' id='about'>About US</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-black">
              {/* Content Column 1 */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Welcome to Our Services</h2>
                <p className="text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              {/* Content Column 2 */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Why Choose Us</h3>
                <ul className="space-y-2 text-black">
                  <li>✓ Professional Design Services</li>
                  <li>✓ Custom Website Development</li>
                  <li>✓ Creative Animation Solutions</li>
                  <li>✓ Social Media Content Creation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Card Section */}
          <div className="flex-row items-center justify-center bg-white text-white py-4 ">
            <p className='text-black text-center text-6xl mb-24 mt-12'id='contact'>Contact US</p>
            <div className="flex items-center space-x-4">
              
              {/* Kartu Sosial Media Sebelumnya (Kiri) */}
              <div
                className={` flex justify-center items-center w-3/5 h-48 p-4 rounded-lg text-center opacity-50 transform scale-90 cursor-pointer ${prevMedia.color}`}
                onClick={prevCard}
              >
                <div className="text-2xl">{prevMedia.icon}</div>
                <div>{prevMedia.name}</div>
              </div>

              {/* Kartu Utama yang Aktif */}
              <a
                href={activeMedia.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-row justify-center items-center w-4/5 h-52 p-8 rounded-lg text-center transform scale-105 ${activeMedia.color} transition duration-300 ease-in-out`}
              >
                <div className="text-4xl mb-2">{activeMedia.icon}</div>
                <div className="text-2xl font-bold">{activeMedia.name}</div>
                <p className="mt-2">Click to open</p>
              </a>

              {/* Kartu Sosial Media Selanjutnya (Kanan) */}
              <div
                className={`flex justify-center items-center w-3/5 h-48 p-4 rounded-lg text-center opacity-50 transform scale-90 cursor-pointer ${nextMedia.color}`}
                onClick={nextCard}
              >
                <div className="text-2xl">{nextMedia.icon}</div>
                <div>{nextMedia.name}</div>
              </div>
            </div>
          </div>
        </div>
    </div>
    
  );
};

export default Home;
