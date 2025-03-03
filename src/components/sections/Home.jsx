import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative bg-gradient-to-br from-gray-900 via-blue-900/50 to-gray-900 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute w-[800px] h-[800px] -top-[400px] -left-[400px] bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto h-full flex items-center justify-center relative z-10">
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 px-4 py-28">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl xl:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent leading-tight"
              >
                Hallo, Saya
                <br />
                <span className="text-white">Syukri Ihsan</span>
              </motion.h1>

              <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
                Mahasiswa S1 Teknik Informatika
                <span className="block text-blue-400 font-medium mt-1">
                  UIN Suska Riau
                </span>
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="#projects"
                  className="relative overflow-hidden group bg-gradient-to-br from-blue-500 to-cyan-400 text-white py-3 px-8 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
                >
                  <span className="relative z-10">Lihat Project</span>
                  <div className="absolute inset-0 bg-gradient-to-tl from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="#contact"
                  className="border-2 border-blue-400/50 text-blue-400 py-3 px-8 rounded-full font-medium transition-all duration-300 hover:bg-blue-400/10 hover:border-blue-400/80 hover:text-white"
                >
                  Hubungi Saya
                </motion.a>
              </div>
            </div>

            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative mt-16 lg:mt-0 w-full max-w-[450px] group"
            >
              <div className="relative rounded-[2rem] overflow-hidden border-4 border-white/10 hover:border-white/20 transition-all duration-500 shadow-2xl hover:shadow-[0_0_50px_rgba(59,130,246,0.2)]">
                <img
                  src="/public/images/Syukri.jpg"
                  alt="Syukri Ihsan"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                {/* Floating Elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-cyan-400/20 rounded-full blur-xl animate-float" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-float-delayed" />
              </div>
            </motion.div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-6 h-10 rounded-full border-2 border-blue-400 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-2 h-2 bg-blue-400 rounded-full"
          />
        </div>
      </div>
    </section>
  );
};