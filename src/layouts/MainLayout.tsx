import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { NavigationBar } from '../components/navigation/NavigationBar'
import { FooterSocialDisclosure } from '../components/footer/FooterSocialDisclosure'

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
    </div>
  )
}
