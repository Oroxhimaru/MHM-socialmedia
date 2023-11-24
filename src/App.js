import React, { useContext } from 'react';
import './App.css';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import RightBar from "./components/rightBar/RightBar";
import LeftBar from './components/leftBar/LeftBar';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import './style.scss';
import { DarkModeContext } from './context/DarkModeContext';
import { AuthContext } from './context/AuthContext';

function App() {
  
  //useContextt work
  const {darkMode} = useContext(DarkModeContext)

  // without backend just for client side 
  /*const currentUser = true; */
  const {currentUser} = useContext(AuthContext);

  //protect the route, transfer into login page if not login
  const ProtectedRoute = ({ children }) => {
    if(!currentUser){
      return <Navigate  to="/login" />;
    }
    return children
  };

  // outlet router working
  const Layout = () => {
    return(
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{display: 'flex'}}>
          <LeftBar />
          <div style={{ flex: 6 }}>
          <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    )
  }


//router of register and login and many (the child of protectedRoute is layout here )
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><Layout /></ProtectedRoute>,
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
