import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, MapPin } from "lucide-react";

function About() {
  const [highlightText, setHighlightText] = useState('a few Student’s');

  const events = [
    {
      id: 1,
      title: "Bootcamp-Beginners Classes",
      image: "https://www.skillstack.co.in/images/event09.jpg",
      location: "Online",
      link: "/courses/bootcamp",
    },
    {
      id: 2,
      title: "CSS-Beginners Classes",
      image: "https://www.skillstack.co.in/images/event01.jpg",
      location: "Online",
      link: "/courses/css",
    },
    {
      id: 3,
      title: "JavaScript-Beginners Classes",
      image: "https://www.skillstack.co.in/images/event02.jpg",
      location: "Online",
      link: "/courses/javascript",
    },
  ];

  const stats = [
    {
      icon: "https://www.skillstack.co.in/images/icon-1.png",
      value: "325,200",
      label: "Students Enrolled",
    },
    {
      icon: "https://www.skillstack.co.in/images/icon-2.png",
      value: "11,399",
      label: "Top Class Courses",
    },
    {
      icon: "https://www.skillstack.co.in/images/icon-3.png",
      value: "312",
      label: "World Countries",
    },
    {
      icon: "https://www.skillstack.co.in/images/icon-4.png",
      value: "590",
      label: "Award We Received",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setHighlightText('motivated learners');
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* First Section: Hero */}
      <section className="bg-white py-10 px-2 sm:py-14 sm:px-4 md:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Left Text Content */}
        <div className="flex-1 max-w-xl ml-0 md:ml-8 w-full">
          <button className="bg-blue-100 text-blue-700 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Who we are
          </button>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl font-bold leading-tight text-gray-700">
            Web Development Institute
            <br />
            In{' '}
            <span className="relative inline-block group text-blue-600">
              Ghaziabad
              <svg
                className="absolute -bottom-1 left-0 w-full h-2"
                viewBox="0 0 130 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 5 C30 10, 100 0, 130 5"
                  stroke="#FFD700"
                  strokeWidth="4"
                  strokeDasharray="130"
                  strokeDashoffset="0"
                  className="transition-all group-hover:stroke-dashoffset-[130] group-hover:animate-draw"
                />
              </svg>
            </span>
            {' '}
            To Make You Job-Ready
          </h1>

          <p className="text-gray-700 mb-2 sm:mb-3 text-sm sm:text-base md:text-lg">
            Web development programs designed to provide practical, industry-ready skills for your career.
          </p>

          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">
            At our Web Development Institute in Ghaziabad, we focus on delivering hands-on, real-world experience,
            ensuring you gain the expertise needed to thrive in a competitive tech industry.
          </p>

          <Link
            to="/courses"
            className="inline-block bg-blue-600 hover:bg-blue-900 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded shadow-md transition duration-300 text-sm sm:text-base md:text-lg"
          >
            EXPLORE COURSES →
          </Link>
        </div>

        {/* Right Image Content */}
        <div className="grid grid-cols-2 gap-2 sm:gap-4 p-1 sm:p-4 bg-white rounded-xl shadow w-full max-w-xs sm:max-w-lg">
          <img
            src="https://www.skillstack.co.in/images/about_img03.jpg"
            alt="Main student"
            className="w-full min-h-28 xs:min-h-36 sm:min-h-40 md:min-h-80 object-contain rounded-xl shadow-sm bg-white transition-transform duration-300 hover:scale-105"
          />
          <img
            src="https://www.skillstack.co.in/images/about_img04.jpg"
            alt="Student 2"
            className="w-full h-20 xs:h-28 sm:h-32 md:h-60 object-contain rounded-2xl shadow-sm bg-white transition-transform duration-300 hover:scale-105"
          />
          {/* Bottom Right Image */}
          <img
            src="https://www.skillstack.co.in/images/about_img05.jpg"
            alt="Student 4"
            className="w-full h-16 xs:h-20 sm:h-24 md:h-48 object-contain rounded-xl -mt-4 sm:-mt-10 md:-mt-28 shadow-sm bg-white transition-transform duration-300 hover:scale-105 col-span-2"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#f6faff] py-8 sm:py-12 md:py-16 px-1 sm:px-4 text-center">
        <p className="text-blue-600 font-semibold mb-2 bg-blue-100 px-2 sm:px-3 py-1 rounded-full inline-block text-xs sm:text-sm">
          Our Achievements
        </p>
        <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 text-zinc-800">
          Grow Your{" "}
          <span className="text-blue-600 relative inline-block group">
            Skills
            <svg
              className="absolute -bottom-1 left-0 w-full h-2"
              viewBox="0 0 130 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 5 C30 10, 100 0, 130 5"
                stroke="#FFD700"
                strokeWidth="4"
                strokeDasharray="130"
                strokeDashoffset="130"
                className="transition-all duration-500 group-hover:animate-draw"
              />
            </svg>
          </span>
          {" "}To Advance <br className="hidden sm:block" /> Your Career Path
        </h2>

        <div className="mt-6 sm:mt-8 md:mt-12 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-3 sm:p-4 md:p-6 shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={stat.icon}
                alt={stat.label}
                className="w-12 h-10 sm:w-16 sm:h-14 md:w-22 md:h-18 mx-auto mb-2 sm:mb-4 text-blue-600"
              />
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#0a2540]">{stat.value}</p>
              <p className="text-xs sm:text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="bg-[url('https://www.skillstack.co.in/images/cta_bg.jpg')] bg-cover bg-center bg-fixed bg-blue-950 bg-blend-overlay text-white py-10 sm:py-14 md:py-20 h-[220px] xs:h-[300px] sm:h-[350px] md:h-[500px] flex items-center justify-center">
        <div className="max-w-xs xs:max-w-md sm:max-w-3xl md:max-w-5xl mx-auto px-2 sm:px-4 text-center mt-2 sm:mt-4 md:mt-9">
          <h3 className="uppercase tracking-widest text-blue-300 text-xs sm:text-base md:text-lg mb-1 sm:mb-2">
            Are You Ready For This Offer
          </h3>
          <h1 className="text-lg xs:text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-1 sm:mb-2 md:mb-4">
            Special Offer For Very First
          </h1>
          <p className="text-sm xs:text-base sm:text-lg md:text-5xl font-bold mb-2 sm:mb-4 md:mb-6">
            {highlightText}
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 transition px-3 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 mt-1 sm:mt-2 md:mt-3 font-semibold shadow-md rounded text-xs sm:text-base">
            Become a Student →
          </button>
        </div>
      </section>

      {/*forth Sec */}
      <section className="bg-white py-8 sm:py-10 md:py-16 px-1 sm:px-4 md:px-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 sm:mb-8 md:mb-10 gap-2 sm:gap-4">
          <div>
            <button className="bg-blue-100 text-blue-700 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold mb-1 sm:mb-2">
              Featured Events
            </button>
            <h2 className="text-xl xs:text-2xl sm:text-4xl font-bold text-gray-800">
              Upcoming <span className="text-blue-600 underline decoration-yellow-400">Events</span>
            </h2>
          </div>
          <Link
            to="/courses"
            className="border border-blue-600 text-blue-600 px-3 sm:px-4 py-1 sm:py-2 rounded hover:bg-blue-600 hover:text-white transition text-xs sm:text-base"
          >
            OUR ALL EVENTS →
          </Link>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {events.map((event) => (
            <Link
              to={event.link}
              key={event.id}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-32 xs:h-40 sm:h-44 md:h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-blue-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm flex items-center gap-1">
                  <CalendarDays size={16} />
                  Coming Soon
                </div>
              </div>
              <div className="p-2 sm:p-3 md:p-4">
                <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-gray-800">{event.title}</h3>
                <div className="flex items-center text-xs sm:text-sm text-gray-600 mt-1">
                  <MapPin size={14} className="mr-1" />
                  {event.location}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default About;