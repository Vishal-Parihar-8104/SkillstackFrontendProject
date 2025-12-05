import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full bg-[#072c61] text-white text-[13px] px-2 sm:px-4 md:px-6 py-2 flex flex-col md:flex-row justify-between items-center font-medium h-auto md:h-14 gap-2 md:gap-0">
      {/* Left Section */}
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-base">
        <div className="flex items-center gap-1">
          <FaMapMarkerAlt className="text-base" />
          <span className="pl-2">SKILLSTACK.CO.IN</span>
        </div>

        <div className="hidden sm:block border-l border-white h-4 opacity-50" />

        <div className="flex items-center gap-1">
          <FaEnvelope className="text-base" />
          <a
            href="mailto:info@skillstack.co.in"
            className="hover:underline transition pl-2"
          >
            info@skillstack.co.in
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-1 sm:gap-2 text-base mt-1 md:mt-0">
        <span className="hidden xs:inline">Follow Us On :</span>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaFacebookF className="text-sm opacity-80" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-400"
        >
          <FaTwitter className="text-sm opacity-80" />
        </a>
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400"
        >
          <FaWhatsapp className="text-sm opacity-80" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-300"
        >
          <FaLinkedinIn className="text-sm opacity-80" />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500"
        >
          <FaYoutube className="text-sm opacity-80" />
        </a>
      </div>
    </div>
  );
};

export default Header;