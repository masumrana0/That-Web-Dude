import { createBrowserRouter } from "react-router-dom";
import Root from "../Common/Root/Root";
import AllCourses from "../Pages/Courses/AllCourses";
import CoursesDetails from "../Pages/Courses/CoursesDetails";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Payment from "../Pages/CoursePurches/Payment";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () =>
          fetch(` https://web-dude-server-site-masumrana44.vercel.app/courses`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/allcourses",
        element: <AllCourses />,
        loader: async () =>
          fetch(` https://web-dude-server-site-masumrana44.vercel.app/courses`),
      },
      {
        path: "/coursedetails/:id",
        element: <CoursesDetails />,
        loader: async ({ params }) =>
          fetch(
            `https://web-dude-server-site-masumrana44.vercel.app/courses/${params.id}`
          ),
      },
      {
        path: "/paywith",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
