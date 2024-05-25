import { createBrowserRouter } from "react-router-dom";
import GuestLayouts from "../components/Layouts/GuestLayouts";
// import LoginForm from "../Forms/LoginForm";
import Home from "../components/Home";
import Services from "../components/Services/Services";
import Banner from "../components/Banner/Banner";
import About from "../components/Banner/About";
import Contact from "../components/contact/Contact";
import LoginLayouts from "../components/Layouts/loginLayouts";
import GestionnaireLayouts from "../components/Layouts/gestionnaireLayouts";
import GestDashboard from "../components/AuthUser/Gestionnaire/GestDashboard";
import GestionStock from "../components/AuthUser/Gestionnaire/GestionStock";

import Login from "../Login/Login";
import GestMenu from "../components/AuthUser/Gestionnaire/GestMenu";
import AjouterElement from "../components/AuthUser/Gestionnaire/crudForm/ajouterElement";
import Analytic from "../components/AuthUser/Gestionnaire/Analytic";
import GestCompt from "../components/AuthUser/Gestionnaire/GestCompt";

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
          
            
            
        ]
    },{
        element:<LoginLayouts/>,
        children:[
            {
                path:'/login',
                element:<Login/>,
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
            {
                path:'/gest/ajouter',
                element:<AjouterElement/>,
            },
            {
                path:'/gest/Analytic',
                element:<Analytic/>,
            },
             {
                path:'/gest/menu',
                element:<GestMenu/>,
            },
            {
                path:'/gest/Compt',
                element:<GestCompt/>,
            },
            
        ]
    }
])
export default router