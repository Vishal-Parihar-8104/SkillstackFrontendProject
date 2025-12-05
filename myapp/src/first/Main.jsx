import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import bgImage from '../assets/123.jpg'; // Ensure path is correct

function Main() {
  const location = useLocation();

  // Map paths to page titles
  const pageTitles = {
    '/about': 'About Us',
    '/contact': 'Contact Us',
    '/services': 'Our Services',
    '/courses': 'Courses',
    '/courses/webdev':'Advanced Web Techniques',
    '/help':'Contact',
    '/faq':'Asked Question',
    '/course/fullstack':'MERN - Fullstack'
  };

  // Get current page title (fallback if not in map)
  const currentTitle = pageTitles[location.pathname] || 'Page';

  return (
    <div className="relative w-full h-[250px] xs:h-[320px] sm:h-[400px] md:h-[500px]">
      {/* Background image */}
      <img 
        src={bgImage} 
        alt="Background" 
        className="w-full h-full object-cover"
      />

      {/* Overlay with heading and breadcrumb */}
      <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center text-center px-2 sm:px-4 h-full">
        {/* Main heading */}
        <h1 className="text-white text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg mb-2">
          {currentTitle}
        </h1>

        {/* Breadcrumb */}
        <div className="text-white text-xs xs:text-sm sm:text-base space-x-2">
          <Link to="/" className="text-base sm:text-lg">SkillStack</Link>
          <span>&gt;</span>
          <span className="hover:text-blue-500">{currentTitle}</span>
        </div>
      </div>
    </div>
  );
}

export default Main;