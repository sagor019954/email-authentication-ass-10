import { createBrowserRouter, Router } from "react-router-dom";
import Blog from "../Common/Blog";
import Home from "../Common/Home";
import Courses from "../Components/Courses";
import Login from "../Form/Login";
import Register from "../Form/Register";
import Layout from "./Layout";

const routes = createBrowserRouter([{
    path: '/',
    element: <Layout></Layout>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: '/home',
            element: <Home></Home>
        },
        {
            path: '/courses',
            element: <Courses></Courses>
        },
        {
            path: '/blog',
            element: <Blog></Blog>,
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: "/login",
            element: <Login></Login>
        }
    ]
}])

export default routes;