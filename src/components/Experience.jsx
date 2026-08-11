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
                <div className="relative max-w-5xl">

                    {/* Timeline Line */}
                    <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-blue-500 via-indigo-400 to-transparent md:block" />

                    {/* Timeline Item */}
                    <div className="relative md:pl-16">

                        {/* Timeline Dot */}
                        <div className="absolute left-0 top-2 hidden h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/30 md:flex">
                            <div className="h-3 w-3 rounded-full bg-white" />
                        </div>

                        {/* Experience Card */}
                        <div className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl md:p-10">

                            {/* Header */}
                            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">

                                <div>
                                    {/* Duration */}
                                    <span className="inline-flex rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
                                        2025 – Present
                                    </span>

                                    {/* Job Title */}
                                    <h3 className="mt-5 text-2xl font-bold text-gray-900 md:text-3xl">
                                        Software Developer
                                    </h3>

                                    {/* Company */}
                                    <p className="mt-2 text-lg font-medium text-blue-600">
                                        Vidwath Innovative Solution
                                    </p>
                                </div>

                                {/* Current Status */}
                                <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                                    <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500" />
                                    Currently Working
                                </div>

                            </div>

                            {/* Divider */}
                            <div className="mt-8 h-px bg-gray-100" />

                            {/* Responsibilities */}
                            <div className="mt-8">

                                <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-gray-500">
                                    Responsibilities
                                </h4>

                                <ul className="space-y-5 text-lg leading-8 text-gray-600">

                                    {/* Responsibility 1 */}
                                    <li className="flex gap-4">
                                        <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-blue-600" />

                                        <span>
                                            Develop offline Android applications using
                                            Flutter, focusing on frontend development and
                                            responsive user interfaces.
                                        </span>
                                    </li>

                                    {/* Responsibility 2 */}
                                    <li className="flex gap-4">
                                        <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-blue-600" />

                                        <span>
                                            Create and manage JSON data structures and
                                            integrate REST APIs using GET and POST methods.
                                        </span>
                                    </li>

                                    {/* Responsibility 3 */}
                                    <li className="flex gap-4">
                                        <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-blue-600" />

                                        <span>
                                            Work with cloud storage and data management,
                                            including BunnyCDN, MySQL, and PostgreSQL
                                            databases.
                                        </span>
                                    </li>

                                    {/* Responsibility 4 */}
                                    <li className="flex gap-4">
                                        <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-blue-600" />

                                        <span>
                                            Work with Docker setup and project management
                                            processes, including task tracking and project
                                            coordination using Jira,Clickup.
                                        </span>
                                    </li>

                                </ul>

                            </div>

                            {/* Technologies */}
                            <div className="mt-10">

                                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
                                    Technologies
                                </h4>

                                <div className="flex flex-wrap gap-3">

                                    <span className="rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition duration-300 hover:-translate-y-1 hover:bg-blue-100">
                                        Flutter
                                    </span>

                                    <span className="rounded-lg bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 transition duration-300 hover:-translate-y-1 hover:bg-indigo-100">
                                        Dart
                                    </span>

                                    <span className="rounded-lg bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700 transition duration-300 hover:-translate-y-1 hover:bg-purple-100">
                                        JSON
                                    </span>

                                    <span className="rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition duration-300 hover:-translate-y-1 hover:bg-blue-100">
                                        REST APIs
                                    </span>

                                    <span className="rounded-lg bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 transition duration-300 hover:-translate-y-1 hover:bg-indigo-100">
                                        MySQL
                                    </span>

                                    <span className="rounded-lg bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700 transition duration-300 hover:-translate-y-1 hover:bg-purple-100">
                                        PostgreSQL
                                    </span>

                                    <span className="rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition duration-300 hover:-translate-y-1 hover:bg-blue-100">
                                        BunnyCDN
                                    </span>

                                    <span className="rounded-lg bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 transition duration-300 hover:-translate-y-1 hover:bg-indigo-100">
                                        Docker
                                    </span>

                                    <span className="rounded-lg bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700 transition duration-300 hover:-translate-y-1 hover:bg-purple-100">
                                        Jira
                                    </span>
                                    <span className="rounded-lg bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700 transition duration-300 hover:-translate-y-1 hover:bg-purple-100">
                                        Clickup
                                    </span>
                                    <span className="rounded-lg bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700 transition duration-300 hover:-translate-y-1 hover:bg-purple-100">
                                        Postman
                                    </span>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Experience;