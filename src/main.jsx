import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home.jsx'
import Activity from './pages/Activity.jsx'
import Setting from './pages/Setting.jsx'
import Profile from './pages/Profile.jsx'
import PageNotFound from './pages/PageNotFound.jsx';
import ActivityCard from './pages/ActivityCard.jsx';
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import './index.css'

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <Home /> 
  },{ 
    path: '/activity',
    element: <Activity /> 
  },{ 
    path: '/setting',
    element: <Setting /> 
  },{ 
    path: '/profile',
    element: <Profile /> 
  },{
    path: '/activities/:id',
    element: <ActivityCard />
  },{ 
    path: "*",
    element: <PageNotFound />
  },{ 
    path: "/activity-card",
    element: <ActivityCard />
  },{ 
    path: "/login",
    element: <Login />
  },,{ 
    path: "/register",
    element: <Register />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="mobile">
    <RouterProvider router={router} />
  </div>
)
