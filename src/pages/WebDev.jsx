import React from 'react';
import { BookOpen, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

// First set of bootcamp courses
const courses = [
  {
    id: 1,
    title: 'Web Development Foundation',
    level: 'Beginner',
    levelColor: 'bg-green-100 text-green-600',
    image: 'https://www.skillstack.co.in/images/courses01.jpg',
    hours: '20 hrs',
    students: 30,
    lessons: 1,
    link: '/courses/web-foundation',
  },
  {
    id: 2,
    title: 'Advanced Web Techniques',
    level: 'Advanced',
    levelColor: 'bg-pink-100 text-pink-600',
    image: 'https://www.skillstack.co.in/images/courses03.jpg',
    hours: '60 hrs',
    students: 37,
    lessons: 3,
    link: '/courses/advanced-web',
  },
  {
    id: 3,
    title: 'Interactive Web Development',
    level: 'Intermediate',
    levelColor: 'bg-purple-100 text-purple-600',
    image: 'https://www.skillstack.co.in/images/courses02.jpg',
    hours: '45 hrs',
    students: 23,
    lessons: 1,
    link: '/courses/interactive-web',
  },
  {
    id: 4,
    title: 'Professional Web Mastery',
    level: 'Professional',
    levelColor: 'bg-yellow-100 text-yellow-600',
    image: 'https://www.skillstack.co.in/images/courses04.jpg',
    hours: '90 hrs',
    students: 12,
    lessons: 5,
    link: '/courses/professional-web',
  },
  {
    id: 5,
    title: 'MERN - Fullstack',
    level: 'Fullstack',
    levelColor: 'bg-blue-100 text-blue-600',
    image: 'https://www.skillstack.co.in/images/courses05.jpg',
    hours: '180 hrs',
    students: 19,
    lessons: 7,
    link: '/courses/mern-fullstack',
  },
];

// Second set of courses (with avatar and hover effect)
const coursess = [
  {
    id: 1,
    title: 'ReactJS Expert',
    level: 'Professional',
    levelColor: 'bg-yellow-100 text-yellow-600',
    image: 'https://www.skillstack.co.in/images/courses06.jpg',
    hours: '60 hrs',
    students: 27,
    lessons: 3,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    link: '/courses/react-expert',
  },
  {
    id: 2,
    title: 'Python - Pro',
    level: 'Fullstack',
    levelColor: 'bg-purple-100 text-purple-600',
    image: 'https://www.skillstack.co.in/images/courses09.jpg',
    hours: '120 hrs',
    students: 17,
    lessons: 8,
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    link: '/courses/python-pro',
  },
  {
    id: 3,
    title: 'NodeJS - Server Expert',
    level: 'Backend',
    levelColor: 'bg-green-100 text-green-600',
    image: 'https://www.skillstack.co.in/images/courses06.jpg',
    hours: '60 hrs',
    students: 17,
    lessons: 1,
    avatar: 'https://randomuser.me/api/portraits/women/46.jpg',
    link: '/courses/nodejs-expert',
  },

];

// Reusable course card component
const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-xl shadow p-3 w-[400px] min-h-[380px] relative group transition hover:shadow-lg">
      <div className="relative overflow-hidden rounded-lg mb-3">
        <img
          src={course.image}
          className="rounded-lg w-full h-[200px] object-cover transform transition-transform duration-300 group-hover:scale-105"
          alt={course.title}
        />
        <span className={`absolute top-2 left-2 text-xs font-semibold px-2 py-1 rounded ${course.levelColor}`}>
          {course.level}
        </span>
        {course.avatar && (
          <img
            src={course.avatar}
            alt="Instructor"
            className="absolute bottom-[-15px] right-3 w-10 h-10 rounded-full border-2 border-white shadow-md"
          />
        )}
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
      <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
        <div className="flex items-center gap-1">
          <BookOpen size={14} /> {course.lessons}
        </div>
        <div className="flex items-center gap-1">
          <Clock size={14} /> {course.hours}
        </div>
        <div className="flex items-center gap-1">
          <Users size={14} /> {course.students}
        </div>
      </div>
      <Link
        to={course.link}
        className="text-blue-600 text-lg font-semibold mt-10 inline-block no-underline hover:no-underline pt-5"
      >
        Know More →
      </Link>
    </div>
  );
};

// BootcampCourses section
const BootcampCourses = () => {
  return (
    <>
      {/* Section 1 - Bootcamp courses */}
      <section className="py-16 px-4 md:px-20">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Bootcamp Courses ({courses.length})
        </h2>
        <div className="flex flex-wrap gap-6 justify-start mb-6">
          {courses.slice(0, 3).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <div className="flex flex-wrap gap-6 justify-start">
          {courses.slice(3).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Section 2 - More Courses By SKILLSTACK */}
      <section className="py-16 px-4 md:px-20 bg-gray-50">
        <div className="flex items-center justify-between mb-10 flex-wrap gap-3">
          <div className='ml-14'>
            <div className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-md inline-block mb-2 font-semibold">
              Top Course
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              More Courses By{' '}
              <span className="text-blue-600 underline decoration-yellow-400">SKILLSTACK</span>
            </h2>
          </div>
          <Link
            to="/courses"
            className="bg-blue-600 text-white px-5 py-2 rounded-md mr-14 font-medium hover:bg-blue-700 transition"
          >
            VIEW ALL COURSE →
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {coursess.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </>
  );
};

export default BootcampCourses;
