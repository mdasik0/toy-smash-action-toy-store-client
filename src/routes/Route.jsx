import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Layout/Main/Main";
import Home from "../components/Pages/HomePage/Home";
import Signup from "../components/Sign in & Sign up/Sign up/Signup";
import Signin from "../components/Sign in & Sign up/Sign in/Signin";
import AddToy from "../components/Pages/AddToyPage/AddToy";
import MyToy from "../components/Pages/MyToypage/MyToy";
import AllToys from "../components/Pages/AllToyPage/AllToys";

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
          element: <AddToy></AddToy>
        },
        {
          path:'myToys',
          element: <MyToy></MyToy>
        },
        {
          path: 'allToys',
          element: <AllToys></AllToys>
        }
      ]
    },
  ]);

export default router;