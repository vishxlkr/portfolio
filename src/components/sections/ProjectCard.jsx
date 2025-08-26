import React from "react";
import { motion } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";
import pic1 from "../../assets/pic2.jpg";
import { projects } from "../../assets/data";

const ProjectCard = ({ project }) => {
   return (
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
         className="bg-white/5 rounded-xl overflow-hidden border border-white/10 group hover:-translate-y-2 transition-all duration-300"
      >
         <div className="overflow-hidden">
            <motion.img
               whileHover={{ scale: 1.05 }}
               transition={{ duration: 0.3 }}
               src={project.image}
               alt={project.title}
               className="w-full h-48 object-cover object-center transition-transform duration-300"
            />
         </div>

         <div className="p-6">
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
               {project.title}
            </h3>

            <p className="text-gray-300 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
               {project.techStack.map((tech, index) => (
                  <span
                     key={index}
                     className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
              hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] transition"
                  >
                     {tech}
                  </span>
               ))}
            </div>

            <div className="flex gap-4">
               <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-blue-600 flex-1 text-center"
               >
                  GitHub
               </a>
               {project.demoLink ? (
                  <a
                     href={project.demoLink}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="border border-blue-500/50 text-blue-500 py-2 px-4 rounded-lg font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 flex-1 text-center"
                  >
                     Website
                  </a>
               ) : (
                  <></>
               )}
            </div>
         </div>
      </motion.div>
   );
};

const Project = () => {
   return (
      <section id="projects" className="min-h-screen py-20">
         <RevealOnScroll>
            <div className="max-w-6xl mx-auto px-4">
               <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                  Featured Projects
               </h2>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project, index) => (
                     <ProjectCard key={index} project={project} />
                  ))}
               </div>
            </div>
         </RevealOnScroll>
      </section>
   );
};

export default Project;
