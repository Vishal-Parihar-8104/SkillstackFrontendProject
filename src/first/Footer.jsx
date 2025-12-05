import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <div>
      <footer className="bg-[#0A2B5C] text-white px-8 py-20 mt-16"> {/* Increased padding */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Section 1: Brand + Description */}
          <div>
            <h2 className="text-3xl font-extrabold text-blue-400 mb-4">SKILLSTACK</h2>
            <p className="text-sm leading-relaxed mb-6">
              Empower your career with hands-on projects and practical knowledge with best instructors in Ghaziabad. Our courses focus on real-world applications, ensuring you are job-ready. Join us and start building your future today!
            </p>
            <p className="font-semibold mb-4 text-white/90">+91 94585 45748</p>
            <div className="flex gap-4 text-lg text-white/80">
              <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
              <FaTwitter className="hover:text-blue-500 cursor-pointer" />
              <FaWhatsapp className="hover:text-green-400 cursor-pointer" />
              <FaLinkedinIn className="hover:text-blue-400 cursor-pointer" />
              <FaYoutube className="hover:text-red-500 cursor-pointer" />
            </div>
          </div>

          {/* Section 2: Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about"  className="hover:text-blue-500">About Us</Link></li>
              <li><Link to="/courses" className="hover:text-blue-500">All Courses</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:text-blue-500">Privacy Policy</Link></li>
              <li><Link to="/refund" className="hover:text-blue-500">Refund Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-500">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Section 3: Courses */}
       <div>
  <h3 className="text-xl font-bold mb-4">Courses</h3>
  <ul className="space-y-2 text-sm">
    <li>
      <Link to="/courses/webdev" className="hover:text-blue-500">
        Web Development
      </Link>
    </li>
    <li>
      <Link to="/courses/webdev" className="hover:text-blue-500">
        Data Science
      </Link>
    </li>
    <li>
      <Link to="/courses/webdev" className="hover:text-blue-500">
        Frontend Development
      </Link>
    </li>
    <li>
      <Link to="/courses/webdev" className="hover:text-blue-500">
        Backend Development
      </Link>
    </li>
    <li>
      <Link to="/courses/webdev" className="hover:text-blue-500">
        Databases
      </Link>
    </li>
    <li>
      <Link to="/courses/webdev" className="hover:text-blue-500">
        OOPS Concept
      </Link>
    </li>
  </ul>
</div>


          {/* Section 4: Working Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Working Hours</h3>
            <div className="text-sm space-y-3">
              <div className="flex justify-between border-b border-white/30 pb-2">
                <span className="font-semibold">Mon - Fri</span>
                <span>6:30 AM - 10:00 AM</span>
              </div>
              <div className="flex justify-between border-b border-white/30 pb-2">
                <span className="font-semibold">Mon - Fri</span>
                <span>2:00 PM - 5:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Sat - Sun</span>
                <span>9:30 AM - 6:30 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
          <p className="text-center md:text-left ml-20">
            © 2025 <a href="#" className="text-blue-300 hover:underline ml-1">SAS Connective Media</a> (All Rights Reserved.)
          </p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link to="/privacy" className="hover:text-blue-500">Privacy Policy</Link>
            <span className="hidden md:inline">·</span>
            <Link to="/terms" className="hover:text-blue-500">Terms & Conditions</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
