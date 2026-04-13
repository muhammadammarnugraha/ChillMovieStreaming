import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import useStoreFilm from './assets/Stores/Store';

import Login from './assets/Pages/Login.jsx';
import Register from './assets/Pages/Register.jsx';
import Home from './assets/Pages/Home.jsx';
import DaftarSaya from './assets/Pages/DaftarSaya.jsx';

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/home", element: <Home /> },
  { path: "/home/daftarSaya", element: <DaftarSaya /> },
]);

const App = () => {
  const fetchFilm = useStoreFilm((state) => state.fetchFilm);
  const fetchDaftarSaya = useStoreFilm((state) => state.fetchDaftarSaya);


  useEffect(() => {
    fetchFilm();
    fetchDaftarSaya();
  }, []);

  return <RouterProvider router={router} />;
};

export default App;