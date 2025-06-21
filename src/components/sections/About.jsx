const frontendSkills = ["React", "TypeScript", "JavaScript", "TailwindCSS"];
const backendSkills = ["Node.js", "MySQL", "PostgreSQL"];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent flex justify-center">
          About Me
        </h2>
        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            Passionate developer with expertise in building scalable web
            applications and creating innovative solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => 
                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                  {tech}
                </span>
                )}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => 
                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                  {tech}
                </span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">🏫 Education </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>M.Sc. in Computer Science</strong> - Jahangirnagar University (2025 - present)
              </li>
              <li>
                <strong> B.Sc. in Computer Science Engineering</strong> - Bangladesh University of Business & Technology (2020-2024)
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
            {/* <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold"> Software Eng. at ABC company (2025 - present)</h4>
                <p> Developed and maintained frontend</p>
              </div>
            </div>
            <div>
                <h4 className="font-semibold">Internship (2023 - 2024)</h4>
                <p> Assisted in building frontend components</p>
              </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
