import {createBrowserRouter} from "react-router";
import { Homepage } from "./pages/User/Homepage";
import { Userlayout } from "../layout/Userlayout";
import { Customerlistpage } from "../pages/User/Customerlistpage";
import { Loginpage } from "../pages/User/Loginpage";
import { Signuppage } from "../pages/User/Signuppage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Userlayout/>,
    errorElement: <h1>Error page</h1>,
    children:[
        {
            path:"",
            element:<Homepage/>

        },
        {
            path:"customers",
            element:<Customerlistpage/>
        },
        {
            path:"login",
            element:<Loginpage/>
        },
        {
            path:"signup",
            element:<Signuppage/>
        },
    ]
  },
]);