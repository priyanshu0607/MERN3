import { v4 as uuid } from "uuid";
const EDUCATION = [
    {
        title: "University of Toronto",
        subTitle: "Honours Bachelor’s of Science",
        bullets: {
            "Main Subjects":
                "Computer Science Major, Mathematics Minor, Law & Political Philosophy Minor",
            "Relevant Courses":
                "Security Capstone Design Course, Computer Security, Software Engineering, Computer Networks, Algorithm Design and Analysis, Databases, Programming on the Web",
            "Activities & Societies":
                "Mathematics and Computational Science Society (MCSS), UTM Students Union, UTM Hack Lab, UofT Hart House Judo Club & UTM Eagles Rugby (2017-18)",
        },
        timePeriod: "September 2015 - July 2020",
    },
    {
        title: "Ascension of Our Lord Secondary School",
        subTitle: "Ontario Secondary School Diploma",
        bullets: {
            "Relevant Courses":
                "Mathematics, Computer Science, Physics, Chemistry",
            "Activities & Societies":
                "Physics Club, Track & Field Club, Yearbook Editor",
        },
        timePeriod: "September 2011 - June 2015",
    },
];

const Education = () => {
    return (
        <section className="my-auto space-y-12 pr-8">
            <h1 className="text-5xl uppercase font-bold tracking-tighter leading-none text-[#343a40]">
                Education
            </h1>
            <ul className="space-y-12">
                {EDUCATION.map(({ title, subTitle, bullets, timePeriod }) => (
                    <li key={uuid()} className="flex">
                        <div className="flex-grow">
                            <h2 className="text-3xl uppercase font-semibold text-slate-700 tracking-tight">
                                {title}
                            </h2>
                            <p className="text-xl text-slate-500 my-2">
                                {subTitle}
                            </p>
                            <ul className="mt-4">
                                {Object.entries(bullets).map(([key, value]) => (
                                    <li key={uuid()}>
                                        <span className="font-semibold text-slate-600">
                                            {key}
                                        </span>
                                        :{" "}
                                        <span className="text-slate-500">
                                            {value}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="text-slate-600">{timePeriod}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Education;
