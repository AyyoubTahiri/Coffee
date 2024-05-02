import { createBrowserRouter } from "react-router-dom";
import GuestLayouts from "../components/Layouts/GuestLayouts";
import LoginForm from "../Forms/LoginForm";
import Home from "../components/Home";
import Services from "../components/Services/Services";
import Banner from "../components/Banner/Banner";
import About from "../components/Banner/About";
import Contact from "../components/contact/Contact";

export const router= createBrowserRouter([
    {
        element:<GuestLayouts/>,
        children:[
            {
                path:'/',
                element:<Home/>,
            },
            {
                path:'/services',
                element:<Services/>,
            },
            {
                path:'/login',
                element:<LoginForm/>,
            },
            {
                path:'/about',
                element:<Banner/>,
            },
            {
                path:'/aboutt',
                element:<About/>,
            },
            {
                path:'/contact',
                element:<Contact/>,
            },
            
        ]
    }
])
export default router