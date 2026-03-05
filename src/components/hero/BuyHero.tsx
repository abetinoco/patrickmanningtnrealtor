import { agentProfile } from '../../data/agent'
import { PropertySearchForm } from '../search/PropertySearchForm'
import styles from './BuyHero.module.css'

const BUYER_QUESTIONNAIRE_URL = agentProfile.forms.buyerQuestionnaire

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
                        <PropertySearchForm variant="hero" />
                    </div>

                    <div className={styles.orDivider}>
                        <span>or</span>
                    </div>

                    <a
                        href={BUYER_QUESTIONNAIRE_URL}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.questionnaireLink}
                    >
                        Tell Patrick what you're looking for →
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

            </div>
        </section>
    )
}
