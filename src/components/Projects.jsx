const projects = [
    {
        title: "Employee Management System",
        status: "Completed",
        category: "Full Stack",
        gradient: "from-slate-900 via-blue-950 to-indigo-900",
        description:
            "A full-stack web application for managing employee data, with secure authentication and a dashboard for day-to-day HR tasks.",
        highlights: [
            "Employee CRUD operations through REST APIs",
            "JWT authentication for secure access",
            "Dashboard with employee statistics",
            "Search and department filtering",
        ],
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    },
    {
        title: "Field Service Management App",
        status: "In Development",
        category: "Mobile",
        gradient: "from-slate-900 via-indigo-950 to-blue-900",
        description:
            "A cross-platform mobile app for managing field technicians, customers, and service jobs, backed by a Node.js API.",
        highlights: [
            "Role-based access for Admin and Technician users",
            "Technician assignment, job tracking, and status updates",
            "Riverpod state management, REST APIs with Dio",
            "Backend services with Node.js, Express.js, and MongoDB",
        ],
        technologies: ["Flutter", "Dart", "Riverpod", "Dio", "Node.js", "Express.js", "MongoDB", "JWT"],
    },
    {
        title: "Brain Stroke Risk Prediction",
        status: "Completed",
        category: "Python · Deep Learning",
        gradient: "from-slate-900 via-emerald-950 to-teal-900",
        description:
            "A deep learning-based system that predicts brain stroke risk using the HDTL-SRP framework.",
        highlights: [
            "Deep learning model built on the HDTL-SRP framework",
            "Improved prediction accuracy through model optimization",
        ],
        technologies: ["Python", "Deep Learning"],
    },
    {
        title: "Personal Portfolio Website",
        status: "Live",
        category: "Frontend",
        gradient: "from-slate-900 via-purple-950 to-indigo-900",
        description:
            "This responsive portfolio, built to give recruiters a quick overview of my skills, experience, and projects.",
        highlights: [
            "Reusable React components with responsive layouts",
            "Modern UI animations and interactive navigation",
            "Version control with GitHub, deployed on Vercel",
        ],
        technologies: ["React.js", "Vite", "JavaScript", "Tailwind CSS", "Vercel"],
        link: { label: "Source Code", href: "https://github.com/LikhithaUS/my-portfolio" },
    },
];

const statusStyles = {
    Completed: {
        badge: "border-green-300/20 bg-green-400/10 text-green-300",
        pill: "bg-green-100 text-green-700",
        icon: "✅",
    },
    "In Development": {
        badge: "border-yellow-300/20 bg-yellow-400/10 text-yellow-300",
        pill: "bg-yellow-100 text-yellow-700",
        icon: "🟡",
    },
    Live: {
        badge: "border-blue-300/20 bg-blue-400/10 text-blue-300",
        pill: "bg-blue-100 text-blue-700",
        icon: "🌐",
    },
};

function Projects() {
    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-white py-24"
        >
            {/* Background decoration */}
            <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

            <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-purple-100/40 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6">

                {/* Section heading */}
                <div className="mb-14">
                    <p className="font-semibold uppercase tracking-[0.25em] text-blue-600">
                        My Work
                    </p>

                    <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                        Featured Projects
                    </h2>

                    <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                        Projects that show my work across mobile, Python,
                        and full-stack development.
                    </p>
                </div>

                <div className="space-y-10">
                    {projects.map((project) => {
                        const status = statusStyles[project.status];

                        return (
                            <div
                                key={project.title}
                                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                            >
                                <div className="grid md:grid-cols-5">

                                    {/* Project preview */}
                                    <div className={`relative flex min-h-[240px] items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient} md:col-span-2`}>

                                        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-blue-500/20 blur-2xl transition-transform duration-700 group-hover:scale-150" />

                                        <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-purple-500/20 blur-2xl transition-transform duration-700 group-hover:scale-150" />

                                        {/* Decorative app preview */}
                                        <div className="relative w-4/5 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-md transition duration-500 group-hover:scale-105">
                                            <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                                                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                                                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                                                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                                            </div>

                                            <div className="mt-4 grid grid-cols-3 gap-2">
                                                <div className="h-14 rounded-lg bg-blue-400/30" />
                                                <div className="h-14 rounded-lg bg-purple-400/30" />
                                                <div className="h-14 rounded-lg bg-indigo-400/30" />
                                            </div>

                                            <div className="mt-3 h-20 rounded-lg bg-white/10" />
                                        </div>

                                        {/* Status badge */}
                                        <div className={`absolute bottom-5 left-5 rounded-full border px-4 py-2 text-sm font-medium backdrop-blur-md ${status.badge}`}>
                                            {status.icon} {project.status}
                                        </div>
                                    </div>

                                    {/* Project information */}
                                    <div className="p-8 md:col-span-3 md:p-10">

                                        <div className="flex flex-wrap items-center gap-3">
                                            <span className="rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
                                                {project.category}
                                            </span>

                                            <span className={`rounded-full px-4 py-1.5 text-sm font-semibold ${status.pill}`}>
                                                {project.status}
                                            </span>
                                        </div>

                                        <h3 className="mt-5 text-2xl font-bold text-gray-900 md:text-3xl">
                                            {project.title}
                                        </h3>

                                        <p className="mt-4 text-lg leading-8 text-gray-600">
                                            {project.description}
                                        </p>

                                        <ul className="mt-5 space-y-2 text-gray-600">
                                            {project.highlights.map((point) => (
                                                <li key={point} className="flex gap-3">
                                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Technologies */}
                                        <div className="mt-6 flex flex-wrap gap-2">
                                            {project.technologies.map((technology) => (
                                                <span
                                                    key={technology}
                                                    className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                                                >
                                                    {technology}
                                                </span>
                                            ))}
                                        </div>

                                        {project.link && (
                                            <a
                                                href={project.link.href}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700"
                                            >
                                                {project.link.label} →
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}

export default Projects;
