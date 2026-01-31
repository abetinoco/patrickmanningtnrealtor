import { IDXWidget } from './IDXWidget'
import { IDX_CONFIG } from '../../data/idxConfig'
import styles from './IDXFeaturedShowcase.module.css'

interface IDXFeaturedShowcaseProps {
  title?: string
  subtitle?: string
  description?: string
  showHeader?: boolean
}

/**
 * Featured Showcase widget displaying MLS listings.
 * Configured in IDX Broker control panel.
 */
export const IDXFeaturedShowcase = ({
  title = 'Featured Listings',
  subtitle = 'Available Properties',
  description = 'Explore our curated selection of homes across Middle Tennessee and Western Kentucky.',
  showHeader = true,
}: IDXFeaturedShowcaseProps) => {
  const widgetId = IDX_CONFIG.widgets.featuredShowcase.id

  return (
    <section className={styles.section} aria-labelledby="featured-listings-heading">
      <div className={styles.container}>
        {showHeader && (
          <div className={styles.header}>
            <div className="section-subtitle">{subtitle}</div>
            <h2 id="featured-listings-heading" className="section-title">
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
