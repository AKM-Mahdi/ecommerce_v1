import { createBrowserRouter } from "react-router-dom";
import Main from "../LAYOUTS/Main/Main";
import Home from "../PAGES/Home/Home";
import SignIn from "../PAGES/SignIn/SignIn";
import SignUp from "../PAGES/SignUp/SignUp";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

export default routes;
