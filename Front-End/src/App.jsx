import React from "react";
// import LoginForm from './Forms/LoginForm.jsx';

import AOS from "aos";
import "aos/dist/aos.css";
import { Route, RouterProvider, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import router from "./routes/Route.jsx";
import { Provider } from 'react-redux';
import DynamicRouter from "./routes/Route.jsx";
import store from './components/Redux/Store';

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
    {/* <RouterProvider router={router}/> */}
    <Provider store={store}>
      <DynamicRouter/>
    </Provider>
    </div>
  );
};

export default App;
