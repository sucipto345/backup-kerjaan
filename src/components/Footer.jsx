// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-center text-white">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Powered By Al-Maunah. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;