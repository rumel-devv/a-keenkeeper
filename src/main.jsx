import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Router'
import TimelineProvider from './context/Timelinecontext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineProvider>  
       
       <RouterProvider router={router} > </RouterProvider>  
    
     </TimelineProvider>
  
  </StrictMode>
)
