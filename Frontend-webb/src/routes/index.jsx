import {createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "./Home";
import About from "./About";

const router = createBrowserRouter ([
    {
        path: "http://localhost:3000",
        element: <MainLayout />,
        children:[
            { index: true, element: <Home />},
            { index: "about", element: <About />},

        ],
    },
]);

export default router;