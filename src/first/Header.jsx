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
    <div className="w-full h-14  bg-[#072c61] text-white text-[13px] px-6 py-[6px] flex justify-between items-center font-medium">
      {/* Left Section */}
      <div className="flex items-center gap-4 text-base">
        <div className="flex items-center gap-1">
          <FaMapMarkerAlt className="text-base" />
          <span className="pl-2">SKILLSTACK.CO.IN</span>
        </div>

        <div className="border-l border-white h-4 opacity-50" />

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
      <div className="flex items-center gap-2 text-base">
        <span>Follow Us On :</span>
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
