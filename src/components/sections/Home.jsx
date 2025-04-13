import React from "react";
import RevealOnScroll from "./RevealOnScroll";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bol bg-gradient-to-r from-blue-500 to-red-600 bg-clip-text text-transparent mb-6 leading-right">
            Hi , I'm Vishal Kumar
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Hey! I’m a full-stack developer who enjoys solving real-world
            problems through code. Whether it’s designing smooth interfaces or
            optimizing backend logic, I love making things that people actually
            enjoy using.
          </p>

          <div className="flex justify-center space-x-4 ">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px__rgba(59,130,246,0.4)]"
            >
              View Project
            </a>
            <a
              href="#contacts"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px__rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
            
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
