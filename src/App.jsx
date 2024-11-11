import './App.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import ProductsSection from './components/Products'
import AboutSection from './components/About'
import OtcProductSection from './components/OtcProductSection' 
import Course from './components/Course'
import Footer from './components/Footer'
import AboutUs from './components/pages/AboutUs';

function App() {
  const router =createBrowserRouter ([
    {
      path:'/',
      element:
      <>
      <Navbar/>
      <Slider/>
      <ProductsSection/>
      <AboutSection/>
      <OtcProductSection/>
      <Course/>
      <Footer/>
      </>
    },
    {
      path:'/components/pages/AboutUs',
      element:<><Navbar/><AboutUs /><AboutSection/><Footer/></>
    },
    {
      path:'/#product',
      element:<></>
    },
    {
      path:'/#otcproductSec',
      element:<></>
    },
    {
      path:'/#contact',
      element:<></>
    }
  
  ])
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
