import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navigation } from '../../data/navigation'
import { agentProfile } from '../../data/agent'
import styles from './NavigationBar.module.css'

export const NavigationBar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const toggleMobileMenu = () => setIsMobileOpen((prev) => !prev)
  const closeMobileMenu = () => setIsMobileOpen(false)

  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand} onClick={closeMobileMenu}>
          <span className={styles.brandName}>Patrick Manning</span>
          <span className={styles.brandTagline}>
            <span className={styles.divider}> | </span>
            <span className={styles.luxuryText}>Luxury Advisory</span>
          </span>
        </Link>

        <nav className={styles.navLinks} aria-label="Primary">
          {navigation.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`.trim()
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <span className={styles.contactChip}>{agentProfile.phone}</span>
          <Link to="/contact" className="cta-button">
            Start a Conversation
          </Link>
        </div>

        <button className={styles.menuButton} onClick={toggleMobileMenu}>
          {isMobileOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {isMobileOpen && (
        <div className={styles.mobileMenu}>
          {navigation.map((item) => (
            <div key={item.label}>
              <NavLink
                to={item.path}
                className={styles.mobileLink}
                onClick={closeMobileMenu}
              >
                {item.label}
              </NavLink>
              {item.children && (
                <div className={styles.mobileSubMenu}>
                  {item.children.map((child) => (
                    <NavLink
                      key={child.label}
                      to={child.path}
                      className={styles.mobileSubLink}
                      onClick={closeMobileMenu}
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  )
}
