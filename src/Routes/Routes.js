import { createBrowserRouter } from "react-router-dom";
import Root from "../Common/Root/Root";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        children:[
            {
                
            }
        ]
    }
])