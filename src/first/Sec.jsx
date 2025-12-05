import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import CoursesDropdown from './CoursesDropdown'; // adjust path as needed

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow h-24">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">SKILLSTACK</div>

      {/* Menu Items */}
      <div className="flex items-center space-x-6 text-lg text-gray-900">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/about" className="hover:text-blue-600">About</Link>
        <CoursesDropdown />
        <Link to="/faq" className="hover:text-blue-600">FAQs</Link>
        <Link to="/help" className="hover:text-blue-600">Help</Link>
      </div>

      {/* Search + Sign Up */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search For Course . . ."
            className="px-4 py-2 pl-4 pr-10 rounded-full border text-sm outline-none focus:ring-2 w-96` focus:ring-blue-400"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
