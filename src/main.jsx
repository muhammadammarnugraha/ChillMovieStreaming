import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import './index.css'
import Register from './assets/Pages/Register.jsx'
import Login from './assets/Pages/Login.jsx'
import Home from './assets/Pages/Home.jsx'
import DaftarSaya from './assets/Pages/DaftarSaya.jsx';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <Login/> */}
//     {/* <Register/> */}
//     <Home/>
//   </StrictMode>,
// )

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/home/daftarSaya",
    element: <DaftarSaya/>,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
