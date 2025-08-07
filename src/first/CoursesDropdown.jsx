import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const CoursesDropdown = () => {
  const [showCourses, setShowCourses] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowCourses(true)}
      onMouseLeave={() => setShowCourses(false)}
    >
      <button className="flex items-center gap-1 hover:text-blue-600">
        Courses <ChevronDown size={14} />
      </button>

      {showCourses && (
        <div className="absolute top-full left-0 mt-1 bg-white border rounded shadow w-48 z-10">
          <Link
            to="/courses/webdev"
            className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600"
          >
            Web Development
          </Link>
          <Link
            to="/courses/webdev"
            className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600"
          >
            Data Science
          </Link>
          <Link
            to="/courses/webdev"
            className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600"
          >
            Frontend Development
          </Link>
          <Link
            to="/courses/webdev"
            className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600"
          >
            Backend Development
          </Link>
          <Link
            to="/courses/webdev"
            className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600"
          >
            Databases
          </Link>
          <Link
            to="/courses/webdev"
            className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600"
          >
            OOPS Concept
          </Link>
        </div>
      )}
    </div>
  );
};

export default CoursesDropdown;
