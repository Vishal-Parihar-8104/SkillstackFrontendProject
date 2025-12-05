import React from 'react';
import Course from "../pages/WebDev";
import { Link } from 'react-router-dom';
import {
  FaPhoneAlt,
  FaUsers,
  FaTrophy,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaVideo,
  FaFileAlt,
} from 'react-icons/fa';
import studentImg from '../assets/image.png';
import instructorMain from '../assets/sec1.png';
import instructorSmall from '../assets/sec2.png';
//new 
import { FaLaptopCode, FaAtom, FaEnvelopeOpenText, FaServer } from "react-icons/fa";
import blog1 from "../assets/blog1.jpg"
const categories = [
  {
    title: "PWA / Web Bootcamp",
    courses: "12 Courses",
    icon: <FaLaptopCode size={40} className="text-blue-600" />,
  },
  {
    title: "Front-End Development",
    courses: "08 Courses",
    icon: <FaAtom size={40} className="text-blue-600" />,
  },
  {
    title: "SEO / eMail Marketing",
    courses: "04 Courses",
    icon: <FaEnvelopeOpenText size={40} className="text-blue-600" />,
  },
  {
    title: "Back-End Development",
    courses: "11 Courses",
    icon: <FaServer size={40} className="text-blue-600" />,
  },
];
import { FaUser, FaCalendarAlt } from "react-icons/fa";


  const blogPosts = [
    {
      tag: "BOOTCAMP",
      title: "Master PWA Development: Your Ultimate Web Bootcamp",
      author: "SkillStack",
      date: "Jan, 2025",
      image: "https://www.skillstack.co.in/images/blog_standard01.jpg", // replace with your local image path or use external
    },
    {
      tag: "FRONT-END",
      title: "Front-End Development Essentials: Build Stunning UI",
      author: "SkillStack",
      date: "Jan, 2025",
      image: "https://www.skillstack.co.in/images/blog_standard02.jpg",
    },
    {
      tag: "FULLSTACK",
      title: "Full-Stack Development: Master Both Front-End and Backend",
      author: "SkillStack",
      date: "Jan, 2025",
      image: "https://www.skillstack.co.in/images/blog_standard03.jpg",
    },
  ];


