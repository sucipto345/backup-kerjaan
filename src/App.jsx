// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Design from './pages/Design';

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

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevCard = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? socialMedia.length - 1 : prevIndex - 1));
  };

  const nextCard = () => {
    setActiveIndex((prevIndex) => (prevIndex === socialMedia.length - 1 ? 0 : prevIndex + 1));
  };

  const activeMedia = socialMedia[activeIndex];
  const prevMedia = socialMedia[(activeIndex - 1 + socialMedia.length) % socialMedia.length];
  const nextMedia = socialMedia[(activeIndex + 1) % socialMedia.length];

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/design" element={<Design />} />
        </Routes>
        {/* Content Section with Dark Background */}
        <div className="bg-white relative -mt-24 pt-32 pb-20">
          <div className="max-w-6xl mx-auto px-4">
            <p className='text-6xl text-center text-black mb-10' id='About'>About US</p>
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
            <p className='text-black text-center text-6xl mb-24 mt-12'>Contact US</p>
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
      </Layout>
    </Router>
  );
}

export default App;