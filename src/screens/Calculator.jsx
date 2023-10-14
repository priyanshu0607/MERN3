import { useState } from "react";
import { v4 as uuid } from "uuid";
import Backspace from "../assets/Backspace";
import Minus from "../assets/Minus";
import Multiply from "../assets/Multiply";
import Plus from "../assets/Plus";

const parseExpression = string => {
    // remove * from string
    let newString = string.replaceAll("*", "x");

    // remove / from string
    newString = string.replaceAll("/", "➗");

    return newString;
};

const Calculator = () => {
    const [expression, setExpression] = useState("");
    const [history, setHistory] = useState([]);
    const [result, setResult] = useState(null);

    const handleExpressionChange = char => {
        setExpression(prev => prev.concat(char));
    };

    const handleEvaluateExpression = () => {
        setResult(eval(expression));
        setHistory(prev => [...prev, expression]);
        setExpression("");
    };

    const handleBackspace = () =>
        setExpression(prev => prev.slice(0, prev.length - 1));

    return (
        <main className="h-screen grid place-content-center bg-gradient-to-l from-green-400 to-blue-500">
            <section className="rounded-xl bg-[#172D67] overflow-hidden">
                <div className="min-h-[12rem] max-h-[16rem] min-w-full flex flex-col p-4 sm:p-6 md:p-8 text-right gap-8">
                    <section className="min-h-[2rem] max-h-[5rem] w-full overflow-y-scroll text-slate-400 flex flex-col-reverse">
                        {history.reverse().map(exp => (
                            <p key={uuid()}>{parseExpression(exp)}</p>
                        ))}
                    </section>
                    <section className="flex-1 text-slate-300 flex flex-col justify-end">
                        <p className="text-xl">{parseExpression(expression)}</p>
                        <p className="h-8 text-xl">{result}</p>
                    </section>
                </div>
                <section className="bg-[#060C26] font-bold text-xl text-slate-200 flex p-4 sm:p-6 md:p-8">
                    <div className="flex-grow grid grid-cols-3">
                        <button
                            className="p-4 sm:p-6 md:p-8"
                            onClick={handleExpressionChange.bind(null, "7")}
                        >
                            7
                        </button>
                        <button
                            className="p-4 sm:p-6 md:p-8"
                            onClick={handleExpressionChange.bind(null, "8")}
                        >
                            8
                        </button>
                        <button
                            className="p-4 sm:p-6 md:p-8"
                            onClick={handleExpressionChange.bind(null, "9")}
                        >
                            9
                        </button>

                        <button
                            className="p-4 sm:p-6 md:p-8"
                            onClick={handleExpressionChange.bind(null, "4")}
                        >
                            4
                        </button>
                        <button
                            className="p-4 sm:p-6 md:p-8"
                            onClick={handleExpressionChange.bind(null, "5")}
                        >
                            5
                        </button>
                        <button
                            className="p-4 sm:p-6 md:p-8"
                            onClick={handleExpressionChange.bind(null, "6")}
                        >
                            6
                        </button>

                        <button
                            className="p-4 sm:p-6 md:p-8"
                            onClick={handleExpressionChange.bind(null, "1")}
                        >
                            1
                        </button>
                        <button
                            className="p-4 sm:p-6 md:p-8"
                            onClick={handleExpressionChange.bind(null, "2")}
                        >
                            2
                        </button>
                        <button
                            className="p-4 sm:p-6 md:p-8"
                            onClick={handleExpressionChange.bind(null, "3")}
                        >
                            3
                        </button>

                        <button
                            className="p-4 sm:p-6 md:p-8"
                            onClick={handleExpressionChange.bind(null, "0")}
                        >
                            0
                        </button>
                        <button
                            className="p-4 sm:p-6 md:p-8"
                            onClick={handleExpressionChange.bind(null, ".")}
                        >
                            .
                        </button>
                        <button
                            className="p-4 sm:p-6 md:p-8"
                            onClick={handleEvaluateExpression}
                        >
                            =
                        </button>
                    </div>
                    <div className="flex flex-col justify-between items-center">
                        <button
                            className="p-4 w-16 h-16 md:w-[4.5rem] md:h-[4.5rem] grid place-content-center"
                            onClick={handleBackspace}
                        >
                            <Backspace />
                        </button>
                        <button
                            className="p-4 font-bold text-3xl"
                            onClick={handleExpressionChange.bind(null, "/")}
                        >
                            ÷
                        </button>
                        <button
                            className="p-4 w-12 h-12 md:w-[3.5rem] md:h-[3.5rem]"
                            onClick={handleExpressionChange.bind(null, "*")}
                        >
                            <Multiply />
                        </button>
                        <button
                            className="p-4 w-12 h-12 md:w-[3.5rem] md:h-[3.5rem]"
                            onClick={handleExpressionChange.bind(null, "-")}
                        >
                            <Minus />
                        </button>
                        <button
                            className="p-4 w-[3.5rem] h-[3.5rem] md:w-16 md:h-16"
                            onClick={handleExpressionChange.bind(null, "+")}
                        >
                            <Plus />
                        </button>
                    </div>
                </section>
            </section>
        </main>
    );
};

export default Calculator;
