import { Outlet, useLocation } from "react-router-dom";

import Navbar from "./components/ui/Navbar";

const App = () => {
    const { pathname } = useLocation();

    return (
        <main className="">
            <Navbar />
            {pathname === "/" ? (
                <h1>Select anything from above Navbar</h1>
            ) : (
                <Outlet />
            )}
        </main>
    );
};

export default App;
