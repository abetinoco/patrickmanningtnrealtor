import { PropertySearchForm } from '../search/PropertySearchForm'
import styles from './BuyHero.module.css'

interface BuyHeroProps {
    kicker?: string
    title: string
    subtitle?: string
    stats?: Array<{
        value: string
        label: string
    }>
}

export const BuyHero = ({
    kicker = 'For Buyers',
    title,
    subtitle,
    stats,
}: BuyHeroProps) => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    {kicker && <span className={styles.kicker}>{kicker}</span>}
                    <h1 className={styles.title}>{title}</h1>
                    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

                    <div className={styles.searchBar}>
                        <PropertySearchForm variant="page" />
                    </div>

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
