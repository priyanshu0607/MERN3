import { Link } from "react-router-dom";

const About = () => {
    return (
        <section className="my-auto">
            <div className="space-y-2">
                <h1 className="text-[6rem] uppercase font-bold tracking-tighter leading-none">
                    Priyanshu Sharma
                </h1>
                <p className="text-2xl text-slate-500">
                    India, on{" "}
                    <Link
                        to="mail:priyanshu@gmail.com"
                        className="text-black hover:underline"
                    >
                        priyanshu@gmail.com
                    </Link>
                </p>
            </div>
            <div className="my-16 text-slate-500 text-lg space-y-8">
                <p>
                    Hi, I&apos;m Arslan. I completed my Bachelor’s in Computer
                    Science with a minor in Mathematics and Philosophy from the
                    University of Toronto. I am interested in opportunities
                    where I can deploy my analytical, problem-solving, and
                    communication skills. My wide range of academic and
                    professional experiences allows me to bring a diverse set of
                    skills to every task that I am held accountable. My ultimate
                    goal is to contribute to innovations of positive change. The
                    work is ongoing education for me, so I am always open to
                    meet new people, suggestions, and exciting opportunities. My
                    current goals are to self-study more in-depth about
                    Networking and Cyber Security and work on different projects
                    to improve my skills.
                </p>

                <p>
                    When I&apos;m not working, you will find me practising Judo
                    and Muay Thai. In the winter, I am a novice skier. During
                    the warmer months here in Toronto, I enjoy mountain biking.
                    I follow several actions, martial arts and comedy genre
                    movies. I am an aspiring chef and like to spend my free time
                    exploring the latest technology advancements in Networking
                    and Cyber Security.
                </p>
            </div>
        </section>
    );
};

export default About;
