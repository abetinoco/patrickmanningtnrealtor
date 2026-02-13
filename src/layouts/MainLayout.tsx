import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { NavigationBar } from '../components/navigation/NavigationBar'
import { FooterSocialDisclosure } from '../components/footer/FooterSocialDisclosure'
import { FloatingContactBar } from '../components/navigation/FloatingContactBar'

export const MainLayout = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div>
      <NavigationBar />
      <main>
        <Outlet />
      </main>
      <FooterSocialDisclosure />
      {location.pathname !== '/search-results' && <FloatingContactBar />}
      {/* Disable Vercel Analytics on search-results: its viewport-coverage script has an
          illegal top-level return that throws and breaks IDX pagination in the iframe. */}
      {location.pathname !== '/search-results' && <Analytics />}
    </div>
  )
}
