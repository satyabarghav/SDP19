import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import About from './pages/Aboutus.jsx'
import Contact from './pages/Contact.jsx'
import Admin from './pages/Admin.jsx'
import Educator from './pages/Educator.jsx'
import Citizen from './pages/Citizen.jsx'


import { RouterProvider, createBrowserRouter,BrowserRouter as Rooter } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path : '/',
    element : <Home />, 
  },
  {
    path : '/about',
    element : <About />, 
  },
  {
    path : '/contact',
    element : <Contact />, 
  },
  {
    path : '/admin',
    element : <Admin />, 
  },
  {
    path : '/educator',
    element : <Educator />, 
  },
  {
    path : '/citizen',
    element : <Citizen />, 
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
