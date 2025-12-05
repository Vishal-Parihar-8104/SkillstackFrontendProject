import { useState } from "react";
import { Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import CoursesDropdown from "./CoursesDropdown"; // adjust path as needed

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // ✅ Map keywords to routes
  const searchRoutes = {
    home: "/",
    about: "/about",
    faq: "/faq",
    help: "/help",
    login:"/help",
    webdev: "/courses/webdev",
    "web development": "/courses/webdev",
    datasci: "/courses/webdev",
    "data science": "/courses/webdev",
    design: "/courses/webdev",
    java: "/courses/webdev",
    oops: "/courses/webdev",
    dbms: "/courses/webdev",
    course:"/courses/webdev"
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();

    if (query && searchRoutes[query]) {
      navigate(searchRoutes[query]); // ✅ Go to matching route
    } else {
      alert("No matching page found!");
    }

    setSearchQuery(""); // reset input
  };

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center px-2 sm:px-4 md:px-6 py-3 sm:py-4 bg-white shadow h-auto md:h-24 gap-3 md:gap-0">
      {/* Logo */}
      <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-2 md:mb-0">
        SKILLSTACK
      </div>

      {/* Menu Items */}
      <div className="flex flex-wrap justify-center items-center space-x-2 sm:space-x-4 md:space-x-6 text-base sm:text-lg text-gray-900 mb-2 md:mb-0">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/about" className="hover:text-blue-600">About</Link>
        <CoursesDropdown />
        <Link to="/faq" className="hover:text-blue-600">FAQs</Link>
        <Link to="/help" className="hover:text-blue-600">Help</Link>
      </div>

      {/* Search + Sign Up */}
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full md:w-auto">
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="relative w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search For Course . . ."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 pl-4 pr-10 rounded-full border text-sm outline-none focus:ring-2 w-full sm:w-64 md:w-80 lg:w-96 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600"
          >
            <Search size={18} />
          </button>
        </form>

        {/* Sign Up Button */}
        <Link 
          to="/help" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-5 py-2 rounded-full text-sm font-semibold inline-block w-full sm:w-auto text-center"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;