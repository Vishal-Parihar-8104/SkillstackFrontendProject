import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../assets/123.jpg'; // Ensure path is correct

function Main() {
  return (
    <div className="relative w-full h-[500px]">
      {/* Background image */}
      <img 
        src={bgImage} 
        alt="Background" 
        className="w-full h-full object-cover"
      />

      {/* Overlay with heading and breadcrumb */}
      <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center text-center px-4 h-[500px] ">
        {/* Main heading */}
        <h1 className="text-white text-4xl font-bold drop-shadow-lg mb-2">
          About Us
        </h1>

        {/* Breadcrumb */}
        <div className="text-white text-sm space-x-2">
          <Link to="/" className="text-lg">SkillStack</Link>
          <span>&gt;</span>
          <Link to="/about"  className='hover:text-blue-500'>About Us </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;

