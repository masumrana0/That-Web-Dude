import { createBrowserRouter } from "react-router-dom";
import Root from "../Common/Root/Root";
import Login from "../Pages/Login/Login";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        children:[
            {
              path:'/login',element:<Login/>
            }
        ]
    }
])