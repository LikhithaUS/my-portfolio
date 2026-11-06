const training = [
    {
        title: "Full Stack Java Development Training",
        org: "Certified",
        duration: "June 2024 – May 2025",
        description:
            "Hands-on training in Core Java, JDBC, MySQL, HTML, CSS, and JavaScript. Earned the Full Stack Java Development Certification.",
        tags: ["Core Java", "JDBC", "MySQL", "HTML", "CSS", "JavaScript"],
    },
    {
        title: "Web Development Intern (Python)",
        org: "Take It Smart (OPC) Pvt. Ltd., Bangalore",
        duration: "Aug 2023 – Sep 2023",
        description:
            "Built responsive web applications using HTML, CSS, JavaScript, and Python, and took part in testing, debugging, and feature enhancements.",
        tags: ["Python", "HTML", "CSS", "JavaScript"],
    },
    {
        title: "Full Stack Web Developer Intern",
        org: "Varcons Technologies Pvt. Ltd., Bangalore",
        duration: "Oct 2022 – Nov 2022",
        description:
            "Internship in full-stack web development.",
        tags: [],
    },
];

function Education() {
    return (
        <section
            id="education"
            className="relative overflow-hidden bg-white py-24"
        >
            {/* Background decoration */}
            <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />

            <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-purple-100/40 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6">

                {/* Section Heading */}
                <div className="mb-14">
                    <p className="font-semibold uppercase tracking-[0.25em] text-blue-600">
                        Education
                    </p>

                    <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                        Academic Background
                    </h2>

                    <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                        My academic journey and educational background.
                    </p>
                </div>

                {/* Education Timeline */}
                <div className="relative max-w-5xl">

                    {/* Timeline line */}
                    <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-blue-500 via-indigo-400 to-transparent md:block" />

                    <div className="relative md:pl-16">

                        {/* Timeline dot */}
                        <div className="absolute left-0 top-2 hidden h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/30 md:flex">
                            <div className="h-3 w-3 rounded-full bg-white" />
                        </div>

                        {/* Education Card */}
                        <div className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl md:p-10">

                            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

                                <div>

                                    {/* Degree */}
                                    <span className="inline-flex rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
                                        2020 – 2024
                                    </span>

                                    <h3 className="mt-5 text-2xl font-bold text-gray-900 md:text-3xl">
                                        Bachelor of Engineering
                                    </h3>

                                    <p className="mt-2 text-lg font-medium text-blue-600">
                                        Computer Science and Engineering
                                    </p>

                                    <p className="mt-3 text-lg text-gray-600">
                                        Ghousia College of Engineering, Ramanagara
                                    </p>

                                </div>

                                {/* CGPA */}
                                <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 px-6 py-4 text-white shadow-lg">
                                    <p className="text-sm text-blue-200">
                                        CGPA
                                    </p>

                                    <p className="mt-1 text-2xl font-bold">
                                        8.36
                                    </p>
                                </div>

                            </div>

                            <div className="mt-8 h-px bg-gray-100" />

                            {/* Description */}
                            <div className="mt-8">

                                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                                    Field of Study
                                </h4>

                                <p className="mt-4 text-lg leading-8 text-gray-600">
                                    Studied Computer Science and Engineering with a
                                    focus on software development, programming,
                                    application development, databases, and
                                    computer science fundamentals.
                                </p>

                            </div>

                            {/* Highlight */}
                            <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">

                                <p className="font-semibold text-blue-700">
                                    Bachelor of Engineering — Computer Science & Engineering
                                </p>

                                <p className="mt-2 text-gray-600">
                                    Graduated in 2024 with a CGPA of 8.36.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Training, Internships & Certification */}
                <div className="mt-16 max-w-5xl">
                    <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                        Training, Internships & Certification
                    </h3>

                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        {training.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                            >
                                <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                                    {item.duration}
                                </span>

                                <h4 className="mt-4 text-lg font-bold text-gray-900">
                                    {item.title}
                                </h4>

                                <p className="mt-1 text-sm font-medium text-blue-600">
                                    {item.org}
                                </p>

                                <p className="mt-3 text-sm leading-6 text-gray-600">
                                    {item.description}
                                </p>

                                {item.tags.length > 0 && (
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {item.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Education;