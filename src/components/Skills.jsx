const roles = [
    {
        title: "Java Developer",
        icon: "J",
        accent: "from-orange-500 to-red-500",
        summary:
            "Core Java foundation from Full Stack Java Development training (certified).",
        stack: ["Core Java", "OOP", "JDBC", "MySQL"],
    },
    {
        title: "Python Developer",
        icon: "Py",
        accent: "from-yellow-500 to-amber-600",
        summary:
            "Python web development with Flask, plus a deep learning prediction project.",
        stack: ["Python", "Flask"],
    },
    {
        title: "Mobile Developer",
        icon: "M",
        accent: "from-blue-500 to-indigo-600",
        summary:
            "1.6 year professionally building Flutter apps for Android.",
        stack: [
            "Flutter",
            "Dart",
            "Android",
            "Riverpod",
            "Offline-First",
            "SQLite",
        ],
    },
];

const categories = [
    {
        name: "Languages",
        items: ["Java", "Python", "Dart", "JavaScript", "HTML5", "CSS3"],
    },
    {
        name: "Backend & APIs",
        items: ["Flask", "Node.js", "JSON"],
    },
    {
        name: "Frontend",
        items: ["React.js", "Tailwind CSS", "Vite"],
    },
    {
        name: "Databases",
        items: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
    },
    {
        name: "Tools",
        items: ["GitHub", "Android Studio", "VS Code", "Postman", "Jira", "Clickup",],
    },
    {
        name: "Testing & Practices",
        items: [
            "Functional Testing",
            "Manual Testing",
            "Debugging",
            "Agile / Scrum",
        ],
    },
    {
        name: "AI-Assisted Development",
        items: [
            "Building Features with AI Tools",
            "AI-Assisted Debugging",
            "Code Review & Refactoring",
            "Prompting for Code Generation",
        ],
    },
    {
        name: "Technical Troubleshooting",
        items: [
            "Windows Issue Resolution",
            "Android Device Issues",
            "App Installation & Setup",
            "User Support",
        ],
    },
];

function Skills() {
    return (
        <section
            id="skills"
            className="relative overflow-hidden bg-slate-50 py-24"
        >
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}
                <div className="mb-14">
                    <p className="font-semibold uppercase tracking-widest text-blue-600">
                        Skills
                    </p>

                    <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                        Technologies I work with
                    </h2>

                    <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                        The core stacks I bring to Java, Python, and Mobile
                        development roles.
                    </p>
                </div>

                {/* Role cards */}
                <div className="grid gap-6 md:grid-cols-3">
                    {roles.map((role) => (
                        <div
                            key={role.title}
                            className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${role.accent}`} />

                            <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${role.accent} text-lg font-bold text-white shadow-md transition group-hover:scale-110`}>
                                {role.icon}
                            </div>

                            <h3 className="mt-5 text-xl font-bold text-gray-900">
                                {role.title}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-600">
                                {role.summary}
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {role.stack.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Category grid */}
                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {categories.map((category) => (
                        <div
                            key={category.name}
                            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:border-blue-300 hover:shadow-lg"
                        >
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                                {category.name}
                            </h4>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {category.items.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-100"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Skills;
