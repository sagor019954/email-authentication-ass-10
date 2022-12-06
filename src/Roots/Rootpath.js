import { createBrowserRouter, Router } from "react-router-dom";
import Blog from "../Common/Blog";
import Errorpage from "../Common/Errorpage";
import Home from "../Common/Home";
import Courses from "../Components/Courses";
import Singlecourse from "../Components/Singlecourse";
import Login from "../Form/Login";
import Register from "../Form/Register";
import Layout from "./Layout";
import Privateroute from "./Privateroute";

const routes = createBrowserRouter([{
    path: '/',
    element: <Layout></Layout>,
    errorElement: <Errorpage></Errorpage>,
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
            element: <Privateroute><Singlecourse></Singlecourse></Privateroute>,
            loader: ({ params }) => fetch(`https://learnig-platform-data-server.vercel.app/courses/${params.id}`)
        }
    ]
}])

export default routes;