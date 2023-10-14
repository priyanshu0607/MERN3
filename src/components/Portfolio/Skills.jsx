import Tick from "../../assets/Tick";
import { v4 as uuid } from "uuid";

const SKILLS = [
    {
        title: "Programming Languages",
        bullets: ["Python, Java, C"],
    },
    {
        title: "Web Technologies & Tools",
        bullets: ["HTML, CSS, JavaScript, PHP, Node.js, React, Bootstrap"],
    },
    {
        title: "Other Technologies & Skills",
        bullets: [
            "Bash, Pearl",
            "SQL, PostGres, MongoDB",
            "Kali Linux Security Tools, OWASP Top 10 Vulnerabilities",
            "Git Version Control, Agile Software Development, Scrum ",
        ],
    },
];

const Skills = () => {
    return (
        <section className="my-auto space-y-8">
            <h1 className="text-5xl uppercase font-bold tracking-tighter leading-none text-[#343a40]">
                Skills
            </h1>
            <ul className="space-y-6">
                {SKILLS.map(({ title, bullets }) => (
                    <li key={uuid()} className="space-y-4">
                        <h2 className="text-2xl uppercase font-semibold text-slate-600">
                            {title}
                        </h2>
                        <ul>
                            {bullets.map(bullet => (
                                <li
                                    key={uuid()}
                                    className="relative pl-7 ml-4 text-slate-500"
                                >
                                    <span className="absolute left-0 h-5 w-5 top-1/2 -translate-y-1/2 text-slate-600">
                                        <Tick />
                                    </span>
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
