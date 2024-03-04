import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WebFont from 'webfontloader'

import HeroSection from './components/hero.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HeroSection/>
  }
  ])

WebFont.load({
  google: {
    families: ['Roboto:400,700']
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
