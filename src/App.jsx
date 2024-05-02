import React from "react";
import LoginForm from './Forms/LoginForm.jsx';

import AOS from "aos";
import "aos/dist/aos.css";
import { Route, RouterProvider, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import router from "./routes/Route.jsx";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  );
};

export default App;
