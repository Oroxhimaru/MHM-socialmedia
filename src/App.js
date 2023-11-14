import React from 'react';
import './App.css';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import RightBar from "./components/rightBar/RightBar";
import LeftBar from './components/leftBar/LeftBar';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';

function App() {

  // outlet router working
  const Layout = () => {
    return(
      <div>
        <Navbar />
        <div style={{display: 'flex'}}>
          <RightBar />
          <Outlet />
          <LeftBar />
        </div>
      </div>
    )
  }


//router of register and login
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div className="App">
    <RouterProvider router={router} />    
    </div>
  );
}

export default App;
