import Layout from "../components/layout/Layout";
import Login from "../pages/login/Login";

export const ROUTES = [
    {
        path: "/",
        element: <Layout/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    
]