import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "framer-motion";

export const Projects = () => {
  const projects = [
    {
      title: "Web Portofolio",
      description: "Web Sebagai Perkenalan",
      tech: ["React", "Tailwind CSS", "Node.js"],
      link: "#"
    },
    
  ];

  return (
    <section
      id="projects"
      className="min-h-screen relative bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 py-28 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute w-[800px] h-[800px] -top-[400px] -left-[400px] bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Project Portfolio
              </span>
              <div className="mt-2 w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full" />
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gray-900/50 backdrop-blur-lg shadow-2xl hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="p-8 relative">
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: techIndex * 0.1 }}
                          className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 text-blue-400 rounded-full border border-blue-400/30 text-sm font-medium hover:border-blue-400/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Project Link */}
                    <div className="flex items-center gap-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
                      >
                        <span className="mr-2">View Project</span>
                        <svg
                          className="w-5 h-5 transition-transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Hover Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400/10 rounded-full blur-xl group-hover:bg-blue-400/20 transition-all" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl group-hover:bg-cyan-400/20 transition-all" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </RevealOnScroll>
      </div>
    </section>
  );
};