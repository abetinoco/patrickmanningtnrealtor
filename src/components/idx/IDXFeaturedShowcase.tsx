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
 * Featured Showcase: 2 widgets – 1 Tennessee (RealTracs), 1 Kentucky (WKRMLS).
 * Configured in IDX Broker control panel.
 */
export const IDXFeaturedShowcase = ({
  title = 'Featured Listings',
  subtitle = 'Available Properties',
  description = 'Explore our curated selection of homes across Middle Tennessee and Western Kentucky.',
  showHeader = true,
}: IDXFeaturedShowcaseProps) => {
  const { id: widgetId } = IDX_CONFIG.widgets.featuredShowcase
  const { wkrmlsIdxId } = IDX_CONFIG

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
        <div className={styles.twoColumnGrid}>
          <div className={styles.stateColumn}>
            <h3 className={styles.stateLabel}>Tennessee</h3>
            <IDXWidget
              widgetId={widgetId}
              className={styles.widgetWrapper}
              minHeight="480px"
            />
          </div>
          <div className={styles.stateColumn}>
            <h3 className={styles.stateLabel}>Kentucky</h3>
            <IDXWidget
              widgetId={widgetId}
              queryParams={{ idxID: wkrmlsIdxId, commingle: '' }}
              className={styles.widgetWrapper}
              minHeight="480px"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
