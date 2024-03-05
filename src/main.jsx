import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WebFont from 'webfontloader'

import HeroSection from './components/hero.jsx'
import './assets/styles/index.css'
import Destination from './pages/Detail.jsx'
import SearchPage from './pages/Search.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HeroSection />
  },
  {
    path: 'detail',
    element: <Destination />
  },
  {
    path: 'search',
    element: <SearchPage />
  }
])

WebFont.load({
  google: {
    families: ['Roboto:100,400,600,900']
  },
  active: () => {
    console.log('Fonts Active')
  },
  inactive: () => {
    console.log('Fonts Inactive');
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
