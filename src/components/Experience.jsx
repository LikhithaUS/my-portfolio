const jobs = [
    {
        title: "Software Developer",
        company: "Vidwath Innovative Solution",
        duration: "June 2026 – Present",
        current: true,
        points: [
            "Develop and enhance Flutter-based mobile application features using Dart for Android.",
            "Build responsive, user-friendly UI components that improve usability and performance.",
            "Integrate REST APIs and handle JSON data, including GET and POST workflows.",
            "Implement offline-first features with local data handling and content management.",
            "Debug production issues, resolve crashes, and improve application stability.",
            "Perform functional testing and verify app behaviour across Android devices.",
            "Work with MySQL, PostgreSQL, BunnyCDN, and Docker, and track tasks in Jira and ClickUp.",
            "Collaborate with backend developers and cross-functional teams using Git and GitHub.",
        ],
        technologies: [
            "Flutter",
            "Dart",
            "JSON",
            "REST APIs",
            "MySQL",
            "PostgreSQL",
            "BunnyCDN",
            "Docker",
            "Jira",
            "ClickUp",
            "Postman",
        ],
    },
    {
        title: "Junior Software Developer",
        company: "Vidwath Innovative Solution",
        duration: "June 2025 – May 2026",
        current: false,
        points: [
            "Developed and maintained Flutter-based Android applications using Dart.",
            "Implemented application modules, including Registration, Feedback, and content management.",
            "Integrated REST APIs and handled JSON data for application workflows.",
            "Developed offline-first learning features for Android applications.",
            "Generated Android APK builds and supported application deployment.",
            "Debugged and resolved issues across Android devices and emulators.",
            "Performed manual and functional testing and quality assurance.",
            "Worked in Agile/Scrum teams with Git-based development workflows.",
        ],
        technologies: ["Flutter", "Dart", "Android", "REST APIs", "JSON", "Git", "Agile"],
    },
];

const chipColors = [
    "bg-blue-50 text-blue-700 hover:bg-blue-100",
    "bg-indigo-50 text-indigo-700 hover:bg-indigo-100",
    "bg-purple-50 text-purple-700 hover:bg-purple-100",
];

function Experience() {
    return (
        <section
            id="experience"
            className="relative overflow-hidden bg-slate-50 py-24"
        >
            {/* Background decoration */}
            <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />

            <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-purple-200/30 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6">

                {/* Section Heading */}
                <div className="mb-14">
                    <p className="font-semibold uppercase tracking-[0.25em] text-blue-600">
                        Career
                    </p>

                    <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                        Experience
                    </h2>

                    <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                        My professional journey and experience in software
                        development.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative max-w-5xl space-y-10">

                    {/* Timeline Line */}
                    <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-blue-500 via-indigo-400 to-transparent md:block" />

                    {jobs.map((job) => (
                        <div key={job.title} className="relative md:pl-16">

                            {/* Timeline Dot */}
                            <div className="absolute left-0 top-2 hidden h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/30 md:flex">
                                <div className="h-3 w-3 rounded-full bg-white" />
                            </div>

                            {/* Experience Card */}
                            <div className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl md:p-10">

                                {/* Header */}
                                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                                    <div>
                                        <span className="inline-flex rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
                                            {job.duration}
                                        </span>

                                        <h3 className="mt-5 text-2xl font-bold text-gray-900 md:text-3xl">
                                            {job.title}
                                        </h3>

                                        <p className="mt-2 text-lg font-medium text-blue-600">
                                            {job.company}
                                        </p>
                                    </div>

                                    {job.current && (
                                        <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                                            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500" />
                                            Currently Working
                                        </div>
                                    )}
                                </div>

                                <div className="mt-8 h-px bg-gray-100" />

                                {/* Responsibilities */}
                                <div className="mt-8">
                                    <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-gray-500">
                                        Responsibilities
                                    </h4>

                                    <ul className="space-y-4 text-lg leading-8 text-gray-600">
                                        {job.points.map((point) => (
                                            <li key={point} className="flex gap-4">
                                                <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies */}
                                <div className="mt-10">
                                    <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
                                        Technologies
                                    </h4>

                                    <div className="flex flex-wrap gap-3">
                                        {job.technologies.map((tech, index) => (
                                            <span
                                                key={tech}
                                                className={`rounded-lg px-4 py-2 text-sm font-medium transition duration-300 hover:-translate-y-1 ${chipColors[index % chipColors.length]}`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Experience;
