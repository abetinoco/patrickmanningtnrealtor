import { serviceTiers } from '../../data/services'
import styles from './ServiceTierSection.module.css'

const tierLabels: Record<string, string> = {
  'buyer-services': 'Buyer Advisory',
  'seller-services': 'Seller Advisory',
  'investment-services': 'Investor Advisory',
}

export const ServiceTierSection = () => (
  <section className={styles.section} id="services" aria-labelledby="service-tier-heading">
    <div className="container">
      <div className="section-subtitle">Our Services</div>
      <h2 id="service-tier-heading" className="section-title">
        Dedicated Support for Buyers, Sellers, and Investors
      </h2>
    </div>
    {/* Desktop: Card grid */}
    <div className={styles.grid}>
      {serviceTiers.map((tier, index) => (
        <article key={tier.id} className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.cardIndex}>0{index + 1}</span>
            <span className={styles.cardLabel}>{tierLabels[tier.id] ?? 'Advisory'}</span>
          </div>
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
    {/* Mobile: Accordion */}
    <div className={styles.accordion}>
      {serviceTiers.map((tier, index) => (
        <details key={tier.id} className={styles.accordionItem} open={index === 0}>
          <summary className={styles.accordionTrigger}>
            <span className={styles.accordionIndex}>0{index + 1}</span>
            <span className={styles.accordionTitle}>{tier.name}</span>
            <span className={styles.accordionLabel}>{tierLabels[tier.id] ?? 'Advisory'}</span>
            <span className={styles.accordionChevron} aria-hidden="true" />
          </summary>
          <div className={styles.accordionContent}>
            <p className={styles.description}>{tier.description}</p>
            <ul className={styles.bulletList}>
              {tier.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </details>
      ))}
    </div>
  </section>
)
