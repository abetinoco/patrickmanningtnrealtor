import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navigation } from '../../data/navigation'
import { agentProfile } from '../../data/agent'
import styles from './NavigationBar.module.css'

const socialIcons: Record<string, ReactNode> = {
  facebook: (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 14.84 3.44 18.87 8 19.8V13H6V10H8V7.5C8 5.57 9.57 4 11.5 4H14V7H12C11.45 7 11 7.45 11 8V10H14V13H11V19.95C16.05 19.45 20 15.19 20 10Z" />
    </svg>
  ),
  instagram: (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="1.5" y="1.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15" cy="5" r="1" fill="currentColor" />
    </svg>
  ),
  linkedin: (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M6.06 17.07H3.08V7.57H6.06V17.07ZM4.57 6.29C3.62 6.29 2.85 5.51 2.85 4.57C2.85 3.63 3.62 2.85 4.57 2.85C5.51 2.85 6.29 3.63 6.29 4.57C6.29 5.51 5.51 6.29 4.57 6.29ZM17.14 17.07H14.16V12.43C14.16 11.3 14.14 9.84 12.58 9.84C10.99 9.84 10.75 11.08 10.75 12.35V17.07H7.77V7.57H10.63V8.9H10.67C11.06 8.16 12.03 7.37 13.47 7.37C16.49 7.37 17.14 9.34 17.14 11.92V17.07Z" />
    </svg>
  ),
  tiktok: (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M14.5 0H11V13.5C11 14.88 9.88 16 8.5 16C7.12 16 6 14.88 6 13.5C6 12.17 7.06 11.09 8.37 11.01V7.47C5.09 7.56 2.5 10.21 2.5 13.5C2.5 16.81 5.19 19.5 8.5 19.5C11.81 19.5 14.5 16.81 14.5 13.5V6.48C15.89 7.47 17.59 8 19.5 8V4.5C16.65 4.5 14.5 2.35 14.5 0Z" />
    </svg>
  ),
  youtube: (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M19.59 5.2C19.37 4.38 18.74 3.75 17.92 3.53C16.42 3.13 10 3.13 10 3.13C10 3.13 3.58 3.13 2.08 3.53C1.26 3.75 0.63 4.38 0.41 5.2C0 6.7 0 10 0 10C0 10 0 13.3 0.41 14.8C0.63 15.62 1.26 16.25 2.08 16.47C3.58 16.87 10 16.87 10 16.87C10 16.87 16.42 16.87 17.92 16.47C18.74 16.25 19.37 15.62 19.59 14.8C20 13.3 20 10 20 10C20 10 20 6.7 19.59 5.2ZM8 12.87V7.13L13.2 10L8 12.87Z" />
    </svg>
  ),
  realtor: (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M10 0L0 6V8H2V18H8V13H12V18H18V8H20V6L10 0ZM12 11H8V8H12V11Z" />
    </svg>
  ),
}

export const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const bodyOverflowRef = useRef<string | null>(null)
  const petitionUrl =
    'https://www.change.org/p/give-users-control-over-social-media-algorithms?recruiter=1391582840&recruited_by_id=a9a973f0-a402-11f0-a3c4-c5a3dc6ae203&utm_source=share_petition&utm_campaign=share_petition&utm_medium=copylink&utm_content=cl_sharecopy_490822308_en-US%3A7'
  const overlayLinks = [
    { label: 'Quick Links', href: '/quicklinks' },
    { label: 'Home Valuation', href: '/sell/valuation' },
    { label: 'Sign Algorithm Petition', href: petitionUrl, external: true },
  ]
  const socialEntries = Object.entries(agentProfile.socialLinks)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (typeof document === 'undefined') return
    const bodyStyle = document.body.style

    if (isMenuOpen) {
      if (bodyOverflowRef.current === null) {
        bodyOverflowRef.current = bodyStyle.overflow
      }
      bodyStyle.overflow = 'hidden'
    } else if (bodyOverflowRef.current !== null) {
      bodyStyle.overflow = bodyOverflowRef.current
      bodyOverflowRef.current = null
    }

    return () => {
      if (bodyOverflowRef.current !== null) {
        bodyStyle.overflow = bodyOverflowRef.current
        bodyOverflowRef.current = null
      }
    }
  }, [isMenuOpen])

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)
  const closeMenu = () => setIsMenuOpen(false)

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`.trim()

  return (
    <>
      <header
        className={`${styles.navbar} ${isScrolled ? styles.navbarScrolled : ''} ${
          isMenuOpen ? styles.navbarMenuOpen : ''
        }`.trim()}
      >
        <div className={styles.inner}>
          <Link to="/" className={styles.brand} onClick={closeMenu}>
            <span className={styles.brandName}>Patrick Manning</span>
            <span className={styles.brandTagline}>Real Broker | TN & KY</span>
          </Link>

          <nav className={styles.primaryNav} aria-label="Primary">
            {navigation.map((item) => (
              <NavLink key={item.label} to={item.path} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className={styles.utilityRow}>
            <Link to="/quicklinks" className={styles.utilityButton}>
              My Quick Links
            </Link>
            <button
              className={styles.menuToggle}
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="global-mega-menu"
            >
              <span>{isMenuOpen ? 'Close' : 'Menu'}</span>
              <span className={styles.menuBars} aria-hidden="true">
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className={styles.overlay} role="dialog" aria-modal="true" id="global-mega-menu">
          <div className={styles.overlayInner}>
            <div className={styles.overlayHeader}>
              <div>
                <p className={styles.overlayEyebrow}>Navigate Patrick Manning Real Estate</p>
                <p className={styles.overlayTitle}>Make a move for your future.</p>
              </div>
              <button className={styles.overlayClose} onClick={closeMenu}>
                Close
              </button>
            </div>

            <div className={styles.overlayGrid}>
              <div className={styles.overlayPrimary}>
                {navigation.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    className={({ isActive }) =>
                      `${styles.overlayLink} ${isActive ? styles.overlayLinkActive : ''}`.trim()
                    }
                    onClick={closeMenu}
                  >
                    <span>{item.label}</span>
                    <span className={styles.overlayArrow} aria-hidden="true">
                      ↗
                    </span>
                  </NavLink>
                ))}
              </div>

              <div className={styles.overlayMeta}>
                <div className={styles.overlayGroup}>
                  <p className={styles.overlayGroupLabel}>My Quick Links</p>
                  <div className={styles.overlayChipGrid}>
                    {overlayLinks.map((item) =>
                      item.external ? (
                        <a
                          key={item.label}
                          href={item.href}
                          className={styles.overlayChip}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${item.label} (opens in a new tab)`}
                        >
                          {item.label}
                        </a>
                      ) : (
                        <NavLink
                          key={item.label}
                          to={item.href}
                          className={({ isActive }) =>
                            `${styles.overlayChip} ${isActive ? styles.overlayChipActive : ''}`.trim()
                          }
                          onClick={closeMenu}
                        >
                          {item.label}
                        </NavLink>
                      )
                    )}
                  </div>
                </div>

                <div className={styles.overlayGroup}>
                  <p className={styles.overlayGroupLabel}>Connect with Patrick</p>
                  <div className={styles.overlaySocials}>
                    {socialEntries.map(([network, url]) => (
                      <a
                        key={network}
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.socialLink}
                        aria-label={network}
                      >
                        <span className={styles.socialIcon}>{socialIcons[network] ?? '•'}</span>
                        <span className={styles.socialLabel}>{network}</span>
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
