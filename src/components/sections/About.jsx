import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "framer-motion";

export const About = () => {
  const Kelebihan = ["Imajinatif", "Kreatif", "Gigih", "Pantang Menyerah"];
  const Kekurangan = ["Nggak Enakan", "Pendiam"];

  return (
    <section
      id="about"
      className="min-h-screen relative bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 py-28 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] -top-[300px] -left-[300px] bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-spin-slow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-6xl mx-auto backdrop-blur-lg bg-gray-900/50 rounded-2xl border border-white/10 shadow-2xl hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-all"
          >
            {/* Header */}
            <div className="text-center py-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                About Me
                <div className="mt-2 w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full" />
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto px-4">
                Saya saat ini punya keinginan menjadi seorang developer dan sedang
                mendalaminya
              </p>
            </div>

            {/* Strengths & Weaknesses */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-white/5 shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-6 text-blue-400 flex items-center gap-2">
                  <span className="bg-blue-400/10 p-2 rounded-lg">✨</span>
                  Kelebihan
                </h3>
                <div className="flex flex-wrap gap-3">
                  {Kelebihan.map((item, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 text-blue-400 rounded-full border border-blue-400/30 hover:border-blue-400/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-white/5 shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
                  <span className="bg-cyan-400/10 p-2 rounded-lg">🔍</span>
                  Kekurangan
                </h3>
                <div className="flex flex-wrap gap-3">
                  {Kekurangan.map((item, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-400/20 text-cyan-400 rounded-full border border-cyan-400/30 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(59,202,246,0.2)] transition-all"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Education & Experience */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Education */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900/70 p-8 rounded-2xl border border-white/5 shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-6 text-blue-400 flex items-center gap-3">
                  <span className="p-2 bg-blue-400/10 rounded-xl">🎓</span>
                  Education Timeline
                </h3>
                <ul className="space-y-6 relative before:absolute before:left-8 before:h-full before:w-px before:bg-gradient-to-b from-blue-400/20 to-transparent">
                  {[
                    { school: "SDN 005 BANGKO KIRI", years: "2012 - 2018" },
                    { school: "SMPN 1 BANGKO PUSAKO", years: "2018 - 2020" },
                    { school: "SMAN 2 BANGKO PUSAKO", years: "2020 - 2023" },
                    { school: "UIN Suska Riau", years: "2023 - Present" },
                  ].map((edu, index) => (
                    <li 
                      key={index}
                      className="relative pl-14 before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-blue-400 before:rounded-full"
                    >
                      <h4 className="text-lg font-semibold text-white">{edu.school}</h4>
                      <p className="text-blue-300 text-sm mt-1">{edu.years}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Experience */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900/70 p-8 rounded-2xl border border-white/5 shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-3">
                  <span className="p-2 bg-cyan-400/10 rounded-xl">💼</span>
                  Work Experience
                </h3>
                <div className="space-y-8">
                  {[
                    {
                      title: "Frontend Engginer",
                      period: "2024 - Present",
                      responsibilities: [
                        "Membuat Tampilan Untuk Sebuah Web dan Aplikasi"
                      ]
                    },
                    {
                      title: "Web Developer",
                      period: "2025",
                      responsibilities: [
                        "Membuat Web"
                      ]
                    }
                  ].map((exp, index) => (
                    <div 
                      key={index}
                      className="group relative pl-6 before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-cyan-400 before:rounded-full"
                    >
                      <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                      <p className="text-cyan-300 text-sm mb-3">{exp.period}</p>
                      <ul className="space-y-2 text-gray-300">
                        {exp.responsibilities.map((item, idx) => (
                          <li 
                            key={idx}
                            className="flex items-start gap-2 before:content-['▹'] before:text-cyan-400"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </RevealOnScroll>
      </div>
    </section>
  );
};