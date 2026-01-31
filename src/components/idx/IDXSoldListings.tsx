import { IDXWidget } from './IDXWidget'
import { IDX_CONFIG } from '../../data/idxConfig'
import styles from './IDXSoldListings.module.css'

interface IDXSoldListingsProps {
  title?: string
  subtitle?: string
  description?: string
  showHeader?: boolean
}

/**
 * Sold Listings widget displaying recently sold properties.
 * Configured in IDX Broker control panel.
 */
export const IDXSoldListings = ({
  title = 'Recently Sold',
  subtitle = 'Track Record',
  description = "Explore Patrick's recent sales across Middle Tennessee's most sought-after communities.",
  showHeader = true,
}: IDXSoldListingsProps) => {
  const widgetId = IDX_CONFIG.widgets.soldListings.id

  return (
    <section className={styles.section} aria-labelledby="sold-listings-heading">
      <div className={styles.container}>
        {showHeader && (
          <div className={styles.header}>
            <div className="section-subtitle">{subtitle}</div>
            <h2 id="sold-listings-heading" className="section-title">
              {title}
            </h2>
            <p className={styles.description}>{description}</p>
          </div>
        )}
        <IDXWidget
          widgetId={widgetId}
          className={styles.widgetWrapper}
        />
      </div>
    </section>
  )
}
