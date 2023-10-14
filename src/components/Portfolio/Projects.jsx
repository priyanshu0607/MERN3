import { v4 as uuid } from "uuid";

const PROJECTS = [
    {
        title: "PROXYAUTH",
        subTitle: "A SECURITY CAPSTONE PROJECT",
        desc: "A Continuous Authentication System that uses Bluetooth on your Smartphone Device to provide authentication to successfully login on to the user's computer. ProxyAuth is equipped with a Bluetooth Continuous Authentication Scheme. The users aren't required to log off the computer, the computer will lock if it cannot detect the device within the Bluetooth range.",
        tools: "Kotlin, C, PAM (Pluggable Authentication Module), Bluetooth Programming, D-Bus",
    },

    {
        title: "WAREHOUSE WARS",
        subTitle: "WEB-BASED ARCADE GAME",
        desc: "A player (cool face) can move into any empty, adjacent square. If the space has a box in it, it could be moved by the player. The player can move a long line of boxes (used object recursion for that). The monster can kill the player going to the same square. The goal of the game is to surround each monster with given boxes. The player has to authenticate itself to play and to store the scores on a scoreboard. A good example of Full Stack Development from front end to back end.",
        tools: {
            "Front end":
                "HTML5, CSS3, JavaScript and later replaced with React",
            "Back end":
                "Ajax (JSON transport), JQuery, JavaScript, Node+Express",
            Database: "SQLite3 and later with MongoDB",
        },
    },

    {
        title: "Advanced Paint",
        subTitle: "JAVA-BASED DESKTOP APPLICATION",
        desc: "The program uses partial MVC (Model, View and Controller) as a structure. The different design patterns have been used such as Factory, Strategy and others to implement the paint. The common shapes were designed and implemented. The shapes feedback (user can see as it draws) was also made possible. Many Java Libraries and Tools were used to implement features such as Whole Colour Panel, Resolution, Save/Open, Symmetry and Thickness for most of the shapes.",
        tools: "Java, Git, Scrum/Sprints Version Control",
    },

    {
        title: "Career Learning Network",
        subTitle: "University Career Portal Website (Front-End Designing)",
        desc: "Selected an aesthetically-pleasing website that already exists and recreated the design using my own understanding of wireframe and Bootstrap. The Career & Co-Curricular Learning Network Website formerly called Career Learning Network Website was selected and recreated. ",
        tools: "Bootstrap, HTML5, CSS3, JavaScript ",
    },
];

const Projects = () => {
    return (
        <section className="my-10 space-y-12">
            <h1 className="text-5xl uppercase font-bold tracking-tighter leading-none text-[#343a40]">
                Projects
            </h1>
            <ul className="space-y-12">
                {PROJECTS.map(({ title, subTitle, desc, tools }) => (
                    <li key={uuid()} className="">
                        <h2 className="text-3xl uppercase font-semibold text-slate-700 mb-4">
                            {title}
                        </h2>
                        <p className="text-xl capitalize text-slate-600 tracking-tighter">
                            {subTitle}
                        </p>
                        <p className="text-slate-500 my-6">{desc}</p>
                        {typeof tools === "string" ? (
                            <p>
                                <span className="font-bold text-slate-600">
                                    Language & Tools:
                                </span>{" "}
                                <span className="text-slate-500">{tools}</span>
                            </p>
                        ) : (
                            <div className="space-y-2">
                                <p className="font-bold text-slate-600">
                                    Language & Tools:
                                </p>
                                <ul className="list-disc list-inside">
                                    {Object.entries(tools).map(
                                        ([key, value]) => (
                                            <li
                                                key={uuid()}
                                                className="text-slate-500 ml-6"
                                            >
                                                <span className="">{key}</span>:{" "}
                                                {value}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;
