import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import Home from './pages/Home'
import Buy from './pages/Buy'
import Sell from './pages/Sell'
import About from './pages/About'
import Contact from './pages/Contact'
import Reviews from './pages/Reviews'
import { QuickLinks } from './pages/QuickLinks'
import SearchResults from './pages/SearchResults'
import OGPreview from './pages/OGPreview'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
  // Standalone routes (no nav/footer wrapper)
  { path: '/og-preview', element: <OGPreview /> },

  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/buy', element: <Buy /> },
      { path: '/sell', element: <Sell /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/reviews', element: <Reviews /> },
      { path: '/quicklinks', element: <QuickLinks /> },
      { path: '/search-results', element: <SearchResults /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

const App = () => <RouterProvider router={router} />

export default App
