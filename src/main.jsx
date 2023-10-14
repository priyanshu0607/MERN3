import "./index.css";

import { HashRouter, Route, Routes } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import About from "./components/Portfolio/About";
import Awards from "./components/Portfolio/Awards";
import Education from "./components/Portfolio/Education";
import Experience from "./components/Portfolio/Experience";
import Projects from "./components/Portfolio/Projects";
import Skills from "./components/Portfolio/Skills";
import AgeCalculator from "./screens/AgeCalculator";
import Calculator from "./screens/Calculator";
import ColorPicker from "./screens/ColorPicker";
import DummyData from "./screens/DummyData";
import ParagraphWordCounter from "./screens/ParagraphWordCounter";
import Portfolio from "./screens/Portfolio";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HashRouter basename="/">
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/age-calculator" element={<AgeCalculator />} />
                    <Route path="/calculator" element={<Calculator />} />
                    <Route path="/color-picker" element={<ColorPicker />} />
                    <Route path="/dummy-data" element={<DummyData />} />
                    <Route
                        path="/paragraph-word-counter"
                        element={<ParagraphWordCounter />}
                    />
                    <Route path="/portfolio" element={<Portfolio />}>
                        <Route path="awards" element={<Awards />} />
                        <Route path="education" element={<Education />} />
                        <Route path="experience" element={<Experience />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="skills" element={<Skills />} />
                        <Route path="/portfolio" element={<About />} />
                    </Route>
                </Route>
            </Routes>
        </HashRouter>
    </React.StrictMode>
);
