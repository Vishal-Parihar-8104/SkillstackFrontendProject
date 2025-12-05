import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Make sure this is imported at the top
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
      <section className="bg-white py-20 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12 ">
        {/* Left Text Content */}
         
        <div className="flex-1 max-w-xl ml-8">
         
<button className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Who we are
          </button>
          <h1 className="text-4xl md:text-4xl font-bold leading-tight  text-gray-700">
            Web Development Institute<br />In{' '}
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

          <p className="text-gray-700 mb-3">
            Web development programs designed to provide practical, industry-ready skills for your career.
          </p>

          <p className="text-gray-600 mb-6">
            At our Web Development Institute in Ghaziabad, we focus on delivering hands-on, real-world experience,
            ensuring you gain the expertise needed to thrive in a competitive tech industry.
          </p>

        <Link
  to="/courses"
  className="inline-block bg-blue-600 hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded shadow-md transition duration-300"
>
  EXPLORE COURSES →
</Link>
        </div>

        {/* Right Image Content  transition-transform duration-300 hover:scale-105*/}
  
  {/* Top Left Image */}  {/* Right Image Content */}
  <div className="grid grid-cols-2 gap-4 p-4 bg-white rounded-xl shadow">
  <img
    src="https://www.skillstack.co.in/images/about_img03.jpg"
    alt="Main student"
    className="w-full min-h-80 object-contain rounded-xl shadow-sm bg-white transition-transform duration-300 hover:scale-105"
  />

  {/* Top Right Image */}
  <img
    src="https://www.skillstack.co.in/images/about_img04.jpg"
    alt="Student 2"
    className="w-full h-60 object-contain rounded-2xl shadow-sm bg-white transition-transform duration-300 hover:scale-105"
  />


  {/* Bottom Right Image */}
  * <img
    src="https://www.skillstack.co.in/images/about_img05.jpg"
    alt="Student 4"
    className="w-full h-48 object-contain rounded-xl -mt-28 shadow-sm bg-white transition-transform duration-300 hover:scale-105"
  />
</div>   
      </section>

      {/* Stats Section */}
      <section className="bg-[#f6faff] py-16 px-4 text-center">
        <p className="text-blue-600 font-semibold mb-2 bg-blue-100 px-3 py-1 rounded-full inline-block text-sm">
          Our Achievements
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-zinc-800">
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
          {" "}To Advance <br /> Your Career Path
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={stat.icon}
                alt={stat.label}
                className="w-22 h-18 mx-auto mb-4 text-blue-600"
              />
              <p className="text-2xl font-bold text-[#0a2540]">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Special Offer Section */}
     <section
  className="bg-[url('https://www.skillstack.co.in/images/cta_bg.jpg')] bg-cover bg-center bg-fixed bg-blue-950 bg-blend-overlay text-white py-20 h-[500px] justify-center"
>
  <div className="max-w-5xl mx-auto px-4 text-center mt-9">
    <h3 className="uppercase tracking-widest text-blue-300 text-lg mb-2">
      Are You Ready For This Offer
    </h3>
    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
      Special Offer For Very First
    </h1>
    <p className="text-lg md:text-5xl font-bold mb-6">
      a few Student’s
    </p>
    <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 mt-3 font-semibold shadow-md">
      Become a Student →
    </button>
  </div>
</section>
{/*forth Sec */}
 <section className="bg-white py-16 px-4 md:px-20">
      <div className="flex items-center justify-between mb-10">
        <div>
          <button className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-2">
            Featured Events
          </button>
          <h2 className="text-4xl font-bold text-gray-800">
            Upcoming <span className="text-blue-600 underline decoration-yellow-400">Events</span>
          </h2>
        </div>
        <Link
          to="/courses"
          className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition"
        >
          OUR ALL EVENTS →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <CalendarDays size={16} />
                Coming Soon
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
              <div className="flex items-center text-sm text-gray-600 mt-1">
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
