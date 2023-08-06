import { createBrowserRouter } from "react-router-dom";
import { Error, Home } from "../pages";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "*",
        element: <Error/>
    },
]) 