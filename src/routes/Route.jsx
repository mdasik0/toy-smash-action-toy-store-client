import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Layout/Main/Main";
import Home from "../components/Pages/HomePage/Home";
import Signup from "../components/Sign in & Sign up/Sign up/Signup";
import Signin from "../components/Sign in & Sign up/Sign in/Signin";
import AddToy from "../components/Pages/AddToyPage/AddToy";
import MyToy from "../components/Pages/MyToypage/MyToy";
import AllToys from "../components/Pages/AllToyPage/AllToys";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path:'signUp',
          element:<Signup></Signup>
        },
        {
          path:'signIn',
          element:<Signin></Signin>
        },
        {
          path:'addToys',
          element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
          path:'myToys',
          element: <PrivateRoute><MyToy></MyToy></PrivateRoute>
        },
        {
          path: 'allToys',
          element: <PrivateRoute><AllToys></AllToys></PrivateRoute>
        }
      ]
    },
  ]);

export default router;