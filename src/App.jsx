import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Design from './pages/Design';
import Website from './pages/Website';
import Feeds from './pages/Feeds';
import Animation from './pages/Animation';
import Login from './pages/Login';
import Daftar from './pages/Daftar';
import Portal from './pages/Portal';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Rute yang menggunakan Layout */}
        <Route element={<Layout scrollToSection={scrollToSection} />}>
          <Route path="/" element={<Home />} />
          <Route path="/design" element={<Design />} />
          <Route path="/website" element={<Website />} />
          <Route path="/feeds" element={<Feeds />} />
          <Route path="/animation" element={<Animation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/daftar" element={<Daftar />} />
        </Route>

        {/* Rute tanpa Layout */}
        <Route path="/portal" element={<Portal />} />
      </Routes>
    </Router>
  );
}

export default App;
