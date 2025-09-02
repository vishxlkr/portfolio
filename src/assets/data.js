// src/assets/data.js
import pic1 from "../assets/pic2.jpg";
import wanderlust from "../assets/wanderlust.png";
import blog from "../assets/blog.png";
import quickchat from "../assets/quickchat.png";
import weather from "../assets/weather.png";
import authentication from "../assets/authentication.png";

export const projects = [
   {
      title: "QuickChat - Real-Time Messaging App",
      description:
         "A full-stack real-time chat application with 1:1 messaging, online user tracking, and profile management. Integrated JWT authentication, Socket.IO for instant communication, and Tailwind CSS for a clean, responsive UI.",
      image: quickchat,
      techStack: ["MERN", "Socket.IO", "JWT", "Tailwind CSS", "MongoDB"],
      githubLink: "https://github.com/vishxlkr/quickchat",
      demoLink: "https://quickchat-1-dr5u.onrender.com/",
   },
   {
      title: "Blog Management Web App",
      description:
         "A modern blogging platform with admin login, blog control, comment moderation, and rich-text editing. Integrated Gemini API for content generation and ImageKit for optimized media uploads.",
      image: blog,
      techStack: ["MERN", "Gemini API", "Tailwind CSS", "Quill", "ImageKit"],
      githubLink: "https://github.com/vishxlkr/BlogApp.git",
      demoLink: "https://blogapp-client-rwrr.onrender.com/",
   },
   {
      title: "Wanderlust – Travel Destination Listing",
      description:
         "A secure travel listing app featuring user authentication and CRUD operations for destinations. Built with Express.js and MongoDB, styled with Bootstrap for responsive UI.",
      image: wanderlust,
      techStack: [
         "HTML",
         "CSS",
         "JavaScript",
         "Bootstrap",
         "Node.js",
         "Express",
         "MongoDB",
      ],
      githubLink: "https://github.com/vishxlkr/Wanderlust",
      demoLink: "https://wanderlust-b09w.onrender.com/listings",
   },
   {
      title: "Weather App - Real-Time Weather Dashboard",
      description:
         "A modern React-based weather app providing real-time weather updates with city search, temperature, humidity, wind speed, and dynamic icons using OpenWeather API.",
      image: weather,
      techStack: ["React", "JS", "CSS3", "Tailwind", "OpenWeather API"],
      githubLink: "https://github.com/vishxlkr/weather-app",
      demoLink: "https://vishxlkr.github.io/weather-app/",
   },
   {
      title: "Auth System with OTP Verification",
      description:
         "Full-stack auth system with signup, login, password reset, and OTP verification. Built with MERN, JWT, and Tailwind CSS, featuring a responsive UI with in-card loading indicators.",
      image: authentication, // add your imported image
      techStack: [
         "MERN",
         "JWT",
         "Nodemailer",
         "React",
         "Tailwind CSS",
         "MongoDB",
      ],
      githubLink: "https://github.com/vishxlkr/Authentication",
      // demoLink: "https://authsystem-client.onrender.com/", // replace with your deployed demo link
   },
];

export const educationData = [
   {
      degree: "Bachelor of Technology in Industrial Design",
      institution: "National Institute of Technology, Rourkela",
      duration: "2022 – Present",
      details: [
         "CGPA: 7.84 (till now)",
         "Relevant Coursework: Data Structures, Algorithms, Operating Systems, Computer Networks, Database Management",
         "Coordinator at Innovision, the annual tech fest of NITR",
      ],
   },
   {
      degree: "Senior Secondary (Class XII) – Science (PCM)",
      institution: "Yogiraj Public School, Kota",
      duration: "2021",
      details: [
         "Percentage: 82.4%",
         "Prepared for JEE Advanced at Resonance, Kota",
      ],
   },
   {
      degree: "Secondary (Class X)",
      institution: "DAV Public School, Kathara",
      duration: "2019",
      details: ["Percentage: 88.4%"],
   },
];

export const experienceData = [
   {
      role: "Full Stack Developer Intern",
      company: "Iota Design & Innovations Lab Pvt. Ltd.",
      duration: "May 2025 – July 2025",
      details: [
         "Built and deployed 'SmartDine', a restaurant management system enabling QR-based ordering across 30+ tables.",
         "Developed the SmartDine Admin Panel for real-time order management using Node.js, React.js, PostgreSQL, and REST APIs.",
         "Enhanced UX by integrating Tailwind CSS and collaborating with designers, achieving a 40% faster onboarding and 25% higher daily active users.",
      ],
   },
];

export const generalSkills = [
   "Data Structures and Algorithms",
   "C++",
   "Debugging",

   "Code Review",

   "Problem Solving",
   "Version Control",
   "Git",
];

export const frontendSkills = [
   "HTML5",
   "CSS",
   "JavaScript",
   "TypeScript",
   "React.js",
   "Bootstrap",
   "Tailwind CSS",
];

export const backendSkills = [
   "Node.js",
   "Express.js",
   "Socket.io",
   "Authentication",
];

export const databaseSkills = ["MongoDB", "PostgreSQL", "Databases"];
