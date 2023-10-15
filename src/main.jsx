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
import SignIn from './components/Login/SignIn.jsx';
import Signup from './components/Registration/signup.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path: "/signup",
    element: <Signup></Signup>
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },
  {
    path: "/addcoffee",
    element: <Addcoffe></Addcoffe>,
  },
  {
    path: "/updatecoffee/:id",
    element: <Updatecoffe></Updatecoffe>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
