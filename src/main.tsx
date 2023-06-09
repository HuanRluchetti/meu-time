import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

// Páginas
import {Home, NewPost} from "./routes";

const router = createBrowserRouter([
  {
    element: <App/>,
    children:[
      {
        path: "/",
        element:<Home/>,
      },
      {
        path: "/new",
        element:<NewPost/>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
