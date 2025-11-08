import { serviceTiers } from '../../data/services'
import styles from './ServiceTierSection.module.css'

export const ServiceTierSection = () => (
  <section className={styles.section} id="services" aria-labelledby="service-tier-heading">
    <div className="container">
      <div className="section-subtitle">Concierge Advisory</div>
      <h2 id="service-tier-heading" className="section-title">
        Tailored Programs for Buyers, Sellers, and Investors
      </h2>
    </div>
    <div className={styles.grid}>
      {serviceTiers.map((tier) => (
        <article key={tier.id} className={styles.card}>
          <div className={styles.cardContent}>
            <h3 className={styles.tierName}>{tier.name}</h3>
            <p className={styles.description}>{tier.description}</p>
            <ul className={styles.bulletList}>
              {tier.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  </section>
)
