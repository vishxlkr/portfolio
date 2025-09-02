import { useState } from "react";
import "./App.css";
import Loadingscreen from "./components/Loadingscreen";
import "./index.css";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import ProjectCard from "./components/sections/ProjectCard";
import Project from "./components/sections/Project";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";

function App() {
   const [isLoaded, setIsLoaded] = useState(false);
   const [menuOpen, setMenuOpen] = useState(false);

   return (
      <div>
         {!isLoaded && <Loadingscreen onComplete={() => setIsLoaded(true)} />}
         <div
            className={`min-h-screen transition-opacity duration-700 ${
               isLoaded ? "opacity-100" : "opacity-0"
            } bg-black text-gray-100`}
         >
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Home />
            <ProjectCard />
            <Experience />
            <About />
            <Contact />
            {/* <Project /> */}
         </div>
      </div>
   );
}

export default App;
