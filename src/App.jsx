export default function Portfolio() {
  const projects = [
    {
      title: "Chronic Kidney Disease Detection Research",
      desc: "Co-authored deep learning ensemble research focused on CKD detection from CT scans using hybrid model architectures and comparative evaluation.",
      tags: ["Deep Learning", "Medical AI", "Python", "Research"],
    },
    {
      title: "Fake News Detection System",
      desc: "Machine learning powered misinformation classification system using NLP pipelines and transformer-based text analysis.",
      tags: ["NLP", "Machine Learning", "Python", "Transformers"],
    },
    {
      title: "Android Utility Applications",
      desc: "Built Android applications with responsive interfaces, local storage, and API integrations focused on performance and usability.",
      tags: ["Android", "Java", "Mobile Development"],
    },
    {
      title: "Web Application Projects",
      desc: "Developed modern responsive web apps with clean UI patterns, dashboards, and dynamic interactions.",
      tags: ["React", "JavaScript", "Web Development"],
    },
  ];

  const skills = [
    "Python",
    "Java",
    "Machine Learning",
    "Android Development",
    "Web Development",
    "Data Analysis",
    "Research Writing",
    "Linux",
    "Git & GitHub",
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        @keyframes pulseGlow {
          0% { box-shadow: 0 0 0px rgba(99,102,241,0.3); }
          50% { box-shadow: 0 0 30px rgba(99,102,241,0.7); }
          100% { box-shadow: 0 0 0px rgba(99,102,241,0.3); }
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .floating {
          animation: float 5s ease-in-out infinite;
        }

        .glow {
          animation: pulseGlow 4s infinite;
        }

        .gradient-text {
          background: linear-gradient(90deg, #818cf8, #22d3ee, #a78bfa);
          background-size: 200% 200%;
          animation: gradientMove 6s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl tracking-wide gradient-text">
            Favour Daniel
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-zinc-300">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 pt-24 pb-20 min-h-[90vh] flex items-center">
        <div className="grid lg:grid-cols-2 gap-14 items-center w-full">
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-zinc-300 mb-6 glow">
              AI • Software Engineering • Research
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Building systems that think, adapt, and solve.
            </h1>

            <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mb-10">
              Computer Science graduate with experience in machine learning,
              Android development, web applications, and technical research.
              I enjoy turning complex ideas into practical digital tools with
              clean architecture and human-centered design.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-7 py-4 rounded-2xl bg-indigo-500 hover:bg-indigo-400 transition font-semibold"
              >
                Explore Projects
              </a>

              <a
                href="#contact"
                className="px-7 py-4 rounded-2xl border border-white/15 hover:bg-white/10 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="w-[320px] h-[320px] rounded-[3rem] bg-gradient-to-br from-indigo-500 via-cyan-400 to-purple-500 p-[2px] floating">
              <div className="w-full h-full rounded-[3rem] bg-zinc-950 flex items-center justify-center text-center p-8 border border-white/10">
                <div>
                  <div className="text-7xl mb-4">⚡</div>
                  <h2 className="text-2xl font-bold mb-2">
                    Builder + Researcher
                  </h2>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    From neural networks to production-ready interfaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-6 gradient-text">About Me</h2>

            <p className="text-zinc-400 leading-relaxed mb-5">
              I hold a B.Tech in Computer Science from the Federal University
              of Technology Owerri with a Second Class Upper division.
            </p>

            <p className="text-zinc-400 leading-relaxed mb-5">
              My interests orbit around machine learning, software engineering,
              intelligent systems, and creating products that balance technical
              depth with usability.
            </p>

            <p className="text-zinc-400 leading-relaxed">
              I have also worked in IT support environments, giving me practical
              experience troubleshooting systems and supporting enterprise
              operations.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Experience</h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-lg">IT Support Intern</h3>
                  <span className="text-sm text-zinc-500">2022</span>
                </div>
                <p className="text-indigo-300 mb-2">Bagco Nigeria</p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Supported technical operations, troubleshooting workflows,
                  system maintenance, and user support tasks in a production
                  environment.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-lg">AI Research Contributor</h3>
                  <span className="text-sm text-zinc-500">Research</span>
                </div>
                <p className="text-indigo-300 mb-2">Medical Imaging Study</p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Worked on deep learning ensemble techniques for chronic kidney
                  disease detection using CT imaging datasets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-black gradient-text mb-4">
            Technical Arsenal
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A toolkit forged from debugging marathons, research experiments,
            caffeinated coding sessions, and enough terminal windows to scare a browser.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:scale-105 transition duration-300 hover:bg-white/10"
            >
              <p className="font-medium">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <h2 className="text-4xl font-black gradient-text mb-4">
              Featured Projects
            </h2>
            <p className="text-zinc-400 max-w-2xl">
              Experiments, systems, and digital constructs stitched together with code and persistence.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="text-3xl">🚀</div>
                <div className="text-zinc-500 group-hover:text-zinc-300 transition">
                  Project
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

              <p className="text-zinc-400 leading-relaxed mb-6">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-2 rounded-full text-sm bg-indigo-500/10 border border-indigo-400/20 text-indigo-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-5xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-br from-indigo-500/20 to-cyan-500/10 border border-white/10 rounded-[2rem] p-10 text-center backdrop-blur-xl">
          <h2 className="text-4xl font-black mb-6 gradient-text">
            Let’s Build Something Interesting
          </h2>

          <p className="text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Whether it’s AI research, software engineering, web platforms, or experimental ideas scribbled on midnight sticky notes, I’m open to collaborations and opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:chibex063@gmail.com"
              className="px-7 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
            >
              Send Email
            </a>

            <a
              href="https://github.com/iconplaq"
              target="_blank"
              className="px-7 py-4 rounded-2xl border border-white/15 hover:bg-white/10 transition"
            >
              GitHub
            </a>

            <a
              href="www.linkedin.com/in/favour-daniel-51753519a"
              target="_blank"
              className="px-7 py-4 rounded-2xl border border-white/15 hover:bg-white/10 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 px-6 text-center text-zinc-500 text-sm">
        <p>
          Designed and built by Favour Daniel • 2026
        </p>
      </footer>
    </div>
  );
}
