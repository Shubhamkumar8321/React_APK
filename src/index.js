import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home';
import About from './components/About';
import Contect from './components/Contect';
import User from './components/User';
import GitHub from './components/GitHub';

const router=createBrowserRouter([
  {
    path:'/',element:<Layout/>,
    children:[
      {path:'',element:<Home/>},
      {path:'about',element:<About/>},
      {path:'contect',element:<Contect/>},
      {path:'github',element:<GitHub/>},
      {path:'User/:userid',element:<User/>}
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
