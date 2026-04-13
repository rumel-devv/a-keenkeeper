import { createBrowserRouter } from "react-router";
import Mainlayout from "../layout/Mainlayout";
import Homepage from "../pages/Homepage";
import TimelinePage from "../pages/TimelinePage";
import Stats from "../pages/Stats";
import ErrorPage from "../Componetns/ui/ErrorPage";


export const router = createBrowserRouter([
    {path:'/',
     element: <Mainlayout/>,
     children:[
        {index:true,
         element:<Homepage></Homepage>   
        },
        {path:'timeline',
         element:<TimelinePage/> 
        },
        {path:'stats',
         element:<Stats/>   
        }
     ],
     errorElement:<ErrorPage></ErrorPage>   
    }
])