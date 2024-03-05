import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import WebFont from 'webfontloader'

import HeroSection from './components/hero.jsx'
import Destination from './pages/Detail.jsx'
import SearchPage from './pages/Search.jsx'
import Layout from './layout.jsx'

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
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* <RouterProvider router={router} /> */}
          <Route path='/' element={<HeroSection />} />
          <Route path='search' element={<SearchPage />} />
          <Route path='detail' element={<Destination />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
)
