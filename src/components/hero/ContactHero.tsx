import { Link } from 'react-router-dom'
import styles from './ContactHero.module.css'

interface ContactHeroProps {
    kicker?: string
    title: string
    subtitle?: string
    ctaButton?: {
        label: string
        href: string
    }
    stats?: Array<{
        value: string
        label: string
    }>
}

export const ContactHero = ({
    kicker = 'Contact',
    title,
    subtitle,
    ctaButton,
    stats,
}: ContactHeroProps) => {
    const isExternal = ctaButton?.href.startsWith('http')

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    {kicker && <span className={styles.kicker}>{kicker}</span>}
                    <h1 className={styles.title}>{title}</h1>
                    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

                    {ctaButton && (
                        isExternal ? (
                            <a href={ctaButton.href} className={styles.ctaButton} target="_blank" rel="noreferrer">
                                {ctaButton.label}
                            </a>
                        ) : (
                            <Link to={ctaButton.href} className={styles.ctaButton}>
                                {ctaButton.label}
                            </Link>
                        )
                    )}

                    {stats && stats.length > 0 && (
                        <div className={styles.stats}>
                            {stats.map((stat, index) => (
                                <div key={index} className={styles.stat}>
                                    <span className={styles.statValue}>{stat.value}</span>
                                    <span className={styles.statLabel}>{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className={styles.visual}>
                    <div className={styles.visualCard}>
                        <div className={styles.visualImage}>
                            <img src="/media/contact.webp" alt="Patrick Manning Contact" loading="eager" />
                        </div>
                        <div className={styles.visualOverlay}>
                            <span className={styles.visualBadge}>Available Daily</span>
                        </div>
                    </div>
                    <div className={styles.visualAccent} aria-hidden="true" />
                </div>
            </div>
        </section>
    )
}
