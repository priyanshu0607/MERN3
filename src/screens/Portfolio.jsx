import { Outlet } from "react-router-dom";
import Navbar from "../components/Portfolio/Navbar";

const Portfolio = () => {
    return (
        <main className="flex min-h-screen">
            <Navbar />
            <Outlet />
        </main>
    );
};

export default Portfolio;
