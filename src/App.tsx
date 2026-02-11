import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import Home from './pages/Home'
import Buy from './pages/Buy'
import BuySold from './pages/BuySold'
import Sell from './pages/Sell'
import About from './pages/About'
import Contact from './pages/Contact'
import Reviews from './pages/Reviews'
import Blog from './pages/Blog'
import { QuickLinks } from './pages/QuickLinks'
import AreaGuide from './pages/areas/AreaGuide'
import SearchResults from './pages/SearchResults'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/buy', element: <Buy /> },
      { path: '/buy/sold', element: <BuySold /> },
      { path: '/buy-sold', element: <BuySold /> },
      { path: '/sell', element: <Sell /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/reviews', element: <Reviews /> },
      { path: '/blog', element: <Blog /> },
      { path: '/quicklinks', element: <QuickLinks /> },
      { path: '/areas/:slug', element: <AreaGuide /> },
      { path: '/search-results', element: <SearchResults /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

const App = () => <RouterProvider router={router} />

export default App
