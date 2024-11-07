// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-700">
      <Navbar />
      <main>
        <div className='flex flex-col justify-center items-center'>
          <p className='mt-36 text-white text-4xl font-light fadeIn'>Welcome to</p>
          <p className='text-white text-5xl font-bold fadeIn pt-4'>InStayCreative</p>
        </div>
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;