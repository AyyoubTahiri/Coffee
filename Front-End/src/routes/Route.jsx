import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GuestLayouts from "../components/Layouts/GuestLayouts";
import Home from "../components/Home";
import Services from "../components/Services/Services";
import About from "../components/Banner/About";
import Contact from "../components/contact/Contact";
import LoginLayouts from "../components/Layouts/loginLayouts";
import GestionnaireLayouts from "../components/Layouts/gestionnaireLayouts";
import GestDashboard from "../components/AuthUser/Gestionnaire/GestDashboard";
import GestionStock from "../components/AuthUser/Gestionnaire/GestionStock";
import Login from "../Login/Login";
import GestMenu from "../components/AuthUser/Gestionnaire/GestMenu";
import AjouterElement from "../components/AuthUser/Gestionnaire/crudForm/AjouterElement";
import Analytic from "../components/AuthUser/Gestionnaire/Analytic";
import GestCompt from "../components/AuthUser/Gestionnaire/GestCompt";
import Ajoutermenu from "../components/AuthUser/Gestionnaire/crudForm/Ajoutermenu";
import Gererpersonnel from "../components/AuthUser/Gestionnaire/gererpersonnel";
import Updateperson from "../components/AuthUser/Gestionnaire/gerepersonnel/Updateperson";
import Ajouterperson from "../components/AuthUser/Gestionnaire/gerepersonnel/Ajouterperson";
import Schedule from "../components/AuthUser/Gestionnaire/Schedule";
import ClientLayouts from "../components/Layouts/ClientLayouts";
import HomeClient from "../components/AuthUser/Client/HommeClient";
import ClientMenu from "../components/AuthUser/Client/ClientMenu";
import ServiceClient from "../components/AuthUser/Client/ServiceClient";
import GestionCommande from "../components/AuthUser/Personnal/GestionCommande";
import PersonnelLayouts from "../components/Layouts/PersonnelLayouts";
import NotFoundPage from './../components/NotFound/NotFoundPage';
import { setUser } from "../components/Redux/authActions"; // Import setUser action
import ClientSpecial from "../components/AuthUser/Client/ClientSpecial";
import ReservationClient from "../components/AuthUser/Client/ReservationClient";

const DynamicRouter = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const [router, setRouter] = useState(null);

    useEffect(() => {
        const checkUser = async () => {
            const fetchedUser = JSON.parse(localStorage.getItem('user'));
            if (!user && fetchedUser) {
                dispatch(setUser(fetchedUser));
            }
        };

        checkUser();
    }, [dispatch, user]);

    const getRoleBasedRoutes = (role_id) => {
        switch (role_id) {
            case 1: // Gestionnaire
                return {
                    element: <GestionnaireLayouts />,
                    children: [
                        { path: '/gest/dashboard', element: <GestDashboard /> },
                        { path: '/gest/stock', element: <GestionStock /> },
                        { path: '/gest/ajouterstock', element: <AjouterElement /> },
                        { path: '/gest/analytic', element: <Analytic /> },
                        { path: '/gest/menu', element: <GestMenu /> },
                        { path: '/gest/compt', element: <GestCompt /> },
                        { path: '/gest/ajoutermenu', element: <Ajoutermenu /> },
                        { path: '/gest/gererperson', element: <Gererpersonnel /> },
                        { path: '/gest/updateperson', element: <Updateperson /> },
                        { path: '/gest/ajouterperson', element: <Ajouterperson /> },
                        { path: '/gest/schedule', element: <Schedule /> },
                    ]
                };
            case 2: // Client
                return {
                    element: <ClientLayouts />,
                    children: [
                        { path: '/client/home', element: <HomeClient /> },
                        { path: '/client/menu', element: <ClientMenu /> },
                        { path: '/client/service', element: <ServiceClient /> },
                        { path: '/client/special', element: <ClientSpecial /> },
                        { path: '/client/reservation', element: <ReservationClient /> },

                    ]
                };
            case 3: // Personnel
                return {
                    element: <PersonnelLayouts />,
                    children: [
                        { path: '/gest/personnel', element: <GestionCommande /> },
                    ]
                };
            default: // Guest
                return {
                    element: <GuestLayouts />,
                    children: [
                        { path: '/', element: <Home /> },
                        { path: '/services', element: <Services /> },
                        { path: '/about', element: <About /> },
                        { path: '/contact', element: <Contact /> },
                    ]
                };
        }
    };

    const routes = useMemo(() => [
        user ? getRoleBasedRoutes(user.idRole) : {
            path: '/',
            element: <GuestLayouts />,
            children: [
                { path: '/', element: <Home /> },
                { path: '/services', element: <Services /> },
                { path: '/about', element: <About /> },
                { path: '/contact', element: <Contact /> },
            ]
        },
        {
            path: '/login',
            element: <LoginLayouts />,
            children: [
                { path: '', element: <Login /> }
            ]
        },
        { path: '*', element: <NotFoundPage /> }
    ], [user]);

    useEffect(() => {
        setRouter(createBrowserRouter(routes));
    }, [routes]);

    return router ? <RouterProvider router={router} /> : null;
};

export default DynamicRouter;

// export const router= createBrowserRouter([
//     {
//         element:<GuestLayouts/>,
//         children:[
//             {
//                 path:'/',
//                 element:<Home/>,
//             },
//             {
//                 path:'/services',
//                 element:<Services/>,
//             },
            
           
//             {
//                 path:'/about',
//                 element:<About/>,
//             },
          
            
            
//         ]
//     },{
//         element:<LoginLayouts/>,
//         children:[
//             {
//                 path:'/login',
//                 element:<Login/>,
//             },
//         ]
//     },{
//         element:<GestionnaireLayouts/>,
//         children:[
//             {
//                 path:'/gest/dashboard',
//                 element:<GestDashboard/>,
//             },
//             {
//                 path:'/gest/stock',
//                 element:<GestionStock/>,
//             },
//             {
//                 path:'/gest/ajouterstock',
//                 element:<AjouterElement/>,
//             },
//             {
//                 path:'/gest/Analytic',
//                 element:<Analytic/>,
//             },
//              {
//                 path:'/gest/menu',
//                 element:<GestMenu/>,
//             },
//             {
//                 path:'/gest/Compt',
//                 element:<GestCompt/>,
//             },
//             {
//                 path:'/gest/ajoutermenu',
//                 element:<Ajoutermenu/>,
//             },
//             {
//                 path:'/gest/gererperson',
//                 element:<Gererpersonnel/>,
//             },
//             {
//                 path:'/gest/updateperson',
//                 element:<Updateperson/>,
//             },
//             {
//                 path:'/gest/ajouterperson',
//                 element:<Ajouterperson/>,
//             },
//             {
//                 path:'/gest/schedule',
//                 element:<Schedule/>,
//             },
//         ]
//     },{
//         element:<ClientLayouts/>,
//         children:[

//             {
//                 path:'/Client/Home',
//                 element:<HomeClient/>,
//             },
            
            
//             {
//                 path:'/Client/Menu',
//                 element:<ClientMenu/>,
//             },
         

           
//             {
//                 path:'/Client/service',
//                 element:<ServiceClient/>,
//             },
//             {
//                 path:'/Client/Special',
//                 element:<ClientSpecial/>,
//             },
         
//         ]
//     }
//     ,{
//         element:<PersonnelLayouts/>,
//         children:[
//             {
//                 path:'/gest/personnel',
//                 element:<GestionCommande/>,
//             }
            
            
//         ]
//     }
// ])
// export default router