import React from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent flex justify-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">
              BLOOD CONNECT
            </h3>
            <p className="text-gray-400 mb-4">
               I've developed a full-stack blood donation management system that connects blood donors with hospitals in need. The platform serves as a critical bridge in the healthcare ecosystem, facilitating timely blood donations where they're needed most.
            </p>
            <div>
              {["React", "TypeScript", "Vite", "Tailwind", "Supabase (PostgreSQL)", "Vercel"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="https://blood-donation-management-system-rakib-hassan-nayems-projects.vercel.app/"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Project ➜{" "}
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">
              Movie Search Engine Web App
            </h3>
            <p className="text-gray-400 mb-4">
              Built a responsive movie search engine us- ing React 19, Vite and TailwindCSS, integrating TMDB API and Appwrite for backend services. Features include real-time search with debouncing trending movies dis- play and search history tracking. Deployed
              on Vercel.
            </p>
            <div>
              {["React", "Vite", "Tailwind", "TMDB API", "Appwrite", "Vercel"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="https://movie-app-rakib-hassan-nayems-projects.vercel.app"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Project ➜{" "}
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">
              Edusity - Modern Educational Platform
            </h3>
            <p className="text-gray-400 mb-4">
              Developed a React.js-based educational platform featuring smooth
              slide animations, an interactive video player, and responsive
              component-based design. Implemented dynamic UI elements like an
              animated campus gallery, sliding testimonials, interactive
              navigation, and a functional mailing system using Web3Forms.
            </p>
            <div>
              {["React.js", "Vite", "CSS Animation", "Vercel"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="https://university-website-rakib-hassan-nayems-projects.vercel.app"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Project ➜{" "}
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">
              Modern Real Estate Website
            </h3>
            <p className="text-gray-400 mb-4">
              Features include a dynamic project carousel, customer testimonials, interactive navigation, smooth animations, and a functional contact form with validation and toast notifications.
            </p>
            <div>
              {["React.js", "Tailwind CSS", "Framer Motion", "React Toastify"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="https://real-estate-website-rakib-hassan-nayems-projects.vercel.app"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Project ➜{" "}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
