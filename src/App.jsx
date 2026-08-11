import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";



function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      <Navbar />

      <main>
        <section className="relative isolate overflow-hidden bg-slate-950 text-white">

          {/* Background glow */}
          <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl" />

          <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-purple-600/30 blur-3xl" />

          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

          <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-16 px-6 py-20 md:grid-cols-2">

            {/* Left side */}
            <div className="animate-fade-up">

              {/* Small badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400"></span>

                Available for opportunities
              </div>

              <p className="mb-4 text-lg font-medium text-blue-400">
                Hello, I'm
              </p>

              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                Likhitha U S
              </h1>

              <h2 className="mt-5 text-2xl font-semibold text-gray-200 sm:text-3xl">
                Software Developer
              </h2>

              <p className="gradient-text mt-3 text-xl font-semibold sm:text-2xl">
                Flutter & React Developer
              </p>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
                I have 1+ year of professional experience developing
                cross-platform applications using Flutter, with a strong
                focus on Android application development. I also work with
                React.js, JavaScript, and full-stack technologies to build
                modern, responsive, and user-friendly applications.
              </p>

              {/* Buttons */}
              <div className="mt-9 flex flex-wrap gap-4">

                <a
                  href="#projects"
                  className="group rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/25 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/40"
                >
                  View Projects
                  <span className="ml-2 transition group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/20 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/20"
                >
                  Download Resume
                </a>

              </div>

              {/* Technologies */}
              <div className="mt-10 flex flex-wrap gap-3 text-sm text-gray-400">

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  Flutter
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  React.js
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  JavaScript
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  Node.js
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  MongoDB
                </span>

              </div>

            </div>

            {/* Right side - Profile image */}
            <div className="flex justify-center md:justify-end">

              <div className="relative animate-float">

                {/* Rotating ring */}
                <div className="animate-rotate-slow absolute -inset-5 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60 blur-sm" />

                {/* Image container */}
                <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-white/20 bg-slate-800 shadow-2xl shadow-blue-900/40 sm:h-80 sm:w-80 lg:h-96 lg:w-96">

                  <img
                    src="/profile.png"
                    alt="Likhitha U S"
                    className="h-full w-full object-cover"
                  />

                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 shadow-xl backdrop-blur-xl">
                  <p className="text-sm text-gray-400">
                    Focused on
                  </p>

                  <p className="font-semibold text-white">
                    Flutter + React
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />


      </main>

    </div>
  );
}

export default App;