import { Link } from 'react-router-dom'
import styles from './BuyHero.module.css'

interface BuyHeroProps {
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

export const BuyHero = ({
    kicker = 'For Buyers',
    title,
    subtitle,
    ctaButton,
    stats,
}: BuyHeroProps) => {
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
                            <img src="/media/buy.jpg" alt="Beautiful home in Middle Tennessee" loading="eager" />
                        </div>
                        <div className={styles.visualOverlay}>
                            <span className={styles.visualBadge}>New Listings Daily</span>
                        </div>
                    </div>
                    <div className={styles.visualAccent} aria-hidden="true" />
                </div>
            </div>
        </section>
    )
}
