import Home from './pages/Home';
import Comics from './pages/Comics';
import Hero from './pages/Hero';
import ErrorPage from './pages/Error';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { createContext, useState } from 'react';

export const ThemeContext = createContext(null);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/hero/:heroId",
    element: <Hero/>
  },
  {
    path: "/comics/:comicsId",
    element: <Comics/>
  },   
]);

function App() {
  const [theme, setTheme] = useState("bg--main");
  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <RouterProvider router={router} />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
