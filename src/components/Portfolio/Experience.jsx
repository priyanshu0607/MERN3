import { v4 as uuid } from "uuid";

const EXPERIENCE = [
    {
        title: "Installer/Programmer",
        subTitle: "Microtech Communications Inc.",
        bullets: [
            "Installing various electronic products such as IP CCTV Camera, Network Video Recorder, iVMS‑4200 Desktop and Mobile Application.",
            "Securing the Network Connection and making the Security System remotely accessible.",
            "Designing, planning and installing according to the client's needs.",
        ],
        date: "May 2016 - Present",
    },
    {
        title: "Summer Intern",
        subTitle: "Humanity First Canada",
        bullets: [
            "Assisted with migration, configuration and troubleshot (Servers, Desktops and Network Hardware).",
            "Installed Windows OS, MS Office and other desktop software along with troubleshot internal/external services",
            "Recorded office expenditures and responsibly handled monthly expense sheets.",
            "Checked inventory, updated it on regular basis and partially run the food bank on the distribution days.",
        ],
        date: "May 2016 - September 2016",
    },
    {
        title: "Technical Customer Service Representative",
        subTitle: "Telus Corp.",
        bullets: [
            "Troubleshoot customer technical inquiries in‑person and over the phone diligently regarding products and services.",
            "Assisted customers in determining their product requirement and provided the chosen product in a timely manner",
        ],
        date: "June 2014 - September 2014",
    },
];

const Experience = () => {
    return (
        <section className="my-auto space-y-12 pr-8">
            <h1 className="text-5xl uppercase font-bold tracking-tighter leading-none text-[#343a40]">
                Experience
            </h1>
            <ul className="space-y-12">
                {EXPERIENCE.map(({ title, subTitle, bullets, date }) => (
                    <li key={uuid()} className="flex">
                        <div className="flex-grow">
                            <h2 className="text-3xl uppercase font-semibold text-slate-700 tracking-tight">
                                {title}
                            </h2>
                            <p className="text-xl text-slate-500 my-2">
                                {subTitle}
                            </p>
                            <ul>
                                {bullets.map(bullet => (
                                    <li key={uuid()}>{bullet}</li>
                                ))}
                            </ul>
                        </div>
                        <p>{date}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Experience;
