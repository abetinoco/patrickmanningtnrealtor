import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import Home from './pages/Home'
import Buy from './pages/Buy'
import BuySold from './pages/BuySold'
import Sell from './pages/Sell'
import SellValuation from './pages/SellValuation'
import About from './pages/About'
import Contact from './pages/Contact'
import Reviews from './pages/Reviews'
import Blog from './pages/Blog'
import { QuickLinks } from './pages/QuickLinks'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/buy', element: <Buy /> },
      { path: '/buy/sold', element: <BuySold /> },
      { path: '/sell', element: <Sell /> },
      { path: '/sell/valuation', element: <SellValuation /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/reviews', element: <Reviews /> },
      { path: '/blog', element: <Blog /> },
      { path: '/quicklinks', element: <QuickLinks /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

const App = () => <RouterProvider router={router} />

export default App
