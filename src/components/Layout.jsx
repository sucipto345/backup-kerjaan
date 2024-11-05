// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-20 pb-12">
        {children}
      </main>
      {/* Footer bisa ditambahkan di sini jika diperlukan */}
    </div>
  );
};

export default Layout;