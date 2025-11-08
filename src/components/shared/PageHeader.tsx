import type { CSSProperties } from 'react'
import styles from './PageHeader.module.css'

interface PageHeaderProps {
  kicker?: string
  title: string
  subtitle?: string
  backgroundImage?: string
  profileImage?: string
}

export const PageHeader = ({ kicker, title, subtitle, backgroundImage, profileImage }: PageHeaderProps) => {
  const backgroundStyle = backgroundImage
    ? ({ '--page-header-image': `url(${backgroundImage})` } as CSSProperties)
    : undefined

  return (
    <section className={`${styles.section} ${profileImage ? styles.withProfile : ''}`} style={backgroundStyle}>
      <div className={styles.inner}>
        {profileImage && (
          <div className={styles.profileContainer}>
            <img src={profileImage} alt="Profile" className={styles.profileImage} />
          </div>
        )}
        <div className={styles.content}>
          {kicker && <span className={styles.kicker}>{kicker}</span>}
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      </div>
    </section>
  )
}
