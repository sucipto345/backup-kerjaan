// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ scrollToSection }) => {
  return (
    <div className="min-h-screen bg-slate-700">
      <Navbar scrollToSection={scrollToSection} />
      <main>
        <Outlet /> {/* Tempat komponen halaman dirender */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
