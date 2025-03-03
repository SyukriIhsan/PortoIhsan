import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="h-8 w-8 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full animate-spin-slow group-hover:animate-none transition-all"/>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Syukri<span className="font-light">Dev</span>
            </span>
          </a>

          <div
            className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center group"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <div className={`w-6 h-[2px] bg-blue-400 rounded-full transition-all ${menuOpen ? 'rotate-45 translate-y-[1px]' : '-translate-y-1'}`}/>
            <div className={`w-6 h-[2px] bg-purple-400 mt-1 rounded-full transition-all ${menuOpen ? '-rotate-45 -translate-y-[1px]' : 'translate-y-1'}`}/>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            <a
              href="#home"
              className="text-gray-400 hover:text-white px-3 py-2 rounded-lg hover:bg-gray-800/10 hover:scale-105 transition-all duration-300 group"
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-[length:0%_2px] bg-left-bottom bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500">
                Home
              </span>
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-white px-3 py-2 rounded-lg hover:bg-gray-800/10 hover:scale-105 transition-all duration-300 group"
            >
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-[length:0%_2px] bg-left-bottom bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 delay-75">
                About
              </span>
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-white px-3 py-2 rounded-lg hover:bg-gray-800/10 hover:scale-105 transition-all duration-300 group"
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-[length:0%_2px] bg-left-bottom bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 delay-150">
                Projects
              </span>
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white px-3 py-2 rounded-lg hover:bg-gray-800/10 hover:scale-105 transition-all duration-300 group"
            >
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-[length:0%_2px] bg-left-bottom bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 delay-200">
                Contact
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};