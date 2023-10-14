import { NavLink } from "react-router-dom";

const NAV_LINKS = [
    {
        title: "Age Calculator",
        href: "/age-calculator",
    },
    {
        title: "Calculator",
        href: "/calculator",
    },
    {
        title: "Color Picker",
        href: "/color-picker",
    },
    {
        title: "Dummy Data",
        href: "/dummy-data",
    },
    {
        title: "Paragraph Word Counter",
        href: "/paragraph-word-counter",
    },
    {
        title: "Portfolio",
        href: "/portfolio",
    },
];

const Navbar = () => {
    return (
        <nav className="bg-zinc-200 rounded-md p-2 container mx-auto my-4">
            <ul className="flex flex-wrap gap-x-4 justify-evenly">
                {NAV_LINKS.map(link => (
                    <li key={link.title}>
                        <NavLink
                            to={link.href}
                            className={({ isActive }) =>
                                `hover:underline transition ${
                                    isActive
                                        ? "text-slate-950 underline font-bold"
                                        : "text-slate-600"
                                }`
                            }
                        >
                            {link.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
