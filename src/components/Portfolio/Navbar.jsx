import { NavLink } from "react-router-dom";
import { v4 as uuid } from "uuid";

const NAV_LINKS = [
    { title: "About", href: "/portfolio" },
    { title: "Experience", href: "/portfolio/experience" },
    { title: "Education", href: "/portfolio/education" },
    { title: "Projects", href: "/portfolio/projects" },
    { title: "Skills", href: "/portfolio/skills" },
    { title: "Awards", href: "/portfolio/awards" },
];

const Navbar = () => {
    return (
        <aside className="bg-[#343a40] px-16 flex flex-col justify-center items-center min-w-max gap-8 font-bold uppercase text-center mr-12">
            <img
                src="./headshot.jpg"
                alt="profile picture"
                className="rounded-full h-32 w-32 object-cover object-center ring-gray-500 ring-8"
            />
            <nav>
                <ul className="flex flex-col gap-4 text-xl">
                    {NAV_LINKS.map(({ title, href }) => (
                        <li key={uuid()}>
                            <NavLink
                                to={href}
                                className={({ isActive }) =>
                                    `hover:underline hover:text-white ${
                                        isActive
                                            ? "text-white"
                                            : "text-slate-400"
                                    }`
                                }
                            >
                                {title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Navbar;
