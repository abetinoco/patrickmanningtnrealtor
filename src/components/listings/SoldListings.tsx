import { formatCurrency, formatNumber } from '../../utils/format'
import styles from './SoldListings.module.css'

interface FeaturedListing {
  address: string
  city: string
  state: string
  zip: string
  price: number
  beds: number
  baths: number
  sqft: number
  soldDate: string
  image: string
  url: string
}

const featuredListings: FeaturedListing[] = [
  {
    address: '1407 Round Hill Ln',
    city: "Thompson's Station",
    state: 'TN',
    zip: '37179',
    price: 1395000,
    beds: 4,
    baths: 3.5,
    sqft: 4235,
    soldDate: 'May 2023',
    image: 'https://images.homes.com/listings/102/4500162713-835728251/1407-round-hill-ln-thompsons-station-tn-primaryphoto.jpg',
    url: 'https://www.homes.com/property/1407-round-hill-ln-thompsons-station-tn/fm9xv6se804d1'
  },
  {
    address: '1411 Round Hill Ln',
    city: 'Spring Hill',
    state: 'TN',
    zip: '37174',
    price: 1188261,
    beds: 4,
    baths: 3.5,
    sqft: 3887,
    soldDate: 'Sept 2022',
    image: 'https://images.homes.com/listings/102/9812000082-829137511/1411-round-hill-ln-spring-hill-tn-primaryphoto.jpg',
    url: 'https://www.homes.com/property/1411-round-hill-ln-spring-hill-tn/dm2d5vqkfnt86'
  },
  {
    address: '6001 Spade Dr',
    city: 'Spring Hill',
    state: 'TN',
    zip: '37174',
    price: 673000,
    beds: 4,
    baths: 3,
    sqft: 2778,
    soldDate: 'Feb 2024',
    image: 'https://images.homes.com/listings/102/4129992053-270906461/6001-spade-dr-spring-hill-tn-primaryphoto.jpg',
    url: 'https://www.homes.com/property/6001-spade-dr-spring-hill-tn/vjrjfq5ccg8h17'
  }
]

interface SoldListingsProps {
  limit?: number
  showViewAll?: boolean
}

export const SoldListings = ({ showViewAll = false }: SoldListingsProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className="section-subtitle">Track Record</div>
          <h2 className="section-title">Featured Sold Homes</h2>
          <p style={{ maxWidth: '60ch', margin: '0 auto', color: 'var(--color-text-secondary)' }}>
            Explore Patrick's recent sales across Spring Hill's most sought-after communities. Each transaction
            represents a strategic approach tailored to market conditions and client objectives.
          </p>
        </div>

        <div className={styles.grid}>
          {featuredListings.map((listing, index) => (
            <a
              key={index}
              href={listing.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={listing.image}
                  alt={`${listing.address}, ${listing.city}`}
                  className={styles.image}
                  loading="lazy"
                />
                <span className={styles.soldBadge}>SOLD</span>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.price}>{formatCurrency(listing.price)}</div>
                <div className={styles.address}>{listing.address}</div>
                <div className={styles.location}>
                  {listing.city}, {listing.state} {listing.zip}
                </div>
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
              </div>
            </a>
          ))}
        </div>

        {showViewAll && (
          <div className={styles.ctaContainer}>
            <a
              href="https://www.homes.com/real-estate-agents/patrick-manning/jr2sjd4/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              View More Sold Properties on Homes.com
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
