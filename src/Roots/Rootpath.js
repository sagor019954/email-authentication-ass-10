import { createBrowserRouter, Router } from "react-router-dom";
import Blog from "../Common/Blog";
import Home from "../Common/Home";
import Courses from "../Components/Courses";
import Singlecourse from "../Components/Singlecourse";
import Login from "../Form/Login";
import Register from "../Form/Register";
import Layout from "./Layout";

const routes = createBrowserRouter([{
    path: '/',
    element: <Layout></Layout>,
    children: [
        {
            path: "/",
            element: <Courses></Courses>
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
        },
        {
            path: '/courses/:id',
            element: <Singlecourse></Singlecourse>,
            loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
        }
    ]
}])

export default routes;