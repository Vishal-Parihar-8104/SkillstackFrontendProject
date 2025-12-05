import React, { useState, useEffect } from "react";
import { BookOpen, Clock, Users } from "lucide-react";

function Fullstack() {
  const [showCurriculum, setShowCurriculum] = useState(false);
  const [progress, setProgress] = useState(0);

  // Random progress simulation
  useEffect(() => {
    const randomProgress = Math.floor(Math.random() * 100); // 0–99%
    setProgress(randomProgress);
  }, []);

  // Curriculum with YouTube video IDs (not full URLs)
  const curriculum = [
    { name: "React JS Full Course", videoId: "Ke90Tje7VS0" },
    { name: "Node.js Crash Course", videoId: "fBNz5xF-Kx4" },
    { name: "MongoDB Tutorial", videoId: "-56x56UppqQ" },
    { name: "Express JS Crash Course", videoId: "L72fhGm1tfE" },
    { name: "MERN Fullstack Project", videoId: "7CqJlxBYj-M" },
  ];

  return (
    <div className="px-6 md:px-20 py-10 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">MERN - Fullstack</h1>
        <p className="text-gray-600 mb-4">
          Become a full-stack web developer with hands-on experience in ReactJS / NextJS,
          Express, Node.js, MongoDB and more. Learn FrontEnd and BackEnd technologies,
          API creation, authentication, databases (DSA) 🚀
        </p>
        <div className="flex items-center gap-6 text-gray-600 text-sm">
          <div className="flex items-center gap-1"><Users size={16}/> 19 Students</div>
          <div className="flex items-center gap-1"><Clock size={16}/> 180 hrs</div>
          <div className="flex items-center gap-1"><BookOpen size={16}/> 5 Lessons</div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Left: Main Info */}
        <div className="md:col-span-2 space-y-8">
          {/* Course Info Tabs */}
          <div className="border-b flex gap-6 text-blue-600 font-semibold">
            <span className="border-b-2 border-blue-600 pb-2 cursor-pointer">Course Info</span>
            <span className="text-gray-500 cursor-pointer">Announcements</span>
          </div>

          {/* Course Info Content */}
          <div className="bg-white rounded-lg shadow p-6 space-y-4">
            <p>
              The <b>MERN - Fullstack Developer</b> course is designed for those who want to
              master both the frontend and backend of web development, with a deep dive into the
              latest technologies such as <b>ReactJS / NextJS, Node.js, Express, MongoDB</b> and more.
            </p>

            <p>
              You’ll learn to create projects, use native modules, manage external packages with
              NPM, and build <b>REST APIs</b>. You’ll also apply this knowledge by building a{" "}
              <b>Blog API project</b>.
            </p>

            <p>
              Next, you’ll explore <b>relational databases</b>, SQL queries, and work on real projects
              like a Family Tracker app. The course ends with <b>Authentication</b>, hashing, cookies,
              JWT, OAuth integration (Google Sign-In), and more.
            </p>

            <p>
              Finally, you’ll be introduced to <b>Web3, blockchain</b>, and decentralized apps (DApps),
              making you capable of building <b>full-stack applications</b>.
            </p>
          </div>

          {/* What Will You Learn */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">What Will You Learn?</h2>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
              <li>✅ Creating projects (website) using ReactJS / NextJS</li>
              <li>✅ Set up and use Node.js and NPM</li>
              <li>✅ Create a Blog API with GET, POST, PUT, DELETE routes</li>
              <li>✅ Authentication with hashing, JWT, OAuth</li>
              <li>✅ Database integration (SQL & MongoDB)</li>
              <li>✅ Web3 & blockchain app basics</li>
            </ul>
          </div>

          {/* 🎬 Embedded Video Section */}
          {showCurriculum && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-700">Course Curriculum (Watch Videos)</h2>
              <div className="space-y-6">
                {curriculum.map((item, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {index + 1}. {item.name}
                    </h3>
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                      <iframe
                        className="w-full h-64 md:h-80 rounded-lg"
                        src={`https://www.youtube.com/embed/${item.videoId}`}
                        title={item.name}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right: Sidebar */}
        <div>
          <div className="bg-white rounded-lg shadow p-6 sticky top-10">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Know More</h2>

            {/* 🎯 Progress Tracker */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Your Course Progress</h3>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-blue-600 h-3 rounded-full transition-all duration-700 ease-in-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-right text-sm font-semibold text-blue-700 mt-1">
                {progress}% Complete
              </p>
            </div>

            {/* Button to toggle curriculum */}
            <button
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              onClick={() => setShowCurriculum(!showCurriculum)}
            >
              {showCurriculum ? "Hide Curriculum" : "Get Curriculum"}
            </button>

            <ul className="mt-6 space-y-2 text-gray-700 text-sm">
              <li><b>Level:</b> Fullstack</li>
              <li><b>Students:</b> 19 Total Enrolled</li>
              <li><b>Duration:</b> 180 hrs</li>
              <li><b>Last Updated:</b> Jan 20, 2025</li>
            </ul>

            <div className="mt-6">
              <h3 className="text-md font-bold mb-2">Requirements</h3>
              <p className="text-sm text-gray-600">
                No prior knowledge required. You just need a computer, internet,
                and curiosity to learn 🚀.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fullstack;

