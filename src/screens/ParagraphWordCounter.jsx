import { useState } from "react";

const countWords = string => string.split(" ").filter(str => str != "").length;

const ParagraphWordCounter = () => {
    const [text, setText] = useState("");

    return (
        <main className="mt-24">
            <section className="p-4 px-8 md:p-8 md:px-16 rounded-md shadow-lg space-y-8 w-fit mx-auto">
                <h1 className="text-3xl font-bold sm:text-4xl text-center">
                    Responsive Paragraph Word Counter
                </h1>
                <textarea
                    cols="30"
                    rows="10"
                    value={text}
                    onChange={ev => setText(ev.target.value)}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                ></textarea>
                <p>
                    Word Count:{" "}
                    <span className="font-bold">{countWords(text)}</span>
                </p>
            </section>
        </main>
    );
};

export default ParagraphWordCounter;
