import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home.jsx'
import Activity from './pages/Activity.jsx'
import Setting from './pages/Setting.jsx'
import Profile from './pages/Profile.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import ActivityCard from './pages/ActivityCard.jsx';
import './index.css'
import ActivityList from './components/ActivityList.jsx';
import ActivityListPage from './pages/ActivityListPage.jsx';
import WelcomePage from './pages/welcome-page.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <WelcomePage/> 
  },
  { 
    path: '/register', 
    element: <RegisterPage/> 
  },{ 
    path: '/login', 
    element: <LoginPage/> 
  },{ 
    path: '/home', 
    element: <Home /> 
  },{ 
    path: '/activity',
    element: <ActivityListPage/> 
  }
  ,{
    path: '/activityform',
    element: <Activity/>
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
    path: '/dashboard/:id',
    element: <Dashboard />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="mobile">
    <RouterProvider router={router} />
    <ToastContainer />
  </div>
)
