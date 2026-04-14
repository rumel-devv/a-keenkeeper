import { createBrowserRouter } from "react-router";
import Mainlayout from "../layout/Mainlayout";
import Homepage from "../pages/Homepage";
import TimelinePage from "../pages/TimelinePage";
import Stats from "../pages/Stats";
import ErrorPage from "../Componetns/ui/ErrorPage";
import FriendsDtls from "../pages/friendsdetals/FriendsDtls";


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
        },
         {
        path:'/friendetails/:id',
        element:<FriendsDtls/> 
      }
     ],
     errorElement:<ErrorPage></ErrorPage>   
    }
])