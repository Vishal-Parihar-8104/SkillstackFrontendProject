import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const CoursesDropdown = () => {
  const [showCourses, setShowCourses] = useState(false);
  const timeoutRef = useRef(null);

  const courses = [
    { name: "Web Development", path: "/courses/webdev" },
    { name: "Data Science", path: "/courses/webdev" },
    { name: "Frontend Development", path: "/courses/webdev" },
    { name: "Backend Development", path: "/courses/webdev" },
    { name: "Databases", path: "/courses/webdev" },
    { name: "OOPS Concept", path: "/courses/webdev" },
  ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowCourses(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowCourses(false);
    }, 200); // delay close by 200ms
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dropdown Button */}
      <button className="flex items-center gap-1 hover:text-blue-600 transition">
        Courses <ChevronDown size={14} />
      </button>

      {/* Dropdown List */}
      {showCourses && (
        <div className="absolute top-full left-0 mt-2 bg-white border rounded-lg shadow-lg w-56 z-50">
          {courses.map((course, index) => (
            <Link
              key={index}
              to={course.path}
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
            >
              {course.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CoursesDropdown;
