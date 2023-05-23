import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Layout/Main/Main";
import Home from "../components/Pages/HomePage/Home";
import Signup from "../components/Sign in & Sign up/Sign up/Signup";
import Signin from "../components/Sign in & Sign up/Sign in/Signin";
import AddToy from "../components/Pages/AddToyPage/AddToy";
import MyToy from "../components/Pages/MyToypage/MyToy";
import AllToys from "../components/Pages/AllToyPage/AllToys";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SinglePage from "../components/Pages/SinglePage/SinglePage";
import Update from "../components/Pages/UpdatePage/Update";
import Blog from "../components/Pages/Blogpage/Blog";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import Toy from "../components/Pages/Toy/Toy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "signUp",
        element: <Signup></Signup>,
      },
      {
        path: "signIn",
        element: <Signin></Signin>,
      },

      {
        path: "addToys",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "myToys",
        element: (
          <PrivateRoute>
            <MyToy></MyToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`https://b7a11-toy-marketplace-server-side-mdasik0.vercel.app/singleData/${params.id}`),
      },
      {
        path: "/toy/:id",
        element: (
          <PrivateRoute>
            <Toy></Toy>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://b7a11-toy-marketplace-server-side-mdasik0.vercel.app/singleData/${params.id}`),
      },
      {
        path: "allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/singlePage/:id",
        element: (
          <PrivateRoute>
            <SinglePage></SinglePage>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://b7a11-toy-marketplace-server-side-mdasik0.vercel.app/Category/${params.id}`),
      },
    ],
  },
]);

export default router;
