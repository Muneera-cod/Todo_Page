import { createBrowserRouter } from "react-router-dom";
import TodoPage from "../../Components/Pages/TodoPage";

export const router=createBrowserRouter([
  
    {
        path:'/',
        element:<TodoPage/>

    }
])