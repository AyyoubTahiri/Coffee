import { createBrowserRouter } from "react-router-dom";
import GuestLayouts from "../components/Layouts/GuestLayouts";
import LoginForm from "../Forms/LoginForm";
import Home from "../components/Home";
import Services from "../components/Services/Services";
import Banner from "../components/Banner/Banner";
import About from "../components/Banner/About";
import Contact from "../components/contact/Contact";
import LoginLayouts from "../components/Layouts/loginLayouts";
import GestionnaireLayouts from "../components/Layouts/gestionnaireLayouts";
import GestDashboard from "../components/AuthUser/Gestionnaire/GestDashboard";
import GestionStock from "../components/AuthUser/Gestionnaire/GestionStock";

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
                path:'/about',
                element:<About/>,
            },
            {
                path:'/contact',
                element:<Contact/>,
            },
            {
                path:'/contact',
                element:<Contact/>,
            },
            
        ]
    },{
        element:<LoginLayouts/>,
        children:[
            {
                path:'/login',
                element:<LoginForm/>,
            },
        ]
    },{
        element:<GestionnaireLayouts/>,
        children:[
            {
                path:'/gest/dashboard',
                element:<GestDashboard/>,
            },
            {
                path:'/gest/stock',
                element:<GestionStock/>,
            },
        ]
    }
])
export default router