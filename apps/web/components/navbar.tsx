import { Github, Twitter } from "lucide-react";

export default function Navbar() {
    const navitem =
        "text-gray-700 hover:text-black hover:underline decoration-2 underline-offset-4";
    const rnxRepo = "https://github.com/brogrammercode/rnx"
    const logo = "https://cdn-icons-png.flaticon.com/128/2831/2831965.png"
    const xUrl = "https://x.com/brogrammerxd"

    return (
        <section className="mt-10">
            <nav className="flex items-center justify-between font-medium w-full">
                <div className="flex items-center gap-10">
                    <a href="/"><img src={logo} alt="logo" className="h-10 w-10" height={100} /></a>
                    <a href="/"><span className={navitem}>Home</span></a>
                    <a href="/games"><span className={navitem}>Games</span></a>
                    <a href="/tournaments"><span className={navitem}>Tournaments</span></a>
                </div>

                <div className="flex gap-5 items-center">
                    <a
                        href={rnxRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black"
                    >
                        <Github className="w-5 h-5 text-gray-700" />
                    </a>
                    <a
                        href={xUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black"
                    >
                        <Twitter className="w-5 h-5 text-gray-700" />
                    </a>
                </div>
            </nav>
        </section>
    );
}