function Home() {
  return (
    <>
      {/* Top Hero Section */}
      <div className="w-full bg-[#f9fbff] py-12 px-6 md:px-20 h-[660px]">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 mt-4 ml-6">
          {/* Left Content */}
          <div className="flex-1 space-y-5">
            <span className="text-sm text-blue-600 font-semibold bg-blue-100 px-3 py-1 rounded-md inline-block w-fit">
              100% Satisfaction Guarantee
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Learn{' '}
              <span className="relative inline-block group">
                <span className="text-blue-600 relative z-10">Skills</span>
                <span className="absolute left-0 bottom-[-3px] w-full h-[4px] bg-yellow-400 rounded-full scale-x-100 group-hover:scale-x-0 transition-transform duration-300 origin-right z-0"></span>
                <span className="absolute left-0 bottom-[-3px] w-full h-[4px] bg-yellow-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"></span>
              </span>{' '}
              From
              <br /> Our Top <span className="text-gray-900">Instructors</span>
            </h1>

            <p className="text-gray-600 text-lg p-2">
              Unlock your potential, transform your career, and thrive with expert-led development courses designed for success. Start your journey today!
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8">
           <Link to="/courses/webdev">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                  EXPLORE COURSES →
                </button>
              </Link>
              <div className="flex items-center text-blue-700 font-semibold text-lg gap-2">
                <FaPhoneAlt />
                <div>
                  <p className="text-gray-500 text-sm">Have any Question?</p>
                  945-85-45748
                </div>
              </div>
            </div>
          </div>

          {/* Right Image & Stats */}
          <div className="flex-1 relative">
            <img src={studentImg} alt="Student" className="w-[300px] md:w-[400px] mx-auto" />

            {/* Total Students Box */}
            <div className="absolute top-6 left-0 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2">
              <div className="bg-green-100 text-green-700 p-2 rounded-full">
                <FaUsers />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Students</p>
                <p className="text-lg font-bold">1K+</p>
              </div>
            </div>

            {/* Placements Box */}
            <div className="absolute bottom-6 right-0 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2">
              <div className="bg-purple-100 text-purple-700 p-2 rounded-full">
                <FaTrophy />
              </div>
              <div>
                <p className="text-sm text-gray-600">Placements</p>
                <p className="text-lg font-bold">750+</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Instructor Section */}
      <div id="discover-more" className="w-full bg-white py-16 px-6 md:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 ml-6">
          {/* Instructor Images Section */}
          <div className="flex-1 relative ml-10 md:ml-20">

            {/* Animated Background Circle */}
            <div className="absolute -top-16 -left-10 w-[200px] h-[200px] rounded-full bg-yellow-400 z-0 transition-transform duration-500 ease-in-out hover:-translate-y-2 hover:translate-x-2 opacity-60"></div>

            {/* Main Image */}
            <div className="relative z-10">
              <img
                src={instructorMain}
                alt="Instructor Main"
                className="w-[300px] md:w-[360px] rounded-xl shadow-xl border-[6px] border-white hover:scale-105 cursor-pointer"
              />
            </div>

            {/* Small Overlapping Image */}
            <div className="absolute -left-10 top-28 md:top-36 w-[160px] md:w-[180px] rounded-xl shadow-lg border-[6px] border-white z-20 hover:scale-105 cursor-pointer">
              <img src={instructorSmall} alt="Instructor Small" className="rounded-xl" />
            </div>

            {/* Experience Badge */}
            <div className="absolute -top-5 left-16 bg-blue-600 text-white px-4 py-2 rounded-xl font-bold text-sm z-30 shadow-md text-center">
              18+<br />
              <span className="text-xs font-normal">Years of<br />Experience</span>
            </div>
          </div>

          {/* Instructor Content Section */}
          <div className="flex-1 space-y-6 mr-10 md:mr-20 mt-10 md:mt-0">
            <span className="text-sm text-blue-600 font-semibold bg-blue-100 px-3 py-1 rounded-md inline-block w-fit">
              Get To Know About Us
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
              Discover Top <span className="text-blue-600">Instructor</span>
              <br />
              In <span className="text-blue-600 underline decoration-yellow-400 decoration-4">Ghaziabad</span>
            </h2>

            <p className="text-gray-600 text-lg">
              Learn from top instructors in Ghaziabad! Gain hands-on experience with project-focused courses designed to deliver practical knowledge, build real-world skills, and make you job-ready for your dream career.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex items-center gap-3">
                <FaChalkboardTeacher className="text-2xl text-blue-600" />
                <div>
                  <p className="font-semibold">Experienced</p>
                  <p className="text-sm text-gray-600">Tutors</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaFileAlt className="text-2xl text-green-600" />
                <div>
                  <p className="font-semibold">1500</p>
                  <p className="text-sm text-gray-600">Top Lessons</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaGraduationCap className="text-2xl text-purple-600" />
                <div>
                  <p className="font-semibold">1250</p>
                  <p className="text-sm text-gray-600">Over Students</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaVideo className="text-2xl text-red-500" />
                <div>
                  <p className="font-semibold">1200+</p>
                  <p className="text-sm text-gray-600">Pro Videos</p>
                </div>
              </div>
            </div>

          
<Link to="/courses/webdev">
  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg mt-6 font-semibold shadow-md transition">
    DISCOVER MORE →
  </button>
</Link>

          </div>
        </div>
      </div>
    <section className="bg-[#fafbfd] py-12 px-6 md:px-24 h-[560px]">
  <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-10">
    {/* Left Content */}
    <div className="lg:w-1/2 mt-5">
      <p className="inline-block bg-[#e6f0ff] text-blue-800 px-4 py-1 rounded-md mb-2 text-sm">
        Online courses in Ghaziabad
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 mt-2">
        Browse By{" "}
        <span className="text-blue-600 relative inline-block">
          Categories
          <span className="absolute left-0 -bottom-1 w-full h-1 bg-yellow-300 transform rotate-[-2deg] rounded-full"></span>
        </span>
      </h2>

      <p className="text-gray-700 mb-6 mt-5 font-medium">
        Explore Your Path to Success! Browse our diverse categories — 
        <span className="text-blue-600">
          PWA/Web Bootcamp,  Front-End Development , Back-End Development ,
          SEO/Email Marketing , PHP/Python Development ,
        </span>
        and Full-Stack Development — to find courses that fit your career goals!
      </p>
   <Link to="/courses/webdev">
      <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition mt-7">
        ALL CATEGORIES →
      </button>
      </Link>
    </div>

    {/* Right Content - Category Cards */}
    <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 cursor-pointer">
      {categories.map((cat, index) => (
        <div
          key={index}
          className="bg-[#f4f8fb] hover:bg-white hover:shadow-xl transition duration-300 ease-in-out rounded-xl p-6 flex flex-col items-center text-center"
        >
          <div className="bg-white shadow-md p-4 rounded-full mb-4 hover:bg-blue-200">
            {cat.icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{cat.title}</h3>
          <p className="text-gray-500 text-sm mt-1">{cat.courses}</p>
        </div>
      ))}
    </div>
  </div>
</section>
{/* // new sec */}
 <div className="bg-[#f9fafc] py-16 px-4 sm:px-6 lg:px-20 font-sans">
      <div className="text-center mb-12">
        <p className="text-blue-500 font-medium mb-2">Always Smart To Hear News</p>
        <h2 className="text-3xl font-bold">
          Latest <span className="text-blue-600 underline decoration-yellow-400">News</span> & Blog
        </h2>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Stay ahead with insights! Explore our latest news and expert blogs for trends,
          tips, and updates in development and tech.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 hover:bg-blue-50/10 backdrop-blur-sm"
          >
            <img
              src={post.image}
              alt="Blog"
              className="h-56 w-full object-cover rounded-t-xl"
            />
            <div className="p-5">
              <span className="inline-block bg-blue-100 text-blue-600 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase">
                {post.tag}
              </span>
              <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
              <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <FaUser />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaCalendarAlt />
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    </>
  );
}

export default Home;
