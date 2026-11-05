function Contact() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 py-24 text-white"
        >
            {/* Background decoration */}
            <div className="absolute -left-32 top-20 h-80 w-80 animate-pulse rounded-full bg-blue-500/20 blur-3xl" />

            <div
                className="absolute -right-32 bottom-0 h-96 w-96 animate-pulse rounded-full bg-purple-500/20 blur-3xl"
                style={{ animationDelay: "1s" }}
            />

            <div className="relative mx-auto max-w-6xl px-6">

                {/* Heading */}
                <div className="text-center">

                    <p className="font-semibold uppercase tracking-[0.25em] text-blue-400">
                        Contact
                    </p>

                    <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                        Let's Connect
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                        I'm open to discussing software development opportunities,
                        projects, and professional collaborations.
                    </p>

                </div>

                {/* Contact Cards */}
                <div className="mt-14 grid gap-6 md:grid-cols-3">

                    {/* Email */}
                    <a
                        href="mailto:your-email@example.com"
                        className="group rounded-3xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl"
                    >
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20 text-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                            ✉️
                        </div>

                        <h3 className="mt-5 text-xl font-bold">
                            Email
                        </h3>

                        <p className="mt-2 break-all text-sm text-slate-300">
                            likhithaus2506@gmail.com
                        </p>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/likhithaus"
                        target="_blank"
                        rel="noreferrer"
                        className="group rounded-3xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl"
                    >
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20 text-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                            in
                        </div>

                        <h3 className="mt-5 text-xl font-bold">
                            LinkedIn
                        </h3>

                        <p className="mt-2 text-sm text-slate-300">
                            Connect with me
                        </p>
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/LikhithaUS"
                        target="_blank"
                        rel="noreferrer"
                        className="group rounded-3xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl"
                    >
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/20 text-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                            Git
                        </div>

                        <h3 className="mt-5 text-xl font-bold">
                            GitHub
                        </h3>

                        <p className="mt-2 text-sm text-slate-300">
                            View my projects
                        </p>
                    </a>

                </div>

                {/* Resume CTA */}
                <div className="mt-14 text-center">

                    <a
                        href="/Likhitha_FCV.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-xl"
                    >
                        View My Resume
                        <span>→</span>
                    </a>

                </div>

                {/* Footer */}
                <div className="mt-16 border-t border-white/10 pt-8 text-center">

                    <p className="text-sm text-slate-400">
                        © {new Date().getFullYear()} Likhitha U S. All rights reserved.
                    </p>

                </div>

            </div>
        </section>
    );
}

export default Contact;