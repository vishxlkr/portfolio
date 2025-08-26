import React from "react";
import { motion } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";

const educationData = [
   {
      degree: "B.Tech in Industrial Design",
      institution: "NIT Rourkela",
      duration: "2016 - 2020",
      details: [
         "Specialized in User Interface Design and Development",
         "Relevant Coursework: Data Structures, Algorithms, Web Development",
         "Final Year Project: Smart City Navigation System",
      ],
   },
   // Add more education entries as needed
];

const experienceData = [
   {
      role: "Software Engineer",
      company: "ABC Technologies",
      duration: "2020 - Present",
      details: [
         "Developed and maintained microservices architecture",
         "Led team of 4 developers for front-end development",
         "Improved application performance by 40%",
      ],
   },
   {
      role: "Software Development Intern",
      company: "DEF Startup",
      duration: "2019",
      details: [
         "Built RESTful APIs using Node.js and Express",
         "Implemented responsive UI components using React",
         "Collaborated with design team for UI/UX improvements",
      ],
   },
   // Add more experience entries as needed
];

const ExperienceCard = ({ title, items }) => {
   return (
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
         className="w-full mb-8"
      >
         <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            {title}
         </h2>
         <div className="space-y-4">
            {items.map((item, index) => (
               <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 
            hover:shadow-[0_0_15px_rgba(59,130,246,0.1)] bg-white/5"
               >
                  <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                     <div>
                        <h3 className="text-xl font-bold text-blue-500">
                           {item.role || item.degree}
                        </h3>
                        <p className="text-gray-400">
                           {item.company || item.institution}
                        </p>
                     </div>
                     <span className="text-gray-500 bg-blue-500/10 px-3 py-1 rounded-full text-sm">
                        {item.duration}
                     </span>
                  </div>
                  <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                     {item.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                     ))}
                  </ul>
               </motion.div>
            ))}
         </div>
      </motion.div>
   );
};

const Experience = () => {
   return (
      <section id="experience" className="min-h-screen py-20">
         <RevealOnScroll>
            <div className="max-w-4xl mx-auto px-4">
               <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                  Experience & Education
               </h2>
               <ExperienceCard title="Work Experience" items={experienceData} />
               <ExperienceCard title="Education" items={educationData} />
            </div>
         </RevealOnScroll>
      </section>
   );
};

export default Experience;
