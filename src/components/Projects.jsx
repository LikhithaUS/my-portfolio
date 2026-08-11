const projects = [
    {
        title: "Employee Management System",
        status: "Currently in Development",
        description:
            "A full-stack web application for managing employee information and workflows. The project is being developed with a focus on responsive UI, REST API integration, CRUD operations, and database management.",
        technologies: [
            "React.js",
            "JavaScript",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
        ],
    },
];

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
                        Projects that showcase my experience with frontend,
                        backend, mobile, and full-stack development.
                    </p>
                </div>

                {/* Project card */}
                <div className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

                    <div className="grid md:grid-cols-5">

                        {/* Project preview */}
                        <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 md:col-span-2">

                            {/* Decorative circles */}
                            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-blue-500/20 blur-2xl transition-transform duration-700 group-hover:scale-150" />

                            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-purple-500/20 blur-2xl transition-transform duration-700 group-hover:scale-150" />

                            {/* Fake dashboard preview */}
                            <div className="relative w-4/5 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-md transition duration-500 group-hover:scale-105">

                                <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                                </div>

                                <div className="mt-4 grid grid-cols-3 gap-2">
                                    <div className="h-16 rounded-lg bg-blue-400/30" />
                                    <div className="h-16 rounded-lg bg-purple-400/30" />
                                    <div className="h-16 rounded-lg bg-indigo-400/30" />
                                </div>

                                <div className="mt-3 h-24 rounded-lg bg-white/10" />

                                <div className="mt-3 flex gap-2">
                                    <div className="h-8 flex-1 rounded-lg bg-white/10" />
                                    <div className="h-8 flex-1 rounded-lg bg-white/10" />
                                </div>

                            </div>

                            {/* Status badge */}
                            <div className="absolute bottom-5 left-5 rounded-full border border-yellow-300/20 bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-300 backdrop-blur-md">
                                🟡 In Development
                            </div>

                        </div>

                        {/* Project information */}
                        <div className="p-8 md:col-span-3 md:p-10">

                            <div className="flex flex-wrap items-center gap-3">

                                <span className="rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
                                    Full Stack
                                </span>

                                <span className="rounded-full bg-yellow-100 px-4 py-1.5 text-sm font-semibold text-yellow-700">
                                    {projects[0].status}
                                </span>

                            </div>

                            <h3 className="mt-6 text-3xl font-bold text-gray-900">
                                {projects[0].title}
                            </h3>

                            <p className="mt-5 text-lg leading-8 text-gray-600">
                                {projects[0].description}
                            </p>

                            {/* Technologies */}
                            <div className="mt-7">

                                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
                                    Technologies
                                </p>

                                <div className="flex flex-wrap gap-2">

                                    {projects[0].technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                                        >
                                            {technology}
                                        </span>
                                    ))}

                                </div>

                            </div>

                            {/* Current focus */}
                            <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">

                                <p className="text-sm font-semibold text-blue-700">
                                    Current Focus
                                </p>

                                <p className="mt-2 text-gray-600">
                                    Completing CRUD functionality, dashboard features,
                                    search and filtering, authentication, and final
                                    project testing.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Projects;