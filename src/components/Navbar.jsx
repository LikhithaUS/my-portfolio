import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Logo */}
                <a
                    href="#home"
                    onClick={closeMenu}
                    className="text-xl font-bold tracking-tight text-white"
                >
                    L<span className="text-blue-400">.</span>U
                </a>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">

                    <a
                        href="#about"
                        className="text-sm font-medium text-slate-300 transition hover:text-white"
                    >
                        About
                    </a>

                    <a
                        href="#skills"
                        className="text-sm font-medium text-slate-300 transition hover:text-white"
                    >
                        Skills
                    </a>

                    <a
                        href="#projects"
                        className="text-sm font-medium text-slate-300 transition hover:text-white"
                    >
                        Projects
                    </a>

                    <a
                        href="#experience"
                        className="text-sm font-medium text-slate-300 transition hover:text-white"
                    >
                        Experience
                    </a>

                    <a
                        href="#education"
                        className="text-sm font-medium text-slate-300 transition hover:text-white"
                    >
                        Education
                    </a>

                    <a
                        href="#contact"
                        className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
                    >
                        Contact
                    </a>

                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="rounded-lg border border-white/10 p-2 text-slate-300 transition hover:bg-white/10 md:hidden"
                    aria-label="Toggle navigation menu"
                >
                    {isOpen ? "✕" : "☰"}
                </button>

            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="border-t border-white/10 bg-slate-950 px-6 py-5 md:hidden">

                    <div className="flex flex-col gap-2">

                        <a
                            href="#about"
                            onClick={closeMenu}
                            className="rounded-lg px-4 py-3 text-slate-300 transition hover:bg-white/10 hover:text-white"
                        >
                            About
                        </a>

                        <a
                            href="#skills"
                            onClick={closeMenu}
                            className="rounded-lg px-4 py-3 text-slate-300 transition hover:bg-white/10 hover:text-white"
                        >
                            Skills
                        </a>

                        <a
                            href="#projects"
                            onClick={closeMenu}
                            className="rounded-lg px-4 py-3 text-slate-300 transition hover:bg-white/10 hover:text-white"
                        >
                            Projects
                        </a>

                        <a
                            href="#experience"
                            onClick={closeMenu}
                            className="rounded-lg px-4 py-3 text-slate-300 transition hover:bg-white/10 hover:text-white"
                        >
                            Experience
                        </a>

                        <a
                            href="#education"
                            onClick={closeMenu}
                            className="rounded-lg px-4 py-3 text-slate-300 transition hover:bg-white/10 hover:text-white"
                        >
                            Education
                        </a>

                        <a
                            href="#contact"
                            onClick={closeMenu}
                            className="mt-2 rounded-lg bg-blue-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-blue-500"
                        >
                            Contact
                        </a>

                    </div>

                </div>
            )}
        </nav>
    );
}

export default Navbar;