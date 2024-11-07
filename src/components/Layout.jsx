// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, scrollToSection }) => {
  return (
    <div className="min-h-screen bg-slate-700">
      <Navbar scrollToSection={scrollToSection}/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;