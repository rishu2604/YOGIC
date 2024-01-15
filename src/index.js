import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginComponent from './components/login';
import RegisterComponent from './components/register';
import Home from './components/home';
import FormComponent from './components/form';
import NavbarComponent from "./components/navbar"
import HomePage from './Pages/homepage';
import FormPage from './Pages/formpage';

// import AboutComponent from './components/about'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginComponent/>
  },
  {
    path: "/register", 
    element: <RegisterComponent/>
  },
  {
    path: "/home", 
    element: <Home/>
  },
  {
    path: "/form", 
    element: <FormComponent/>
  },
  {
    path: "/navbar",
    element: <NavbarComponent/>
  },
  {
    path: "/homepage",
    element: <HomePage/>
  },
  {
    path: "/formpage",
    element: <FormPage/>
  },

  // {
  //   path: "/about",
  //   element: <AboutComponent/>
  // }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
