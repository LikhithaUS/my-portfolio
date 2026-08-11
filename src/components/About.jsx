function About() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-24"
        >
            {/* Animated background blobs */}
            <div className="absolute -left-32 top-20 h-72 w-72 animate-pulse rounded-full bg-blue-300/20 blur-3xl" />

            <div
                className="absolute -right-32 bottom-10 h-80 w-80 animate-pulse rounded-full bg-purple-300/20 blur-3xl"
                style={{ animationDelay: "1s" }}
            />

            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-300/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6">

                {/* Heading */}
                <div className="mb-14 text-center">
                    <p className="font-semibold uppercase tracking-[0.25em] text-blue-600">
                        About Me
                    </p>

                    <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                        A little about me
                    </h2>

                    <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
                </div>

                <div className="grid gap-8 md:grid-cols-3">

                    {/* About Card */}
                    <div className="group rounded-3xl border border-white/60 bg-white/70 p-8 shadow-lg shadow-blue-100/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-200/50 md:col-span-2">

                        <div className="mb-6 flex items-center gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-xl font-bold text-white shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                                LU
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">
                                    Software Developer
                                </h3>

                                <p className="text-sm text-blue-600">
                                    Flutter & React Developer
                                </p>
                            </div>
                        </div>

                        <p className="text-lg leading-8 text-gray-600">
                            I’m a Software Developer focused on building modern web
                            and cross-platform applications using React.js and Flutter.
                        </p>

                        <p className="mt-5 text-lg leading-8 text-gray-600">
                            I have experience working with JavaScript, Dart, REST APIs,
                            databases, and full-stack technologies. I enjoy turning
                            ideas into practical applications with responsive user
                            interfaces and well-structured application workflows.
                        </p>

                        <p className="mt-5 text-lg leading-8 text-gray-600">
                            Currently, I’m strengthening my skills in React and Flutter
                            while building real-world projects that combine frontend,
                            mobile, and backend development.
                        </p>

                        {/* Small technology tags */}
                        <div className="mt-7 flex flex-wrap gap-3">
                            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 transition hover:scale-105">
                                Flutter
                            </span>

                            <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 transition hover:scale-105">
                                React.js
                            </span>

                            <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 transition hover:scale-105">
                                JavaScript
                            </span>

                            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition hover:scale-105">
                                REST APIs
                            </span>
                        </div>
                    </div>

                    {/* Quick Info Card */}
                    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-8 text-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

                        {/* Decorative circle */}
                        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 transition-transform duration-700 group-hover:scale-150" />

                        <div className="relative">
                            <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
                                Quick Info
                            </p>

                            <h3 className="mt-3 text-2xl font-bold">
                                My Profile
                            </h3>

                            <div className="mt-8 space-y-6">

                                <div className="border-b border-white/20 pb-4">
                                    <p className="text-sm text-blue-200">
                                        Role
                                    </p>

                                    <p className="mt-1 font-semibold">
                                        Software Developer
                                    </p>
                                </div>

                                <div className="border-b border-white/20 pb-4">
                                    <p className="text-sm text-blue-200">
                                        Focus
                                    </p>

                                    <p className="mt-1 font-semibold">
                                        Flutter & React
                                    </p>
                                </div>

                                <div className="border-b border-white/20 pb-4">
                                    <p className="text-sm text-blue-200">
                                        Experience
                                    </p>

                                    <p className="mt-1 font-semibold">
                                        1+ Year
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-blue-200">
                                        Education
                                    </p>

                                    <p className="mt-1 font-semibold">
                                        B.E. Computer Science
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;