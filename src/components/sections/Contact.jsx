import React, { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";
import emailjs from "emailjs-com";

const Contact = () => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
   });

   const [toast, setToast] = useState({ message: "", type: "" });

   const handleSubmit = (e) => {
      e.preventDefault();

      emailjs
         .sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_PUBLIC_KEY
         )
         .then(() => {
            showToast("Message sent successfully!", "success");
            setFormData({ name: "", email: "", message: "" });
         })
         .catch(() => {
            showToast("Oops! Something went wrong.", "error");
         });
   };

   const showToast = (message, type) => {
      setToast({ message, type });
      setTimeout(() => setToast({ message: "", type: "" }), 3000); // Auto-dismiss in 3s
   };

   return (
      <section
         id="contacts"
         className="min-h-screen flex items-center justify-center py-20 relative"
      >
         {toast.message && (
            <div
               className={`fixed top-5 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded shadow-lg text-white text-sm transition-all duration-300 z-50 ${
                  toast.type === "success" ? "bg-green-500" : "bg-red-500"
               }`}
            >
               {toast.message}
            </div>
         )}

         <RevealOnScroll>
            <div className="px-4 max-w-xl w-full">
               <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                  Get In Touch
               </h2>
               <form className="space-y-6" onSubmit={handleSubmit}>
                  <input
                     type="text"
                     name="name"
                     required
                     value={formData.name}
                     onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                     }
                     className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-white/70 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                     placeholder="Name..."
                  />
                  <input
                     type="email"
                     name="email"
                     required
                     value={formData.email}
                     onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                     }
                     className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-white/70 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                     placeholder="example@gmail.com"
                  />
                  <textarea
                     name="message"
                     rows={5}
                     required
                     value={formData.message}
                     onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                     }
                     className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-white/70 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                     placeholder="Your Message..."
                  />

                  <button
                     type="submit"
                     className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition-transform duration-150 ease-in-out relative overflow-hidden hover:-translate-y-0.5 hover:scale-95 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] active:scale-90"
                  >
                     Send Message
                  </button>
               </form>
            </div>
         </RevealOnScroll>
      </section>
   );
};

export default Contact;
