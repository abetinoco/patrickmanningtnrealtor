import { useEffect, useState } from 'react'
import { agentProfile } from '../../data/agent'
import styles from './FloatingContactBar.module.css'

export const FloatingContactBar = () => {
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show when scrolling up or near top, hide when scrolling down
      if (currentScrollY < 100) {
        setVisible(true)
      } else if (currentScrollY < lastScrollY) {
        setVisible(true)
      } else if (currentScrollY > lastScrollY) {
        setVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={`${styles.bar} ${visible ? styles.visible : styles.hidden}`}>
      <div className={styles.profile}>
        <img 
          src="/media/patrick.png" 
          alt="Patrick Manning" 
          className={styles.avatar}
        />
        <div className={styles.info}>
          <span className={styles.name}>{agentProfile.name}</span>
          <span className={styles.role}>Realtor</span>
        </div>
      </div>
      
      <div className={styles.actions}>
        <a href="/contact" className={styles.contactBtn}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
          </svg>
          <span>Contact Me</span>
        </a>
        
        <button onClick={scrollToTop} className={styles.topBtn} aria-label="Back to top">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </button>
      </div>
    </div>
  )
}
