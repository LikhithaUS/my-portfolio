const skills = [
    {
        name: "Flutter",
        category: "Mobile Development",
    },
    {
        name: "Dart",
        category: "Programming",
    },
    {
        name: "React.js",
        category: "Frontend",
    },
    {
        name: "JavaScript",
        category: "Programming",
    },
    {
        name: "Node.js",
        category: "Backend",
    },
    {
        name: "Express.js",
        category: "Backend",
    },
    {
        name: "MongoDB",
        category: "Database",
    },
    {
        name: "REST APIs",
        category: "Backend",
    },
    {
        name: "GitHub",
        category: "Version Control",
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
                        A collection of technologies and tools I use to build
                        modern applications.
                    </p>
                </div>

                {/* Skill cards */}
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl"
                        >

                            {/* Icon placeholder */}
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-lg font-bold text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                                {skill.name.charAt(0)}
                            </div>

                            <h3 className="mt-5 text-lg font-bold text-gray-900">
                                {skill.name}
                            </h3>

                            <p className="mt-2 text-sm text-gray-500">
                                {skill.category}
                            </p>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Skills;