import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed inset-0 w-full h-screen bg-gradient-to-br from-gray-900 via-blue-900/90 to-gray-900 z-40 
                  flex flex-col items-center justify-center space-y-6 backdrop-blur-xl
                  transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                  ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-8 right-8 group"
        aria-label="Close Menu"
      >
        <div className="relative w-10 h-10 flex items-center justify-center">
          <div className={`absolute w-6 h-[2px] bg-blue-400 transform transition-transform duration-300 
            ${menuOpen ? "rotate-45" : "-rotate-180"}`} />
          <div className={`absolute w-6 h-[2px] bg-purple-400 transform transition-transform duration-300 
            ${menuOpen ? "-rotate-45" : "rotate-180"}`} />
        </div>
      </button>

      {/* Profile Photo */}
      <div className={`relative w-32 h-32 mb-8 rounded-full border-4 border-white/20 overflow-hidden
        transition-transform duration-700 ${menuOpen ? "scale-100" : "scale-0"}`}>
        <img 
          src="/public/images/Syukri.jpg" // Ganti dengan path foto Anda
          alt="Profile"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-400/20 to-purple-400/20" />
      </div>

      {/* Menu Items */}
      <div className="flex flex-col items-center space-y-8">
        {['home', 'about', 'projects', 'contact'].map((item, index) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={() => setMenuOpen(false)}
            className={`text-3xl font-semibold transform transition-all duration-500
              ${menuOpen ? 
                "opacity-100 translate-y-0 delay-100" : 
                "opacity-0 translate-y-8 delay-0"}
              hover:text-blue-400 relative group`}
            style={{transitionDelay: `${index * 100 + 300}ms`}}
          >
            <span className="capitalize">{item}</span>
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400 
              group-hover:w-full transition-all duration-300" />
          </a>
        ))}
      </div>

      {/* Social Media Icons */}
      <div className={`flex space-x-6 mt-12 transition-opacity duration-500
        ${menuOpen ? "opacity-100 delay-700" : "opacity-0"}`}>
        {[/* Tambahkan icon social media Anda */].map((icon, index) => (
          <a
            key={index}
            href="#"
            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center
            hover:bg-blue-400/20 transition-colors duration-300"
          >
            {/* Tambahkan SVG icon di sini */}
          </a>
        ))}
      </div>
    </div>
  );
};