import { v4 as uuid } from "uuid";

const AWARDS = {
    "Cryptography I": "Stanford University (Coursera)",
    "Dean's List Scholar April 2020":
        "This designation is given to students who have achieved a grade point average of 3.50 at the end of academic session.",
    "U of T Mississauga Guaranteed Entrance Scholarship":
        "Awarded to a student admitted to the University of Toronto who maintained an average of 90-91.9% in their last year of secondary school.",
    "Ontario Scholar":
        "Awarded to a student who has obtained an average of at least 80% percent in any six Grade 12 University Preparation Courses.",
    "Honour Roll Grade 9/10/11/12":
        "Awarded to a student who has obtained an average of at least 80% in any six University Preparation, University/College Preparation Courses.",
    "Kangaroo Mathematical Competition":
        "Competed in the Kangaroo Mathematics Competition and placed 47 out of 8742 participants. Largest Mathematical Competition for school students in the world, with over 50 countries participating.",
    "Mathematical Achievement Award":
        "Awarded to a student who has obtained the highest average in the respective course.",
};

const Awards = () => {
    return (
        <section className="my-auto space-y-8">
            <h1 className="text-5xl uppercase font-bold tracking-tighter leading-none text-[#343a40]">
                Honors, Awards & Certifications
            </h1>
            <ul className="space-y-1.5">
                {Object.entries(AWARDS).map(([key, value]) => (
                    <li key={uuid()} className="relative pl-6">
                        <span className="absolute left-0">🏆</span>
                        <span className="text-slate-600 font-semibold">
                            {key}
                        </span>
                        - <span className="text-slate-500">{value}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Awards;
