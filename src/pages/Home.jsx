import React, { useState } from "react";
import { Link } from "react-router-dom";
import designIcon from "../assets/icons/art.png";
import websiteIcon from "../assets/icons/coding.png";
import animationIcon from "../assets/icons/animate.png";
import feedsIcon from "../assets/icons/story.png";
import slider1 from "../assets/Slider/slider3.jpg";
import slider2 from "../assets/Slider/slider4.jpg";
import ContactUs from "../assets/icons/messenger.png";
import "./css/SliderAnimation.css";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const Slider = [
    {
      url: "https://wa.me/your-number",
      src: slider1,
    },
    {
      url: "https://t.me/your-username",
      src: slider2,
    },
  ];

  const handlePrev = () => {
    if (isAnimating || Slider.length === 0) return;
    setIsAnimating(true);
    setSlideDirection("slide-right");
    setTimeout(() => {
      setActiveIndex((prev) => (prev === 0 ? Slider.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 300);
  };

  const handleNext = () => {
    if (isAnimating || Slider.length === 0) return;
    setIsAnimating(true);
    setSlideDirection("slide-left");
    setTimeout(() => {
      setActiveIndex((prev) => (prev === Slider.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 300);
  };

  const activeMedia = Slider[activeIndex];

  const services = [
    {
      icon: designIcon,
      label: "DESIGN GRAFIS",
      description: "Creative Solutions",
      path: "/design",
    },
    {
      icon: websiteIcon,
      label: "TEMPLATE",
      description: "TEMPLATE",
      path: "/template",
    },
    {
      icon: animationIcon,
      label: "ANIMASI",
      description: "Motion Graphics",
      path: "/animation",
    },
    {
      icon: feedsIcon,
      label: "FEEDS AND STORIES",
      description: "Content Creation",
      path: "/feeds",
    },
  ];

  const previews = [
    {
      id: 1,
      title: "COMMING SOON 1",
      imgSrc: "path_to_image_1.jpg", // Ganti dengan path gambar yang sesuai
      link: "/content/1", // Ganti dengan path yang sesuai
    },
    {
      id: 2,
      title: "COMMING SOON 2",
      imgSrc: "path_to_image_2.jpg",
      link: "/content/2",
    },
    {
      id: 3,
      title: "COMMING SOON 3",
      imgSrc: "path_to_image_3.jpg",
      link: "/content/3",
    },
  ];
  return (
    <div className="relative z-0">
      <div className="flex flex-col justify-center items-center w-full">
        <p className="text-white text-4xl sm:text-5xl font-bold fadeIn pt-4 mb-12">
          InStayCreative
        </p>

        {/* Slider */}
        <div className="w-full max-w-7xl flex items-center justify-center relative px-8">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            disabled={isAnimating}
            className="absolute left-4 w-14 h-14 flex items-center justify-center bg-white bg-opacity-50 rounded-full hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 focus:outline-none"
          >
            <span className="text-gray-800 text-3xl">&lt;</span>
          </button>

          {/* Active Card (gambar) */}
          <div className="relative w-2/3 md:w-1/2 flex justify-center mx-auto">
            <div
              className={`transform transition-all duration-300 ease-in-out ${slideDirection}`}
            >
              <a
                href={activeMedia.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col justify-center items-center w-full rounded-lg text-center transition-all duration-300 hover:scale-105 ${activeMedia.color}`}
              >
                {/* Menambahkan elemen img untuk menampilkan gambar */}
                <img
                  src={activeMedia.src}
                  alt={activeMedia.name}
                  className="w-full h-full object-cover rounded-lg mb-4"
                />
                <div className="text-2xl font-bold mb-3">
                  {activeMedia.name}
                </div>
              </a>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={isAnimating}
            className="absolute right-4 w-14 h-14 flex items-center justify-center bg-white bg-opacity-50 rounded-full hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 focus:outline-none"
          >
            <span className="text-gray-800 text-3xl">&gt;</span>
          </button>
        </div>
      </div>

      {/* Services Navigation */}
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10 mt-20 sm:mt-28 md:mt-16">
        {/* Mobile View (2x2 grid) */}
        <div className="block sm:hidden max-w-lg mx-auto">
          <div className="grid grid-cols-2 shadow-lg gap-4">
            {services.map((service, index) => (
              <Link
                to={service.path}
                key={index}
                className="bg-white rounded-lg p-4"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                    <img
                      src={service.icon}
                      alt={service.label}
                      className="w-6 h-6"
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-800 text-center">
                    {service.label.split(" ")[0]}
                  </span>
                  <span className="text-xs text-gray-500 mt-1">
                    {service.description}
                  </span>
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
                <Link
                  to={service.path}
                  key={index}
                  className="flex flex-col items-center justify-center text-center space-y-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <img
                      src={service.icon}
                      alt={service.label}
                      className="w-8 h-8"
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-medium text-gray-800">
                      {service.label}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white relative -mt-24 pt-32 pb-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 mt-10 bg-slate-700 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-center mb-6">
            Undangan Website
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            {previews.map((preview) => (
              <div
                key={preview.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Link to={preview.link}>
                  <img
                    src={preview.imgSrc}
                    alt={preview.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{preview.title}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link to="/content">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                Tampilkan Selengkapnya
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-4">
        <p className="text-6xl text-center text-white mb-10" id="about">
          About Us
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-black">
          {/* Content Column 1 */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Welcome to Our Services</h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          {/* Content Column 2 */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white ">
              Why Choose Us
            </h3>
            <ul className="space-y-2 text-white">
              <li>✓ Professional Design Services</li>
              <li>✓ Custom Website Development</li>
              <li>✓ Creative Animation Solutions</li>
              <li>✓ Social Media Content Creation</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Fixed Button */}
      <div className="fixed bottom-10 right-14 z-50">
        <Link to="/contact">
          <button className="w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 focus:outline-none">
            <img src={ContactUs} alt="Contact Us" width={38} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
