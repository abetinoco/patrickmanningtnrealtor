import { agentProfile } from '../../data/agent'
import styles from './SellHero.module.css'

const SELLER_QUESTIONNAIRE_URL = agentProfile.forms.sellerQuestionnaire

interface SellHeroProps {
    kicker?: string
    title: string
    subtitle?: string
    stats?: Array<{
        value: string
        label: string
    }>
}

export const SellHero = ({
    kicker = 'For Sellers',
    title,
    subtitle,
    stats,
}: SellHeroProps) => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                {kicker && <span className={styles.kicker}>{kicker}</span>}
                <h1 className={styles.title}>{title}</h1>
                {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                <a
                    href={SELLER_QUESTIONNAIRE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.ctaButton}
                >
                    Tell Patrick about your home →
                </a>
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
        </section>
    )
}
