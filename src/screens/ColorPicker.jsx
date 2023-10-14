import { useState } from "react";
import { v4 as uuid } from "uuid";

const COLORS = Array(15)
    .fill("")
    .map(() => `#${Math.floor(Math.random() * 16777215).toString(16)}`);

const ColorPicker = () => {
    const [pickedColor, setPickedColor] = useState("");
    const [showColors, setShowColors] = useState(false);

    const handleColorClick = color => {
        setPickedColor(color);
        setShowColors(false);
    };

    return (
        <main className="text-center space-y-8 pb-40 mt-12">
            <h1 className="text-3xl font-bold sm:text-4xl">Color Picker</h1>
            <section className="shadow-xl h-80 flex flex-col gap-8 justify-center items-center bg-pink-300 rounded-md mx-4 sm:mx-8 md:mx-10 lg:mx-12">
                {showColors ? (
                    <div className="flex flex-wrap gap-2 justify-center">
                        {COLORS.map(color => (
                            <button
                                key={uuid()}
                                className="w-8 h-8 rounded-sm"
                                onClick={handleColorClick.bind(null, color)}
                                style={{ backgroundColor: color }}
                            ></button>
                        ))}
                    </div>
                ) : null}
                <button
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    onClick={() => setShowColors(prev => !prev)}
                    style={{ backgroundColor: pickedColor }}
                >
                    Pick a Color
                </button>
            </section>
        </main>
    );
};

export default ColorPicker;
