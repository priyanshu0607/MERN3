import { useState } from "react";

const calculateAge = year => new Date().getFullYear() - year;

const isValidDate = dateString => {
    const date = new Date(dateString);
    if (date.getTime() !== date.getTime()) return false;
    return new Date() >= date;
};

const AgeCalculator = () => {
    const [dob, setDob] = useState("");
    const [age, setAge] = useState(null);

    const handleCalculateAge = () =>
        setAge(
            isValidDate(dob) ? calculateAge(new Date(dob).getFullYear()) : null
        );

    return (
        <main className="text-center mt-24">
            <section className="space-y-5">
                <h1 className="text-3xl font-bold sm:text-4xl">
                    Age Calculator
                </h1>
                <p className="font-bold">Enter your date of birth</p>
                <div className="grid place-content-center">
                    <input
                        type="date"
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={ev => setDob(ev.target.value)}
                        value={dob}
                    />
                </div>
                <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={handleCalculateAge}
                >
                    Calculate Age
                </button>

                {age !== null ? (
                    <p className="text-xl font-bold">
                        You are {age} year{age > 1 ? "s" : ""} old
                    </p>
                ) : (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                        Enter <span className="font-medium">Valid</span> Date
                    </p>
                )}
            </section>
        </main>
    );
};

export default AgeCalculator;
