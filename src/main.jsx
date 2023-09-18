import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home.jsx'
import Activity from './Activity.jsx'
import Setting from './Setting.jsx'
import Profile from './Profile.jsx'
import './App.css'

const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/activity', element: <Activity />},
  {path: '/setting', element: <Setting />},
  {path: '/profile', element: <Profile />},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
