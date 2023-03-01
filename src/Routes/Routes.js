import { createBrowserRouter } from "react-router-dom";
import Root from "../Common/Root/Root";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        children:[
            {
              path:'/login',element:<Login/>
            },
            {
                path:'register',element:<Register/>
            }
        ]
    }
])