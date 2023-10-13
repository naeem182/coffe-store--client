import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Addcoffe from './components/Addcoffe.jsx';
import Updatecoffe from './components/Updatecoffe.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path: "/addcoffe",
    element: <Addcoffe></Addcoffe>,
  },
  {
    path: "/updatecoffe",
    element: <Updatecoffe></Updatecoffe>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
