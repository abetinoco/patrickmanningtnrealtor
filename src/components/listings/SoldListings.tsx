import { soldListings } from '../../data/soldListings'
import { formatCurrency, formatNumber } from '../../utils/format'
import styles from './SoldListings.module.css'

interface SoldListingsProps {
  limit?: number
  showViewAll?: boolean
}

export const SoldListings = ({ limit, showViewAll = false }: SoldListingsProps) => {
  const displayListings = limit ? soldListings.slice(0, limit) : soldListings

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className="section-subtitle">Track Record</div>
          <h2 className="section-title">Recently Closed Transactions</h2>
          <p style={{ maxWidth: '60ch', margin: '0 auto', color: 'var(--color-text-secondary)' }}>
            Explore Patrick's recent sales across Spring Hill's most sought-after communities. Each transaction
            represents a strategic approach tailored to market conditions and client objectives.
          </p>
        </div>

        <div className={styles.grid}>
          {displayListings.map((listing, index) => (
            <article key={index} className={styles.card}>
              <div className={styles.price}>{formatCurrency(listing.closedPrice)}</div>
              <div className={styles.address}>{listing.address}</div>
              <div className={styles.details}>
                <div className={styles.detail}>
                  <span>{listing.beds}</span> <span>Beds</span>
                </div>
                <div className={styles.detail}>
                  <span>{listing.baths}</span> <span>Baths</span>
                </div>
                <div className={styles.detail}>
                  <span>{formatNumber(listing.sqft)}</span> <span>SqFt</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {showViewAll && (
          <div className={styles.ctaContainer}>
            <a href="/buy-sold" className={styles.ctaButton}>
              View More Recently Sold Properties
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
